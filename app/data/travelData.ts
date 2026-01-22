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
   topDestinations?: TopDestination[];
};
export type SoloTrip = {
  image: string;
  title: string;
  subtitle?: string;
  duration: string;
  description: string;
   soloTrips?: SoloTrip[];
   topDestinations?: TopDestination[];
};
export type SectionIntro = {
  heading: string;
  subheading?: string;
};
export type TopDestination = {
  slug?: string;           // optional
  title?: string;
  heading?: HeadingDest[]; // optional (used for section heading)
  imageUrl?: string;
  description?: string;
};

export type HeadingDest = {
  heading: string;
};

export const EXPERIENCES: Experience[] = [
  {
    slug: "honeymoon-holidays",
    title: "YOUR FIRST JOURNEY AS FOREVER",
    subtitle: "Honeymoon Holidays",
    heroImage: "/images/SOLO Travel (1) (1).webp",
    description:
"Your honeymoon should be effortless—you've already planned the wedding. We design journeys where every detail is handled, every moment feels intimate, and nothing interrupts the two of you.Private villas with views that steal your breath. Candlelit dinners at tables reserved just for you. Experiences you couldn't have arranged yourself. Whether it's overwater sunsets in the Maldives or vineyard mornings in Tuscany, we create the backdrop while you focus on each other.Because this trip isn't just a holiday—it's how your story together begins."  ,   
 highlights: [
    "Freedom without compromise",
    "Tailor-made solo itineraries",
    "Seamless & safe travel",
  ],
  galleryImages: [],
  soloSectionIntro: {
    heading: "Our Favourite\n Luxury Honeymoons",
    subheading:
"Your honeymoon should be as unique as you are. Use these suggested honeymoon itineraries as a prompt and get in touch to plan something that’s truly yours."
  },
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


  topDestinations: [
  {
    slug: "heading",
    title: "",
    heading: [{ heading: "Top Trending Honeymoon Destinations" }],
    imageUrl: "",
    description: "",
  },
  {
    slug: "bangkok",
    title: "Thailand",
    heading: [],
    imageUrl: "/images/thailand.avif",
    description:
      "Thailand is ideal for solo travellers thanks to its lively cities, peaceful beaches and welcoming locals. Immerse yourself in Bangkok's dynamic markets or find peace in Chiang Mai's temples. From exploring ancient ruins to unwinding on tropical shores, Thailand offers endless adventure and discovery.",
  },
  {
    slug: "Italy",
    title: "ITALY",
    heading: [],
    imageUrl: "/images/italy.avif",
    description:
      "Italy beckons solo travellers with its rich tapestry of history and landscapes. Wander through Rome's ancient streets or bask in Tuscany's rolling hills. Savour authentic flavours at local eateries or relax by the Amalfi Coast's azure waters. Whether you're navigating Venice's enchanting canals or exploring Florence's artistic treasures, Italy offers a journey steeped in culture and discovery. It's a place where solo adventurers can fully immerse themselves in beauty and tradition.",
  },
  {
    slug: "Spain",
    title: "SPAIN",
    heading: [],
    imageUrl: "/images/spain.avif",
    description:
      "From the architectural wonders of Barcelona to the flamenco rhythms of Seville, each Spanish city offers its own charm. Savour tapas in bustling markets or unwind on sun-drenched beaches. Spain's diverse landscapes and rich traditions invite solo adventurers to immerse themselves fully. Whether you're wandering through ancient streets or enjoying lively festivals, Spain promises a journey filled with discovery and warmth.",
  },
  {
    slug: "Canada",
    title: "Canada",
    heading: [],
    imageUrl: "/images/canada.avif",
    description:
      "Canada captivates solo travellers with its expansive landscapes and rich experiences. From the majestic Rockies to the lively streets of Toronto and Vancouver, there's a world to explore. Here, solo adventurers find both solitude and community, making every journey uniquely fulfiling. It's a destination where personal discovery and adventure go hand in hand.",
  },
],

  },



  {
    slug: "solo-holidays",
    title: "The freedom to wander. The luxury to pause.",
    subtitle: "Solo Holidays",
    heroImage: "/images/SOLO Travel (1) (1).webp",
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
  topDestinations: [
  {
    slug: "heading",
    title: "",
    heading: [{ heading: "Top Destinations for Solo Travellers" }],
    imageUrl: "",
    description: "",
  },
  {
    slug: "bangkok",
    title: "Thailand",
    heading: [],
    imageUrl: "/images/thailand.avif",
    description:
      "Thailand is ideal for solo travellers thanks to its lively cities, peaceful beaches and welcoming locals. Immerse yourself in Bangkok's dynamic markets or find peace in Chiang Mai's temples. From exploring ancient ruins to unwinding on tropical shores, Thailand offers endless adventure and discovery.",
  },
  {
    slug: "Italy",
    title: "ITALY",
    heading: [],
    imageUrl: "/images/italy.avif",
    description:
      "Italy beckons solo travellers with its rich tapestry of history and landscapes...",
  },
  {
    slug: "Spain",
    title: "SPAIN",
    heading: [],
    imageUrl: "/images/spain.avif",
    description:
      "From the architectural wonders of Barcelona to the flamenco rhythms of Seville...",
  },
  {
    slug: "Canada",
    title: "Canada",
    heading: [],
    imageUrl: "/images/canada.avif",
    description:
      "Canada captivates solo travellers with its expansive landscapes and rich experiences...",
  },
],

  },





   {
    slug: "family-holidays",
    title: "LUXURY FAMILY HOLIDAYS THAT BRING YOU CLOSER",
    subtitle: "Family Holidays",
    heroImage: "/images/FAMILY COVER PHOTO.webp",
    description:
"Watch your kids' faces light up at their first safari sighting. Hear the laughter around a dinner table in Tuscany. Feel the relief when everything just works—no tantrums, no stress, just genuine connection.These are the moments luxury family travel should create. Where teenagers actually engage. Where parents finally exhale. Where grandparents share stories under starlit skies. We design holidays that give your family space to be together—really together—without the chaos of figuring it all out yourselves. Because these years don't last. Make them count.",
      highlights: [
    "Freedom without compromise",
    "Tailor-made solo itineraries",
    "Seamless & safe travel",
  ],
  galleryImages: [],
  soloSectionIntro: {
    heading: "Our Favourite Luxury Holidays for Families",
    subheading:
"Your family holiday should be as unique as you are. Use this selection of some of our most popular trips to spark some ideas and get in touch to plan something that’s truly yours."
  },
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
  topDestinations: [
  {
    slug: "heading",
    title: "",
    heading: [{ heading: "Your family, your way" }],
    imageUrl: "",
    description: "",
  },
  {
    slug: "bangkok",
    title: "Thailand",
    heading: [],
    imageUrl: "/images/thailand.avif",
    description:
      "Thailand is ideal for solo travellers thanks to its lively cities, peaceful beaches and welcoming locals. Immerse yourself in Bangkok's dynamic markets or find peace in Chiang Mai's temples. From exploring ancient ruins to unwinding on tropical shores, Thailand offers endless adventure and discovery.",
  },
  {
    slug: "Italy",
    title: "ITALY",
    heading: [],
    imageUrl: "/images/italy.avif",
    description:
      "Italy beckons solo travellers with its rich tapestry of history and landscapes...",
  },
  {
    slug: "Spain",
    title: "SPAIN",
    heading: [],
    imageUrl: "/images/spain.avif",
    description:
      "From the architectural wonders of Barcelona to the flamenco rhythms of Seville...",
  },
  {
    slug: "Canada",
    title: "Canada",
    heading: [],
    imageUrl: "/images/canada.avif",
    description:
      "Canada captivates solo travellers with its expansive landscapes and rich experiences...",
  },
],

  },

  // Add romantic, group travel, self-travel similarly
];
