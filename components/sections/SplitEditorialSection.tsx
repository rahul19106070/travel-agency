import Image from "next/image";
import type { JSX } from "react";

export default function SplitEditorialSection(): JSX.Element {
  return (
    <section className="w-full bg-white">
      {/* <div> */}
        {/* ================= Row 1 ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image 1 — FIRST on mobile, SECOND on desktop */}
          <div className="relative h-[250px] sm:h-[300px] md:h-auto order-1 md:order-2">
            <Image
              src="/images/Approach1.webp"
              alt="Founders discussion"
              height={500}
              width={500}
              className="object-cover h-full w-full"
              priority
            />
          </div>

          {/* Text 1 — SECOND on mobile, FIRST on desktop */}
          <div className="flex items-center px-4 sm:px-6 md:px-8 py-8 sm:py-20 md:py-24 order-2 md:order-1">
            <div className="max-w-xl mx-auto sm:ml-12 lg:ml-40">
              <h2 className="text-5xl sm:text-5xl md:text-5xl font-medium tracking-wider mb-6 font-alternate">
                WHAT WE DO
                <br />
                AND WHY WE DO IT
              </h2>

              <p className="text-md text-gray-600 leading-relaxed mb-8">
               Quiet morning journeys and starlit evenings.<br/>
                Moments that linger long after they end.<br />
                Travel that feels considered, intentional,
                and perhaps even harder to put into words.
              </p>

             <button
  className="
    relative overflow-hidden
    rounded-xs border border-black/70 bg-black
    sm:px-8 px-4 py-2 sm:py-3
    text-[11px] leading-[12px] font-bold tracking-[1.2px]

    text-white
    transition-all duration-300 ease-in-out
    hover:text-black hover:scale-[1.02]

    before:absolute before:inset-0
    before:bg-white
    before:opacity-0
    before:transition-opacity before:duration-300 before:ease-in-out
    hover:before:opacity-100
  "
>
  <span className="relative z-10">EXPLORE OUR APPROACH</span>
</button>

            </div>
          </div>
        </div>

        {/* ================= Row 2 ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image 2 — THIRD on mobile, FIRST on desktop */}
          <div className="relative h-[250px] sm:h-[300px] md:h-auto order-3 md:order-1">
            <Image
              src="/images/Approach2.webp"
              alt="Luxury travel landscape"
              height={500}
              width={500}
              className="object-cover h-full w-full"
            />
          </div>

          {/* Text 2 — FOURTH on mobile, SECOND on desktop */}
          <div className="flex items-center px-4 sm:px-6 md:px-8 md:py-24 order-4 md:order-2">
            <div className="max-w-xl mx-auto sm:mx-8 lg:mx-20">
              <h2 className="text-5xl py-5 sm:text-5xl md:text-5xl font-medium tracking-wider  font-alternate">
                OUR WAY OF TRAVELLING
              </h2>
              <p className="text-md text-gray-500 leading-relaxed mb-8">
                At ISKY, every journey begins with how you like to travel — not a template.
                <br />
From thoughtful pacing to hand-picked stays, we craft travel that feels personal, seamless, and quietly exceptional.


              
              </p>

              <button
  className="
    relative overflow-hidden
    rounded-xs border border-black/70 bg-black
    sm:px-8 px-4 py-2 sm:py-3
    text-[11px] leading-[12px] font-bold tracking-[1.2px]

    text-white
    transition-all duration-300 ease-in-out
    hover:text-black hover:scale-[1.02]

    before:absolute before:inset-0
    before:bg-white
    before:opacity-0
    before:transition-opacity before:duration-300 before:ease-in-out
    hover:before:opacity-100
  "
>
  <span className="relative z-10">EXPLORE OUR APPROACH</span>
</button>

            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
}