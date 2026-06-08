import { motion } from "framer-motion";
import Link from "next/link";

const ConfidentialCard = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-xl mx-auto p-6 md:p-8 rounded-2xl shadow-2xl transition-transform duration-500 transform hover:scale-105
                 bg-[#FFA500] text-white relative overflow-hidden"
    >
      {/* Decorative floating circles */}
      <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#F7E7CE] rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#5F021F] rounded-full opacity-10 animate-pulse"></div>

      <h2 className=" text-2xl md:text-3xl font-semibold mb-3 relative z-10">
        Confidential Engagement
      </h2>

      <div className="h-[3px] w-20 bg-[#F7E7CE] rounded mb-6 relative z-10 animate-pulse" />

      <p className="text-sm sm:text-base leading-relaxed mb-3 relative z-10">
        We approach every client relationship with <span className="font-medium">strict confidentiality</span>, professional discretion, and structured analysis. Your matter is handled with care from the very first conversation.
      </p>

      <p className="text-sm sm:text-base leading-relaxed relative z-10">
        Initial consultations do not constitute formal legal advice or representation. Formal engagement begins upon agreement of scope and terms.
      </p>

      {/* Optional hover info icon */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="mt-6 w-10 h-10 bg-[#F7E7CE] rounded-full flex items-center justify-center text-[#5F021F] font-bold cursor-pointer relative z-10"
      >
        i
      </motion.div>


<motion.div
      
        className=" rounded-full  flex items-center justify-center  text-[#5F021F] font-bold cursor-pointer relative z-10 "
      >
        <Link
        href="/services"
        className="inline-block  
                   hover:text-[#5F021F] 
                   border-b border-transparent 
                   hover:border-[#F7E7CE] 
                   transition-all duration-500 
                   text-xs md:text-lg 
                   font-medium tracking-wide mt-10
                   bg-[#F7E7CE] px-4 py-2 rounded-full
                   "
      >
        Schedule a Consultation
      </Link>
      </motion.div>
    </motion.section>
  );
};

export default ConfidentialCard;