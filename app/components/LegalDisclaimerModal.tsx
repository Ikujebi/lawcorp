"use client";

import { useState } from "react";
import {Nunito} from "../fonts";

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
    <div className={`${Nunito.className}  text-xl font-normal tracking-wide text-[#0b2545] fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-70`}>
      <div className="bg-white max-w-xl w-full mx-4 rounded-lg shadow-lg p-6">
        
        <div className="text-center mb-[2rem]">
  <h2 className="text-xl font-semibold">
    Legal Disclaimer
  </h2>

  <div className="mx-auto mt-3 h-[2px] w-1/2 bg-[#0b2545]"></div>
</div>

        <p className="text-lg mb-[1rem]">
          As per the rules of the Bar Council of Nigeria, law firms are not permitted
          to solicit work or advertise.
        </p>

        <p className="text-lg mb-[1rem]">
          The information provided on this website is solely for general
          informational purposes and does not constitute legal advice.
        </p>

        <p className="text-lg mb-[2rem]">
          By accessing this website, you acknowledge that you are seeking
          information voluntarily and that there has been no form of solicitation
          or inducement by the firm.
        </p>
<div className="flex w-full justify-center ">
        <button
          onClick={handleAccept}
          className="rounded-full bg-[#0b2545] px-9 py-3  font-semibold text-white transition hover:bg-[#081c33]"
        >
          I understand and agree
        </button>
        </div>
      </div>
    </div>
  );
}
