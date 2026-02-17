"use client";
import Image, { StaticImageData } from "next/image";
import { Roboto, Nunito } from "@/app/fonts";
import StaffModal from "../components/StaffModal"; // import modal
import teamHero from "@/public/img/team.jpg";
import faithPhoto from "@/public/img/faithPhoto.jpg";
import staff1Photo from "@/public/img/staff1Photo.jpg";
import staff2Photo from "@/public/img/staff2Photo.jpg";
import { useState } from "react";

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState<
    { name: string; role: string; photo: StaticImageData; bio: string } | null
  >(null);

  const teamMembers = [
    {
      name: "Faith Zekeri, LL.B, B.L, ACIS",
      role: "Managing Partner",
      photo: faithPhoto,
      bio: `Faith Zekeri is a brilliant and resourceful lawyer with a proven track record in Litigation, Alternative Dispute Resolution (ADR), and Corporate/Commercial Law. She brings extensive experience in Contracts, Corporate Governance, Regulatory Compliance, and Company Secretarial services, making her a dynamic force in navigating diverse business environments. She has successfully facilitated high-value transactions, including a $21M debt-to-equity conversion and recoveries exceeding N500M and $2M for local and international clients.`,
    },
    {
      name: "John Doe, LL.B",
      role: "Senior Associate",
      photo: staff1Photo,
      bio: `John Doe has extensive experience in Corporate and Commercial Law, providing strategic advisory and litigation services for Nigerian and multinational clients.`,
    },
    {
      name: "Jane Smith, LL.B, B.L",
      role: "Associate",
      photo: staff2Photo,
      bio: `Jane Smith specializes in Family Law, Dispute Resolution, and Regulatory Compliance, ensuring personalized and effective legal solutions for clients.`,
    },
  ];

  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative h-[80vh] md:h-[80vh]">
        <Image
          src={teamHero}
          alt="Lummina Law Firm Team"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#5F021F]/50"></div>

        <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
          <div className="text-white max-w-3xl">
            <h1 className={`${Roboto.className} text-3xl lg:text-[3.8rem] font-bold`}>
              Our Team
            </h1>
            <p className={`${Nunito.className} mt-4 text-[1.25rem] md:text-[1.5rem]`}>
              Meet the brilliant minds delivering strategic, client-centered legal solutions.
            </p>
          </div>
        </div>
      </section>

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
                  <p className={`${Nunito.className} text-gray-700 text-[1rem] leading-relaxed`}>
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
