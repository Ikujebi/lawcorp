"use client";

import { useState } from "react";




interface NewsletterProps {
  title: string;
  date: string;
  summary: string;
  link?: string; // optional link to full newsletter
}

const sampleNewsletters: NewsletterProps[] = [
  {
    title: "October Legal Insights",
    date: "October 10, 2026",
    summary:
      "This edition covers recent updates in corporate governance, compliance changes, and case studies from our recent client work.",
    link: "#",
  },
  {
    title: "September Regulatory Review",
    date: "September 15, 2026",
    summary:
      "We provide key insights into regulatory changes affecting Nigerian businesses and tips for risk mitigation.",
    link: "#",
  },
];

const NewsletterPage = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <div className={`w-full`}>
      {/* HERO */}
      <section className="relative h-[50vh] bg-[#5F021F] flex items-center justify-center text-center px-6">
        <div className="text-white max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h1>
          <p className="text-md md:text-lg">
            Stay updated with Lummina Law Firm’s latest insights, legal updates, and thought leadership articles.
          </p>
        </div>
      </section>

      {/* SUBSCRIPTION FORM */}
      <section className="bg-[#FFF7E7] py-16 px-6 md:px-0 flex justify-center">
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row w-full max-w-2xl gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F4C430]"
          />
          <button
            type="submit"
            className="bg-[#5F021F] text-white px-6 py-4 rounded-lg hover:bg-[#4b001a] transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* PAST NEWSLETTERS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#5F021F] mb-12 text-center">
          Past Newsletters
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleNewsletters.map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-[#5F021F] mb-2">{item.title}</h3>
              <span className="text-sm text-gray-500">{item.date}</span>
              <p className="text-gray-700 mt-4">{item.summary}</p>
              {item.link && (
                <a
                  href={item.link}
                  className="inline-block mt-4 text-[#F4C430] font-semibold hover:underline"
                >
                  Read More
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewsletterPage;
