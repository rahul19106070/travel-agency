
"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OurPurpose() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=400%",
        scrub: true,
        pin: true,
      },
    });

    textsRef.current.forEach((el, i) => {
      // fade in
      tl.to(el, { opacity: 1, y: 0, duration: 0.3 }, i * 1)
        // fade out before next
        .to(el, { opacity: 0, y: -50, duration: 0.3 }, (i + 1) * 1);
    });
  }, []);


  return (
    <>
    <div className="bg-white">
      <Navbar appearance="page-gradient-static" />

      {/* Hero Section */}
      <div
        style={{ backgroundImage: "url('/images/about/bg02.jpg')" }}
        className="min-h-[100vh] bg-cover bg-center px-4 md:px-8 lg:pl-60 lg:pt-20 relative z-10"
      >
        <div className="container mx-auto px-4">
          <h4 className="text-[#379C8A] items-end font-alternate font-medium tracking-widest uppercase pt-32 pb-30 md:pt-40 lg:pt-60 text-5xl md:text-7xl lg:text-[145px] leading-none">
            ABOUT US
          </h4>
          <div className="flex flex-col items-end md:pr-16 lg:pr-32 lg:pb-10 space-y-6 text-white">
              {/* <p className="text-sm text-left tracking-wider uppercase text-[#379C8A]">
                ABOUT US
              </p> */}
              <h4 className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight uppercase">
                AWARD-WINNING CREATORS OF
                <br />
                REMARKABLE TRAVEL EXPERIENCES
              </h4>
            </div>



          </div>
        </div>
      </div>

    {/* First Content Section – Editorial Split */}
<section className="z-10 relative w-full  bg-white overflow-hidden">
  <div className="grid grid-cols-1 lg:grid-cols-[50vw_1fr] min-h-screen">

    {/* LEFT: Full-bleed image */}
    <div className="relative lg:h-screen">
      <Image
        src="/images/about/image.jpg"
        alt="Dramatic mountain landscape"
        fill
        priority
        className="object-cover px-6"
        sizes="(max-width: 1900px) 100vw, 50vw"
      />
    </div>

    {/* RIGHT: Constrained content */}
    <div className="flex items-center">
      <div className="max-w-xl px-6 md:px-12 lg:px-20 space-y-6">
        <p className="text-xs tracking-widest uppercase text-gray-500">
          WHAT WE&apos;RE ABOUT
        </p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium uppercase leading-tight">
          WE&apos;RE A TEAM
          <br />
          OF PEOPLE IN THE
          <br />
          KNOW ABOUT TRAVEL
        </h2>

        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
          And we&apos;re on a mission to create remarkable experiences that
          thoughtfully connect our clients to the world and inspire them
          to explore it with curiosity, humility and a sense of wonder.
        </p>
      </div>
    </div>

  </div>
</section>


      {/* Second Content Section - What We're About */}
      <div className="relative bg-white my-40 lg:my-20">
        <div className="px-7 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8  items-start">
            {/* Left Content */}
            <div className="space-y-4 lg:py-8 md:space-y-6 order-2 lg:order-1 lg:col-span-4 ">
              <h2 className="text-2xl md:text-4xl sm:text-5xl lg:text-5xl font-medium leading-tight md:leading-widest uppercase">
                It began with a feeling
              </h2>
              <p className="text-xl md:text-sm tracking-wider font-medium uppercase text-gray-600">
                Black Tomato was founded in 2005 by Tom, James and Matt
              </p>
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
            <div className="relative order-1 lg:order-2 -mt-10 md:-mt-48 lg:-mt-40 z-20 w-full lg:w-[60vw] lg:absolute lg:right-0 lg:px-5">
              <Image
                src="/images/about/bg03.jpg"
                alt="Coastal mountain view"
                height={900}
                width={1860}
                className="object-cover w-full md:w-[80%] lg:w-[100%]  mt-40"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
              />
            </div>
          </div>
        </div>
      </div>



{/* third section */}
      <div className="relative pb-20 md:pb-2 md:mt-20 lg:mt-40">
        <div className="container mx-auto  md:px-8 px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="relative w-full max-w-md mx-auto lg:max-w-none lg:w-[80%] aspect-[4/3]">
              <Image
                src="/images/about/image-3.jpg"
                alt="Dramatic mountain landscape"
                height={600}
                width={800}
                className="object-contain"
               sizes="(max-width: 800px) 100vw, (max-width: 1024px) 50vw, 500px"

              />
            </div>

            {/* Right Content */}
            <div className="space-y-4 md:space-y-3 lg:pl-8 order-2 lg:order-1 lg:mb-12">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight md:leading-widest uppercase">
                Unique, different, and daring
              </h2>
              <p className="text-xs md:text-sm tracking-wider font-medium uppercase text-gray-600">
               And we want to make the remarkable happen
              </p>
              <p className="text-gray-400 text-sm md:text-base lg:text-md w-full md:w-9/10 leading-relaxed">
                The journeys we make, make us. We learnt this from legendary travel writer Bruce Chatwin, speaking about the importance of living a “restless” life. When we plan trips for our clients, we want to strip away the barriers that can get between them and the world. They – you – are searching for the unexpected, the unfamiliar, the unknown. Restlessness helps.
              </p>
              <p className="text-gray-400 text-sm md:text-base lg:text-md w-full md:w-9/10 leading-relaxed">
                But so does expertise. Over the years, we&apos;ve assembled a team of travel fanatics – people who live and breathe the world and everything in it. They&apos;re starry-eyed wanderers with the organisational nous of precision engineers. These are the people who&apos;ll help you find your way. Even if that means getting &apos;lost&apos;.
              </p>
            </div>
          </div>
        </div>
      </div>



{/* 4th section */}
      <div className="relative pb-20 md:pb-2 lg:mt-30">
        <div className=" mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Image */}
            <div className="relative -mt-10 md:-mt-32 lg:-mt-10 z-8 w-full lg:w-[120%] aspect-[4/3]">
              <Image
                src="/images/about/bg04.jpg"
                alt="Dramatic mountain landscape"
                height={1200}
                width={1200}
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"

              />
            </div>

            {/* Right Content */}
            <div className="space-y-4 md:space-y-3 lg:pl-40 order-2 lg:order-1 lg:mb-12 ">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight md:leading-widest uppercase">
               We&apos;ll show you the world
              </h2>
              <p className="text-xs md:text-sm tracking-wider font-medium uppercase text-gray-600">
               And in an entirely new light
              </p>
              <p className="text-gray-400 text-sm md:text-base lg:text-md w-full  leading-relaxed">
                We curate trips for travellers who want to see the world up close – foregoing &apos;tick lists&apos; and tourist traps in favour of deeper and more intimate connections with the world and its cultures.
              </p>
              <p className="text-gray-400 text-sm md:text-base lg:text-md w-full  leading-relaxed">
               Today, we take people to all seven continents, designing all of our trips from the ground up. This way, no two journeys are ever quite alike. Trekking with the tribes of Borneo; learning the trade of tanning in Morocco; joining the jostling crowds of Sienna&apos;s palio. It&apos;s a wide, wild world. And your travels should be the same.
              </p>
            </div>
          </div>
        </div>
      </div>



{/* 5th section */}
 <div className="relative bg-white py-12 md:py-16  overflow-hidden lg:my-30 my-20">
  <div className=" mx-auto px-4 md:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Content */}
      <div className="space-y-4 md:space-y-6 lg:col-span-5 lg:pr-12 lg:mx-10">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight md:leading-widest uppercase">
          Regenerative Travel
        </h2>
        <p className="text-xs md:text-sm tracking-wider font-medium uppercase text-gray-600">
          A Lasting Impact For A Changing World
        </p>
        <p className="leading-relaxed text-gray-400 text-sm md:text-base lg:text-md">
          At Black Tomato, we know you’re seeking travel experiences that will leave a lasting, positive impact on our planet and the communities that call it home. This is a belief we also share, and it has been since our founding in 2005.
        </p>
        <div className="mt-4">
          <button className="bg-black py-2 rounded-sm text-white w-2/5">Find out more</button>
        </div>
      </div>
    </div>
  </div>

  {/* Right Image - escapes container */}
  <div className="absolute top-0 right-0 h-full w-[60%] lg:w-[60%]">
    <Image
      src="/images/about/bg05.jpg"
      alt="Coastal mountain view"
      fill
      className="object-contain"  
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 1200px"
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
                         text-2xl sm:text-3xl md:text-4xl lg:text-5xl opacity-0"
            >
              {text}
            </div>
          ))}
        </div>
      </section>

    {/* </div> */}
  </>
  );
}