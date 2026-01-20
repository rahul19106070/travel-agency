"use client";

import React from "react";
import Image from "next/image";
import { TopDestination } from "@/app/data/travelData";

export default function TopDestinationsSection({
  heading,
  destinations,
}: {
  heading: string;
  destinations: TopDestination[];
}) {
  const rows: React.ReactNode[] = [];

  let i = 0;

  while (i < destinations.length) {
    const first = destinations[i];
    const second = destinations[i + 1];
    const third = destinations[i + 2];

    /* -------- ROW 1 : Image | Text -------- */
    if (i % 3 === 0 && first) {
      rows.push(
        <div key={first.slug} className="grid lg:grid-cols-2 gap-10 items-center">
          <ImageBlock dest={first} />
          <TextBlock dest={first} />
        </div>
      );
      i += 1;
      continue;
    }

    /* -------- ROW 2 : Image | Image + Text Below -------- */
   if (i % 3 === 1 && first && second) {
  rows.push(
    <div key={first.slug} className="space-y-6">
      
      {/* Two images */}
      <div className="grid lg:grid-cols-2 gap-6">
        <ImageBlock dest={first} />
        <ImageBlock dest={second} />
      </div>

      {/* Text spanning BOTH images */}
      <div className="grid lg:grid-cols-2">
        <div className="lg:col-span-2">
          <TextBlock dest={first} />
        </div>
      </div>

    </div>
  );
  i += 2;
  continue;
}


    /* -------- ROW 3 : Text | Image -------- */
    if (first) {
      rows.push(
        <div key={first.slug} className="grid lg:grid-cols-2 gap-10 items-center">
          <TextBlock dest={first} />
          <ImageBlock dest={first} />
        </div>
      );
      i += 1;
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 space-y-20">
      <h2 className="text-6xl font-extralight leading-tight text-center">
        {heading}
      </h2>

      <div className="space-y-20">{rows}</div>
    </section>
  );
}

/* ---------- Blocks ---------- */

function ImageBlock({ dest }: { dest: TopDestination }) {
  return (
    <div className="relative h-72 lg:h-96 w-full overflow-hidden rounded-lg">
      <Image
        src={dest.imageUrl}
        alt={dest.title}
        fill
        className="object-cover"
      />
    </div>
  );
}

function TextBlock({ dest }: { dest: TopDestination }) {
  return (
    <div className="space-y-4">
      <h3 className="text-3xl uppercase font-extralight">
        {dest.title}
      </h3>
      <p className="text-lg text-gray-700 leading-relaxed">
        {dest.description}
      </p>
    </div>
  );
}
