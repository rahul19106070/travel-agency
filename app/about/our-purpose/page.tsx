
"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
// import PrimaryFooter from "@/components/shared/PrimaryFooter";


gsap.registerPlugin(ScrollTrigger);

export default function OurPurpose() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textsRef = useRef<HTMLDivElement[]>([]);

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

 const smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",

  smooth: window.innerWidth > 768 ? 2.5 : 1.2,
  smoothTouch: 0.1,

  normalizeScroll: true,
  effects: true,
  ignoreMobileResize: true,
});


  if (!sectionRef.current) return;

  gsap.set(textsRef.current, { opacity: 0, y: 40 });

 const isMobile = window.innerWidth < 768;

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: sectionRef.current,
    start: "top top",
    end: isMobile ? "+=300%" : "+=400%",
    scrub: true,
    pin: true,
    pinSpacing: true,
    anticipatePin: isMobile ? 0 : 1,
  },
});


  textsRef.current.forEach((el, i) => {
    tl.to(el, { opacity: 1, y: 0, duration: 0.6 });
    if (i !== textsRef.current.length - 1) {
      tl.to(el, { opacity: 0, y: -40, duration: 0.6 });
    }
  });

  return () => {
    smoother.kill();
    ScrollTrigger.getAll().forEach(t => t.kill());
  };
}, []);





  return (
    <>
    <div id="smooth-wrapper">
    <div id="smooth-content" className="bg-white">
    <div className="bg-white">
      <Navbar appearance="page-gradient-static" />
      {/* Hero Section */}
      <div
        style={{ backgroundImage: "url('/images/about/bg02.jpg')" }}
        className="lg:min-h-[100vh] sm:min-h-[50vh] min-h-[50vh] md:min-h-[100vh] bg-cover bg-center px-4 md:px-8 lg:pl-60 lg:pt-20 relative z-10"
      >
        <div className="container mx-auto px-4">
          <h4 className="text-[#379C8A] items-end font-alternate font-medium tracking-widest uppercase pt-32 pb-30 md:pt-40 lg:pt-60 text-8xl md:text-7xl lg:text-[145px] leading-none">
            ABOUT US
          </h4>
          <div className="flex flex-col pb-10 items-end md:pr-16 lg:pr-32 lg:pb-10 space-y-6 text-white">
              {/* <p className="text-sm text-left tracking-wider uppercase text-[#379C8A]">
                ABOUT US
              </p> */}
              <h4 className="text-5xl sm:font-extralight md:text-4xl lg:text-5xl font-medium leading-tight uppercase">
                AWARD-WINNING CREATORS OF
                <br />
                REMARKABLE TRAVEL EXPERIENCES
              </h4>
            </div>
          </div>
        </div>
      </div>


    {/* First Content Section – Editorial Split */}
     <div className="relative pb-0 lg:mb-40 mt-20 md:mt-20 lg:mt-40">
        <div className="container mx-auto  md:px-8 px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Image */}
             <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen">
          <Image
            src="/images/about/About us 01.webp"
            alt="Dramatic mountain landscape"
            fill
            priority
            className="object-cover px-6"
            sizes="(max-width: 1900px) 100vw, 50vw"
          />
             </div>
        {/* RIGHT: Constrained content */}
            <div className="space-y-4 md:space-y-3 lg:pl-8 order-2 lg:order-1 lg:mb-12">
            <p className="text-xs tracking-widest uppercase text-gray-500">
              WHAT WE&apos;RE ABOUT
            </p>

            <h2 className="text-4xl md:text-4xl lg:text-5xl  font-medium uppercase leading-tight">
              WE&apos;RE A TEAM
              <br />
              OF PEOPLE IN THE
              <br />
              KNOW ABOUT TRAVEL
            </h2>
            <p className="text-gray-500 text-lg sm:text-xl md:text-base lg:text-md leading-relaxed">
              And we&apos;re on a mission to create remarkable experiences that
              thoughtfully connect our clients to the world and inspire them
              to explore it with curiosity, humility and a sense of wonder.
            </p>
            </div>
      </div>
    </div>
    </div>



      {/* Second Content Section - What We're About */}
      <div className="relative bg-white my-20  lg:my-40">
        <div className="px-7 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8  items-start">
            {/* Left Content */}
            <div className="space-y-4 lg:py-8 md:space-y-6 order-2 lg:order-1 lg:col-span-4 ">
              <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-medium leading-tight uppercase">
                It began with a feeling
              </h2>
              {/* <p className="text-xl md:text-sm tracking-wider font-medium uppercase text-gray-600">
                Black Tomato was founded in 2005 by Tom, James and Matt
              </p> */}
              <p className="leading-relaxed text-gray-400 text-xl md:text-base lg:text-md">
                A trio of friends who wanted to sweep aside the prevailing
                current of &apos;package&apos; trips and same-same vacations.
              </p>
              <p className=" leading-relaxed text-gray-400 text-xl md:text-base lg:text-md">
                Since then, we&apos;ve become award-winning curators of tailor-made
                travel experiences – all crafted with inspirational engineering
                and an incomparable attention to detail. For us, the most
                important thing has always been: how do you want to feel? The
                rest is in the detail.
              </p>
            </div>

            {/* Right Image */}
<div className="relative order-1 lg:order-2 z-20 w-full lg:w-[60vw] lg:absolute lg:right-5 lg:px-5 
                h-[60vh] md:h-[80vh] h-[40vh] lg:h-[70vh]">
  <Image
    src="/images/about/ABOUT US 02 (1).webp"
    alt="Coastal mountain view"
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
  />
</div>

          </div>
        </div>
      </div>



{/* third section */}
      <div className="relative pb-20 mt-25 md:pb-2 md:mt-20 lg:mt-45 lg:mb-45">
        <div className="container mx-auto  md:px-8 px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="relative w-full max-w-md mx-auto lg:max-w-none lg:w-[80%] aspect-[4/3]">
              <Image
                src="/images/about/ABOUT US 03.webp"
                alt="Dramatic mountain landscape"
                height={600}
                width={800}
                className="object-contain"
               sizes="(max-width: 800px) 100vw, (max-width: 1024px) 50vw, 500px"

              />
            </div>

            {/* Right Content */}
            <div className="space-y-4 md:space-y-3 lg:pl-8 order-2 lg:order-1 lg:mb-12">
        <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-medium leading-tight uppercase">
                A DIFFERENT WAY TO SEE THE WORLD
              </h2>
              {/* <p className="text-xs md:text-sm tracking-wider font-medium uppercase text-gray-600">
               And we want to make the remarkable happen
              </p> */}
              <p className="text-gray-400 text-sm md:text-base lg:text-md w-full md:w-9/10 leading-relaxed">
I-SKY works with travellers who want to experience places more deeply—without feeling overwhelmed or over-planned. Whether it’s a milestone celebration, a meaningful escape, or time taken just for yourself, our journeys are designed to feel right, not rushed.
              </p>
              <p className="text-gray-400 text-lg sm:text-xl md:text-base lg:text-md w-full  leading-relaxed">
Because travel isn’t about seeing everything.
It’s about experiencing what stays with you.              </p>
            </div>
          </div>
        </div>
      </div>



{/* 4th section */}
      <div className="relative pb-20 md:pb-2 lg:mt-30 lg:mb-37">
        <div className=" mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 lg:gap-16  items-start">
            {/* Left Image */}
            <div className="relative mt-10 md:mt-0 md:-mt-32 lg:-mt-10 z-10 w-full lg:w-[130%] md:w-[70%] h-[60vh] md:h-[80vh]">
              <Image
                src="/images/about/About_us_04 (1).webp"
                alt="Dramatic mountain landscape"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Right Content */}
            <div className="space-y-4 md:space-y-3 lg:pl-40 order-2 lg:order-1 lg:mb-12 ">
              <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-medium leading-tight uppercase">
               How We Design Every Journey              </h2>
              <p className="text-gray-400 text-lg sm:text-xl md:text-base lg:text-md w-full  leading-relaxed">
               Every journey at I-SKY begins with listening. We take time to understand what matters to you, how you like to travel, and what you want this experience to feel like. From there, we plan with care—balancing comfort, discovery, and ease. We curate thoughtfully, handle the details quietly, and adjust as your journey takes shape. Nothing is rushed, nothing is copied. Each trip is planned with intention, so when you travel, it feels effortless, personal, and exactly right for you.              </p>
              {/* <p className="text-gray-400 text-sm md:text-base lg:text-md w-full  leading-relaxed">
               Today, we take people to all seven continents, designing all of our trips from the ground up. This way, no two journeys are ever quite alike. Trekking with the tribes of Borneo; learning the trade of tanning in Morocco; joining the jostling crowds of Sienna&apos;s palio. It&apos;s a wide, wild world. And your travels should be the same.
              </p> */}
            </div>
          </div>
        </div>
      </div>



