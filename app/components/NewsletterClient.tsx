"use client";

import { useEffect, useState } from "react";
import { message } from "antd";
import Image from "next/image";
import Link from "next/link"; // Added for seamless subpage routing

interface InsightProps {
  id: string; // Added to map dynamic routing paths
  title: string;
  date: string;
  summary: string;
  images: string[];
  pdfUrl?: string;
}

interface InsightApi {
  id: string; // Expected from database payload
  title: string;
  date: string;
  publishedAt?: string;
  coverImage?: string;
  summary: string;
  content?: string;
  images: string[];
  pdfUrl?: string;
}

export default function NewsletterClient() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [insights, setInsights] = useState<InsightProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sync = async () => {
      try {
        const res = await fetch("https://legal.lumminalaw.com/api/public/insights");
        const data = await res.json();

        if (Array.isArray(data)) {
          const formatted = data.map((item: InsightApi) => ({
            id: item.id,
            title: item.title,
            date: item.publishedAt || item.date,
            summary: item.summary,
            images: item.images?.length
              ? item.images
              : item.coverImage
                ? [item.coverImage]
                : [],
            pdfUrl: item.pdfUrl,
          }));

          setInsights(formatted);
        }
      } catch (err) {
        console.error("Insights fetch failed:", err);
      } finally {
        setLoading(false);
      }
    };

    sync();
  }, []);

  const handleSubscribe = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch("https://legal.lumminalaw.com/api/public/newsletter-subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
        }),
      });
      message.success(`Subscribed with ${email}`);
      setName("");
      setEmail("");
    } catch {
      message.error("Subscription failed. Please try again.");
    }
  };

  const formatDate = (date?: string) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-24">
        <div className="animate-pulse flex space-x-2">
          <div className="h-2 w-2 bg-[#5F021F] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-2 w-2 bg-[#5F021F] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-2 w-2 bg-[#5F021F] rounded-full animate-bounce"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* NEWSLETTER CAPTURE BAR */}
      <div className="max-w-2xl mx-auto bg-white border border-gray-200/60 p-6 md:p-8 rounded-2xl shadow-xs -mt-24 relative z-20">
        <h3 className="text-center font-serif text-lg font-bold text-[#5F021F] mb-1">
          Subscribe to Lummina Insight
        </h3>
        <p className="text-center text-xs text-gray-500 mb-6">
          Receive direct analytical updates regarding modern regulatory frameworks.
        </p>
        <form onSubmit={handleSubscribe} className="flex flex-col  gap-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            required
            className="px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#5F021F] bg-gray-50/50 transition"
          />
          
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Institutional email address"
            required
            className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#5F021F] bg-gray-50/50 transition"
          />
          <button
            type="submit"
            className="bg-[#5F021F] hover:bg-[#4A0118] text-white px-6 py-3 rounded-xl text-sm font-semibold transition duration-150 whitespace-nowrap shadow-xs"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* DIRECTORY GRID BLOCK */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {insights.map((insight) => (
          <article
            key={insight.id}
            className="bg-white border border-gray-100 rounded-2xl shadow-xs overflow-hidden flex flex-col group transition duration-300 hover:shadow-md hover:border-gray-200/80"
          >
            {insight.images?.length > 0 && (
              <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                <Image
                  src={insight.images[0]}
                  alt={insight.title}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-103"
                />
              </div>
            )}

            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-3">
                <time dateTime={insight.date}>{formatDate(insight.date)}</time>
                <span>•</span>
                <span className="text-[#5F021F]">Legal Brief</span>
              </div>

              <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-[#5F021F] transition duration-150 line-clamp-2 mb-3 leading-snug">
                {insight.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-6 flex-1">
                {insight.summary}
              </p>

              <Link
                href={`/insights/${insight.id}`}
                className="inline-flex items-center gap-1 text-sm font-bold text-[#5F021F] hover:text-[#4A0118] transition group/link"
              >
                Read Full Insight
                <span className="transition-transform duration-150 group-hover/link:translate-x-0.5">→</span>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}