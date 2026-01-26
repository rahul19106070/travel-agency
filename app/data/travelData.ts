// app/data/travelData.ts
export type Experience = {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  imgTextSection?: ImageTextSection;
  cta?: string;
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
  slug: string;           // optional
  title: string;
  heading?: HeadingDest[]; // optional (used for section heading)
  imageUrl: string;
  description: string;
};

export type HeadingDest = {
  heading: string;
};

export type ImageTextSection = {
  heading: string;
  horizontal?: "left" | "center" | "right";
  vertical?: "top" | "center" | "bottom";
};


export const EXPERIENCES: Experience[] = [
  // honeymoon-holidays
  {
    slug: "honeymoon-holidays",
    title: "YOUR FIRST JOURNEY AS FOREVER",
    subtitle: "HoneymoonC",
    heroImage: "/images/Honeymoon New.webp",

    imgTextSection: {
  heading: "BE SPOKEN LUXURY HONEYMOON TRAVEL",
  horizontal: "center",
  vertical: "bottom",
},
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
    slug: "Italy",
    title: "Italy",
    heading: [],
    imageUrl: "/images/about/Italy-couple.avif",
    description:
"Italy, synonymous with romance, has always been one of the most captivating, irresistible honeymoon destinations. From historic and artistic treasures to some of the world’s finest food and wine – it won’t disappoint."  },
  {
    slug: "Greece",
    title: "Greece",
    heading: [],
    imageUrl: "/images/about/Greece-luxury-travel.avif",
    description:
"Greece, with its sparkling cobalt blue waters and dramatic rocky coastlines, is a relaxing, romantic haven. Together, hopping around these islands – with their intimate coves and breathtakingly beautiful hotels – is as good as it gets."  },
  {
    slug: "California",
    title: "California",
    heading: [],
    imageUrl: "/images/about/california.avif",
    description:
"Swaying palm trees, twinkling city lights, towering Redwood forests. There's a lot to love about a Californian honeymoon. Live out your own Hollywood romance in the place it all began."
  },
  {
    slug: "french polynesia",
    title: "French Polynesia",
    heading: [],
    imageUrl: "/images/about/french.avif",
    description:
"From coral reefs to plunging waterfalls, these islands evoke entire worlds of hibiscus flowers, double-hulled canoes, and the culture of native Polynesia. Just the two of you, on a secluded island at the end of the earth. It’s exactly how a honeymoon should be."  },
],

  },


