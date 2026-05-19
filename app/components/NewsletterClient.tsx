"use client";

import { useEffect, useState } from "react";
import NewsletterModal from "@/app/components/NewsletterModal";

interface InsightProps {
  title: string;
  date: string;
  summary: string;
  link?: string;
}

const mockInsights: InsightProps[] = [
  {
    title: "October Insights",
    date: "1st October 2025",
    summary:
      "This edition covers recent developments in corporate governance, key compliance changes affecting Nigerian businesses, and case studies drawn from our recent client work. Practical, relevant, and direct.",
  },
  {
    title: "November Insights",
    date: "1st November 2025",
    summary:
      "We examine regulatory shifts affecting Nigerian businesses, explore emerging risks in commercial transactions, and share perspectives on effective risk mitigation strategies for founders and corporates alike.",
  },
];

export default function NewsletterClient() {
  const [email, setEmail] = useState("");
  const [selectedInsight, setSelectedInsight] =
    useState<InsightProps | null>(null);

  const [insights, setInsights] = useState<InsightProps[]>(mockInsights);

  // OPTIONAL BACKEND SYNC (DOES NOT BREAK SITE)
  useEffect(() => {
    const sync = async () => {
      try {
        const res = await fetch(
          "https://legal.lumminalaw.com/api/public/insights"
        );

        if (!res.ok) return;

        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          setInsights(data);
        }
      } catch  {
        // silent fail → keep mock data
        console.log("Using fallback insights");
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
        }
      );
    } catch  {
      console.log("Subscribe failed, still keep UX smooth");
    }

    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <>
      {/* SUBSCRIBE */}
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
          className="flex-1 px-6 py-4 rounded-lg border border-gray-300"
        />

        <button
          type="submit"
          className="bg-[#5F021F] text-white px-6 py-4 rounded-lg"
        >
          Subscribe
        </button>
      </form>

      {/* INSIGHTS */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="bg-[#5F021F]/90 text-white p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-2">
              {insight.title}
            </h3>

            <p className="text-sm text-gray-300 mb-4">
              Published: {insight.date}
            </p>

            <div className="h-[2px] w-12 bg-[#F4C430] my-4" />

            <p className="text-gray-200 leading-relaxed">
              {insight.summary}
            </p>

            <button
              onClick={() => setSelectedInsight(insight)}
              className="mt-6 bg-[#F4C430] text-[#5F021F] px-5 py-2 rounded-lg"
            >
              Read Full Edition →
            </button>
          </div>
        ))}
      </section>

      {/* MODAL */}
      {selectedInsight && (
        <NewsletterModal
          title={selectedInsight.title}
          date={selectedInsight.date}
          summary={selectedInsight.summary}
          onClose={() => setSelectedInsight(null)}
        />
      )}
    </>
  );
}