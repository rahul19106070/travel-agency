// app/data/travelData.ts
// import { TopDestination } from "./types";


export type Experience = {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  imgTextSection?: ImageTextSection;
  imageContentSections?: ImageContentBlock[];
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
  destinationSlug?: string;
  duration: string;
  description: string;
  packageSlug?: string; // optional, for linking to a detailed page
   soloTrips?: SoloTrip[];
   topDestinations?: TopDestination[];
};
export type ImageContentBlock = {
  image: string;
  heading: string;
  description: string;
  ctaText: string;
  ctaLink?: string;
  imagePosition: "left" | "right";
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
    subtitle: "Honeymoon Image",
    heroImage: "/images/honeymoon-new.webp",

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

    imageContentSections: [
  {
    image: "/images/experience/Maldives_section.webp",
    heading: "MALDIVES",
    description:
"The Maldives is chosen by couples who want uninterrupted time together. Days revolve around private beaches, overwater stays, snorkelling, spa rituals, and slow sunsets. There’s no rush, no crowds—just space to disconnect from the world and focus entirely on each other.",
    ctaText: "EXPLORE",
    ctaLink: "/experience-types/destination/maldives",
    imagePosition: "left",
  },
  {
    image: "/images/experience/Newz_section.webp",
    heading: "New Zealand",
    description:
"New Zealand appeals to couples who want their honeymoon to feel open and adventurous. Scenic road journeys, lakeside stays, mountain views, and quiet nature experiences create a sense of freedom. It’s ideal for couples who enjoy exploring by day and retreating into peaceful, private stays by night.",
    ctaText: "EXPLORE",
    ctaLink: "/experience-types/destination/new-zealand",
    imagePosition: "right",
  },
],

  soloSectionIntro: {
    heading: "Our Favourite\n Luxury Honeymoons",
    subheading:
"Your honeymoon should be as unique as you are. Use these suggested honeymoon itineraries as a prompt and get in touch to plan something that’s truly yours."
  },
  soloTrips: [
    
    {  destinationSlug: "italy",
        packageSlug:"ULTIMATE_ITALIAN_HONEYMOON",
        image: "/images/triple-creek-ranch.avif",
        title: "THE ULTIMATE ITALIAN HONEYMOON: VINTAGE ROMANCE, PRIVATE EXPERIENCES & COASTAL ELEGANCE",
        duration: "12 NIGHTS",
        description: "This extraordinary honeymoon journey is designed for couples seeking a seamless blend of romance, privacy, and timeless Italian elegance across the country’s most iconic destinations.",
      },
   {
        destinationSlug: "italy",
        packageSlug: "GRAND_NORTHERN_ITALY_ESCAPE",
        image: "/images/triple-creek-ranch.avif",
        title: "THE GRAND NORTHERN ITALY ESCAPE: LAKES, ALPINE PEAKS & PROSECCO INDULGENCE",
        duration: "11 NIGHTS",
        description: "This refined journey through Northern Italy blends romantic cities, serene lakes, dramatic alpine landscapes, and world-renowned wine regions into one seamless and immersive experience.",
      },
     {
        destinationSlug: "japan",
        packageSlug: "YIN_YAG_JAPAN",
        image: "/images/triple-creek-ranch.avif",
        title: "YIN & YANG OF JAPAN: Tokyo to Kyoto Slow Luxury",
        duration: "8 Nights",
        description: "This journey explores the beautiful contrast that defines Japan — the vibrant energy of Tokyo and the serene traditions of Kyoto...",
      },
      {
        destinationSlug: "new-zealand",
        packageSlug: "PRIVATE_HELI_ULTRA_ISLAND_ESCAPE",
        image: "/images/triple-creek-ranch.avif",
        title: "THE PRIVATE HELI & ULTRA-ISLAND ESCAPE: FROM ALPINE ADVENTURE TO THE BRANDO PARADISE",
        duration: "14 NIGHTS",
        description: "This extraordinary journey brings together two of the world’s most breathtaking landscapes...",
      },
    {
        destinationSlug: "italy",
        packageSlug: "ULTIMATE_ITALIAN_HONEYMOON",
        image: "/images/triple-creek-ranch.avif",
        title: "THE ULTIMATE ITALIAN HONEYMOON: VINTAGE ROMANCE, PRIVATE EXPERIENCES & COASTAL ELEGANCE",
        duration: "12 NIGHTS",
        description: "This extraordinary honeymoon journey is designed for couples seeking a seamless blend of romance, privacy, and timeless Italian elegance across the country’s most iconic destinations.",
      },
    // {
    //   image: "/images/triple-creek-ranch.avif",
    //   title: "SOLO SAFARI, BOTSWANA",
    //   duration: "9 NIGHTS",
    //   description:
    //     "Private game drives and intimate bush camps designed for one.",
    // },
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
    slug: "italy",
    title: "Italy",
    heading: [],
    imageUrl: "/images/about/Italy-couple.avif",
    description:
"Italy, synonymous with romance, has always been one of the most captivating, irresistible honeymoon destinations. From historic and artistic treasures to some of the world’s finest food and wine – it won’t disappoint."  },
  {
    slug: "greece",
    title: "Greece",
    heading: [],
    imageUrl: "/images/about/Greece-luxury-travel.avif",
    description:
"Greece, with its sparkling cobalt blue waters and dramatic rocky coastlines, is a relaxing, romantic haven. Together, hopping around these islands – with their intimate coves and breathtakingly beautiful hotels – is as good as it gets."  },
  {
    slug: "maldives",
    title: "Maldives",
    heading: [],
    imageUrl: "/images/dest/Maldives Cover.webp",
    description:
"Experience the ultimate in luxury and privacy in the Maldives. With crystal-clear waters, overwater bungalows, and pristine beaches, this tropical paradise is perfect for a romantic escape."
  },
//   {
//     slug: "french polynesia",
//     title: "French Polynesia",
//     heading: [],
//     imageUrl: "/images/about/french.avif",
//     description:
// "From coral reefs to plunging waterfalls, these islands evoke entire worlds of hibiscus flowers, double-hulled canoes, and the culture of native Polynesia. Just the two of you, on a secluded island at the end of the earth. It’s exactly how a honeymoon should be."  },
],

  },


