import { useState } from "react";
import NewsletterModal from "@/app/components/NewsletterModal";
import financial from "@/public/img/financial-advisor-website-hero-background_31O.jpg";

interface InsightProps {
  title: string;
  date: string;
  summary: string;
  link?: string;
}

const insights: InsightProps[] = [
  {
    title: "October Insights",
    date: "1st October 2025",
    summary:
      "This edition covers recent developments in corporate governance, key compliance changes affecting Nigerian businesses, and case studies drawn from our recent client work. Practical, relevant, and direct.",
    link: "#",
  },
  {
    title: "November Insights",
    date: "1st November 2025",
    summary:
      "We examine regulatory shifts affecting Nigerian businesses, explore emerging risks in commercial transactions, and share perspectives on effective risk mitigation strategies for founders and corporates alike.",
    link: "#",
  },
];

const NewsletterPage = () => {
  const [email, setEmail] = useState("");
  const [selectedInsight, setSelectedInsight] = useState<InsightProps | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <div className="w-full bg-[#FFF7E7] text-gray-900">

      {/* HERO */}
      <section className="relative h-[65vh] md:h-[75vh] flex items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center animate-heroImage"
          style={{ backgroundImage: `url(${financial.src})` }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/30 pointer-events-none animate-overlay" />

        {/* Static Dark Overlay for contrast */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

        {/* Hero Text */}
        <div className="relative z-10 max-w-3xl text-white animate-fadeZoom">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Insights
          </h1>
          <p className="text-md md:text-lg drop-shadow-md">
            Our Insights series delivers practical commentary on regulatory developments, governance trends, and matters that affect our clients.
          </p>

          {/* Subscription Field */}
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
              className="flex-1 px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F4C430]"
            />
            <button
              type="submit"
              className="bg-[#5F021F] text-white px-6 py-4 rounded-lg hover:bg-[#4b001a] transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* INSIGHTS LIST */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {insights.map((insight) => (
          <div
            key={insight.title}
            className="bg-[#5F021F]/90 backdrop-blur-md text-white p-8 rounded-2xl shadow-xl border border-white/10 hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2">{insight.title}</h3>
            <p className="text-sm text-gray-300 mb-4">Published: {insight.date}</p>
            <div className="h-[2px] w-12 bg-[#F4C430] my-4" />
            <p className="text-gray-200 leading-relaxed">{insight.summary}</p>
            <button
              onClick={() => setSelectedInsight(insight)}
              className="mt-6 inline-block bg-[#F4C430] text-[#5F021F] px-5 py-2 rounded-lg font-semibold hover:bg-white transition-colors duration-300"
            >
              Read Full Edition →
            </button>
          </div>
        ))}
      </section>

      {/* DISCLAIMER */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16 text-gray-700 text-sm leading-relaxed">
        <h4 className="font-semibold mb-4 text-[#5F021F]">Disclaimer</h4>
        <p className="mb-2">
          The information published in the Insights section is provided for general informational purposes only. It does not constitute legal advice and should not be relied upon as a substitute for obtaining specific advice tailored to your circumstances.
        </p>
        <p className="mb-2">
          While Lummina Law Firm takes reasonable steps to ensure accuracy as at the date of publication, laws and regulatory interpretations are subject to change. No lawyer-client relationship is created by accessing or engaging with any content in this section.
        </p>
        <p>
          For legal advice, please contact Lummina Law Firm directly to schedule a consultation.
        </p>
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

      {/* INLINE STYLES FOR HERO ANIMATIONS */}
      <style>
        {`
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
          @keyframes imageZoomPan {
            0% { transform: scale(1) translate(0,0); }
            50% { transform: scale(1.05) translate(10px, -5px); }
            100% { transform: scale(1) translate(0,0); }
          }
          .animate-heroImage {
            animation: imageZoomPan 15s ease-in-out infinite;
          }
          @keyframes overlayMove {
            0% { transform: translateX(-25%) }
            50% { transform: translateX(25%) }
            100% { transform: translateX(-25%) }
          }
          .animate-overlay {
            animation: overlayMove 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default NewsletterPage;