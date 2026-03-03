"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import StaffModal from "../components/StaffModal";
import HeroAnimation from "../components/HeroAnimation";
import teamHero from "@/public/img/team.jpg";
import faithPhoto from "@/public/img/faithPhoto.jpg";
import staff1Photo from "@/public/img/staff1Photo.jpg";
import staff2Photo from "@/public/img/staff2Photo.jpg";

type Member = {
  name: string;
  role: string;
  photo: StaticImageData;
  bio: string;
};

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const teamMembers: Member[] = [
    {
      name: "Faith Zekeri, LL.B, B.L, ACIS, ACA",
      role: "Managing Partner",
      photo: faithPhoto,
      bio: `Faith Zekeri is a brilliant and resourceful lawyer with extensive experience in corporate advisory, dispute resolution, and regulatory compliance.`,
    },
    {
      name: "OJOAJOGWU ZEKERI ",
      role: "Senior Partner",
      photo: staff1Photo,
      bio: `Ojoajogwu Zekeri has extensive experience in Corporate and Commercial Law, advising clients on transactions, governance, and compliance matters.`,
    },
    {
      name: "OLUWATOYIN KOWE ",
      role: "Junior Associate",
      photo: staff2Photo,
      bio: `Oluwatoyin Kowe specializes in Family Law and Dispute Resolution, providing strategic and compassionate representation for clients.`,
    },
  ];

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <HeroAnimation bgImage={teamHero}>
        <div className="absolute inset-0 bg-[#5F021F]/60 pointer-events-none" />

        <motion.div
          className="relative z-10 text-center max-w-2xl mx-auto text-white px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
           Meet the Team
          </h1>

          <p className="mt-3 text-sm sm:text-base lg:text-xl text-[#F7E7CE]">
           Lummina is built on the belief that exceptional legal work comes from exceptional people. Our team combines legal expertise, commercial awareness, and a genuine commitment to client outcomes.

          </p>

          <div className="h-[2px] w-14 bg-[#FFA500] mx-auto mt-4"></div>
        </motion.div>
      </HeroAnimation>

      {/* TEAM SECTION */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 bg-[#FFF7E7] text-gray-900">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#5F021F] text-center">
            Leadership & Core Staff
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 ">
            {teamMembers.map((member) => (
              <button
                key={member.name}
                onClick={() => setSelectedMember(member)}
                className="bg-white rounded-2xl overflow-hidden  border border-gray-200 shadow-sm 
                           hover:shadow-lg hover:-translate-y-1 
                           transition-all duration-300 text-left 
                           focus:outline-none flex flex-col "
              >
                {/* IMAGE */}
                <div className="relative w-full aspect-[8.5/4.5]">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-4 sm:p-5 flex flex-col flex-grow bg-[#F7e7ce]/70 shadow-sm">
                  <h3 className="text-base sm:text-lg font-semibold text-[#5F021F] leading-snug">
                    {member.name}
                  </h3>

                  <p className="text-[#FFA500] font-medium mt-1 text-xs sm:text-sm">
                    {member.role}
                  </p>

                  <p className="text-black text-xs sm:text-sm leading-relaxed mt-3 flex-grow">
                    {member.bio.length > 120
                      ? member.bio.slice(0, 120) + "..."
                      : member.bio}
                  </p>

                  <span className="mt-4 text-xs sm:text-sm font-medium text-[#5F021F]">
                    View Profile →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      <StaffModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </div>
  );
};

export default TeamPage;