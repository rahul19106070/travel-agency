"use client";

import { useState, useEffect } from "react";
import { Search, Menu, X, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {NAV_LINKS} from "@/app/data/navbar";
import { BY_DESTINATION } from "@/app/data/navbar";
import { EXPERIENCES_DATA } from "@/app/data/navbar";
import { MENU_DATA } from "@/app/data/navbar";
import { motion, AnimatePresence } from "framer-motion";
import { Info } from "lucide-react";


type NavTab = "destinations" | "experiences" | "menu";
type NavAppearance =
  | "home-flat"
  | "home-scroll"
  | "page-gradient-scroll"
  | "page-gradient-static";

interface NavbarProps {
  appearance?: NavAppearance;
}

export default function Navbar({ appearance }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isPastHero, setIsPastHero] = useState(false);
  const [hoveredContinent, setHoveredContinent] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<NavTab | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  // const [scrolled, setScrolled] = useState(false);


  
  // Mobile menu navigation states
  const [mobileMenuLevel, setMobileMenuLevel] = useState<'main' | 'destinations' | 'continent' | 'experiences' | 'about' | 'about-category'>('main');
  const [selectedContinent, setSelectedContinent] = useState<string | null>(null);
  const [selectedExperienceCategory, setSelectedExperienceCategory] = useState<string | null>(null);

  const [scrolled, setScrolled] = useState(false);



  const pathname = usePathname();
  const resolvedAppearance: NavAppearance =
    appearance ?? (pathname === "/" ? "home-scroll" : "page-gradient-scroll");
  const usesPastHero =
    resolvedAppearance === "home-scroll" || resolvedAppearance === "page-gradient-scroll";


  const textIsDark = scrolled;
  const headerBackgroundClass = scrolled
  ? "bg-white/90 backdrop-blur-md shadow-md"
  : "bg-white/7 backdrop-blur-0";

  const headerTranslateClass = "translate-y-0";

  useEffect(() => {
  const onScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);


useEffect(() => {
  const onScroll = () => {
    setScrolled(window.scrollY > 40); // threshold
  };

  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);

  // Set isPastHero when dropdown opens
  useEffect(() => {
    if (!usesPastHero) {
      return;
    }
    const id = requestAnimationFrame(() => {
      if (dropdownOpen) {
        setIsPastHero(true);
      } else {
        setIsPastHero(window.scrollY > 600);
      }
    });

    return () => cancelAnimationFrame(id);
  }, [dropdownOpen, usesPastHero]);

  const closeDropdown = () => {
    setDropdownOpen(false);
    setActiveTab(null);
    setHoveredContinent(null);
    setHoveredCategory(null);
  };


  return (
<header
  className={`
    w-full fixed z-50
    transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
    ${headerBackgroundClass} ${headerTranslateClass}
    ${scrolled ? "h-[60px]" : "h-[75px]"}
  `}
>
  <div className="mx-auto max-w-[1350px] h-full pl-4">
<div className="grid grid-cols-3 lg:grid-cols-3 items-center h-full transition-all duration-500 w-full">

          {/* Logo */}
          {/* <div className="lg:w-[300px]">
            <Link
              href="/"
              className={` ${textIsDark ? "text-[#444444]" : "text-white"}`}
            >
             <Image
                src={`${
                  textIsDark
                    ? "/images/black-tomato-black.svg"
                    : "/images/black-tomato.svg"
                }`}
                alt="Black Tomato Logo"
                width={scrolled ? 28 : 40}
                height={scrolled ? 28 : 40}
                className="transition-all duration-500"
              />
            </Link>
          </div> */}

         
{/* LEFT */}
<nav className="hidden lg:flex items-center gap-20 lg:ms-30 justify-center">
  {NAV_LINKS.filter(item =>
    ["ABOUT", "PLACES", "CURATIONS"].includes(item.label.toUpperCase())
  ).map((item) => (
    <Link
      key={item.label}
      href={item.href}
      style={{ fontFamily: "TheSeasons, serif" }}
      className={`text-[15px] font-semibold tracking-[1.2px] transition-colors ${
        textIsDark
          ? "text-[#444444] hover:text-gray-600"
          : "text-white hover:text-gray-300"
      }`}
    >
      {item.label}
    </Link>
  ))}
</nav>

{/* CENTER */}
<div className="flex items-center  justify-start lg:justify-center">
  <Link href="/"  style={{ fontFamily: "TheSeasons, serif" }} className={`text-5xl font-semibold tracking-[4px] ${
    textIsDark ? "text-black" : "text-white"
  }`}>
    ISKY
  </Link>
</div>


         
          {/* Desktop Right Section */}
         {/* RIGHT */}
<div className="hidden lg:flex items-center justify-center gap-4 w-full">
  
  <Link
    href="/aboutextra/how-it-all-works"
    style={{ fontFamily: "TheSeasons, serif" }}
    className={`text-[15px] ms-10  font-semibold tracking-[1.2px] transition-colors ${
      textIsDark
        ? "text-[#444444] hover:text-gray-600"
        : "text-white hover:text-gray-300"
    }`}
  >
    CIRCLE
  </Link>



  {/* Number */}
<span style={{ fontFamily: "TheSeasons, serif" }}
  className={`text-[15px] tracking-widest font-semibold grow text-center min-w-[170px] ${
    textIsDark ? "text-[#444444]" : "text-white"
  }`}
>
  +971 52 560 1314
</span>



  <User
    className={`h-5 w-5 shrink-0 ${
      textIsDark ? "text-[#444444]" : "text-white"
    }`}
  />

  <Link href="/enquiry" className="shrink-0">
    <button style={{ fontFamily: "TheSeasons, serif" }} className="bg-pink-600 lg:me-27 px-4 py-2.5 text-[13px] rounded-[3px] font-semibold text-white hover:bg-pink-700 transition whitespace-nowrap">
      LET’S CONNECT
    </button>
  </Link>
</div>









          {/* Mobile: ENQUIRE NOW button */}

          {/* Mobile Menu Button */}
          {/* Mobile Right Controls */}
<div className="lg:hidden absolute right-4 flex items-center gap-3">
  <button className="bg-pink-600 px-4 h-7 text-[15px] font-semibold rounded-xs text-white hover:bg-pink-700 transition whitespace-nowrap">
LET’S CONNECT  </button>

  <button
    onClick={() => setOpen(true)}
    className={`${
      textIsDark ? "text-[#444444]" : "text-white"
    } flex items-center justify-center h-8`}
    aria-label="Open Menu"
  >
    <Menu className="h-5 w-5" />
  </button>
</div>

        </div>
      </div>




      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/40"
              onClick={() => {
                setOpen(false);
                setMobileMenuLevel('main');
                setSelectedContinent(null);
              }}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              exit={{ x: -1000 }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
              className="fixed inset-y-0 left-0 z-50 w-full max-w-full h-screen font-alternate bg-white flex flex-col shadow-2xl"
            >
              {/* Top Header */}
              {/* <div className="flex items-center justify-between px-6 py-2 bg-white">
                {mobileMenuLevel === 'main' && <div className="text-xl mt-2 font-medium text-black">
                  +44 207 426 9888 <span className="text-pink-600 font-brandon pl-2">v</span>
                </div>}

                {mobileMenuLevel === 'main' && (
                  <button onClick={() => {
                    setOpen(false);
                    setMobileMenuLevel('main');
                    setSelectedContinent(null);
                    setSelectedExperienceCategory(null);
                  }}>
                    <X className="h-5 w-5  text-black" />
                  </button>
                )}
              </div> */}

              {/* Search - Only on Main Menu */}
              <AnimatePresence mode="wait">
                {mobileMenuLevel === 'main' && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 py-1 border-b border-gray-200 bg-white"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <input
                        type="text"
                        placeholder="Search"
                        className="flex-1 bg-transparent font-brandon border-none outline-none text-lg py-1 text-black placeholder:text-gray-400"
                      />
                      <Search className="h-4 w-4 text-black" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Menu */}
              <nav className="px-6 py-4 space-y-4 flex-1 bg-white overflow-y-auto">
                <AnimatePresence mode="wait">
                  {/* Main Menu */}
                  {mobileMenuLevel === 'main' && (
                    <motion.div
                      key="main-menu"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      transition={{ duration: 0.3 }}
                    >
                      <button
                        onClick={() => setMobileMenuLevel('destinations')}
                        className="block w-full text-left text-2xl tracking-[2.5px] font-medium text-black py-4"
                      >
                        DESTINATIONS
                      </button>
                      <button
                        onClick={() => setMobileMenuLevel('experiences')}
                        className="block w-full text-left text-2xl tracking-[2.5px] font-medium text-black py-4"
                      >
                        EXPERIENCES
                      </button>
                      <Link
                        href="/inspiration"
                        className="block text-2xl tracking-[2.5px] font-medium text-black py-4"
                      >
                        INSPIRATION
                      </Link>




                      <Link
                          href="/about"
                          onClick={() => setOpen(false)}
                          className="block text-2xl tracking-[2.5px] font-medium text-black py-4"
                        >
                          ABOUT
                        </Link>




                      <Link
                        href="/my-bt"
                        className="block text-2xl tracking-[2.5px] font-medium text-black py-4"
                      >
                        MY BT
                      </Link>


                      <div className="bg-white pt-4">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <path
                              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                              fill="#00B67A"
                            />
                          </svg>
                          <span className="text-2xl tracking-[2.5px] font-medium text-black">
                            Trustpilot
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Destinations Level 1 - Continents */}
                  {mobileMenuLevel === 'destinations' && (
                    <motion.div
                      key="destinations-menu"
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Header with Back and Close */}
                      <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-4">
                        <button
                          onClick={() => setMobileMenuLevel('main')}
                          className="flex items-center gap-2 text-2xl text-pink-600 font-medium"
                        >
                          <span></span> BACK
                        </button>
                        <button onClick={() => {
                          setOpen(false);
                          setMobileMenuLevel('main');
                          setSelectedContinent(null);
                          setSelectedExperienceCategory(null);
                        }}>
                          <X className="h-5 w-5 text-black" />
                        </button>
                      </div>
                      <h2 className="text-2xl font-medium tracking-[2.5px] mb-6 text-black uppercase ">DESTINATIONS</h2>
                      {BY_DESTINATION.map((dest) => (
                        <button
                          key={dest.slug}
                          onClick={() => {
                            setSelectedContinent(dest.title);
                            setMobileMenuLevel('continent');
                          }}
                          className="block w-full text-left text-md tracking-[1.5px] font-brandon font-semibold text-gray-600  py-2 uppercase"
                        >
                          {dest.title}
                        </button>
                      ))}
                    </motion.div>
                  )}

                  {/* Destinations Level 2 - Countries */}
                  {mobileMenuLevel === 'continent' && selectedContinent && (
                    <motion.div
                      key="continent-menu"
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Header with Back and Close */}
                      <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-4">
                        <button
                          onClick={() => {
                            setMobileMenuLevel('destinations');
                            setSelectedContinent(null);
                          }}
                          className="flex items-center gap-2 text-sm text-pink-600 font-medium"
                        >
                          <span>←</span> BACK
                        </button>
                        <button onClick={() => {
                          setOpen(false);
                          setMobileMenuLevel('main');
                          setSelectedContinent(null);
                          setSelectedExperienceCategory(null);
                        }}>
                          <X className="h-5 w-5 text-black" />
                        </button>
                      </div>
                      <h2 className="text-2xl font-medium tracking-[2.5px] mb-6 text-black uppercase ">{selectedContinent}</h2>
                      <Link
                        href={`/destinations/${selectedContinent.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block text-md tracking-[1.5px] font-brandon font-semibold text-gray-600 mb-4 uppercase"
                      >
                        BROWSE ALL
                      </Link>
                      {BY_DESTINATION.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/experience-types/destination/${item.slug}`}
                          className="block w-full text-left text-md tracking-[1.5px] font-brandon font-semibold text-gray-600 py-2 uppercase"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}

                  {/* Experiences Level 1 - Categories */}
                  {mobileMenuLevel === 'experiences' && !selectedExperienceCategory && (
                    <motion.div
                      key="experiences-menu"
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Header with Back and Close */}
                      <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-4">
                        <button
                          onClick={() => setMobileMenuLevel('main')}
                          className="flex items-center gap-2 text-sm text-pink-600 font-medium"
                        >
                          <span>←</span> BACK
                        </button>
                        <button onClick={() => {
                          setOpen(false);
                          setMobileMenuLevel('main');
                          setSelectedContinent(null);
                          setSelectedExperienceCategory(null);
                        }}>
                          <X className="h-5 w-5 text-black" />
                        </button>
                      </div>
                      <h2 className="text-2xl font-medium tracking-[2.5px] mb-6 text-black uppercase ">EXPERIENCES</h2>
                      {EXPERIENCES_DATA.categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => setSelectedExperienceCategory(cat.id)}
                          className="block w-full text-left text-md tracking-[1.5px] font-brandon font-semibold text-gray-600  py-2 uppercase"
                        >
                          {cat.label}
                        </button>
                      ))}
                    </motion.div>
                  )}



                  {/* Experiences Level 2 - Category Items */}
                  {mobileMenuLevel === 'experiences' && selectedExperienceCategory && (
                    <motion.div
                      key="experience-category-menu"
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Header with Back and Close */}
                      <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-4">
                        <button
                          onClick={() => setSelectedExperienceCategory(null)}
                          className="flex items-center gap-2 text-sm text-pink-600 font-medium"
                        >
                          <span>←</span> BACK
                        </button>
                        <button onClick={() => {
                          setOpen(false);
                          setMobileMenuLevel('main');
                          setSelectedContinent(null);
                          setSelectedExperienceCategory(null);
                        }}>
                          <X className="h-5 w-5 text-black" />
                        </button>
                      </div>
                      <h2 className="text-2xl font-medium tracking-[2.5px] mb-6 text-black uppercase ">
                        {EXPERIENCES_DATA.categories.find((c) => c.id === selectedExperienceCategory)?.label}
                      </h2>
                      {EXPERIENCES_DATA.categories
                        .find((cat) => cat.id === selectedExperienceCategory)
                        ?.cards.map((card) => (
                          <Link
                            key={card.title}
href={`/experience-types/traveller/${card.slug}`}      
                      className="block w-full text-left text-md tracking-[1.5px] font-brandon font-semibold text-gray-600  py-2 uppercase"
                          >
                            {card.title.replace(/\n/g, ' ')}
                          </Link>
                        ))}
                    </motion.div>
                  )}

              
                </AnimatePresence>
              </nav>

              {/* Footer */}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
