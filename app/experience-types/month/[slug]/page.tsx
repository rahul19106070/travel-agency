"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { MONTH_DATA } from "@/app/data/monthData";
import Link from "next/link";

export default function MonthPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;

  const month = MONTH_DATA.find(m => m.slug === slug);

  if (!month) {
    return <div className="pt-32 text-center text-xl">Month not found</div>;
  }

  return (
    <>
      <Navbar appearance="home-scroll" />
      <main className="w-full overflow-x-hidden">

        {/* HERO */}
        <section className="relative h-[70vh] sm:h-[85vh] lg:h-[96vh] w-full">
          <Image
            src={month.heroImage}
            alt={month.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-0 flex items-end justify-center pb-20 text-center">
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide max-w-2xl">
              {month.heroText}
            </h1>
          </div>
        </section>

        {/* CONTENT */}
        <section className="max-w-5xl mx-auto px-5 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-light mb-6">
            {month.title}
          </h2>

          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            {month.description}
          </p>

          <Link href={month.ctaLink}>
            <button className="
              mt-8 border border-black bg-black
              px-6 py-3 text-[11px] font-bold tracking-widest
              text-white transition-all hover:bg-white hover:text-black
            ">
              {month.ctaText}
            </button>
          </Link>
        </section>



        {/* PACKAGES */}
        <section
          id="journey"
          className="py-16 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/Backdrop.webp')" }}
        >
          <div className="max-w-7xl mx-auto px-5">
            <div className="flex flex-col lg:flex-row gap-8 items-start">

              {/* LEFT TEXT */}
              <div className="lg:w-[35%] text-white pt-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-alternate tracking-[1.2]">
                  THE INSIDER'S 2026
                </h2>

                <p className="mt-4 italic text-white/70 max-w-md">
                  Exclusive access to the world's best-kept secrets...
                </p>

                <button className="
                  mt-6 border border-white
                  px-6 py-2 text-xs tracking-widest
                  text-white transition
                  hover:bg-white hover:text-black
                ">
                  VIEW ALL
                </button>
              </div>

              {/* RIGHT SLIDER */}
              <div className="lg:w-[65%]">
                <div className="
                  flex gap-4 sm:gap-6
                  overflow-x-auto
                  pb-6
                  [&::-webkit-scrollbar]:hidden
                  [-ms-overflow-style:none]
                  [scrollbar-width:none]
                ">
                  {month.packages.map((pkg, idx) => (
                    <div
                      key={idx}
                      className="
                        group relative
                        min-w-[240px] sm:min-w-[280px] md:min-w-[320px]
                        aspect-[2/3]
                        overflow-hidden
                        rounded-lg
                        shrink-0
                      "
                    >
                      {/* Image */}
                      <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                      {/* Content */}
                      <div className="absolute bottom-0 p-4 sm:p-5 text-white w-full">
                        <p className="text-xs tracking-widest font-bold">
                          {pkg.duration}
                        </p>

                        <h3 className="mt-1 text-3xl font-extralight tracking-wide">
                          {pkg.title}
                        </h3>

                        {/* {pkg.duration && (
                          <p className="mt-1 text-xs text-white/70">
                            {pkg.duration}
                          </p>
                        )} */}

                        <p className="mt-2 text-lg text-white/80 line-clamp-3">
                          {pkg.description}
                        </p>

                        {/* CTA */}
                        <Link href={pkg.link}>
                          <button
                            className="
                              mt-4 relative overflow-hidden
                              border border-white
                              px-4 py-2
                              text-[10px] tracking-widest font-bold text-white
                              transition-all duration-300
                              hover:text-black hover:scale-[1.03]
                              before:absolute before:inset-0
                              before:bg-white
                              before:translate-y-full
                              before:transition-transform before:duration-300
                              hover:before:translate-y-0
                            "
                          >
                            <span className="relative z-10">VIEW DETAILS</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>




        {/* FOLLOWING MONTHS */}
        <section className="max-w-7xl mx-auto px-5 py-10 my-20 bg-gray-300">
    <h3 className="text-4xl font-light text-center mb-10">
      MORE SEASONS ?
    </h3>

    <div className="grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-4 
        gap-4 sm:gap-6 md:gap-2 
        px-2 sm:px-4 md:px-6
    ">
      {month.followingMonths.map((m, idx) => (
  <Link
    key={idx}
    href={
      m.slug === "explore"
        ? "/"
        : `/experience-types/month/${m.slug}`
    }
  >
          <div className="
            relative 
            aspect-[4/3] 
            min-h-[140px] sm:min-h-[160px] md:min-h-[180px]
            overflow-hidden 
            group 
            cursor-pointer">
            <Image
              src={m.image}
              alt={m.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-lg sm:text-xl font-light tracking-wide">
                {m.title}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </section>




    {/* ===== FINAL STORY SECTION ===== */}
<section className="relative w-full h-[30vh] py-30 md:py-8 sm:py-20 sm:h-[40vh] lg:h-[50vh] overflow-hidden">

  {/* Background Image */}
  <Image
    src="/images/month/last_sect.webp"   // 👈 change this path
    alt="Experience"
    fill
    priority
    className="object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/35" />

  {/* Content */}
  {/* Content */}
<div className="absolute inset-0 z-10 flex items-center">
  <div className="max-w-6xl mx-auto px-6 sm:px-10 w-full">

    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10">

      {/* LEFT TEXT */}
      <div className="text-center sm:text-left max-w-3xl">
        <h2 className="text-white text-3xl sm:text-4xl lg:text-4xl font-extralight tracking-wide uppercase">
          NEED A QUICK ESCAPE THIS MONTH?
        </h2>

        <p className="mt-4 text-white/90 text-base sm:text-lg lg:text-lg leading-relaxed">
          A few beautiful options remain. Drop us a message — we’ll curate something effortless.
        </p>
      </div>

      {/* RIGHT BUTTON */}
      <div className="flex justify-center sm:justify-end w-full sm:w-auto">
        <button
          className="
            relative overflow-hidden
            border border-white
            px-5 py-3
            text-[11px] font-bold tracking-[2px]
            text-white
            transition-all duration-300
            hover:text-black
            before:absolute before:inset-0
            before:bg-white before:opacity-0
            hover:before:opacity-100
          "
        >
          <span className="relative z-10">START YOUR JOURNEY</span>
        </button>
      </div>

    </div>

  </div>
</div>

</section>


      </main>
    </>
  );
}
