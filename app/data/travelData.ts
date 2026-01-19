// app/data/travelData.ts
export type Experience = {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  highlights: string[]; // e.g., features/benefits
  galleryImages: string[]; // images to show in sections
  soloSectionIntro?: SectionIntro; 
   soloTrips?: SoloTrip[];
};
export type SoloTrip = {
  image: string;
  title: string;
  subtitle?: string;
  duration: string;
  description: string;
   soloTrips?: SoloTrip[];
};
export type SectionIntro = {
  heading: string;
  subheading?: string;
};


export const EXPERIENCES: Experience[] = [
  {
    slug: "honeymoon-holidays",
    title: "Honeymoon Holidays",
    subtitle: "Romantic escapes for two",
    heroImage: "/images/HONEYMOON.png",
    description:
      "Luxurious and intimate experiences designed for couples to celebrate their love. Private resorts, fine dining, and unforgettable adventures.",
    highlights: [
      "Private resorts and villas",
      "Romantic excursions",
      "Tailored itineraries",
    ],
    galleryImages: [
      "/images/honeymoon1.png",
      "/images/honeymoon2.png",
      "/images/honeymoon3.png",
    ],
  },



  {
    slug: "family-holidays",
    title: "Family Adventures",
    subtitle: "Trips for the whole family",
    heroImage: "/images/Family.png",
    description:
      "Engaging trips for every generation. Explore destinations together with activities that delight kids and adults alike.",
    highlights: [
      "Kid-friendly itineraries",
      "Adventure activities",
      "Cultural experiences",
    ],
    galleryImages: [
      "/images/family1.png",
      "/images/family2.png",
      "/images/family3.png",
    ],
  },


  {
    slug: "solo-holidays",
    title: "The freedom to wander. The luxury to pause.",
    subtitle: "Solo Holidays",
    heroImage: "/images/SOLO Travel (1).png",
    description:
      "Traveling solo doesn't mean figuring everything out yourself. It means having the freedom to follow your curiosity while someone else handles the details. We create journeys designed for one—boutique hotels that welcome solo travelers warmly, experiences that don't require a group, and the flexibility to change your mind. Spend three hours in that museum or skip it entirely. Have dinner at 6pm or 10pm. You choose the adventure. We ensure it's seamless, safe, and exactly what you need. Scroll to see where we'll take you next.",
      highlights: [
    "Freedom without compromise",
    "Tailor-made solo itineraries",
    "Seamless & safe travel",
  ],
  galleryImages: [],
  soloSectionIntro: {
    heading: "OUR FAVOURITE\n SOLO ESCAPES",
    subheading:
"Whether you want to immerse yourself in a culture and explore a country, or do the very opposite, our solo travel experts have an itinerary you will love."  },
  soloTrips: [
    
    {
      image: "/images/triple-creek-ranch.avif",
      title: "A JOURNEY INTO JAPAN",
      duration: "10 NIGHTS",
      description:
        "Japan — with its tightly-packed islands — offers extraordinary contrast and depth.",
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "COSTA RICA UNPLUGGED",
      duration: "13 NIGHTS",
      description:
        "Rainforests, wildlife encounters and remote eco-lodges.",
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "SOLO SAFARI, BOTSWANA",
      duration: "9 NIGHTS",
      description:
        "Private game drives and intimate bush camps designed for one.",
    },
     {
      image: "/images/triple-creek-ranch.avif",
      title: "A JOURNEY INTO JAPAN",
      duration: "10 NIGHTS",
      description:
        "Japan — with its tightly-packed islands — offers extraordinary contrast and depth.",
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "COSTA RICA UNPLUGGED",
      duration: "13 NIGHTS",
      description:
        "Rainforests, wildlife encounters and remote eco-lodges.",
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "SOLO SAFARI, BOTSWANA",
      duration: "9 NIGHTS",
      description:
        "Private game drives and intimate bush camps designed for one.",
    },
  ],
  },

  // Add romantic, group travel, self-travel similarly
];