// solo-holidays   -- DONE
  {
    slug: "solo-holidays",
    title: "The freedom to wander. The luxury to pause.",
    subtitle: "Solo Holidays",
    heroImage: "/images/SOLO-NEW.webp",

    
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

  imageContentSections: [
  {
    image: "/images/experience/Iceland_section.webp",
    heading: "ICELAND",
    description:
"Iceland attracts solo travellers seeking space and perspective. Long drives through dramatic landscapes, waterfalls, geothermal springs, and quiet moments under open skies create a deeply personal journey. It’s a destination where solitude feels empowering, not lonely—perfect for reflection and reset.",
    ctaText: "EXPLORE",
    ctaLink: "/experience-types/destination/iceland",
    imagePosition: "left",
  },
  {
    image: "/images/experience/Tanzania_section.webp",
    heading: "TANZANIA",
    description:
"Tanzania offers solo travelers a powerful sense of immersion. Wildlife safaris, nature walks, and meaningful encounters with landscapes and local life create experiences that feel grounding and unforgettable. The journey is paced with care, allowing you to observe, absorb, and reconnect with the world around you.",
    ctaText: "EXPLORE",
    ctaLink: "/experience-types/destination/tanzania",
    imagePosition: "right",
  },
],

  soloSectionIntro: {
    heading: "OUR FAVOURITE\n SOLO ESCAPES",
    subheading:
"Whether you want to immerse yourself in a culture and explore a country, or do the very opposite, our solo travel experts have an itinerary you will love."  },
  soloTrips: [
   {   
      destinationSlug: "italy",
        packageSlug:"WHITE_TRUFFLE_SOCIETY",
        image: "/images/triple-creek-ranch.avif",
        title: "THE WHITE TRUFFLE SOCIETY: A PRIVATE GASTRONOMIC ESCAPE IN PIEDMONT",
        duration: "5 NIGHTS",
        description: "This exclusive journey into the heart of Piedmont offers a refined exploration of Italy’s most celebrated gastronomic traditions, set against the rolling vineyards and picturesque landscapes of truffle country.",
      },
    { 
        destinationSlug: "japan",
        packageSlug: "SOUL_OF_JAPAN",
        image: "/images/triple-creek-ranch.avif",
        title: "THE SOUL OF JAPAN: A CULTURAL IMMERSION",
        duration: "12 Nights",
        description: "Japan reveals itself slowly — not through monuments alone, but through rituals, craftsmanship, and centuries-old traditions that continue to shape everyday life...",
      },
     {
        destinationSlug: "japan",
        packageSlug: "ECHOES_OF_OLD_JAPAN",
        image: "/images/triple-creek-ranch.avif",
        title: "ECHOES OF OLD JAPAN: A Journey Through Time",
        duration: "12 Nights",
        description: "This journey explores the deeper cultural layers of Japan - from the disciplined traditions of samurai and sumo to the quiet...",
      },
     {
        destinationSlug: "new-zealand",
        packageSlug: "ULTIMATE_CELEBRATION_ESCAPE",
        image: "/images/triple-creek-ranch.avif",
        title: "THE ULTIMATE CELEBRATION ESCAPE: PRIVATE ADVENTURE, WILDLIFE & LUXURY ISLANDS",
        duration: "14 NIGHTS",
        description: "This dynamic New Zealand journey is designed as the ultimate celebration of adventure, nature, and refined luxury.",
      },
   {
        destinationSlug: "morocco",
        packageSlug: "BEYOND_THE_ATLAS",
        image: "/images/triple-creek-ranch.avif",
        title: "BEYOND THE ATLAS: MOROCCO’S HIDDEN DESERT KINGDOM",
        duration: "10 NIGHTS",
        description: "This extraordinary journey ventures beyond Morocco’s well-known cities into the country’s most remote desert landscapes, ancient caravan routes, and hidden oasis valleys.",
      },
    {
        destinationSlug: "england",
        packageSlug: "DOWNTON_TO_MAYFAIR",
        image: "/images/triple-creek-ranch.avif",
        title: "DOWNTON TO MAYFAIR: A QUINTESSENTIAL ENGLISH LIFESTYLE ESCAPE",
        duration: "6 Nights",
        description: "This elegant journey offers a refined introduction to the English countryside and the sophisticated lifestyle of London...",
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
    slug: "japan",
    title: "JAPAN",
    heading: [],
    imageUrl: "/images/dest/Japan Cover.webp",
    description:
      "Japan is ideal for solo travellers thanks to its unique blend of traditional culture and modern innovation. Explore ancient temples, vibrant cities, and serene landscapes. From bustling Tokyo to quiet rural villages, Japan offers endless opportunities for discovery.",
  },
  {
    slug: "tanzania",
    title: "TANZANIA",
    heading: [],
    imageUrl: "/images/dest/Tanzania Cover.webp",
    description:
      "Tanzania is a land of extraordinary natural beauty and rich cultural heritage. Experience the thrill of the Serengeti's great migration, climb Mount Kilimanjaro, or relax on pristine beaches along the Indian Ocean coast.",
  },
  {
    slug: "iceland",
    title: "ICELAND",
    heading: [],
    imageUrl: "/images/dest/Iceland Cover.webp",
    description:
      "Iceland is a land of dramatic landscapes and natural wonders. From the Northern Lights to geothermal hot springs, Iceland offers unique experiences that are unlike anywhere else in the world.",

  },
  // {
  //   slug: "Canada",
  //   title: "Canada",
  //   heading: [],
  //   imageUrl: "/images/canada.avif",
  //   description:
  //     "Canada captivates solo travellers with its expansive landscapes and rich experiences...",
  // },
],

  },


