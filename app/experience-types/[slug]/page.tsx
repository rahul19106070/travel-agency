"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { EXPERIENCES } from "@/app/data/travelData";
import TopDestinationsSection from "../TopDestinationsSection";
import Navbar from "@/components/Navbar";


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

  <div className="absolute inset-0 bg-black/30" />
</section>




      {/* ================= INTRO ================= */}
      <section className="max-w-6xl mx-auto px-5 py-10 md:py-10 sm:py:20 lg:py-15">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-light mb-5">
            {experience.title}
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
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

      {/* ================= HIGHLIGHTS ================= */}
      {experience.soloTrips && (
        <section className="max-w-7xl mx-auto px-5 py-7  lg:py-7">
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
                    group relative overflow-hidden rounded-lg
                    aspect-[3/4] sm:aspect-[2/3] lg:aspect-[2/4]
                  "
                >
                  <Image
                    src={trip.image}
                    alt={trip.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  <div className="absolute top-4 right-4 text-xs tracking-widest text-white font-bold">
                    {trip.duration}
                  </div>

                  <div className="absolute bottom-0 p-5 text-white">
                    <p className="font-bold tracking-widest text-sm sm:text-base">
                      {trip.title}
                    </p>

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

                    <button
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
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

     {/* ================= GALLERY ================= */}
{experience.topDestinations && (() => {
  const headingItem = experience.topDestinations.find(
    d => d.heading && d.heading.length > 0
  );

  const destinations = experience.topDestinations.filter(
    d => !d.heading || d.heading.length === 0
  );

  return (
    <TopDestinationsSection
  heading={headingItem?.heading?.[0]?.heading ?? ""}
  destinations={destinations}
/>

  );
})()}

    </main>
  </>
  );
}