{/* 5th section */}
<div className="relative bg-white overflow-hidden lg:my-20 mb-20">
  <div className="mx-auto px-4 md:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-8  items-start">

      {/* IMAGE — comes FIRST on mobile */}
      <div className="relative w-full h-[220px] sm:h-[290px]  lg:hidden">
        <Image
          src="/images/about/AboutUs05.webp"
          alt="Coastal mountain view"
          fill
          className="object-contain"
          sizes="100vw"
        />
      </div>

      {/* TEXT */}
      <div className="space-y-4 md:space-y-6 lg:col-span-5 lg:pr-12 lg:mx-10">
        <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-medium leading-tight uppercase">
          Where It All Comes Together
        </h2>

        <p className="leading-relaxed text-gray-400 text-lg sm:text-xl md:text-base lg:text-md">
          At the end of the day, our role is simple—to make travel feel clear, considered, and genuinely enjoyable. When you work with I-SKY, you’re not choosing a package or a process; you’re choosing a team that takes responsibility for the details and respects the way you want to travel. If you’re looking for journeys that feel personal, well-paced, and thoughtfully handled, we’d love to begin the conversation.
        </p>
      </div>
    </div>
  </div>

  {/* DESKTOP ONLY IMAGE */}
  <div className="hidden lg:block absolute top-0 right-0 h-full w-[60%] mx-6">
    <Image
      src="/images/about/AboutUs05.webp"
      alt="Coastal mountain view"
      fill
      className="object-contain"
      sizes="60vw"
    />
  </div>
</div>



      <section
        ref={sectionRef}
        style={{ backgroundImage: "url('/images/about/bg10.jpg')" }}
        className="relative h-screen bg-cover bg-center bg-fixed flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 w-full max-w-5xl px-6 text-center">
          {[
            "Travel is not about places",
            "It’s about how you feel",
            "The world opens when you do",
            "Let curiosity lead the way",
          ].map((text, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) textsRef.current[i] = el;
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                         text-white uppercase font-medium tracking-widest
                         text-4xl sm:text-3xl md:text-4xl lg:text-5xl opacity-0 leading-[1.3]"
            >
              {text}
            </div>
          ))}
        </div>
      </section>


    </div>
  </div>
  </>
  );
}