// solo-holidays
  {
    slug: "solo-holidays",
    title: "The freedom to wander. The luxury to pause.",
    subtitle: "Solo Holidays",
    heroImage: "/images/SOLO NEW.webp",

    
    imgTextSection: {
    heading: "SOLO LUXURY TRAVEL\n ENTIRELY ON YOUR TERMS",
    horizontal: "center",
    vertical: "bottom",
  },

    cta:"START YOUR SOLO JOURNEY",
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


// romantic-holidays
{
    slug: "romantic-holidays",
    title: "MOMENTS THAT REMIND YOU WHY",
    subtitle: "ROMANTIC Holidays",
    heroImage: "/images/COUPLE NEW.webp",

     imgTextSection: {
    heading: "TRAVEL THAT REMINDS YOU WHY \n YOU CHOSE EACH OTHER",
    horizontal: "center",
    vertical: "top",
   },

    description:
    "The best couple holidays aren't measured in destinations—they're measured in moments. That sunrise you watched in silence. The wine you shared on a terrace overlooking the sea. The conversation that lasted three hours because, finally, nothing interrupted. We design journeys around these moments. Private settings where it's just the two of you. Experiences that spark laughter or quiet reflection. Itineraries paced for lingering, not rushing. Whether it's an anniversary, a milestone, or simply because you need this—we create the space for connection to happen naturally."
 ,   
 cta: "BEGIN YOUR JOURNEY",
 highlights: [
    "Freedom without compromise",
    "Tailor-made solo itineraries",
    "Seamless & safe travel",
  ],
  galleryImages: [],
  soloSectionIntro: {
    heading: "Our favourite luxury couples holidays",
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
    heading: [{ heading: "Most popular couples holiday destinations" }],
    imageUrl: "",
    description: "",
  },
  {
    slug: "Italy",
    title: "ITALY",
    heading: [],
    imageUrl: "/images/about/italy-couple.avif",
    description:
      "Italy is ideal for couples seeking romance, culture, and breathtaking landscapes. Stroll hand in hand through the streets of Rome, admire the art of Florence, or enjoy a gondola ride in Venice."
  },
  {
    slug: "Greece",
    title: "GREECE",
    heading: [],
    imageUrl: "/images/about/Greece-luxury-travel.avif",
    description:
"Delicious Mediterranean cuisine, go sailing in the Aegean, or explore hidden coves together. With its enchanting scenery and warm hospitality, Greece is a dream destination for couples looking for a mix of history, adventure, and relaxation."
  },
  {
    slug: "Australia",
    title: "AUSTRALIA",
    heading: [],
    imageUrl: "/images/about/Luxury-Travel-Australia.avif",
    description:
"Whether you prefer luxury resorts, scenic road trips, or secluded island retreats, Australia's sun-soaked beaches, lush vineyards and vibrant cities provide the perfect backdrop for a memorable couples’ holiday."
  },
  {
    slug: "Kenya",
    title: "KENYA",
    heading: [],
    imageUrl: "/images/ABOUT/KENYA.avif",
    description:
"With its stunning landscapes, rich culture, and warm hospitality, Kenya is a top choice for couples seeking adventure and romance. Enjoy hot air balloon rides over the savannah or candlelit dinners under the African sky."  },
],
  },





// romantic-holidays
// {
//     slug: "romantic-holidays",
//     title: "MOMENTS THAT REMIND YOU WHY",
//     subtitle: "ROMANTIC Holidays",
//     heroImage: "/images/Couple Cover Photo.webp",
//     description:
//     "The best couple holidays aren't measured in destinations—they're measured in moments. That sunrise you watched in silence. The wine you shared on a terrace overlooking the sea. The conversation that lasted three hours because, finally, nothing interrupted. We design journeys around these moments. Private settings where it's just the two of you. Experiences that spark laughter or quiet reflection. Itineraries paced for lingering, not rushing. Whether it's an anniversary, a milestone, or simply because you need this—we create the space for connection to happen naturally."
//  ,   
//  cta: "BEGIN YOUR JOURNEY",
//  highlights: [
//     "Freedom without compromise",
//     "Tailor-made solo itineraries",
//     "Seamless & safe travel",
//   ],
//   galleryImages: [],
//   soloSectionIntro: {
//     heading: "Our favourite luxury couples holidays",
//     subheading:
// "Your honeymoon should be as unique as you are. Use these suggested honeymoon itineraries as a prompt and get in touch to plan something that’s truly yours."
//   },
//   soloTrips: [
    
//     {
//       image: "/images/triple-creek-ranch.avif",
//       title: "A JOURNEY INTO JAPAN",
//       duration: "10 NIGHTS",
//       description:
//         "Japan — with its tightly-packed islands — offers extraordinary contrast and depth.",
//     },
//     {
//       image: "/images/triple-creek-ranch.avif",
//       title: "COSTA RICA UNPLUGGED",
//       duration: "13 NIGHTS",
//       description:
//         "Rainforests, wildlife encounters and remote eco-lodges.",
//     },
//     {
//       image: "/images/triple-creek-ranch.avif",
//       title: "SOLO SAFARI, BOTSWANA",
//       duration: "9 NIGHTS",
//       description:
//         "Private game drives and intimate bush camps designed for one.",
//     },
//      {
//       image: "/images/triple-creek-ranch.avif",
//       title: "A JOURNEY INTO JAPAN",
//       duration: "10 NIGHTS",
//       description:
//         "Japan — with its tightly-packed islands — offers extraordinary contrast and depth.",
//     },
//     {
//       image: "/images/triple-creek-ranch.avif",
//       title: "COSTA RICA UNPLUGGED",
//       duration: "13 NIGHTS",
//       description:
//         "Rainforests, wildlife encounters and remote eco-lodges.",
//     },
//     {
//       image: "/images/triple-creek-ranch.avif",
//       title: "SOLO SAFARI, BOTSWANA",
//       duration: "9 NIGHTS",
//       description:
//         "Private game drives and intimate bush camps designed for one.",
//     },
//   ],


