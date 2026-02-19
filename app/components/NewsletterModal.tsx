"use client";

import { FC } from "react";
import { X } from "lucide-react"; // or any close icon you prefer

interface NewsletterModalProps {
  title: string;
  date: string;
  summary: string;
  onClose: () => void;
}

const NewsletterModal: FC<NewsletterModalProps> = ({ title, date, summary, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl max-w-3xl w-full p-8 sm:p-12 shadow-2xl overflow-y-auto max-h-[90vh] animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-[#5F021F] transition-colors"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#5F021F] mb-2">{title}</h2>
        <p className="text-sm text-gray-500 mb-6">{date}</p>
        <p className="text-gray-800 leading-relaxed">{summary}</p>
      </div>
    </div>
  );
};

export default NewsletterModal;
