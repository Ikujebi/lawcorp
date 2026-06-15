import NewsletterClient from "@/app/components/NewsletterClient";
import financial from "@/public/img/sky.jpg";

const NewsletterPage = () => {
  return (
    <div className="w-full bg-[#faf9f8] text-gray-900 min-h-screen">

      {/* REFINED EDITORIAL OVERVIEW HERO */}
      <section className="relative h-[55vh] md:h-[70vh] flex items-center justify-center text-center px-6 overflow-hidden bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity scale-102"
          style={{ backgroundImage: `url(${financial.src})` }}
        />
        //fix
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/20 to-gray-950/80 pointer-events-none" />

        <div className="relative z-10 max-w-3xl text-white px-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#F4C430] bg-[#F4C430]/10 px-3 py-1 rounded-md border border-[#F4C430]/20">
            Insights
          </span>
          
          <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-2xl mx-auto font-light">
            Practical commentary on emerging regulatory frameworks, corporate governance trends, and foundational statutory adjustments impacting our clients.
          </p>
        </div>
      </section>

      {/* CORE INTERACTIVE CLIENT INTERFACE */}
      <NewsletterClient />

      {/* PREMIUM BASE REGULATORY REGISTRATION FOOTER */}
      <section className="max-w-4xl mx-auto px-6 pb-24 text-gray-500 text-xs leading-relaxed border-t border-gray-200/80 pt-12">
        <h4 className="font-bold mb-3 text-gray-700 uppercase tracking-wider text-[10px]">
          Regulatory Advisory Context & Boundary Notice
        </h4>

        <p className="mb-2">
          The resources surfaced across this dynamic structural index are organized exclusively for broad education and professional orientation reference values. They do not formulate specialized advisory positions, legal instructions, or establish a functional attorney-client engagement context.
        </p>

        <p className="mb-2">
          While Lummina Law details institutional precision at the phase of asset issuance, contemporary frameworks remain fluid and highly reactive to shifting court actions. Do not execute strategic operations using reference entries without first validating directions via dedicated counsel.
        </p>
      </section>
    </div>
  );
};

export default NewsletterPage;