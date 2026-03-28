"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { EXPERIENCES } from "@/app/data/travelData";
import TopDestinationsSection from "../../TopDestinationsSection";
import Navbar from "@/components/Navbar";
import Link from "next/link";


export default function ExperiencePage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;

  const experience = EXPERIENCES.find(exp => exp.slug === slug);

  if (!slug) {
    return <div className="pt-32 text-center">Loading...</div>;
  }

  if (!experience) {
    return (
      <div className="pt-32 text-center text-xl font-semibold">
        Experience not found
      </div>
    );
  }

  return (
    <>
    <Navbar appearance="home-scroll" />
    <main className="w-full overflow-x-hidden">

      {/* ================= HERO ================= */}
    <section className="relative h-[70vh] sm:h-[85vh] lg:h-[96vh] w-full">
  <Image
    src={experience.heroImage}
    alt={experience.title}
    fill
    priority
    className="object-cover"
  />

  {experience.imgTextSection && (
    <div
      className={`
        absolute inset-0 z-10 flex px-5 sm:px-10
        ${
          experience.imgTextSection.vertical === "top"
            ? "items-start pt-16"
            : experience.imgTextSection.vertical === "bottom"
            ? "items-end pb-16"
            : "items-center"
        }
        ${
          experience.imgTextSection.horizontal === "left"
            ? "justify-start text-left"
            : experience.imgTextSection.horizontal === "right"
            ? "justify-end text-right"
            : "justify-center text-center"
        }
      `}
    >
      <h1 className="
        max-w-xl text-white/65
        text-3xl sm:text-4xl lg:text-5xl
        font-extralight tracking-wide
        whitespace-pre-line uppercase
      ">
        {experience.imgTextSection.heading}
      </h1>
    </div>
  )}

</section>



      {/* ================= INTRO ================= */}
      <section className="mx-auto px-5 py-10 md:py-10 sm:py:20 lg:py-15">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-light mb-5">
            {experience.title}
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700 ">
            {experience.description}
          </p>

          <button
            className="
              mt-8 inline-block
              relative overflow-hidden
              border border-black bg-black
              px-6 py-3
              text-[11px] font-bold tracking-[1.2px]
              text-white
              transition-all duration-300
              hover:text-black
              before:absolute before:inset-0
              before:bg-white before:opacity-0
              before:transition-opacity
              hover:before:opacity-100
            "
          >
            <span className="relative z-10">GET IN TOUCH</span>
          </button>
        </div>
      </section>



      {/* ================= PACKAGES ================= */}
      {experience.soloTrips && (
        <section className="mx-auto  ms-20 ml-10 px-5 py-7  lg:py-7">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

            {/* LEFT TEXT */}
            {experience.soloSectionIntro && (
              <div className="lg:col-span-1">
                <h2 className="text-3xl uppercase sm:text-4xl lg:text-6xl font-extralight leading-tight">
                  {experience.soloSectionIntro.heading}
                </h2>

                {experience.soloSectionIntro.subheading && (
                  <p className="mt-4 text-gray-600 italic">
                    {experience.soloSectionIntro.subheading}
                  </p>
                )}
              </div>
            )}

            {/* RIGHT CARDS */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {experience.soloTrips.map((trip, idx) => (
                <div
                    key={idx}
                    className="
                    group relative overflow-hidden cursor-pointer
                    aspect-[3/4] sm:aspect-[2/3] lg:aspect-[3/5]
                  "
                >
                  <Image
                    src={trip.image}
                    alt={trip.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/40 to-transparent" />

                  <div className="absolute top-4 right-4 text-xs tracking-widest text-white font-bold">
                    {trip.duration}
                  </div>

                  <div className="absolute bottom-0 p-5 text-white">
                <h1 className="font-brandon text-xxs sm:text-sm font-semibold tracking-widest text-white line-clamp-2 font-alternate font-bold">
                      {trip.title}
                    </h1>

                    {/* SHOW ON MOBILE, HOVER ON DESKTOP */}
                    <p
                      className="
                        mt-3 text-sm text-white/80 leading-relaxed
                        lg:max-h-0 lg:opacity-0
                        lg:group-hover:max-h-40 lg:group-hover:opacity-100
                        transition-all duration-300
                      "
                    >
                      {trip.description}
                    </p>
                    
                  <Link href={`/experience-types/destination/${trip.destinationSlug}/packages/${trip.packageSlug}`}                
                      className="
                        mt-4 inline-block
                        relative overflow-hidden
                        border border-white text-white
                        px-5 py-2
                        text-[10px] font-bold tracking-[1.2px]
                        transition-all duration-300
                        hover:text-black
                        before:absolute before:inset-0
                        before:bg-white before:opacity-0
                        hover:before:opacity-100
                      "
                    >
                      <span className="relative z-10">GET IN TOUCH</span>
              </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}


{/* ================= IMAGE GRID SECTIONS ================= */}
{experience.imageContentSections && (
  <section className=" mx-auto px-5 pb-7 pt-2 mt-10 lg:mt-10 sm:mt-15 bg-[#E1E2E2]">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {experience.imageContentSections.map((section, idx) => (
        <div key={idx} className="flex flex-col">
          
          {/* IMAGE */}
<div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] mb-6 overflow-hidden">
            <Image
              src={section.image}
              alt={section.heading}
              fill
              className="object-cover"
            />
          </div>

          {/* HEADING */}
          <h3 className="text-2xl sm:text-3xl font-light uppercase tracking-wide mb-4">
            {section.heading}
          </h3>

          {/* PARA */}
          <p className="text-gray-600 leading-relaxed mb-6">
            {section.description}
          </p>

          {/* BUTTON */}
          <Link href={section.ctaLink ?? "#"} className="mt-auto">
            <button
              className="
                relative overflow-hidden bg-black text-white
                border border-black
                px-6 py-3
                text-[11px] font-bold tracking-[1.2px]
                transition-all duration-300
                hover:text-black
                before:absolute before:inset-0
                before:bg-white before:opacity-0
                hover:before:opacity-100
              "
            >
              <span className="relative z-10">{section.ctaText}</span>
            </button>
          </Link>

        </div>
      ))}
    </div>
  </section>
)}



{/* ================= CTA ================= */}
{experience.ctaSection && (
  <section className="relative mx-auto px-5 py-20 flex justify-center items-center text-center overflow-hidden">

    {/* BACKGROUND IMAGE */}
    <Image
      src="/images/month/last_sect.webp"
      alt="cta background"
      fill
      className="object-cover"
    />

    {/* DARK OVERLAY (mandatory, not optional) */}
    {/* <div className="absolute inset-0 bg-black/200" /> */}

    {/* CONTENT */}
    <div className="relative z-10 max-w-3xl w-full text-white flex flex-col sm:flex-row items-center justify-center gap-6">
  
  <p className="text-lg sm:text-xl lg:text-xl font-extralight leading-relaxed">
    {experience.ctaSection.desc}
  </p>

  <Link
    href={experience.ctaSection.buttonLink}
    className="
      relative overflow-hidden
       bg-black text-white
      px-6 py-2
      text-[11px] font-bold tracking-[1.2px]
      transition-all duration-300
      hover:text-black
      before:absolute before:inset-0
      before:bg-white before:opacity-0
      hover:before:opacity-100
      whitespace-nowrap
    "
  >
    <span className="relative z-10">
      {experience.ctaSection.buttonText}
    </span>
  </Link>

</div>

  </section>
)}

     
    </main>
  </>
  );
}
