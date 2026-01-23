"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ---------- Types ---------- */
interface TravelItem {
  title: string;
  imageUrl: string;
  slug?: string; // 👈 routing key
  pos?: string;
}

/* ---------- Data ---------- */
const BY_TRAVELLER: TravelItem[] = [
  {
    title: "FAMILY ADVENTURES",
    imageUrl: "/images/Family.webp",
    slug: "family-holidays",
  },
  {
    title: "ROMANTIC ESCAPES",
    imageUrl: "/images/COUPLE.png",
    slug: "romantic-holidays",
    pos: "object-[50%_70%]",
  },
  {
    title: "GROUP TRAVEL",
    imageUrl: "/images/GroupTour.webp",
    slug: "group-holidays",
    pos: "object-[50%_60%]",
  },
  {
    title: "HONEYMOON DREAMS",
    imageUrl: "/images/HONEYMOON.webp",
    slug: "honeymoon-holidays",
    pos: "object-[10%_90%]",
  },
  {
    title: "SELF TRAVEL",
    imageUrl: "/images/SOLO.webp",
    slug: "solo-holidays",
  },
];

const BY_MONTH: TravelItem[] = [
  { title: "JANUARY", imageUrl: "/images/dest.png" },
  { title: "FEBRUARY", imageUrl: "/images/dest.png" },
  { title: "MARCH", imageUrl: "/images/dest.png" },
  { title: "APRIL", imageUrl: "/images/dest.png" },
  { title: "MAY", imageUrl: "/images/dest.png" },
  { title: "JUNE", imageUrl: "/images/dest.png" },
  { title: "JULY", imageUrl: "/images/dest.png" },
  { title: "AUGUST", imageUrl: "/images/dest.png" },
  { title: "SEPTEMBER", imageUrl: "/images/dest.png" },
  { title: "OCTOBER", imageUrl: "/images/dest.png" },
  { title: "NOVEMBER", imageUrl: "/images/dest.png" },
  { title: "DECEMBER", imageUrl: "/images/dest.png" },
];

const BY_DESTINATION: TravelItem[] = [
  { title: "TANZANIA", imageUrl: "/images/dest.png" },
  { title: "ITALY", imageUrl: "/images/dest.png" },
  { title: "FRANCE", imageUrl: "/images/dest.png" },
  { title: "SOUTH AFRICA", imageUrl: "/images/dest.png" },
  { title: "UNITED KINGDOM", imageUrl: "/images/dest.png" },
  { title: "USA", imageUrl: "/images/dest.png" },
  { title: "JAPAN", imageUrl: "/images/dest.png" },
  { title: "KENYA", imageUrl: "/images/dest.png" },
  { title: "NORWAY", imageUrl: "/images/dest.png" },
  { title: "MADAGASCAR", imageUrl: "/images/dest.png" },
];

/* ---------- Component ---------- */
export default function HowDoYouTravel() {
  const [activeTab, setActiveTab] = useState<
    "traveller" | "destination" | "month"
  >("traveller");

  const data =
    activeTab === "traveller"
      ? BY_TRAVELLER
      : activeTab === "destination"
      ? BY_DESTINATION
      : BY_MONTH;

  const isMonthTab = activeTab === "month";

  const Wrapper = ({
    item,
    children,
    index,
    className,
  }: {
    item: TravelItem;
    children: React.ReactNode;
    index: number;
    className: string;
  }) =>
    item.slug ? (
      <Link
        key={index}
        href={`/experience-types/${item.slug}`}
        className={`${className} block cursor-pointer`}
      >
        {children}
      </Link>
    ) : (
      <div key={index} className={className}>
        {children}
      </div>
    );

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-5xl font-medium tracking-wider">
          DESIGNED AROUND YOU!
        </h2>

        {/* Tabs */}
        <div className="mt-6 flex justify-center gap-8 text-xs tracking-widest flex-wrap">
          {[
            { id: "traveller", label: "TRAVEL STYLE" },
            { id: "destination", label: "TOP PICKS" },
            { id: "month", label: "BY SEASON" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`relative pb-2 ${
                activeTab === tab.id ? "text-pink-600" : "text-black/70"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-pink-600" />
              )}
            </button>
          ))}
        </div>

        {/* GRID */}
        {isMonthTab ? (
          <div className="mt-16 grid grid-cols-3 md:grid-cols-6 gap-4">
            {data.map((item, index) => (
              <Wrapper
                key={index}
                item={item}
                index={index}
                className="group relative aspect-[3/4] overflow-hidden"
              >
                <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-sm font-semibold tracking-widest text-white">
                    {item.title}
                  </p>
                </div>
              </Wrapper>
            ))}
          </div>
        ) : (
          <div className="mt-16">
            {/* Mobile */}
            <div className="md:hidden grid grid-cols-1 gap-10">
              {data.map((item, index) => (
                <Wrapper
                  key={index}
                  item={item}
                  index={index}
                  className="group relative w-full h-40 overflow-hidden"
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className={`object-cover ${item.pos ?? "object-center"}`}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-xs font-semibold tracking-widest text-white text-center">
                      {item.title}
                    </p>
                  </div>
                </Wrapper>
              ))}
            </div>

            {/* Desktop */}
            <div className="hidden md:grid grid-cols-5 gap-6">
              {data.map((item, index) => (
                <Wrapper
                  key={index}
                  item={item}
                  index={index}
                  className="group relative aspect-[5/9] overflow-hidden"
                >
                  <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-semibold tracking-widest text-white text-center">
                      {item.title}
                    </span>
                  </div>
                </Wrapper>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
