"use client";

import { useState } from "react";
import { Nunito } from "../fonts";

const STORAGE_KEY = "legal_disclaimer_accepted";

export default function LegalDisclaimerModal() {
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window === "undefined") return false;
    return !localStorage.getItem(STORAGE_KEY);
  });

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className={`${Nunito.className} fixed inset-0 z-[9999] flex items-center justify-center bg-black/60`}>
      <div className="bg-[#FFF7E7] max-w-xl w-full mx-4 rounded-xl shadow-lg p-6">
        
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-[#5F021F]">Legal Disclaimer</h2>
          <div className="mx-auto mt-3 h-[2px] w-1/5 bg-[#FFA500]"></div>
        </div>

        <p className="text-gray-900 mb-4">
          As per the rules of the Bar Council of Nigeria, law firms are not permitted
          to solicit work or advertise.
        </p>

        <p className="text-gray-900 mb-4">
          The information provided on this website is solely for general
          informational purposes and does not constitute legal advice.
        </p>

        <p className="text-gray-900 mb-6">
          By accessing this website, you acknowledge that you are seeking
          information voluntarily and that there has been no form of solicitation
          or inducement by the firm.
        </p>

        <div className="flex w-full justify-center">
          <button
            onClick={handleAccept}
            className="rounded-full bg-[#5F021F] px-9 py-3 font-semibold text-[#FFF7E7] transition hover:bg-[#FFA500] hover:text-[#5F021F]"
          >
            I understand and agree
          </button>
        </div>
      </div>
    </div>
  );
}