// romantic-holidays  -- DONE
{
    slug: "romantic-holidays",
    title: "MOMENTS THAT REMIND YOU WHY",
    subtitle: "ROMANTIC Holidays",
    heroImage: "/images/couple-new.webp",

     imgTextSection: {
    heading: "TRAVEL THAT REMINDS YOU WHY \n YOU CHOSE EACH OTHER",
    horizontal: "center",
    vertical: "center",
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

      imageContentSections: [
  {
    image: "/images/experience/Italy_section.webp",
    heading: "ITALY",
    description:
"Italy draws couples who enjoy slow pleasures and timeless beauty. Days unfold over vineyard drives, historic towns, countryside stays, and coastal strolls, while evenings are reserved for long dinners and quiet moments. Whether it’s art, food, or scenery, Italy offers romance that feels natural—perfect for couples who value connection over schedules.",
    ctaText: "EXPLORE",
    ctaLink: "/experience-types/destination/italy",
    imagePosition: "left",
  },
  {
    image: "/images/experience/greece_section.webp",
    heading: "GREECE",
    description:
"Greece is loved for its relaxed rhythm and effortless charm. Couples spend their days island-hopping, swimming in clear waters, wandering whitewashed villages, or simply watching sunsets from quiet terraces. The pace is unhurried, the atmosphere light, and every moment feels designed for togetherness without pressure.",
    ctaText: "EXPLORE",
    ctaLink: "/experience-types/destination/greece",
    imagePosition: "right",
  },
],

  soloSectionIntro: {
    heading: "Our favourite luxury couples holidays",
    subheading:
"Your honeymoon should be as unique as you are. Use these suggested honeymoon itineraries as a prompt and get in touch to plan something that’s truly yours."
  },
  soloTrips: [
    
     {
        destinationSlug: "italy",
        packageSlug:"LA_DOLCE_VITA_ELITE",
        image: "/images/triple-creek-ranch.avif",
        title: "LA DOLCE VITA ELITE: MILAN COUTURE & PORTOFINO RIVIERA ESCAPE",
        duration: "5 NIGHTS",
        description: "This stylish Italian escape seamlessly blends the world of high fashion, refined gastronomy, and Riviera elegance into one sophisticated journey.",
      },
     {
        destinationSlug: "italy",
        packageSlug: "ULTIMATE_SICILIAN_ESCAPE",
        image: "/images/triple-creek-ranch.avif",
        title: "THE ULTIMATE SICILIAN ESCAPE: ANCIENT WONDERS, COASTAL LUXURY & AUTHENTIC INDULGENCE",
        duration: "10 NIGHTS",
        description: "This immersive journey through Sicily reveals a captivating blend of ancient history, Mediterranean beauty, and authentic cultural experiences, all curated with refined luxury and privacy.",
      },
     {
        destinationSlug: "morocco",
        packageSlug: "IMPERIAL_CITIES_SAHARA_STARS",
        image: "/images/triple-creek-ranch.avif",
        title: "FROM IMPERIAL CITIES TO SAHARA STARS: A GRAND MOROCCAN JOURNEY",
        duration: "13 NIGHTS",
        description: "This extraordinary journey through Morocco reveals a captivating blend of imperial cities, desert landscapes, ancient kasbahs, and refined luxury experiences.",
      },
     {
        destinationSlug: "switzerland",
        packageSlug: "ALPINE_PEAKS_TO_AMALFI_DREAMS",
        image: "/images/triple-creek-ranch.avif",
        title: "ALPINE PEAKS TO AMALFI DREAMS",
        duration: "12 Nights",
        description: "This journey combines the dramatic beauty of the Swiss Alps with the effortless elegance of the Italian Riviera...",
      },
     {
        destinationSlug: "new-zealand",
        packageSlug: "PRIVATE_HELI_ULTRA_ISLAND_ESCAPE",
        image: "/images/triple-creek-ranch.avif",
        title: "THE PRIVATE HELI & ULTRA-ISLAND ESCAPE: FROM ALPINE ADVENTURE TO THE BRANDO PARADISE",
        duration: "14 NIGHTS",
        description: "This extraordinary journey brings together two of the world’s most breathtaking landscapes...",
      },
    {
        destinationSlug: "uk",
        packageSlug: "DOWNTON_TO_MAYFAIR",
        image: "/images/triple-creek-ranch.avif",
        title: "DOWNTON TO MAYFAIR: A QUINTESSENTIAL ENGLISH LIFESTYLE ESCAPE",
        duration: "6 Nights",
        description: "This elegant journey offers a refined introduction to the English countryside and the sophisticated lifestyle of London...",
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
    slug: "italy",
    title: "ITALY",
    heading: [],
    imageUrl: "/images/dest/Italy Cover.webp",
    description:
      "Italy is ideal for couples seeking romance, culture, and breathtaking landscapes. Stroll hand in hand through the streets of Rome, admire the art of Florence, or enjoy a gondola ride in Venice."
  },
  {
    slug: "greece",
    title: "GREECE",
    heading: [],
    imageUrl: "/images/dest/Greece Cover.webp",
    description:
"Delicious Mediterranean cuisine, go sailing in the Aegean, or explore hidden coves together. With its enchanting scenery and warm hospitality, Greece is a dream destination for couples looking for a mix of history, adventure, and relaxation."
  },
  {
    slug: "iceland",
    title: "ICELAND",
    heading: [],
    imageUrl: "/images/dest/Iceland Cover.webp",
    description:
"Whether you prefer luxury resorts, scenic road trips, or secluded island retreats, Australia's sun-soaked beaches, lush vineyards and vibrant cities provide the perfect backdrop for a memorable couples’ holiday."
  },
],
  },


// family-holidays  -- DONE
   {
    slug: "family-holidays",
    title: "LUXURY FAMILY HOLIDAYS THAT BRING YOU CLOSER",
    subtitle: "Family Holidays",
    heroImage: "/images/family-new.webp",

     imgTextSection: {
    heading: "DISCOVER. BOND. THRIVE",
    horizontal: "center",
    vertical: "center",
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

       imageContentSections: [
  {
    image: "/images/experience/switz_section2.webp",
    heading: "SWITZERLAND",
    description:
"Switzerland is loved by families for how easy and rewarding it feels. Scenic train rides, lakeside boat trips, chocolate and cheese workshops, and gentle alpine walks keep children engaged, while parents enjoy the safety, cleanliness, and smooth logistics. Days flow effortlessly between nature and charming towns—making it a destination where learning, play, and rest come together naturally. ",
    ctaText: "EXPLORE",
    ctaLink: "/experience-types/destination/switzerland",
    imagePosition: "left",
  },
  {
    image: "/images/experience/japan_section.webp",
    heading: "JAPAN",
    description:
"Japan fascinates families with its mix of tradition and modern wonder. From hands-on cultural experiences like tea ceremonies and calligraphy to interactive museums, themed trains, and peaceful temple towns, there’s something for every age. The country’s efficiency, safety, and thoughtful design make it easy for families to explore without stress, turning curiosity into shared memories.",
    ctaText: "EXPLORE",
    ctaLink: "/experience-types/destination/japan",
    imagePosition: "right",
  },
],


  soloSectionIntro: {
    heading: "Our Favourite Luxury Holidays for Families",
    subheading:
"Your family holiday should be as unique as you are. Use this selection of some of our most popular trips to spark some ideas and get in touch to plan something that’s truly yours."
  },
  soloTrips: [
    
    {
        destinationSlug: "italy",
        packageSlug: "GRAND_ITALIAN_ODYSSEY",
        image: "/images/triple-creek-ranch.avif",
        title: "THE GRAND ITALIAN ODYSSEY: PRIVATE VILLAS, VINTAGE DRIVES & COASTAL ELEGANCE",
        duration: "12 NIGHTS",
        description: "This exceptional journey captures the very essence of Italy, weaving together the refined beauty of Lake Como, the timeless charm of Tuscany, the cultural richness of Rome, and the breathtaking coastal elegance of the Amalfi Coast.",
      },
    {
        destinationSlug: "switzerland",
        packageSlug: "SWISS_STORYBOOK_ESCAPE",
        image: "/images/triple-creek-ranch.avif",
        title: "SWISS STORYBOOK ESCAPE",
        duration: "6 Nights",
        description: "Switzerland feels like a storybook brought to life — alpine villages, sparkling lakes, mountain railways...",
      },
     {
        destinationSlug: "japan",
        packageSlug: "JAPAN_WINTER_JOURNEY",
        image: "/images/triple-creek-ranch.avif",
        title: "Japan Winter Journey: Culture & Legendary Powder",
        duration: "12 Nights",
        description: "Japan’s winter season reveals a magical contrast of ancient temples, snow-covered landscapes and world-renowned alpine adventure....",
      },
    {
        destinationSlug: "tanzania",
        packageSlug: "SERENGETI_TARANGIRE_ZANZIBAR",
        image: "/images/triple-creek-ranch.avif",
        title: "CLASSIC SERENGETI, TARANGIRE & ZANZIBAR COASTLINE",
        duration: "11 Nights",
        description: "This classic East African journey captures the essence of Tanzania’s legendary safari landscapes before transitioning to the turquoise waters of the Indian Ocean.",
      },
    {
        destinationSlug: "uk",
        packageSlug: "CROWNED_KINGDOM_ROYAL_JOURNEY",
        image: "/images/triple-creek-ranch.avif",
        title: "CROWNED KINGDOM ROYAL JOURNEY",
        duration: "9 Nights",
        description: "This elegant journey through England and Scotland celebrates the grandeur of Britain’s royal heritage, combining historic palaces, refined city living, and iconic countryside estates.",
      },
    {
        destinationSlug: "greece",
        packageSlug: "FROM_POLIS_TO_PARADISE",
        image: "/images/triple-creek-ranch.avif",
        title: "FROM POLIS TO PARADISE: A TIMELESS GREEK ESCAPE",
        duration: "8 Nights",
        description: " This elegant journey through mainland Greece and the Saronic islands reveals a timeless blend of classical heritage, coastal beauty...",
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
    slug: "switzerland",
    title: "Switzerland",
    heading: [],
    imageUrl: "/images/dest/Swiz DP.webp",
    description:
      "Switzerland is ideal for solo travellers thanks to its lively cities, peaceful beaches and welcoming locals. Immerse yourself in Bangkok's dynamic markets or find peace in Chiang Mai's temples. From exploring ancient ruins to unwinding on tropical shores, Thailand offers endless adventure and discovery.",
  },
  {
    slug: "uk",
    title: "UNITED KINGDOM",
    heading: [],
    imageUrl: "/images/dest/UK DP.webp",
    description:
      "The United Kingdom offers a rich blend of history, culture, and natural beauty...",

  },
  {
    slug: "new-zealand",
    title: "NEW ZEALAND",
    heading: [],
    imageUrl: "/images/dest/Newz DP.webp",
    description:
      "New Zealand is a paradise for solo adventurers, offering breathtaking landscapes, diverse wildlife, and unforgettable experiences.",
  },
  // {
  //   slug: "Canada",
  //   title: "Canada",
  //   heading: [],
  //   imageUrl: "/images/canada.avif",
  //   description:
  //     "Canada captivates solo travellers with its expansive landscapes and rich experiences...",
  // },
],

  },


  // group-holidays  -- DONE
  {
    slug: "group-holidays",
    title: " LUXURY HOLIDAYS DESIGNED FOR YOUR INNER CIRCLE",
    subtitle: "Family Holidays",
    heroImage: "/images/group-new.webp",

     imgTextSection: {
    heading: "luxury group travel\n privately curated",
    horizontal: "center",
    vertical: "center",
  },
    description:"Group travel shouldn't mean compromise—it should mean celebration. We design journeys for your inner circle, whether it's six friends, three generations, or a milestone reunion. Private villas where everyone has space. Experiences that engage all ages and interests. Itineraries paced for connection, not exhaustion. From long dinners under Tuscan stars to shared safaris at sunrise, we handle every detail so you can focus on what matters—being together. Because the best trips aren't about where you go. They're about who's beside you."
,      highlights: [
    "Freedom without compromise",
    "Tailor-made solo itineraries",
    "Seamless & safe travel",
  ],
  galleryImages: [],

     imageContentSections: [
  {
    image: "/images/experience/Morocco_section.webp",
    heading: "MOROCCO",
    description:
"Morocco excites groups with its colour, culture, and shared experiences. From exploring vibrant souks and historic medinas to staying in beautiful riads and venturing into open desert landscapes, every day brings something new. It’s a destination where groups bond through discovery, food, and stories—while still enjoying comfort and balance.",
    ctaText: "EXPLORE",
    ctaLink: "/experience-types/destination/morocco",
    imagePosition: "left",
  },
  {
    image: "/images/experience/uk_section.webp",
    heading: "UNITED KINGDOM",
    description:
"The United Kingdom works beautifully for group travel because of its variety and accessibility. Scenic countryside drives, coastal walks, heritage towns, and iconic cities offer something for everyone. Groups can enjoy history, nature, and relaxed evenings together, with smooth travel connections keeping the journey comfortable and well-paced.",
    ctaText: "EXPLORE",
    ctaLink: "/experience-types/destination/uk",
    imagePosition: "right",
  },
],

  soloSectionIntro: {
    heading: "Our Favourite Group Trips",
    subheading:
"Use these suggested itineraries as a prompt and get in touch to plan something your whole group will enjoy."  },
  soloTrips: [
    
     {
        destinationSlug: "italy",
        packageSlug: "GRAND_ITALIAN_ODYSSEY",
        image: "/images/triple-creek-ranch.avif",
        title: "THE GRAND ITALIAN ODYSSEY: PRIVATE VILLAS, VINTAGE DRIVES & COASTAL ELEGANCE",
        duration: "12 NIGHTS",
        description: "This exceptional journey captures the very essence of Italy, weaving together the refined beauty of Lake Como, the timeless charm of Tuscany, the cultural richness of Rome, and the breathtaking coastal elegance of the Amalfi Coast.",
      },
   {
        destinationSlug: "italy",
        packageSlug: "GRAND_NORTHERN_ITALY_ESCAPE",
        image: "/images/triple-creek-ranch.avif",
        title: "THE GRAND NORTHERN ITALY ESCAPE: LAKES, ALPINE PEAKS & PROSECCO INDULGENCE",
        duration: "11 NIGHTS",
        description: "This refined journey through Northern Italy blends romantic cities, serene lakes, dramatic alpine landscapes, and world-renowned wine regions into one seamless and immersive experience.",
      },
   {
        destinationSlug: "morocco",
        packageSlug: "IMPERIAL_CITIES_SAHARA_STARS",
        image: "/images/triple-creek-ranch.avif",
        title: "FROM IMPERIAL CITIES TO SAHARA STARS: A GRAND MOROCCAN JOURNEY",
        duration: "13 NIGHTS",
        description: "This extraordinary journey through Morocco reveals a captivating blend of imperial cities, desert landscapes, ancient kasbahs, and refined luxury experiences.",
      },
     {
        destinationSlug: "japan",
        packageSlug: "IMPERIAL_JAPAN",
        image: "/images/triple-creek-ranch.avif",
        title: "IMPERIAL JAPAN: Cities, Culture & Quiet Luxury",
        duration: "10 Nights",
        description: "From the neon-lit avenues of Tokyo to the quiet temples of Kyoto and the samurai heritage of Kanazawa...",
      },
    {
        destinationSlug: "tanzania",
        packageSlug: "SERENGETI_TARANGIRE_ZANZIBAR",
        image: "/images/triple-creek-ranch.avif",
        title: "CLASSIC SERENGETI, TARANGIRE & ZANZIBAR COASTLINE",
        duration: "11 Nights",
        description: "This classic East African journey captures the essence of Tanzania’s legendary safari landscapes before transitioning to the turquoise waters of the Indian Ocean.",
      },
   {
        destinationSlug: "uk",
        packageSlug: "BIG_SMOKE_TO_WILD_GLENS",
        image: "/images/triple-creek-ranch.avif",
        title: "BIG SMOKE TO WILD GLENS",
        duration: "14 Nights",
        description: "This grand journey through Britain blends royal heritage, storybook countryside, and dramatic Highland wilderness into an unforgettable luxury travel experience.",
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
    slug: "japan",
    title: "JAPAN",
    heading: [],
    imageUrl: "/images/dest/Japan Cover.webp",
    description:
      "Japan is ideal for solo travellers thanks to its lively cities, peaceful beaches and welcoming locals. Immerse yourself in Tokyo's dynamic markets or find peace in Kyoto's temples. From exploring ancient ruins to unwinding on tropical shores, Japan offers endless adventure and discovery.",
  },
  {
    slug: "morocco",
    title: "MOROCCO",
    heading: [],
    imageUrl: "/images/dest/Moroccon Cover (1).webp",
    description:
      "Morocco beckons solo travellers with its rich tapestry of history and landscapes...",

  },
  {
    slug: "greece",
    title: "GREECE",
    heading: [],
    imageUrl: "/images/dest/Greece Cover.webp",
    description:
      "From the architectural wonders of Barcelona to the flamenco rhythms of Seville...",
  },
  // {
  //   slug: "Canada",
  //   title: "Canada",
  //   heading: [],
  //   imageUrl: "/images/canada.avif",
  //   description:
  //     "Canada captivates solo travellers with its expansive landscapes and rich experiences...",
  // },
],

  },

];
