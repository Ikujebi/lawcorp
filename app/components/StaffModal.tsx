"use client";

import Image, { StaticImageData } from "next/image";
import { Nunito } from "@/app/fonts";

interface StaffModalProps {
  member: {
    name: string;
    role: string;
    photo: StaticImageData;
    bio: string;
  } | null;
  onClose: () => void;
}

const StaffModal = ({ member, onClose }: StaffModalProps) => {
  if (!member) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        /* 1. Kept max-h-[90vh] here, added h-full for mobile screens so it defaults beautifully,
          and changed flex-col lg:flex-row to md:flex-row to match your inner layout structure.
        */
        className="relative w-full max-w-5xl h-full max-h-[90vh] md:max-h-[85vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 bg-white/90 hover:bg-white text-[#5F021F] rounded-full w-10 h-10 flex items-center justify-center shadow"
        >
          ✕
        </button>

        {/* 2. REMOVED the redundant wrapping div here that was breaking layout calculations. 
          The structural flex properties are now handled perfectly by the parent card container above.
        */}

        {/* LEFT — Image */}
        <div className="relative w-full md:w-[40%] h-[250px] md:h-full min-h-[250px] md:min-h-0 flex-shrink-0">
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover object-top"
            priority // Optional: Helps load the modal profile image faster
          />
        </div>

        {/* RIGHT — Content */}
        {/* 3. Added `md:h-full` and ensured `overflow-y-auto` stays active across ALL screen sizes 
          (removed md:overflow-visible which was breaking desktop scrolls).
        */}
        <div className="flex-1 h-full p-6 md:p-10 lg:p-12 bg-[#F7e7ce]/70 overflow-y-auto scroll-smooth">
          <h2 className="text-2xl md:text-3xl font-bold text-[#5F021F]">
            {member.name}
          </h2>

          <p className="text-[#F4C430] font-semibold mt-2 text-lg">
            {member.role}
          </p>

          <div className="h-[2px] w-20 bg-[#F4C430] my-6"></div>

          <p className={`${Nunito.className} text-black leading-relaxed whitespace-pre-line`}>
            {member.bio}
          </p>
        </div>

      </div>
    </div>
  );
};

export default StaffModal;