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

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState<
    { name: string; role: string; photo: StaticImageData; bio: string } | null
  >(null);

  const teamMembers = [
    {
      name: "Faith Zekeri, LL.B, B.L, ACIS",
      role: "Managing Partner",
      photo: faithPhoto,
      bio: `Faith Zekeri is a brilliant and resourceful lawyer...`,
    },
    {
      name: "John Doe, LL.B",
      role: "Senior Associate",
      photo: staff1Photo,
      bio: `John Doe has extensive experience in Corporate and Commercial Law...`,
    },
    {
      name: "Jane Smith, LL.B, B.L",
      role: "Associate",
      photo: staff2Photo,
      bio: `Jane Smith specializes in Family Law, Dispute Resolution...`,
    },
  ];

  return (
    <div className="w-full">
      {/* HERO */}
      <HeroAnimation bgImage={teamHero}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#5F021F]/50 pointer-events-none" />

        {/* Hero Text with animation */}
        <motion.div
          className="relative z-10 text-center max-w-3xl mx-auto text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6 }}
            className="text-3xl lg:text-[3.8rem] font-bold"
          >
            Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, delay: 0.3 }}
            className="mt-4 text-[1.25rem] md:text-[1.5rem]"
          >
            Meet the brilliant minds delivering strategic, client-centered legal solutions.
          </motion.p>
        </motion.div>
      </HeroAnimation>

      {/* TEAM GRID */}
      <section className="px-6 md:px-12 lg:px-20 py-16 bg-[#FFF7E7] text-gray-900">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#5F021F] text-center">
            Leadership & Core Staff
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <button
                key={member.name}
                onClick={() => setSelectedMember(member)}
                className="bg-white rounded-2xl overflow-hidden border border-gray-300 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left focus:outline-none"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#5F021F]">{member.name}</h3>
                  <p className="text-[#FFA500] font-medium mb-3">{member.role}</p>
                  <p className="text-gray-700 text-[1rem] leading-relaxed">
                    {member.bio.length > 150 ? member.bio.slice(0, 150) + "..." : member.bio}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      <StaffModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </div>
  );
};

export default TeamPage;
