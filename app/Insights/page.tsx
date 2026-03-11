import NewsletterClient from "@/app/components/NewsletterClient";
import financial from "@/public/img/financial-advisor-website-hero-background_31O.jpg";

const NewsletterPage = () => {
  return (
    <div className="w-full bg-[#FFF7E7] text-gray-900">

      {/* HERO */}
      <section className="relative h-[65vh] md:h-[75vh] flex items-center justify-center text-center px-6 overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center animate-heroImage"
          style={{ backgroundImage: `url(${financial.src})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/30 pointer-events-none animate-overlay" />

        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl text-white animate-fadeZoom">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Insights
          </h1>

          <p className="text-md md:text-lg drop-shadow-md">
            Our Insights series delivers practical commentary on regulatory developments,
            governance trends, and matters that affect our clients.
          </p>

          
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16 text-gray-700 text-sm leading-relaxed">
       
       {/* Client Component */}
          <NewsletterClient />
        <h4 className="font-semibold mb-4 text-[#5F021F]">Disclaimer</h4>

        <p className="mb-2">
          The information published in the Insights section is provided for
          general informational purposes only. It does not constitute legal
          advice and should not be relied upon as a substitute for obtaining
          specific advice tailored to your circumstances.
        </p>

        <p className="mb-2">
          While Lummina Law Firm takes reasonable steps to ensure accuracy as
          at the date of publication, laws and regulatory interpretations are
          subject to change. No lawyer-client relationship is created by
          accessing or engaging with any content in this section.
        </p>

        <p>
          For legal advice, please contact Lummina Law Firm directly to
          schedule a consultation.
        </p>
      </section>

    </div>
  );
};

export default NewsletterPage;