"use client";

import type { JSX } from "react";
import Link from "next/link";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import { Instagram, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";


export default function PrimaryFooter(): JSX.Element {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const destinations = [
    { name: "Greece", slug: "greece" },
    { name: "Iceland", slug: "iceland" },
    { name: "Italy", slug: "italy" },
    { name: "Japan", slug: "japan" },
    { name: "Maldives", slug: "maldives" },
    { name: "Morocco", slug: "morocco" },
    { name: "New-zealand", slug: "new-zealand" },
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


  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };
  return (
    <footer className="bg-[#242323] text-gray-300">
      

      <div className="max-w-7xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="hidden lg:grid lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]
 gap-8">
          {/* ISKY */}
          <div className="space-y-3 sm:space-y-4">
            <p className="font-brandon text-xs tracking-widest text-white font-semibold">
              ISKY
            </p>

            <ul className="space-y-1.5 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition">
                  GET IN TOUCH
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/booking-policy" className="hover:text-white transition">
                  Booking Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>



<li className="space-y-3">
  <span className="hover:text-white transition cursor-default">
    FOLLOW US
  </span>

  <div className="flex gap-4 items-center mt-2">
    <Link href="https://instagram.com" target="_blank" className="hover:text-white transition">
      <Instagram className="w-5 h-5" />
    </Link>

    <Link href="https://facebook.com" target="_blank" className="hover:text-white transition">
      <Facebook className="w-5 h-5" />
    </Link>

    <Link href="https://twitter.com" target="_blank" className="hover:text-white transition">
      <Twitter className="w-5 h-5" />
    </Link>

    <Link href="https://linkedin.com" target="_blank" className="hover:text-white transition">
      <Linkedin className="w-5 h-5" />
    </Link>

    <Link href="https://youtube.com" target="_blank" className="hover:text-white transition">
      <Youtube className="w-5 h-5" />
    </Link>
  </div>
</li>


            </ul>

            {/* <div className="mt-6 sm:mt-8">
              <h4 className=" font-brandon text-xs tracking-widest text-white font-semibold mb-3">
                SIGN UP TO OUR NEWSLETTER
              </h4>
              <div className="flex border border-white/20 bg-white/5 text-black w-70">
                <input
                  type="email"
                  placeholder="youremail@example.com"
                  className="bg-white/90 text-black  sm:px-4 py-2 sm:py-3 text-xs sm:text-sm flex-1 outline-none"
                />
                <button className="px-5 lg:px-5 py-4 sm:px-4 border-l bg-black text-white border-white/20 hover:bg-white/10 transition text-sm sm:text-base">
                  →
                </button>
              </div>
            </div> */}



          </div>

          {/* USEFUL INFORMATION */}
          <div>
            <h4 className=" font-brandon text-xs tracking-widest text-white font-semibold mb-4">
              USEFUL INFORMATION
            </h4>
            <ul className="space-y-1.5 text-sm">
              {[
                "About Us",
                "Booking Conditions",
                "Careers",
                "FAQs",
                "Online Enquiry",
                "Press Room",
                "Privacy Policy",
                "Regenerative Travel",
                "Sitemap",
                "Travel Insurance",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* POPULAR DESTINATIONS */}
          <div>
            <h4 className=" font-brandon text-xs tracking-widest text-white font-semibold mb-4">
              POPULAR DESTINATIONS
            </h4>
           <ul className="space-y-1.5 text-sm">
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
  <h4 className="font-brandon text-xs tracking-widest text-white font-semibold mb-4">
    WHO
  </h4>

  <ul className="space-y-1.5 text-sm">
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


          {/* WHAT */}
          <div>
            <h4 className=" font-brandon text-xs tracking-widest text-white font-semibold mb-4">
              WHAT
            </h4>
            <ul className="space-y-1.5 text-sm">
              {[
                "Pursuit of Feeling",
                "Feelings Engine",
                "See You In The Moment",
                "Take Me On A Story",
                "James Bond",
                "Adventures",
                "Beach",
                "Blink",
                "Eclipse",
                "Field Trip",
                "Food",
                "Get Lost",
                "Safari",
                "Unusual",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empty column for 6-column grid */}
          <div></div>
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

                {/* FOLLOW US */}
                <div className="pt-3">
                  <p className="font-brandon text-xs tracking-widest text-white font-semibold mb-3">
                    FOLLOW US
                  </p>

                  <div className="flex gap-5 items-center">
                    <Link href="https://instagram.com" target="_blank" className="hover:text-white transition">
                      <Instagram className="w-5 h-5" />
                    </Link>

                    <Link href="https://facebook.com" target="_blank" className="hover:text-white transition">
                      <Facebook className="w-5 h-5" />
                    </Link>

                    <Link href="https://twitter.com" target="_blank" className="hover:text-white transition">
                      <Twitter className="w-5 h-5" />
                    </Link>

                    <Link href="https://linkedin.com" target="_blank" className="hover:text-white transition">
                      <Linkedin className="w-5 h-5" />
                    </Link>

                    <Link href="https://youtube.com" target="_blank" className="hover:text-white transition">
                      <Youtube className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

              </div>
            )}
          </div>


          {/* USEFUL INFORMATION */}
          <div className="border-b border-white/10">
            <button
              onClick={() => toggleSection("useful")}
              className="w-full flex items-center justify-between py-5 text-left"
            >
              <h4 className=" font-brandon text-xs tracking-widest text-white font-semibold">
                USEFUL INFORMATION
              </h4>
              {openSection === "useful" ? (
                <Minus className="w-4 h-4 text-white" />
              ) : (
                <Plus className="w-4 h-4 text-white" />
              )}
            </button>
            {openSection === "useful" && (
              <ul className="pb-5 space-y-2 text-sm">
                {[
                  "About Us",
                  "Booking Conditions",
                  "Careers",
                  "Frequently Asked Questions",
                  "Online Enquiry",
                  "Press Room",
                  "Privacy Policy",
                  "Regenerative Travel",
                  "Sitemap",
                  "Travel Insurance",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-white transition">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
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

          {/* WHAT */}
          <div className="border-b border-white/10">
            <button
              onClick={() => toggleSection("what")}
              className="w-full flex items-center justify-between py-5 text-left"
            >
              <h4 className=" font-brandon text-xs tracking-widest text-white font-semibold">
                WHAT
              </h4>
              {openSection === "what" ? (
                <Minus className="w-4 h-4 text-white" />
              ) : (
                <Plus className="w-4 h-4 text-white" />
              )}
            </button>
            {openSection === "what" && (
              <ul className="pb-5 space-y-2 text-sm">
                {[
                  "Pursuit of Feeling",
                  "Feelings Engine",
                  "See You In The Moment",
                  "Take Me On A Story",
                  "James Bond",
                  "Adventures",
                  "Beach",
                  "Blink",
                  "Eclipse",
                  "Field Trip",
                  "Food",
                  "Get Lost",
                  "Safari",
                  "Unusual",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-white transition">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
