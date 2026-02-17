"use client";

import type { JSX } from "react";
import Link from "next/link";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import {
  Instagram,
  Facebook,
  Linkedin,
  X,
  Youtube,
} from "lucide-react";

export default function PrimaryFooter(): JSX.Element {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const destinations = [
    { name: "Greece", slug: "greece" },
    { name: "Iceland", slug: "iceland" },
    { name: "Italy", slug: "italy" },
    { name: "Japan", slug: "japan" },
    { name: "Maldives", slug: "maldives" },
    { name: "Morocco", slug: "morocco" },
    { name: "New Zealand", slug: "new-zealand" },
    { name: "Switzerland", slug: "switzerland" },
    { name: "Tanzania", slug: "tanzania" },
    { name: "United Kingdom", slug: "uk" },
  ];

  const whoLinks = [
    { slug: "family-holidays", name: "Family" },
    { slug: "romantic-holidays", name: "Couples" },
    { slug: "group-holidays", name: "Group" },
    { slug: "honeymoon-holidays", name: "Honeymoons" },
    { slug: "solo-holidays", name: "Solo" },
  ];

  const months = [
    { name: "January", slug: "january" },
    { name: "February", slug: "february" },
    { name: "March", slug: "march" },
    { name: "April", slug: "april" },
    { name: "May", slug: "may" },
    { name: "June", slug: "june" },
    { name: "July", slug: "july" },
    { name: "August", slug: "august" },
    { name: "September", slug: "september" },
    { name: "October", slug: "october" },
    { name: "November", slug: "november" },
    { name: "December", slug: "december" },
  ];

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-[#242323] text-gray-300">
      <div className="max-w-7xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">

        {/* DESKTOP */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-16">

          {/* ISKY */}
          <div>
            <p className="font-brandon text-[17px] tracking-widest text-white font-semibold mb-4">
              I SKY
            </p>

            <ul className="space-y-1.5 text-[16px]">
              <li><Link href="/contact" className="hover:text-white transition">Get in Touch</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/booking-policy" className="hover:text-white transition">Booking Policy</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
            </ul>

            {/* NEWSLETTER */}
<div className="mt-6">
  <h4 className="font-brandon text-[17px] tracking-widest text-white font-semibold mb-3">
    SIGN UP TO OUR NEWSLETTER
  </h4>

  <div className="flex border border-white/20 bg-white/5">
    <input
      type="email"
      placeholder="youremail@example.com"
      className="bg-white/90 text-black px-1 py-2 text-sm flex-1 outline-none"
    />
    <button
      aria-label="Subscribe"
      className="ms-0 px-4 py-2 border-l bg-black  outline-none  text-white cursor-pointer transition"
    >
      →
    </button>
  </div>
</div>

          </div>

          {/* POPULAR DESTINATIONS */}
          <div>
            <h4 className="font-brandon text-[17px] tracking-widest text-white font-semibold mb-4">
              POPULAR DESTINATIONS
            </h4>

            <ul className="space-y-1.5 text-[16px]">
              {destinations.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/experience-types/destination/${item.slug}`}
                    className="hover:text-white transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* WHO */}
          <div>
            <h4 className="font-brandon text-[17px] tracking-widest text-white font-semibold mb-4">
              WHO
            </h4>

            <ul className="space-y-1.5 text-[16px]">
              {whoLinks.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/experience-types/traveller/${item.slug}`}
                    className="hover:text-white transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* WHEN */}
          <div>
            <h4 className="font-brandon text-[17px] tracking-widest text-white font-semibold mb-4">
              WHEN
            </h4>

            <ul className="space-y-1.5 text-[16px]">
              {months.map((month) => (
                <li key={month.slug}>
                  <Link
                    href={`/experience-types/month/${month.slug}`}
                    className="hover:text-white transition"
                  >
                    {month.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* FOLLOW US */}
          <div>
            <h4 className="font-brandon text-[17px] tracking-widest text-white font-semibold mb-4">
              FOLLOW US
            </h4>

            <div className="flex flex-wrap gap-2">
              <Link href="https://instagram.com" target="_blank"><Instagram className="w-6 h-6 hover:text-white transition" /></Link>
              <Link href="https://facebook.com" target="_blank"><Facebook className="w-6 h-6 hover:text-white transition" /></Link>
              <Link href="https://X.com" target="_blank"><X className="w-6 h-6 hover:text-white transition" /></Link>
              <Link href="https://linkedin.com" target="_blank"><Linkedin className="w-6 h-6 hover:text-white transition" /></Link>
              <Link href="https://youtube.com" target="_blank"><Youtube className="w-6 h-6 hover:text-white transition" /></Link>
            </div>
          </div>
        </div>

      





        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-0 border-t border-white/10">


          {/* ISKY (Mobile) */}
          <div className="border-b border-white/10">
            <button
              onClick={() => toggleSection("isky")}
              className="w-full flex items-center justify-between py-5 text-left"
            >
              <h4 className="font-brandon text-xs tracking-widest text-white font-semibold">
                ISKY
              </h4>
              {openSection === "isky" ? (
                <Minus className="w-4 h-4 text-white" />
              ) : (
                <Plus className="w-4 h-4 text-white" />
              )}
            </button>

            {openSection === "isky" && (
              <div className="pb-5 space-y-4">

                {/* Links */}
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/contact" className="hover:text-white transition block">
                      GET IN TOUCH
                    </Link>
                  </li>

                  <li>
                    <Link href="/about" className="hover:text-white transition block">
                      About
                    </Link>
                  </li>

                  <li>
                    <Link href="/booking-policy" className="hover:text-white transition block">
                      Booking Policy
                    </Link>
                  </li>

                  <li>
                    <Link href="/privacy-policy" className="hover:text-white transition block">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>

               {/* NEWSLETTER (Mobile) */}
<div className="pt-5">
  <p className="font-brandon text-xs tracking-widest text-white font-semibold mb-3">
    SIGN UP TO OUR NEWSLETTER
  </p>

  <div className="flex border border-white/20 bg-white/5">
    <input
      type="email"
      placeholder="youremail@example.com"
      className="bg-white/90 text-black px-3 py-2 text-sm flex-1 outline-none"
    />
    <button
      aria-label="Subscribe"
      className="px-4 border-l border-white/20 text-white"
    >
      →
    </button>
  </div>
</div>


              </div>
            )}
          </div>


        

        {/* POPULAR DESTINATIONS */}
        <div className="border-b border-white/10">
          <button
            onClick={() => toggleSection("destinations")}
            className="w-full flex items-center justify-between py-5 text-left"
          >
            <h4 className="font-brandon text-xs tracking-widest text-white font-semibold">
              POPULAR DESTINATIONS
            </h4>
            {openSection === "destinations" ? (
              <Minus className="w-4 h-4 text-white" />
            ) : (
              <Plus className="w-4 h-4 text-white" />
            )}
          </button>
          {openSection === "destinations" && (
            <ul className="pb-5 space-y-2 text-sm">
              {destinations.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/experience-types/destination/${item.slug}`}
                    className="hover:text-white transition block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>


          {/* WHO */}
          <div className="border-b border-white/10">
            <button
              onClick={() => toggleSection("who")}
              className="w-full flex items-center justify-between py-5 text-left"
            >
              <h4 className=" font-brandon text-xs tracking-widest text-white font-semibold">
                WHO
              </h4>
              {openSection === "who" ? (
                <Minus className="w-4 h-4 text-white" />
              ) : (
                <Plus className="w-4 h-4 text-white" />
              )}
            </button>
            {openSection === "who" && (
          <ul className="pb-5 space-y-2 text-sm">
            {whoLinks.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/experience-types/traveller/${item.slug}`}
                  className="hover:text-white transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
)}

          </div>

{/* WHEN */}
<div className="border-b border-white/10">
  <button
    onClick={() => toggleSection("when")}
    className="w-full flex items-center justify-between py-5 text-left"
  >
    <h4 className="font-brandon text-xs tracking-widest text-white font-semibold">
      WHEN
    </h4>
    {openSection === "when" ? (
      <Minus className="w-4 h-4 text-white" />
    ) : (
      <Plus className="w-4 h-4 text-white" />
    )}
  </button>

  {openSection === "when" && (
    <ul className="pb-5 space-y-2 text-sm">
      {months.map((month) => (
        <li key={month.slug}>
          <Link
            href={`/experience-types/when/${month.slug}`}
            className="hover:text-white transition block"
          >
            {month.name}
          </Link>
        </li>
      ))}
    </ul>
  )}
</div>



{/* FOLLOW US */}
<div className="border-b border-white/10">
  <button
    onClick={() => toggleSection("follow")}
    className="w-full flex items-center justify-between py-5 text-left"
  >
    <h4 className="font-brandon text-xs tracking-widest text-white font-semibold">
      FOLLOW US
    </h4>
    {openSection === "follow" ? (
      <Minus className="w-4 h-4 text-white" />
    ) : (
      <Plus className="w-4 h-4 text-white" />
    )}
  </button>

  {openSection === "follow" && (
    <div className="pb-5 flex gap-5">
      <Link href="https://instagram.com" target="_blank"><Instagram className="w-5 h-5" /></Link>
      <Link href="https://facebook.com" target="_blank"><Facebook className="w-5 h-5" /></Link>
      <Link href="https://X.com" target="_blank"><X className="w-5 h-5" /></Link>
      <Link href="https://linkedin.com" target="_blank"><Linkedin className="w-5 h-5" /></Link>
      <Link href="https://youtube.com" target="_blank"><Youtube className="w-5 h-5" /></Link>
    </div>
  )}
</div>


        </div>
 
      </div>
    </footer>
  );
}