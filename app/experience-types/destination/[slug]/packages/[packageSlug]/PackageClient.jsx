"use client";


import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// import type { Package } from "@/app/data/packageData";

export default function PackageClient({ pkg }) {
 

//   const similarPackages = PACKAGES.filter(
//   (p) =>
//     p.slug === slug && // same destination
//     p.packageSlug !== packageSlug // exclude current
// ); 
const similarPackages = pkg?.similarPackages || [];

  if (!pkg) {
    return <div style={{ padding: 200 }}>Package not found</div>;
  }
const [active, setActive] = useState(0);

useEffect(() => {
  const sections = document.querySelectorAll(".story-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(sections).indexOf(entry.target);
          setActive(index);
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((sec) => observer.observe(sec));

  return () => observer.disconnect();
}, []);


return (
  <div>
          <Navbar appearance="home-scroll" />

    {/* HERO */}
    <section className="pt-28 pb-16 px-6 text-center">
      <p className="text-sm tracking-[3px] text-pink-600 font-semibold mb-4">
        {pkg.heroMeta.country}
      </p>

      <h1 className="max-w-5xl mx-auto text-4xl font-extralight uppercase tracking-wide leading-tight">
        {pkg.heroMeta.headline}
      </h1>

      <div className="w-16 h-px bg-gray-300 mx-auto my-10" />

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="text-xs font-bold text-orange-600 mb-2">WHEN</p>
          <p className="italic">{pkg.heroMeta.when}</p>
        </div>

        <div>
          <p className="text-xs font-bold text-emerald-600 mb-2">PRICE</p>
          <p className="italic">{pkg.heroMeta.price.label}</p>
        </div>

        <div>
          <p className="text-xs font-bold text-blue-600 mb-2">HOW LONG</p>
          <p className="italic">{pkg.heroMeta.duration}</p>
        </div>
      </div>
    </section>
    
<section className="relative w-full h-[60vh] sm:h-[75vh] lg:h-[100vh]">
  <Image
    src={pkg.heroImage}
    alt={pkg.title}
    fill
    priority
    sizes="100vw"
    className="object-cover"
  />
</section>


    {/* INTRO */}
    <section className="max-w-4xl mx-auto px-6 mt-15 pb-16 text-lg text-gray-700 leading-relaxed text-left">
  {pkg.intro.split("\n").map((line, i) => (
    <p key={i} className="mb-4"
    >{line}</p>
  ))}
</section>


{/* STORY SECTIONS */}
<section className="max-w-6xl mx-auto px-7 pb-20 md:pb-25 lg:pb-20">

  {/* DESKTOP LAYOUT */}
  <div className="hidden lg:grid grid-cols-2 gap-16">

    {/* LEFT TEXT */}
    <div>
      {pkg.sections.map((section, index) => (
        <div
          key={index}
          className="story-section min-h-[120vh] flex items-center"
        >
          <div>
            <p className="text-4xl font-semibold mb-4">
              {section.title1}
            </p>

            <div className="text-gray-700 leading-relaxed text-lg">
               {section.description1.split("\n").map((line, i) => (
    <div key={i} className="mb-4"
    > {line}</div>
  ))}
              
            </div>
          </div>
        </div>
      ))}
    </div>

   {/* RIGHT STICKY IMAGE */}
<div className="sticky top-7 h-screen flex items-center">

  <div className="relative w-full h-[500px]">
    <Image
      src={pkg.sections[active].image1}
      alt=""
      fill
      sizes="(max-width: 1024px) 100vw, 50vw"
      className="object-cover shadow-lg transition-opacity duration-500"
    />
  </div>

</div>

  </div>


  {/* MOBILE LAYOUT */}
  <div className="lg:hidden space-y-16">

  {pkg.sections.map((section, index) => (
    <div key={index}>

      <div className="relative w-full h-[300px] mb-6">
        <Image
          src={section.image1}
          alt={section.title1}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <p className="text-3xl font-semibold mb-3">
        {section.title1}
      </p>

      <p className="text-gray-700 leading-relaxed">
        {section.description1}
      </p>

    </div>
  ))}

</div>

</section>



    {/* HOTELS */}
    <section className="max-w-6xl mx-auto px-6 pb-24">
      <h1 className="text-5xl font-light text-center mb-12">
        HANDPICKED HOTELS
      </h1>

      <div className="grid md:grid-cols-3 gap-12">
        {pkg.hotels.map((hotel, index) => (
          <div key={index}>
            <div className="relative h-100 w-full mb-4">
              <Image
                src={hotel.image}
                alt={hotel.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <h1 className="text-4xl mb-4 font-medium">
              {hotel.name}
            </h1>
            <p className="text-gray-600">{hotel.desc}</p>
          </div>
        ))}
      </div>
    </section>



{/* ===== SIMILAR PACKAGES ===== */}
{similarPackages.length > 0 && (
  <section className="mx-auto px-5 py-12">
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

      {/* LEFT TEXT */}
      <div className="lg:col-span-1">
        <h2 className="text-5xl uppercase font-extralight leading-tight">
          Similar
          <br />
          Journeys
        </h2>

        <p className="mt-4 text-gray-600 italic">
          More journeys in {pkg.heroMeta.country}
        </p>
      </div>



      {/* RIGHT CARDS */}
      <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {similarPackages.map((trip, idx) => (
          <Link
            key={trip.packageSlug}
            href={`/experience-types/destination/${trip.slug}/packages/${trip.packageSlug}`}
            className="
              group relative overflow-hidden rounded-lg
              aspect-[3/4] sm:aspect-[2/3] lg:aspect-[2/4]
            "
          >
            <Image
              src={trip.heroImage}
              alt={trip.title}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            <div className="absolute top-4 right-4 text-xs tracking-widest text-white font-bold">
              {trip.heroMeta.duration}
            </div>

            <div className="absolute bottom-0 p-5 text-white">
              <p className="font-extralight tracking-widest text-xl">
                {trip.title}
              </p>

              <p
                className="
                  mt-3 text-sm text-white/80 leading-relaxed
                  lg:max-h-0 lg:opacity-0
                  lg:group-hover:max-h-40 lg:group-hover:opacity-100
                  transition-all duration-300
                "
              >
                {trip.heroMeta.headline}
              </p>

              <span
                className="
                  mt-4 inline-block
                  border border-white text-white
                  px-5 py-2
                  text-[10px] font-bold tracking-[1.2px]
                  transition-all duration-300
                  group-hover:bg-white group-hover:text-black
                "
              >
                VIEW PACKAGE
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
)}



{/* cTA */}
<section className="relative w-full h-[40vh] sm:h-[25vh] lg:h-[38vh] flex items-center justify-center">

  {/* Background Image */}
  <Image
    src="/images/packages/PACKAGESCTA.webp"
    alt="Start your journey"
    fill
     sizes="100vw"
    className="object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/20" />

  {/* Content */}
  <div className="relative text-center text-white px-6">

    <h2 className="text-3xl lg:text-5xl font-light mb-6">
      Ready to Start?
    </h2>

    <button
      className="
        border border-white
        px-8 py-3
        text-sm tracking-widest
        hover:bg-white hover:text-black
        transition
      "
    >
      START
    </button>

  </div>

</section>
  </div>
);
}