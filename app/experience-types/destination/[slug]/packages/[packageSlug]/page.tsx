"use client";

import { useParams } from "next/navigation";
import { PACKAGES } from "@/app/data/packageData";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";


export default function PackagePage() {
  const { slug, packageSlug } = useParams<{
    slug: string;
    packageSlug: string;
  }>();

  const pkg = PACKAGES.find(
    (p) =>
      p.slug === slug &&
      p.packageSlug === packageSlug
  );

  const similarPackages = PACKAGES.filter(
  (p) =>
    p.slug === slug && // same destination
    p.packageSlug !== packageSlug // exclude current
); 

  if (!pkg) {
    return <div style={{ padding: 200 }}>Package not found</div>;
  }


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
    
<section className="relative w-full h-[60vh] sm:h-[75vh] lg:h-[90vh]">
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
    <section className="max-w-4xl mx-auto px-6 mt-20 pb-16 text-lg text-gray-700 leading-relaxed text-center">
      {pkg.intro}
    </section>

    {/* STORY SECTIONS */}
    <section className=" max-w-4xl  space-y-2 mx-auto px-7 pb-24 text-center">
      {pkg.sections.map((section, index) => (
        <div
          key={index}
          className="items-center  mx-auto"
        >
          <div>
            <h2 className="text-4xl font-light mb-3 text-start">
              {section.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {section.description}
            </p>
          </div>

          
        </div>
      ))}
    </section>

    {/* HOTELS */}
    {/* <section className="max-w-6xl mx-auto px-6 pb-24">
      <h2 className="text-3xl font-light text-center mb-12">
        Where You'll Stay
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {pkg.hotels.map((hotel, index) => (
          <div key={index}>
            <div className="relative h-72 w-full mb-4">
              <Image
                src={hotel.image}
                alt={hotel.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-medium">
              {hotel.name}
            </h3>
          </div>
        ))}
      </div>
    </section> */}



{/* ===== SIMILAR PACKAGES ===== */}
{similarPackages.length > 0 && (
  <section className="mx-auto px-5 py-12">
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

      {/* LEFT TEXT */}
      <div className="lg:col-span-1">
        <h2 className="text-3xl uppercase sm:text-4xl lg:text-6xl font-extralight leading-tight">
          Similar
          <br />
          Packages
        </h2>

        <p className="mt-4 text-gray-600 italic">
          More journeys in {pkg.heroMeta.country}
        </p>
      </div>

      {/* RIGHT CARDS */}
      <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {similarPackages.map((trip, idx) => (
          <Link
            key={idx}
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
  </div>
);
}