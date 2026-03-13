"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import StaffModal from "../components/StaffModal";
import faithPhoto from "@/public/img/faithPhoto.jpg";
import staff1Photo from "@/public/img/staff1Photo.jpg";
import staff2Photo from "@/public/img/kowe2.jpeg";
import TeamComp from "../components/TeamComp";
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
      name: "FAITH ZEKERI, LL.B, B.L, ACIS, ACA",
      role: "Managing Partner",
      photo: faithPhoto,
      bio: `Faith Zekeri is the founding Managing Partner of Lummina Law Firm. She advises businesses, founders, and private clients on corporate structuring, commercial transactions, governance, and legal risk management.
Her work focuses on designing the legal frameworks that support sustainable business growth. She regularly advises on corporate structuring, shareholder arrangements, commercial documentation, regulatory compliance, and transaction support across a range of sectors. She also provides advisory support on property transactions, due diligence processes, and governance systems for organisations seeking clarity and institutional discipline.
Faith brings an interdisciplinary perspective to legal advisory. In addition to her legal training, she holds professional qualifications in corporate governance and accountancy. This background enables her to approach legal problems with a broader understanding of commercial realities, financial risk, and organisational structure. Clients value this ability to translate legal complexity into clear, practical decisions.
Before founding Lummina, Faith worked on matters involving corporate advisory, commercial documentation, regulatory compliance, employment transitions, and dispute support. Her approach to legal practice is grounded in structure, careful analysis, and disciplined execution.
She believes that thoughtful legal architecture protects businesses, preserves assets, and allows organisations to grow with confidence.
Faith is committed to building Lummina Law Firm into a trusted advisory practice for businesses and private clients who value clarity, professionalism, and long-term partnership.`,
    }/* ,
    {
      name: "OJOAJOGWU ZEKERI ",
      role: "Senior Partner",
      photo: staff1Photo,
      bio: `Ojoajogwu Zekeri has extensive experience in Corporate and Commercial Law, advising clients on transactions, governance, and compliance matters.`,
    } */,
    {
      name: "OLUWATOYIN KOWE ",
      role: "Junior Associate",
      photo: staff2Photo,
      bio: `Oluwatoyin Kowe is a Junior Associate at Lummina Law Firm where she contributes to the firm's corporate and commercial practice. Her work includes legal research, drafting of commercial agreements, and assisting clients with regulatory and compliance matters.She has a keen interest in corporate governance, contract negotiation, and business advisory services. Oluwatoyin is committed to continuous professional development and providing clients with practical, timely, and effective legal solutions.`,
    },
  ];

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <TeamComp />
      
      

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
                    className="object-cover object-t-[7rem]"
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