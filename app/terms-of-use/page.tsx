import { Montserrat } from "@/app/fonts";
import { AnimatedDiv } from "@/app/components/AnimatedDiv";

export default function TermsOfUsePage() {
  return (
    <section className={`${Montserrat.className} bg-[#FFF7E7] min-h-screen py-30 px-6 md:px-12`}>
      <AnimatedDiv>
        <h1 className="text-3xl md:text-4xl font-semibold text-[#5F021F] mb-6">
          Terms of Use
        </h1>

        <p className="text-gray-900 mb-4">
          By accessing or using the Lummina website, you agree to comply with these Terms of Use. These terms govern your use of our website and services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Website</h2>
        <p className="text-gray-900 mb-4">
          You agree to use our website for lawful purposes only. Unauthorized use, including copying, distribution, or misuse of content, is strictly prohibited.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
        <p className="text-gray-900 mb-4">
          All content, logos, and materials on this website are the intellectual property of Lummina. No portion may be reproduced or used without express written permission.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
        <p className="text-gray-900 mb-4">
          Lummina is not liable for any damages arising from the use or inability to use our website. Information provided is for general informational purposes and does not constitute legal advice.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Governing Law</h2>
        <p className="text-gray-900 mb-4">
          These Terms of Use are governed by the laws of Nigeria.
        </p>
      </AnimatedDiv>
    </section>
  );
}