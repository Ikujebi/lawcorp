import MissionVision from "./MissionVision";
import { Montserrat } from "../../fonts";
import CoreV    from "./CoreV"; 

const About = () => {
  const philosophyList = [
    "Ethical and transparent legal practice",
    "Structured case assessment before strategy execution",
    "Clear, consistent communication at every stage",
    "Long-term legal protection as the default orientation",
  ];

  const whoWeServe = [
    {
      title: "Emerging & Growth-Focused Businesses",
      description:
        "Founders, startups, and scaling companies who need legal architecture that grows with them.",
    },
    {
      title: "Established Corporates",
      description:
        "Governance, compliance, transaction support, and strategic advisory for businesses navigating complexity and change.",
    },
    {
      title: "Investors & Capital Deployers",
      description:
        "Structured support across investment documentation, due diligence, and corporate reorganisation.",
    },
    {
      title: "Private Clients & Families",
      description:
        "Succession planning, trust structures, and asset protection for individuals and families who think long term.",
    },
  ];

  return (
    <div className="w-full bg-[#FAFAFA]">
      <main className={`${Montserrat.className} max-w-6xl mx-auto px-6 py-16 text-gray-900`}>

        {/* Vision Section */}
        <section className="mb-16">
         <MissionVision />
        </section>

        {/* Practice Philosophy */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Our Practice Philosophy
          </h2>
          <div className="h-[2px] w-24 bg-[#F4C430] mb-6" />
          <p className="text-gray-700 text-sm sm:text-base md:text-[1.05rem] leading-relaxed mb-6">
            Every matter entrusted to Lummina is handled with professional rigor,
            ethical responsibility, and strategic foresight. We approach legal work
            not as a transactional service, but as a long-term partnership.
          </p>
          <ul className="space-y-3 list-none">
            {philosophyList.map((item, index) => (
              <li key={index} className="text-gray-700 text-sm sm:text-base md:text-[1.05rem] flex gap-3">
                <span className="mt-1 w-2 h-2 bg-[#F4C430] rounded-full flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Who We Serve */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Who We Serve
          </h2>
          <div className="h-[2px] w-24 bg-[#F4C430] mb-6" />
          <ul className="space-y-6">
            {whoWeServe.map((item, index) => (
              <li key={index}>
                <h3 className="font-medium text-[#5F021F] text-base sm:text-lg mb-1">{item.title}</h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{item.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Confidential Engagement */}
        <section>
          < CoreV />
        </section>

      </main>
    </div>
  );
};

export default About;