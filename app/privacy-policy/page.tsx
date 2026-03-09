import { Montserrat } from "@/app/fonts";
import { AnimatedDiv } from "@/app/components/AnimatedDiv";

export default function PrivacyPolicyPage() {
  return (
    <section className={`${Montserrat.className} bg-[#FFF7E7] min-h-screen py-30 px-6 md:px-12`}>
      <AnimatedDiv>
        <h1 className="text-3xl md:text-4xl font-semibold text-[#5F021F] mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-900 mb-4">
          At Lummina, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our website and services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
        <ul className="list-disc list-inside text-gray-900 mb-4">
          <li>Personal information you provide, such as name, email, and contact details.</li>
          <li>Usage data on how you navigate and use our website.</li>
          <li>Cookies and similar tracking technologies (for analytics and functional purposes).</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
        <p className="text-gray-900 mb-4">
          Your information is used solely to improve our services, respond to inquiries, send relevant communications, and comply with legal obligations. We do not sell or share your personal data with third parties for marketing purposes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
        <p className="text-gray-900 mb-4">
          You may request access, correction, or deletion of your personal data. Contact us at <a href="mailto:info@lumminalaw.com" className="text-[#5F021F] underline">info@lumminalaw.com</a> for any data-related requests.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
        <p className="text-gray-900 mb-4">
          We may update this Privacy Policy from time to time. Changes will be reflected on this page with an updated date.
        </p>
      </AnimatedDiv>
    </section>
  );
}