//   topDestinations: [
//   {
//     slug: "heading",
//     title: "",
//     heading: [{ heading: "Most popular couples holiday destinations" }],
//     imageUrl: "",
//     description: "",
//   },
//   {
//     slug: "Italy",
//     title: "ITALY",
//     heading: [],
//     imageUrl: "/images/about/italy-couple.avif",
//     description:
//       "Italy is ideal for couples seeking romance, culture, and breathtaking landscapes. Stroll hand in hand through the streets of Rome, admire the art of Florence, or enjoy a gondola ride in Venice."
//   },
//   {
//     slug: "Greece",
//     title: "GREECE",
//     heading: [],
//     imageUrl: "/images/about/Greece-luxury-travel.avif",
//     description:
// "Delicious Mediterranean cuisine, go sailing in the Aegean, or explore hidden coves together. With its enchanting scenery and warm hospitality, Greece is a dream destination for couples looking for a mix of history, adventure, and relaxation."
//   },
//   {
//     slug: "Australia",
//     title: "AUSTRALIA",
//     heading: [],
//     imageUrl: "/images/about/Luxury-Travel-Australia.avif",
//     description:
// "Whether you prefer luxury resorts, scenic road trips, or secluded island retreats, Australia's sun-soaked beaches, lush vineyards and vibrant cities provide the perfect backdrop for a memorable couples’ holiday."
//   },
//   {
//     slug: "Kenya",
//     title: "KENYA",
//     heading: [],
//     imageUrl: "/images/ABOUT/KENYA.avif",
//     description:
// "With its stunning landscapes, rich culture, and warm hospitality, Kenya is a top choice for couples seeking adventure and romance. Enjoy hot air balloon rides over the savannah or candlelit dinners under the African sky."  },
// ],
//   },




// family-holidays
   {
    slug: "family-holidays",
    title: "LUXURY FAMILY HOLIDAYS THAT BRING YOU CLOSER",
    subtitle: "Family Holidays",
    heroImage: "/images/FAMILY New.webp",

     imgTextSection: {
    heading: "DISCOVER. BOND. THRIVE",
    horizontal: "center",
    vertical: "top",
  },
    cta:"START PLANNING",
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

  // group-holidays
  {
    slug: "group-holidays",
    title: " LUXURY HOLIDAYS DESIGNED FOR YOUR INNER CIRCLE",
    subtitle: "Family Holidays",
    heroImage: "/images/GROUP New.webp",

     imgTextSection: {
    heading: "luxury group travel\n privately curated",
    horizontal: "center",
    vertical: "top",
  },
    description:"Group travel shouldn't mean compromise—it should mean celebration. We design journeys for your inner circle, whether it's six friends, three generations, or a milestone reunion. Private villas where everyone has space. Experiences that engage all ages and interests. Itineraries paced for connection, not exhaustion. From long dinners under Tuscan stars to shared safaris at sunrise, we handle every detail so you can focus on what matters—being together. Because the best trips aren't about where you go. They're about who's beside you."
,      highlights: [
    "Freedom without compromise",
    "Tailor-made solo itineraries",
    "Seamless & safe travel",
  ],
  galleryImages: [],
  soloSectionIntro: {
    heading: "Our Favourite Group Trips",
    subheading:
"Use these suggested itineraries as a prompt and get in touch to plan something your whole group will enjoy."  },
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
    heading: [{ heading: "Our signature group travel experiences" }],
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

];
