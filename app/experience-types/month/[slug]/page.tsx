// import { useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { MONTH_DATA } from "@/app/data/monthData";
import Link from "next/link";

async function getMonthData(slug: string) {
  await new Promise((res) => setTimeout(res, 1000));
  return MONTH_DATA.find((m) => m.slug === slug);
}

export default async function MonthPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const month = await getMonthData(slug);

  if (!month) {
    return <div className="pt-32 text-center text-xl">Month not found</div>;
  }
  // export default async function MonthPage({params}) {
  // const params = useParams<{ slug: string }>();
  // const slug = params?.slug;

  // const month = MONTH_DATA.find((m) => m.slug === slug);

  // if (!month) {
  //   return <div className="pt-32 text-center text-xl">Month not found</div>;
  // }

  return (
    <>
      <Navbar appearance="home-scroll" />
      <main className="w-full overflow-x-hidden">

        {/* -------------------HERO */}
        <section className="relative h-[70vh] sm:h-[85vh] lg:h-[96vh] w-full">
          <Image
            src={month.heroImage}
            alt={month.title}
            fill
            sizes="100vw"
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

        {/*------------------------ CONTENT */}
        <section className="max-w-5xl mx-auto px-5 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-light mb-6">
            {month.title}
          </h2>

          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            {month.description}
          </p>

          <Link href={month.ctaLink}>
            <button
              className="
              mt-8 border border-black bg-black
              px-6 py-3 text-[11px] font-bold tracking-widest
              text-white transition-all hover:bg-white hover:text-black
            "
            >
              {month.ctaText}
            </button>
          </Link>
        </section>

        {/*------------------------ PACKAGES */}
        <section
          id="journey"
          className="py-16 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/Backdrop.webp')" }}
        >
          {/* ✅ MOBILE TEXT (top) */}
          <div className="lg:hidden px-4 sm:px-6 text-white mb-6">
            <h2 className="text-3xl font-extrabold">THE INSIDER'S 2026</h2>
            <p className="mt-3 italic text-white/70">
              Exclusive access to the world's best-kept secrets...
            </p>
          </div>

          {/* ✅ SCROLL CONTAINER */}
          <div
            className="
      flex gap-4 sm:gap-6
      overflow-x-auto
      pb-6
      px-4 sm:px-6
      scroll-smooth
      [&::-webkit-scrollbar]:hidden
    "
          >
            {/* ❌ HIDE TEXT INSIDE SCROLL ON MOBILE */}
            <div className="hidden lg:block min-w-[320px] shrink-0 text-white pt-6">
              <h2 className="text-4xl lg:text-5xl font-extrabold">
                THE INSIDER'S 2026
              </h2>
              <p className="mt-4 italic text-white/70">
                Exclusive access to the world's best-kept secrets...
              </p>
            </div>

            {/* CARDS */}
            {month.packages.map((pkg, idx) => (
              <div
                key={idx}
                className="
          min-w-[75%] sm:min-w-[260px] md:min-w-[300px] lg:min-w-[320px]
          aspect-[3/5]
          shrink-0
          relative
          overflow-hidden
          rounded-lg
        "
              >
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute bottom-0 p-4 text-white">
                  <p className="text-xs font-bold">{pkg.duration}</p>
                  <p className="text-2xl font-extrabold">{pkg.title}</p>
                  <p className="text-sm text-white/80">{pkg.description}</p>
                  <Link
                    href={`/experience-types/destination/${pkg.destinationSlug}/packages/${pkg.packageSlug}`}
                    className="
    inline-block
    mt-2 sm:mt-4
    relative overflow-hidden
    border border-white
    px-3 sm:px-4 py-1 sm:py-2
    text-xs tracking-widest text-white

    transition-all duration-300 ease-out
    hover:text-black hover:scale-[1.03]

    before:absolute before:inset-0
    before:bg-white
    before:translate-y-full
    before:transition-transform before:duration-300 before:ease-out
    hover:before:translate-y-0
  "
                  >
                    <span className="relative z-10">EXPLORE TRIP</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/*------------------------------ MORE SEASONS */}
        <section className="mx-auto px-5 py-10  pb-18 sm:pb-15 bg-gray-300">
          <h3 className="text-4xl font-light text-center mb-10">
            MORE SEASONS ?
          </h3>

          <div
            className="grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-4 
        gap-4 sm:gap-6 md:gap-2 
        px-2 sm:px-4 md:px-6
    "
          >
            {month.followingMonths.map((m, idx) => (
              <Link
                key={idx}
                href={
                  m.slug === "explore"
                    ? "/"
                    : `/experience-types/month/${m.slug}`
                }
              >
                <div
                  className="
            relative 
            aspect-[4/3] 
            min-h-[140px] sm:min-h-[160px] md:min-h-[180px]
            overflow-hidden 
            group 
            cursor-pointer"
                >
                  <Image
                    src={m.image}
                    alt={m.title}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 22vw"
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

        {/* =====------------------------------- CTA ===== */}
        <section className="relative w-full h-[30vh] py-36 md:py-8 sm:py-20 sm:h-[40vh] lg:h-[50vh] overflow-hidden">
          {/* Background Image */}
          <Image
            src="/images/month/last_sect.webp" // 
            alt="Experience"
            fill
            sizes="100vw"
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
                    A few beautiful options remain. Drop us a message — we’ll
                    curate something effortless.
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
