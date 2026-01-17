"use client";

import Image from "next/image";
import { TEAM_DATA } from "@/app/data/team";
import Navbar from "@/components/Navbar";

interface TeamSectionProps {
  title: string;
  bgImage: string;
  bgImage1: string;
  members: Array<Array<{ name: string; title: string }>>;
  sectionClass: string;
  titleClass: string;
  gridClass: string;
  memberClass: string;
  nameClass: string;
  titleDescClass: string;
}

const TeamSection = ({ 
  title, 
  bgImage, 
  bgImage1, 
  members, 
  sectionClass,
  titleClass,
  gridClass,
  memberClass,
  nameClass,
  titleDescClass 
}: TeamSectionProps) => (
  <div>
    <section className={`relative min-h-[80vh] w-full ${sectionClass}`}>
      {/* First Background Image */}
      <div 
        className="absolute inset-0 z-10 bg-cover bg-repeat bg-center"
        style={{
          backgroundImage: `url('${bgImage1}')`,
          backgroundAttachment: "fixed",
        }}
      ></div>
      
      {/* Second Background Image (Overlapping) */}
      {bgImage1 && (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${bgImage}')`,
            backgroundAttachment: "fixed",
            opacity: 0.9,
          }}
        ></div>
      )}

      {/* Overlay for better text readability */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="relative z-10 w-full">
        {/* Title */}
        <div className={`pt-40 sm:pt-40 md:pt-30 px-4 md:px-8 lg:px-12 ${titleClass}`}>
          <h1 className="font-alternate font-medium tracking-widest mb-12 md:mb-12">
            {title}
          </h1>
        </div>

        {/* Team Members Grid */}
        <div className="px-4 md:px-8 lg:px-12 pb-12 md:pb-20">
          <div className={gridClass}>
            {members.map((row, rowIndex) => (
              <div key={rowIndex} className={memberClass}>
                {row.map((member, memberIndex) => (
                  <div
                    key={memberIndex}
                    className={`w-full text-white ${
                      // Right-align last member only for Travel Team
                      title === TEAM_DATA[1].title && memberIndex === row.length - 1
                        ? "text-left lg:text-right"
                        : "text-left"
                    }`}
                  >
                   <h2 className={`
                      whitespace-nowrap text-4xl sm:text-2xl md:text-4xl lg:text-7xl
                      font-alternate font-medium leading-tight
                      text-white
                      ${title === TEAM_DATA[0].title ? "hover:text-[#cc5426]" : ""}
                      ${title === TEAM_DATA[1].title ? "hover:text-[#316666]" : ""}
                      ${title === TEAM_DATA[2].title ? "hover:text-[#37968a]" : ""}
                      transition-colors duration-300
                    `}>
                      {member.name}
                    </h2>
                    <p className={titleDescClass}>
                      {member.title}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default function OurTeam() {
  return (
    <main className="">
      <Navbar appearance="page-gradient-scroll" />

      {/* Section 1: OUR TEAM */}
      <TeamSection 
        title={TEAM_DATA[0].title}
        bgImage={TEAM_DATA[0].bgImage}
        bgImage1={TEAM_DATA[0].bgImage1}
        members={TEAM_DATA[0].members}
        sectionClass="w-full"
        titleClass="text-[#342c3f] pt-8 lg:w-full md:w-full sm:pt-12 md:pt-16 lg:pt-20 text-7xl sm:text-7xl md:text-7xl lg:text-[180px]"
        gridClass="space-y-6 sm:space-y-6 md:space-y-4 lg:space-y-4"
        memberClass="grid hover:text-[#cc5426] grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12"
        nameClass="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-alternate font-medium tracking-widest mb-1 leading-tight"
        titleDescClass="text-xs sm:text-xs font-brandon font-semibold tracking-widest text-[#342c3f] uppercase"
      />

      {/* Section 2: TRAVEL TEAM */}
      <TeamSection 
        title={TEAM_DATA[1].title}
        bgImage={TEAM_DATA[1].bgImage}
        bgImage1={TEAM_DATA[1].bgImage1}
        members={TEAM_DATA[1].members}
        sectionClass="w-full"
        titleClass="pr-4 sm:pr-8 md:pr-16 text-7xl w-full sm:text-7xl md:text-6xl lg:text-[100px] text-[#cc5426]"
        gridClass="space-y-0 sm:space-y-0 md:space-y-1"
        memberClass="grid hover:text-[#316666] grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12"
        nameClass="whitespace-nowrap  hover:text-[#316666] text-[clamp(1.5rem,4vw,3rem)] font-alternate font-medium leading-tight"
        titleDescClass="text-xs sm:text-xs font-brandon font-semibold tracking-widest text-[#342c3f] uppercase"
      />

      {/* Section 3: MARKETING AND OPERATIONS */}
      <TeamSection 
        title={TEAM_DATA[2].title}
        bgImage={TEAM_DATA[2].bgImage}
        bgImage1={TEAM_DATA[2].bgImage1}
        members={TEAM_DATA[2].members}
        sectionClass="w-full"
        titleClass="pl-0 sm:pl-4 md:pl-8 lg:pl-20 text-6xl w-1/2 sm:text-4xl md:text-6xl lg:text-[100px] text-[#37968a] w-full lg:w-1/2 leading-tight lg:leading-26"
        gridClass="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-14"
        memberClass="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-6 lg:gap-30"
        nameClass="text-4xl sm:text-2xl md:text-4xl lg:text-7xl font-alternate font-medium tracking-tight mb-2 leading-tight"
        titleDescClass="text-xs sm:text-xs font-brandon font-semibold tracking-widest text-white uppercase"
      />
    </main>
  );
}
