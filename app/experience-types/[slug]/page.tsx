"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { EXPERIENCES } from "@/app/data/travelData";

export default function ExperiencePage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;

  const experience = EXPERIENCES.find(
    (exp) => exp.slug === slug
  );

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
    <main className="w-full">

      {/* HERO */}
      <section className="relative h-[100vh] w-full">
        <Image
          src={experience.heroImage}
          alt={experience.title}
          fill
          priority
          className="object-cover"
        />
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-15  space-y-16">
         <div className="text-center ">
          <p className="text-3xl font-bold pb-5">{experience.title} </p>
        {/* DESCRIPTION */}
          <p className="text-lg leading-relaxed text-gray-700 ">
          {experience.description}
          </p>
          <button
            className="
              block mx-auto mt-6
        relative overflow-hidden
        rounded-xs border border-black/70 bg-black
        px-4 sm:px-8 py-2 sm:py-3
        text-[11px] leading-[12px] font-bold tracking-[1.2px]
        text-white
        transition-all duration-300 ease-in-out
        hover:text-black hover:scale-[1.02]
        before:absolute before:inset-0
        before:bg-white
        before:opacity-0
        before:transition-opacity before:duration-300
        hover:before:opacity-100
            "
          >
            <span className="relative z-10">GET IN TOUCH</span>
          </button>
            </div>
        </section>




        {/* HIGHLIGHTS */}
        <div>
{experience.soloTrips && (
  <section className="max-w-7xl mx-auto p-5  py-17">
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

      {/* LEFT SIDE HEADING */}
      {experience.soloSectionIntro && (
        <div className="lg:col-span-1  ml-0 aspect-[1/4]">
          <h2 className="text-6xl font-extralight whitespace-pre-line">
            {experience.soloSectionIntro.heading}
          </h2>
          {experience.soloSectionIntro.subheading && (
            <p className="mt-4 text-gray-600 italic">
              {experience.soloSectionIntro.subheading}
            </p>
          )}
        </div>
      )}

      {/* RIGHT SIDE CARDS */}
      <div className="lg:col-span-3 grid grid-cols-3  gap-6">
        {experience.soloTrips.map((trip, idx) => (
          <div
            key={idx}
            className="group relative aspect-[2/4] overflow-hidden rounded-lg"
          >
            <Image
              src={trip.image}
              alt={trip.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Duration */}
            <div className="absolute top-4 right-4 text-xs tracking-widest text-white font-bold">
              {trip.duration}
            </div>

            {/* Text */}
            <div className="absolute bottom-0 p-5 text-white transition-all duration-300">
              <p className="text-1xl font-bold tracking-widest line-clamp-2">
                {trip.title}
              </p>

              <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100">
                <p className="mt-3 text-x leading-relaxed text-white/80">
                  {trip.description}
                </p>
              </div>
               <button
            className="
              block mx-auto mt-6
        relative overflow-hidden
        rounded-xs border border-white/70 bg-transparent
        px-4 sm:px-8 py-2 sm:py-3
        text-[11px] leading-[12px] font-bold tracking-[1.2px]
        text-white
        transition-all duration-300 ease-in-out
        hover:text-black hover:scale-[1.02]
        before:absolute before:inset-0
        before:bg-white
        before:opacity-0
        before:transition-opacity before:duration-300
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


        </div>

        {/* GALLERY */}
        <div>
          <h2 className="text-2xl font-semibold mb-8">
            Inspiration
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experience.galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="relative h-64 w-full overflow-hidden rounded-lg"
              >
                <Image
                  src={img}
                  alt={`${experience.title} ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

    </main>
  );
}
