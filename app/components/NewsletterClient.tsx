"use client";

import { useEffect, useState } from "react";
import NewsletterModal from "@/app/components/NewsletterModal";
import { message } from "antd";
import Image from "next/image";

interface InsightProps {
  title: string;
  date: string;
  summary: string;
  publishedAt?: string;
  coverImage?: string;
  link?: string;
  content?: string;
  images: string[];
  pdfUrl?: string;
}

/* ✅ ADD THIS (API TYPE) */
interface InsightApi {
  title: string;
  date: string;
  publishedAt?: string;
  coverImage?: string;
  summary: string;
  content?: string;
  image?: string;
  images: string[];
  pdfUrl?: string;
}

export default function NewsletterClient() {
  const [email, setEmail] = useState("");
  const [selectedInsight, setSelectedInsight] = useState<InsightProps | null>(
    null,
  );

  // ✅ ONLY CHANGE: removed mockInsights here
  const [insights, setInsights] = useState<InsightProps[]>([]);

  useEffect(() => {
    const sync = async () => {
      try {
        const res = await fetch(
          "https://legal.lumminalaw.com/api/public/insights",
        );

        const data = await res.json();

        if (Array.isArray(data)) {
          const formatted = data.map((item: InsightApi) => ({
            title: item.title,
            date: item.publishedAt || item.date,
            summary: item.summary,
            content: item.content,

            // ✅ GUARANTEED ARRAY (THIS IS KEY)
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
      }
    };

    sync();
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch(
        "https://legal.lumminalaw.com/api/public/newsletter-subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        },
      );

      message.success(`Subscribed with ${email}`);
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
  useEffect(() => {
  if (selectedInsight) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [selectedInsight]);

  return (
    <>
      <form
        onSubmit={handleSubscribe}
        className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-6 py-4 rounded-lg border border-[#5F021F] text-[#5F021F] focus:outline-none focus:ring-0"
        />

        <button
          type="submit"
          className="bg-[#5F021F] text-white px-6 py-4 rounded-lg"
        >
          Subscribe
        </button>
      </form>

      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="bg-[#5F021F]/90 text-white p-8 rounded-2xl shadow-xl"
          >
            {insight.images?.length > 0 && (
              <div className="mb-4 relative w-full h-48">
                <Image
                  src={insight.images[0]}
                  alt={insight.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-xl"
                />
              </div>
            )}
            <h3 className="text-2xl font-semibold mb-2">{insight.title}</h3>

            <p className="text-sm text-gray-300 mb-4">
              Published: {formatDate(insight.date)}
            </p>

            <div className="h-[2px] w-12 bg-[#F4C430] my-4" />

            <p className="text-gray-200 leading-relaxed">{insight.summary}</p>

            <button
              onClick={() => setSelectedInsight(insight)}
              className="mt-6 bg-[#F4C430] text-[#5F021F] px-5 py-2 rounded-lg"
            >
              Read Full Edition →
            </button>
          </div>
        ))}
      </section>

      {selectedInsight && (
        <NewsletterModal
          title={selectedInsight.title}
          date={selectedInsight.date}
          content={selectedInsight.content || selectedInsight.summary}
          images={
            selectedInsight.images.length
              ? selectedInsight.images
              : selectedInsight.coverImage
                ? [selectedInsight.coverImage]
                : []
          }
          pdfUrl={selectedInsight.pdfUrl}
          onClose={() => setSelectedInsight(null)}
        />
      )}
    </>
  );
}
