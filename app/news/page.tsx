"use client";

import { useState } from "react";
import NewsletterModal from "@/app/components/NewsletterModal";
import financial from "@/public/img/financial-advisor-website-hero-background_31O.jpg";

interface NewsletterProps {
  title: string;
  date: string;
  summary: string;
  link?: string;
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
  const [selectedNewsletter, setSelectedNewsletter] =
    useState<NewsletterProps | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <div className="w-full">
      {/* Inline animation styles */}
      <style>
        {`
          /* Hero text fade + float */
          @keyframes fadeZoom {
            0% { opacity: 0; transform: scale(0.92); }
            100% { opacity: 1; transform: scale(1); }
          }

          @keyframes floatText {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          .animate-fadeZoom {
            animation: fadeZoom 2s ease-out forwards, floatText 5s ease-in-out infinite;
          }

          /* Hero image slow zoom and pan */
          @keyframes imageZoomPan {
            0% { transform: scale(1) translate(0,0); }
            50% { transform: scale(1.05) translate(10px, -5px); }
            100% { transform: scale(1) translate(0,0); }
          }

          .animate-heroImage {
            animation: imageZoomPan 15s ease-in-out infinite;
          }

          /* Animated gradient overlay */
          @keyframes overlayMove {
            0% { transform: translateX(-25%) }
            50% { transform: translateX(25%) }
            100% { transform: translateX(-25%) }
          }

          .animate-overlay {
            animation: overlayMove 20s linear infinite;
          }

          /* Newsletter card pulse */
          @keyframes pulseSlide {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }

          .animate-pulseSlide {
            animation: pulseSlide 2s ease-in-out infinite;
          }
        `}
      </style>

      {/* HERO */}
      <section className="relative h-[50vh] flex items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center animate-heroImage"
          style={{ backgroundImage: `url(${financial.src})` }}
        ></div>

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-r from-black/30 via-black/20 to-black/30 animate-overlay" />
        </div>

        {/* Static Dark Overlay for contrast */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

        {/* Hero Text */}
        <div className="relative text-white max-w-3xl animate-fadeZoom z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Subscribe to Our Newsletter
          </h1>
          <p className="text-md md:text-lg drop-shadow-md">
            Stay updated with Lummina Law Firm’s latest insights, legal updates,
            and thought leadership articles.
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
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 animate-pulseSlide"
            >
              <h3 className="text-xl font-semibold text-[#5F021F] mb-2">
                {item.title}
              </h3>
              <span className="text-sm text-gray-500">{item.date}</span>
              <p className="text-gray-700 mt-4">{item.summary}</p>
              <button
                onClick={() => setSelectedNewsletter(item)}
                className="mt-4 text-[#F4C430] font-semibold hover:underline"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selectedNewsletter && (
        <NewsletterModal
          title={selectedNewsletter.title}
          date={selectedNewsletter.date}
          summary={selectedNewsletter.summary}
          onClose={() => setSelectedNewsletter(null)}
        />
      )}
    </div>
  );
};

export default NewsletterPage;
