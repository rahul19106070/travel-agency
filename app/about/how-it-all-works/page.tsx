"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Navbar from "@/components/Navbar";

gsap.registerPlugin(ScrollTrigger);
gsap.ticker.lagSmoothing(1000, 16);

const steps = [
  {
    title: "Membership Access",
    image: "/images/triple-creek-ranch.avif",
    points: [
      "Inner Circle access is extended to travellers who:",
      "Complete a journey valued at USD 20,000+",
      "Reach USD 15,000 in annual travel with I-SKY",
      "Access is seamlessly activated",
    ],
  },
  {
    title: "Personal Welcome",
    image: "/images/triple-creek-ranch.avif",
    points: [
      "Each Inner Circle member receives:",
      "A thoughtfully curated welcome gift",
      "A dedicated I-SKY travel curator",
      "A personal travel profile captured and retained",
    ],
  },
  {
    title: "Priority Experience",
    image: "/images/triple-creek-ranch.avif",
    points: [
      "Inner Circle members enjoy:",
      "Priority planning and response",
      "Personalised itinerary design",
      "Enhanced access during high-demand periods",
    ],
  },
  {
    title: "Progressive Privileges",
    image: "/images/triple-creek-ranch.avif",
    points: [
      "With continued travel, members experience:",
      "Added inclusions arranged on their behalf",
      "Elevated upgrade opportunities",
      "Access to limited and high-demand experiences",
    ],
  },
  {
    title: "Journey Support",
    image: "/images/triple-creek-ranch.avif",
    points: [
      "Members receive:",
      "On-journey assistance",
      "Thoughtful handling of special requests",
      "Seamless coordination throughout travel",
    ],
  },
  {
    title: "Long-Term Value",
    image: "/images/triple-creek-ranch.avif",
    points: [
      "Inner Circle is designed as:",
      "An ongoing relationship",
      "A consistent level of service",
      "A travel partnership that grows over time",
    ],
  },
  {
    title: "Who Inner Circle Is For",
    image: "/images/triple-creek-ranch.avif",
    points: [
      "Inner Circle is suited to travellers who:",
      "Value ease, discretion, and clarity",
      "Travel with intention",
      "Prefer a trusted team over transactions",
    ],
  },
];

export default function MembershipPage() {
  const [activeStep, setActiveStep] = useState(0);
  const activeStepRef = useRef(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const numberRef = useRef<HTMLSpanElement | null>(null);

  /* ---------------- SCROLL LOGIC ---------------- */
  useEffect(() => {
    const triggers: ScrollTrigger[] = [];

    sectionRefs.current.forEach((section, i) => {
      if (!section) return;

      triggers.push(
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "+=100%",
          pin: true,
          pinSpacing: true,
          scrub: 1.2,
          anticipatePin: 1,
          snap: {
            snapTo: 1,
            duration: { min: 0.6, max: 1.2 },
            ease: "power3.inOut",
          },
          onToggle: (self) => {
            if (self.isActive && activeStepRef.current !== i) {
              activeStepRef.current = i;
              setActiveStep(i);
            }
          },
        })
      );

      gsap.fromTo(
        section.querySelector(".content"),
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 60%",
          },
        }
      );
    });

    ScrollTrigger.refresh();
    return () => triggers.forEach((t) => t.kill());
  }, []);

  /* ---------------- NUMBER ANIMATION ---------------- */
 useEffect(() => {
  if (!numberRef.current) return;

  gsap.fromTo(
    numberRef.current,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1.8,          // 👈 slow
      delay:0.25,
      ease: "power1.out",     // 👈 soft
    }
  );
}, [activeStep]);

  const RADIUS = 120;
  const BALL = 18;
  const COUNT = steps.length;

  return (
    <>
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50 bg-white">
        <Navbar />
      </div>

      <div className="relative">
        {/* Fixed Heading */}
        <p className="fixed top-24 left-1/2 -translate-x-1/2 text-5xl font-semibold uppercase z-20">
          How it all works
        </p>

        {/* Fixed Circle */}
        <div
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-gray-300 z-20"
          style={{ width: RADIUS * 2, height: RADIUS * 2 }}
        >
          {/* Animated Number */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              key={activeStep} // 👈 forces React remount (CRITICAL)
              className="text-7xl font-semibold tracking-widest"
              ref={(el) => {
                if (!el) return;

                gsap.fromTo(
                  el,
                  { opacity: 0 },
                  {
                    opacity: 1,
                    duration: 1.6,          // slow & editorial
                    ease: "power1.inOut",
                  }
                );
              }}
            >
              {String(activeStep + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Dots */}
          {steps.map((_, i) => {
            const angle = (-90 + (360 / COUNT) * i) * (Math.PI / 180);
            return (
              <div
                key={i}
                className={`absolute rounded-full ${
                  activeStep === i
                    ? "bg-black"
                    : "border-2 border-gray-400"
                }`}
                style={{
                  width: BALL,
                  height: BALL,
                  left: RADIUS + RADIUS * Math.cos(angle) - BALL / 2,
                  top: RADIUS + RADIUS * Math.sin(angle) - BALL / 2,
                }}
              />
            );
          })}
        </div>

        {/* Sections */}
        {steps.map((step, i) => {
          const reverse = i % 2 !== 0;

          return (
            <section
              key={i}
              ref={(el) => (sectionRefs.current[i] = el)}
              className="h-screen"
            >
              <div className="content grid md:grid-cols-2 w-full h-full">
                <div className={reverse ? "md:order-2" : "md:order-1"}>
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={1200}
                    height={1200}
                    className="h-full w-full object-cover"
                    priority={i === 0}
                  />
                </div>

                <div
                  className={`flex flex-col justify-center px-10 md:px-20 ${
                    reverse ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {step.title}
                  </h2>
                  <ul className="space-y-3 text-lg text-gray-600">
                    {step.points.map((p, idx) => (
                      <li key={idx}>• {p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
