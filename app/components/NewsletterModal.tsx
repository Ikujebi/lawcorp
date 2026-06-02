"use client";

import { FC, useEffect } from "react";
import { X } from "lucide-react";
import { trackActivity } from "@/utils/analytics";

interface NewsletterModalProps {
  title: string;
  date: string;
  summary: string;
  onClose: () => void;
}

const NewsletterModal: FC<NewsletterModalProps> = ({
  title,
  date,
  summary,
  onClose,
}) => {

  useEffect(() => {
  trackActivity(
    "newsletter_open",
    `/newsletter/${title}`,
    {
      title,
    }
  );
}, [title]);

  // ESC key support (proper dependency handling)
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md px-4">
      
      {/* Click outside to close */}
      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl max-w-4xl w-full shadow-2xl overflow-hidden animate-modalFade max-h-[90vh] flex flex-col z-10">

        {/* Header Section */}
        <div className="bg-[#5F021F] text-white px-10 py-8 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition"
          >
            <X size={26} />
          </button>

          <span className="text-xs uppercase tracking-widest text-[#F4C430] font-semibold">
            Lummina Law Newsletter
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-3 leading-snug">
            {title}
          </h2>

          <p className="text-sm text-white/70 mt-2">{date}</p>
        </div>

        {/* Divider */}
        <div className="h-[4px] bg-[#F4C430] w-full" />

        {/* Body */}
        <div className="px-10 py-10 overflow-y-auto text-gray-800 leading-relaxed space-y-6">

          <p className="text-lg">{summary}</p>

          <div className="border-t border-gray-200 pt-6 text-sm text-gray-500">
            This publication is provided for general informational purposes
            and does not constitute legal advice. For tailored legal guidance,
            please contact our office directly.
          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes modalFade {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-modalFade {
          animation: modalFade 0.35s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default NewsletterModal;