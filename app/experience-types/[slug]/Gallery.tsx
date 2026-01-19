"use client";

import Image from "next/image";

export default function Gallery({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((src, idx) => (
        <div key={idx} className="relative w-full h-60 rounded-lg overflow-hidden">
          <Image
            src={src}
            alt={`gallery-${idx}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
