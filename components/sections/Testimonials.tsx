"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  image: string;
  quote: string;
  text: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
   id: 1,
   image: "/images/Testimony/1.webp",
   quote: "“",
   text: "Our 14-year-old actually put down his phone during the cooking class. The hotels worked for everyone, and we got real couple time. That alone was a miracle.",
   author: " - Family of 4 with Teens",
 },
  {
   id: 2,
   image: "/images/Testimony/2.webp",
   quote: "“",
   text: "Honestly, it was perfect. The overwater villa, that restaurant everyone raves about—somehow they got us in. We didn't lift a finger. Just pure honeymoon bliss",
   author: " - Newly Married",
 },
  {
    id: 3,
    image: "/images/Testimony/3.webp",
    quote: "“",
    text: "Hands down this was the most amazing travel experience our family has ever done together.",
    author: "Brett, Middle East",
  },
  {
    id: 4,
    image: "/images/Testimony/4.webp",
    quote: "“",
    text: "We have explored some incredible places and had unique adventures only possible with Black Tomato.",
    author: "Ike & Alex, Italy",
  },
  {
    id: 5,
    image: "/images/Testimony/5.webp",
    quote: "“",
    text: "They turned our dream trip into reality.",
    author: "Anita, India",
  },
  {
   id: 6,
   image: "/images/Testimony/6.webp",
   quote: "“",
   text: "Six of us with different budgets and tastes—it could've been a disaster. The riad was stunning, the desert felt genuine, not staged. Everyone left happy",
   author: "- A Group of Friends",
 },
   {
    id: 7,
    image: "/images/Testimony/7.webp",
    quote: "“",
    text: "They just got it. Ground floor room, extra time at each stop, a driver who never rushed us. We felt looked after, not just booked",
    author: "- Couple in their 70's",
  },
];

export default function  Testimonials() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(2);

  // Update visible items based on screen size
  useEffect(() => {
    const handleResize = () => {
      setVisible(window.innerWidth < 768 ? 1 : 2);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) =>
        prev + visible >= testimonials.length ? 0 : prev + visible
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      {/* Heading */}
      <h2 className="text-center text-5xl sm:text-5xl md:text-5xl tracking-wider  mb-8 sm:mb-12 md:mb-16 font-alternate  font-medium">
        IN THEIR WORDS
      </h2>

      {/* Slider */}
      <div className="relative overflow-hidden max-w-7xl mx-auto">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${(index * 100) / visible}%)`,
          }}
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className={`${visible === 1 ? "w-full" : "w-full md:w-1/2"} flex-shrink-0 px-2 sm:px-4 md:px-6`}
            >
              <div className="flex  items-center text-center gap-4 sm:gap-6">
                {/* Image */}
                <div className="w-48 h-48 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.author}
                    width={240}
                    height={240}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Quote */}
                <div className="max-w-xs sm:max-w-md mx-auto">
                  <span className="text-2xl sm:text-3xl md:text-4xl text-emerald-600 mb-2 sm:mb-4 block">
                    {item.quote}
                  </span>

                  {/* Text */}
                  <p className="text-xs sm:text-sm uppercase font-semibold tracking-widest text-gray-700 max-w-md mb-2 sm:mb-4">
                    {item.text}
                  </p>

                  {/* Author */}
                  <span className="text-xs sm:text-xs italic text-emerald-600 block">
                    {item.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 sm:gap-2 mt-8 sm:mt-10 flex-wrap">
          {Array.from({ length: Math.ceil(testimonials.length / visible) }).map(
            (_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i * visible)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition ${
                  index === i * visible
                    ? "bg-black"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}