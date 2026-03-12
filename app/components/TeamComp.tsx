"use client";
import HeroAnimation from "./HeroAnimation";
import teamHero from "@/public/img/team.jpg";
import { motion } from "framer-motion";
const TeamComp = () => {
  return (
    <div>
          <HeroAnimation bgImage={teamHero}>
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />

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
           Lummina is built on the belief that exceptional work comes from exceptional people. Our team combines legal expertise, commercial awareness, and a genuine commitment to client outcomes.

          </p>

          <div className="h-[2px] w-14 bg-[#FFA500] mx-auto mt-4"></div>
        </motion.div>
      </HeroAnimation>
    </div>
  )
}

export default TeamComp