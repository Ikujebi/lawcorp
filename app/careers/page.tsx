import Image from "next/image";
import Link from "next/link";
import careersBg from "@/public/img/careers.jpg";
import { Montserrat } from "@/app/fonts";

export default function CareersPage() {
  return (
    <section className={`${Montserrat.className} bg-white text-gray-900`}>

      {/* HERO */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src={careersBg}
          alt="Careers"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 text-center px-6 max-w-3xl">

          <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
            Build Something That Lasts with{" "}
            <span className="text-[#F7E7CE]">Lumina</span>
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Lummina is building a disciplined, growth-focused legal practice. We welcome professionals who value integrity, accountability, and excellence.
          </p>

        </div>
      </div>


      {/* WHY LUMMINA */}
      <div className="max-w-5xl mx-auto px-6 py-20">

        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#5F021F]">
          WHY LUMMINA
        </h2>

        <p className="text-gray-700 leading-relaxed mb-8">
          We offer something rare in legal practice: the opportunity to be present at the creation. To help shape a firm&apos;s culture, its standards, and its reputation from the ground up. If you are driven, ethical, and committed to excellence, you will find your work here meaningful.
        </p>

        <ul className="space-y-3 text-gray-700">
          <li>A culture built on integrity, collaboration, and continuous professional development</li>
          <li>Direct access to complex, high-quality work across multiple practice areas</li>
          <li>Mentorship from senior practitioners with diverse expertise</li>
          <li>A firm with genuine ambition and a clear direction</li>
        </ul>

      </div>


      {/* CURRENT OPENINGS */}
      <div className="bg-[#5F021F] text-[#F7E7CE] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            CURRENT OPENINGS
          </h3>

          <p className="text-lg leading-relaxed">
            We do not currently have active vacancies. However, we welcome applications from exceptional candidates who wish to be considered for future opportunities. If Lummina is the kind of firm you want to grow with, we&apos;d like to know about you.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-block bg-[#F7E7CE] text-[#5F021F] px-8 py-3 font-semibold hover:bg-white transition"
            >
              Submit Your CV
            </Link>
          </div>

        </div>
      </div>


      {/* RECRUITMENT PROCESS */}
      <div className="max-w-5xl mx-auto px-6 py-20 bg-[bg-[#F7E7CE]">

        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#5F021F]">
          OUR RECRUITMENT PROCESS
        </h2>

        <ul className="space-y-5 text-gray-700">

          <li>
            <strong>Application Review — </strong>
            We assess your background, experience, and alignment with our values
          </li>

          <li>
            <strong>Initial Conversation — </strong>
            A candid discussion about your interests and our needs
          </li>

          <li>
            <strong>Competency Assessment — </strong>
            A structured evaluation of relevant legal and professional skills
          </li>

          <li>
            <strong>Final Interview — </strong>
            A deeper conversation with senior team members
          </li>

          <li>
            <strong>Offer &amp; Onboarding — </strong>
            A clear offer and a structured introduction to the firm
          </li>

        </ul>

      </div>

    </section>
  );
}