export type Destination = {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  imgTextSection?: ImageTextSection;
  cta?: string;
  highlights: string[];
  galleryImages: string[];
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
  slug?: string;
  title: string;
  heading?: HeadingDest[];
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

/* ---------- Example Data ---------- */
export const DESTINATIONS: Destination[] = [
    // switzerland
  {
    slug: "switzerland",
    title: "Not Just Switzerland. Your Switzerland.",
    subtitle: "",
    heroImage: "/images/dest/Swizz Cover.webp",
    description:
"The Swiss AlpWe design Switzerland journeys that balance iconic moments with quiet discovery. Private ski instructors on Zermatt's slopes. Fondue in a centuries-old chalet accessible only by cable car. Train routes timed perfectly for golden hour over Lake Lucerne. Whether you're a family seeking alpine adventure, a couple escaping to mountain serenity, or travelers who want both winter skiing and summer hiking—we build the itinerary around your rhythm. With insider access to properties you won't find on Booking.com and support throughout your journey, you experience Switzerland's precision and beauty without the overwhelms can feel overwhelming—which resort? Summer or winter? Mountain or lake? We remove the guesswork"    ,
    cta:"Start Your Journey",
    imgTextSection: {
      heading: "",
      horizontal: "center",
      vertical: "bottom",
    },
    highlights: ["Breathtaking alpine scenery", "Luxury chalets & resorts", "Curated itineraries"],
    galleryImages: [],
    soloSectionIntro: {
      heading: "Top Swiss Experiences",
      subheading: "From Zurich to Zermatt, explore Switzerland in style."
    },
    soloTrips: [
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Ultimate Tanzania: Migrations, Masai Tribes & Beach Perfection",
        duration: "3 Days",
        description: "Experience East Africa’s charm, incredible landscapes and startling wildlife on our...",
      },
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Arusha, Serengeti & Tanganyika: Tanzania with a Twist",
        duration: "1 Day",
        description: "Fancy a safari holiday with a bit of a twist and all the perks? Whilst offering all the phenomenal description.",
      },
       {
        image: "/images/triple-creek-ranch.avif",
        title: "Kilimanjaro & Zanzibar: An Adventure from Summit to Sea",
        duration: "1 Day",
        description: "Challenge meets reward on this exhilarating private trek to the summit of Mount Kilimanjaro...",
      },
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Ultimate Tanzania: Migrations, Masai Tribes & Beach Perfection",
        duration: "3 Days",
        description: "Experience East Africa’s charm, incredible landscapes and startling wildlife on our...",
      },
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Arusha, Serengeti & Tanganyika: Tanzania with a Twist",
        duration: "1 Day",
        description: "Fancy a safari holiday with a bit of a twist and all the perks? Whilst offering all the phenomenal description.",
      },
       {
        image: "/images/triple-creek-ranch.avif",
        title: "Kilimanjaro & Zanzibar: An Adventure from Summit to Sea",
        duration: "1 Day",
        description: "Challenge meets reward on this exhilarating private trek to the summit of Mount Kilimanjaro...",
      },
    ],
    topDestinations: [
      {
        slug: "heading",
        title: "",
        heading: [{ heading: "Top Destinations in Switzerland" }],
        imageUrl: "",
        description: "",
      },
      {
        slug: "zermatt",
        title: "Zermatt",
        imageUrl: "/images/dest/Zermatt.webp",
        description: "A picturesque village at the foot of the Matterhorn.",
      },
      {
        slug: "lucerne",
        title: "Lucerne",
        imageUrl: "/images/dest/Lucerne.webp",
        description: "Charming city with lakeside views and historic streets.",
      },
    ],
  },


//   italy
 {
    slug: "italy",
    title: "Not Just Italy. Your Story in Italy.",
    subtitle: "Cultural Wonders",
    heroImage: "/images/dest/Italy Cover.webp",
    description:
"Italy's richness can paralyze—Rome or Florence? Amalfi or Tuscany? Museums or markets? We curate, so you don't have to.\n We design Italy journeys that feel authentically Italian, not touristy. Cooking with a nonna in her Tuscan kitchen, not a commercial cooking school. Tables at restaurants where locals eat, not where tour buses stop. Private Uffizi access before the crowds, or vineyard lunches where the winemaker joins you. Whether you're chasing art and history, savoring food and wine, or simply wanting la dolce vita to unfold naturally—we pace it for immersion, not exhaustion. With guides who know which side street hides the best gelato and every detail confirmed before you arrive, you experience Italy's soul without the planning stress." 
,
    cta:"Start Your Journey",
    imgTextSection: {
      heading: "",
      horizontal: "center",
      vertical: "bottom",
    },
    highlights: ["Breathtaking alpine scenery", "Luxury chalets & resorts", "Curated itineraries"],
    galleryImages: [],
    soloSectionIntro: {
      heading: "Top Swiss Experiences",
      subheading: "From Zurich to Zermatt, explore Switzerland in style."
    },
    soloTrips: [
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Ultimate Tanzania: Migrations, Masai Tribes & Beach Perfection",
        duration: "3 Days",
        description: "Experience East Africa’s charm, incredible landscapes and startling wildlife on our...",
      },
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Arusha, Serengeti & Tanganyika: Tanzania with a Twist",
        duration: "1 Day",
        description: "Fancy a safari holiday with a bit of a twist and all the perks? Whilst offering all the phenomenal description.",
      },
       {
        image: "/images/triple-creek-ranch.avif",
        title: "Kilimanjaro & Zanzibar: An Adventure from Summit to Sea",
        duration: "1 Day",
        description: "Challenge meets reward on this exhilarating private trek to the summit of Mount Kilimanjaro...",
      },
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Ultimate Tanzania: Migrations, Masai Tribes & Beach Perfection",
        duration: "3 Days",
        description: "Experience East Africa’s charm, incredible landscapes and startling wildlife on our...",
      },
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Arusha, Serengeti & Tanganyika: Tanzania with a Twist",
        duration: "1 Day",
        description: "Fancy a safari holiday with a bit of a twist and all the perks? Whilst offering all the phenomenal description.",
      },
       {
        image: "/images/triple-creek-ranch.avif",
        title: "Kilimanjaro & Zanzibar: An Adventure from Summit to Sea",
        duration: "1 Day",
        description: "Challenge meets reward on this exhilarating private trek to the summit of Mount Kilimanjaro...",
      },
    ],
    topDestinations: [
      {
        slug: "heading",
        title: "",
        heading: [{ heading: "Top Destinations in Switzerland" }],
        imageUrl: "",
        description: "",
      },
      {
        slug: "zermatt",
        title: "Zermatt",
        imageUrl: "/images/dest/Zermatt.webp",
        description: "A picturesque village at the foot of the Matterhorn.",
      },
      {
        slug: "lucerne",
        title: "Lucerne",
        imageUrl: "/images/dest/Lucerne.webp",
        description: "Charming city with lakeside views and historic streets.",
      },
    ],
  },


//   maldives
 {
    slug: "maldives",
    title: "Not Just the Maldives. Your Private Escape.",
    subtitle: "",
    heroImage: "/images/dest/Maldives Cover.webp",
    description:
"Dozens of islands, hundreds of resorts—choosing feels impossible. Which one? For what experience? We simplify.\n We design Maldives escapes around what you actually want—total privacy, world-class diving, family-friendly, adults-only, barefoot luxury, or all of the above. We choose the resort (or two) that fits your vision, arrange experiences you wouldn't have thought to ask for—private sandbank dinners, marine biologist-led snorkeling, spa rituals at sunset—and handle logistics so you never think about transfers. Whether it's a honeymoon, an anniversary, or simply needing to disconnect entirely, we ensure your Maldives experience is effortless from arrival to departure. You show up. The ocean does the rest."    ,
    cta:"Start Your Journey",
    imgTextSection: {
      heading: "",
      horizontal: "center",
      vertical: "bottom",
    },
    highlights: ["Breathtaking alpine scenery", "Luxury chalets & resorts", "Curated itineraries"],
    galleryImages: [],
    soloSectionIntro: {
      heading: "Top Swiss Experiences",
      subheading: "From Zurich to Zermatt, explore Switzerland in style."
    },
    soloTrips: [
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Ultimate Tanzania: Migrations, Masai Tribes & Beach Perfection",
        duration: "3 Days",
        description: "Experience East Africa’s charm, incredible landscapes and startling wildlife on our...",
      },
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Arusha, Serengeti & Tanganyika: Tanzania with a Twist",
        duration: "1 Day",
        description: "Fancy a safari holiday with a bit of a twist and all the perks? Whilst offering all the phenomenal description.",
      },
       {
        image: "/images/triple-creek-ranch.avif",
        title: "Kilimanjaro & Zanzibar: An Adventure from Summit to Sea",
        duration: "1 Day",
        description: "Challenge meets reward on this exhilarating private trek to the summit of Mount Kilimanjaro...",
      },
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Ultimate Tanzania: Migrations, Masai Tribes & Beach Perfection",
        duration: "3 Days",
        description: "Experience East Africa’s charm, incredible landscapes and startling wildlife on our...",
      },
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Arusha, Serengeti & Tanganyika: Tanzania with a Twist",
        duration: "1 Day",
        description: "Fancy a safari holiday with a bit of a twist and all the perks? Whilst offering all the phenomenal description.",
      },
       {
        image: "/images/triple-creek-ranch.avif",
        title: "Kilimanjaro & Zanzibar: An Adventure from Summit to Sea",
        duration: "1 Day",
        description: "Challenge meets reward on this exhilarating private trek to the summit of Mount Kilimanjaro...",
      },
    ],
    topDestinations: [
      {
        slug: "heading",
        title: "",
        heading: [{ heading: "Top Destinations in Switzerland" }],
        imageUrl: "",
        description: "",
      },
      {
        slug: "zermatt",
        title: "Zermatt",
        imageUrl: "/images/dest/Zermatt.webp",
        description: "A picturesque village at the foot of the Matterhorn.",
      },
      {
        slug: "lucerne",
        title: "Lucerne",
        imageUrl: "/images/dest/Lucerne.webp",
        description: "Charming city with lakeside views and historic streets.",
      },
    ],
  },


//   japan
  {
    slug: "japan",
    title: "Not Just Japan. Your Balance of Old and New.",
    subtitle: "Cultural Wonders",
    heroImage: "/images/dest/Japan DP.webp",
    description:
"Japan feels vast, layered, impossible to decode alone. The language. The etiquette. The endless options. We translate it all.\n We design Japan journeys that balance ancient ritual with modern wonder. Private tea ceremonies in Kyoto temples tourists never find. Omakase at sushi counters where reservations are nearly impossible. Ryokans where your kaiseki meal is art. Guides who explain not just what you're seeing, but why it matters. Whether you're timing it for cherry blossoms, seeking autumn's fiery maples, traveling as a family, or going solo to truly absorb the culture—we pace it so you're present, not rushing. With every train ticket, restaurant reservation, and cultural nuance handled, you experience Japan's depth without the overwhelm.",    imgTextSection: {
      heading: "",
      horizontal: "center",
      vertical: "bottom",
    },
    highlights: ["Ancient temples & shrines", "Modern cityscapes", "Cultural immersion"],
    galleryImages: [],
    soloSectionIntro: {
      heading: "Top Japanese Experiences",
      subheading: "From Tokyo to Kyoto, immerse yourself in Japanese culture."
    },
     soloTrips: [
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Ultimate Tanzania: Migrations, Masai Tribes & Beach Perfection",
        duration: "3 Days",
        description: "Experience East Africa’s charm, incredible landscapes and startling wildlife on our...",
      },
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Arusha, Serengeti & Tanganyika: Tanzania with a Twist",
        duration: "1 Day",
        description: "Fancy a safari holiday with a bit of a twist and all the perks? Whilst offering all the phenomenal description.",
      },
       {
        image: "/images/triple-creek-ranch.avif",
        title: "Kilimanjaro & Zanzibar: An Adventure from Summit to Sea",
        duration: "1 Day",
        description: "Challenge meets reward on this exhilarating private trek to the summit of Mount Kilimanjaro...",
      },
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Ultimate Tanzania: Migrations, Masai Tribes & Beach Perfection",
        duration: "3 Days",
        description: "Experience East Africa’s charm, incredible landscapes and startling wildlife on our...",
      },
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Arusha, Serengeti & Tanganyika: Tanzania with a Twist",
        duration: "1 Day",
        description: "Fancy a safari holiday with a bit of a twist and all the perks? Whilst offering all the phenomenal description.",
      },
       {
        image: "/images/triple-creek-ranch.avif",
        title: "Kilimanjaro & Zanzibar: An Adventure from Summit to Sea",
        duration: "1 Day",
        description: "Challenge meets reward on this exhilarating private trek to the summit of Mount Kilimanjaro...",
      },
    ],
    topDestinations: [
      {
        slug: "heading",
        title: "",
        heading: [{ heading: "Top Destinations in Switzerland" }],
        imageUrl: "",
        description: "",
      },
      {
        slug: "zermatt",
        title: "Zermatt",
        imageUrl: "/images/dest/Zermatt.webp",
        description: "A picturesque village at the foot of the Matterhorn.",
      },
      {
        slug: "lucerne",
        title: "Lucerne",
        imageUrl: "/images/dest/Lucerne.webp",
        description: "Charming city with lakeside views and historic streets.",
      },
    ],
  },

//   greece
 {
    slug: "greece",
    title: "Not Just Greece. Your Sun-Soaked Rhythm.",
    subtitle: "",
    heroImage: "/images/dest/Greece Cover.webp",
    description:
"Santorini or Mykonos? Athens or skip it? Crowds or calm? Greece's beauty can feel over-Instagram. We find the real version.\n We design Greece journeys that go beyond the postcard. Yes, Santorini sunsets—but from a private villa terrace, not a tourist viewing platform. Island-hopping that includes places your friends haven't been. Tavernas where the owner sits down and shares wine, not where menus have photos. Private sailing around hidden coves. Whether you're honeymooning, traveling with family, or simply craving that Aegean blue, we balance iconic moments with authentic discovery. With local guides who know which beach empties after 4pm and seamless logistics between islands, you experience Greece's magic without the chaos."    ,
    cta:"Start Your Journey",
    imgTextSection: {
      heading: "",
      horizontal: "center",
      vertical: "bottom",
    },
    highlights: ["Breathtaking alpine scenery", "Luxury chalets & resorts", "Curated itineraries"],
    galleryImages: [],
    soloSectionIntro: {
      heading: "Top Swiss Experiences",
      subheading: "From Zurich to Zermatt, explore Switzerland in style."
    },
    soloTrips: [
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Ultimate Tanzania: Migrations, Masai Tribes & Beach Perfection",
        duration: "3 Days",
        description: "Experience East Africa’s charm, incredible landscapes and startling wildlife on our...",
      },
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Arusha, Serengeti & Tanganyika: Tanzania with a Twist",
        duration: "1 Day",
        description: "Fancy a safari holiday with a bit of a twist and all the perks? Whilst offering all the phenomenal description.",
      },
       {
        image: "/images/triple-creek-ranch.avif",
        title: "Kilimanjaro & Zanzibar: An Adventure from Summit to Sea",
        duration: "1 Day",
        description: "Challenge meets reward on this exhilarating private trek to the summit of Mount Kilimanjaro...",
      },
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Ultimate Tanzania: Migrations, Masai Tribes & Beach Perfection",
        duration: "3 Days",
        description: "Experience East Africa’s charm, incredible landscapes and startling wildlife on our...",
      },
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Arusha, Serengeti & Tanganyika: Tanzania with a Twist",
        duration: "1 Day",
        description: "Fancy a safari holiday with a bit of a twist and all the perks? Whilst offering all the phenomenal description.",
      },
       {
        image: "/images/triple-creek-ranch.avif",
        title: "Kilimanjaro & Zanzibar: An Adventure from Summit to Sea",
        duration: "1 Day",
        description: "Challenge meets reward on this exhilarating private trek to the summit of Mount Kilimanjaro...",
      },
    ],
    topDestinations: [
      {
        slug: "heading",
        title: "",
        heading: [{ heading: "Top Destinations in Greece" }],
        imageUrl: "",
        description: "",
      },
      {
        slug: "zermatt",
        title: "Zermatt",
        imageUrl: "/images/dest/Zermatt.webp",
        description: "A picturesque village at the foot of the Matterhorn.",
      },
      {
        slug: "lucerne",
        title: "Lucerne",
        imageUrl: "/images/dest/Lucerne.webp",
        description: "Charming city with lakeside views and historic streets.",
      },
    ],
  },


// united kingdom
 {
    slug: "uk",
    title: "UNITED KINGDOM",
    subtitle: "",
    heroImage: "/images/dest/UK Cover.webp",
    description:
"The United Kingdom isn't a postcard destination. Heritage depth matters. Regional diversity matters. Insider access versus tourist trails matters. This requires expert curation.\n We design UK journeys for those seeking layers beyond the obvious. We craft itineraries based on your interests—whether that's tracing literary history through the Brontë moors, securing private castle stays, accessing hidden gardens in the Cotswolds, or exploring Scotland's whisky trail with master distillers. Time it for Edinburgh's festivals, Chelsea Flower Show, grouse season in the Highlands, or when the crowds thin and the landscape reveals itself. Handle country house bookings, theatre tickets, private guides who unlock stories behind the stones, and seamless rail connections. Whether you're chasing ancestral roots, collecting cultural experiences across centuries, or introducing your family to a realm where history breathes—we ensure every detail is choreographed so you can focus entirely on experiencing Britain's profound resonance. This isn't just travel. It's homecoming."    ,
    cta:"Start Your Journey",
    imgTextSection: {
      heading: "",
      horizontal: "center",
      vertical: "bottom",
    },
    highlights: ["Breathtaking alpine scenery", "Luxury chalets & resorts", "Curated itineraries"],
    galleryImages: [],
    soloSectionIntro: {
      heading: "Top Swiss Experiences",
      subheading: "From Zurich to Zermatt, explore Switzerland in style."
    },
    soloTrips: [
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Ultimate Tanzania: Migrations, Masai Tribes & Beach Perfection",
        duration: "3 Days",
        description: "Experience East Africa’s charm, incredible landscapes and startling wildlife on our...",
      },
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Arusha, Serengeti & Tanganyika: Tanzania with a Twist",
        duration: "1 Day",
        description: "Fancy a safari holiday with a bit of a twist and all the perks? Whilst offering all the phenomenal description.",
      },
       {
        image: "/images/triple-creek-ranch.avif",
        title: "Kilimanjaro & Zanzibar: An Adventure from Summit to Sea",
        duration: "1 Day",
        description: "Challenge meets reward on this exhilarating private trek to the summit of Mount Kilimanjaro...",
      },
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Ultimate Tanzania: Migrations, Masai Tribes & Beach Perfection",
        duration: "3 Days",
        description: "Experience East Africa’s charm, incredible landscapes and startling wildlife on our...",
      },
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Arusha, Serengeti & Tanganyika: Tanzania with a Twist",
        duration: "1 Day",
        description: "Fancy a safari holiday with a bit of a twist and all the perks? Whilst offering all the phenomenal description.",
      },
       {
        image: "/images/triple-creek-ranch.avif",
        title: "Kilimanjaro & Zanzibar: An Adventure from Summit to Sea",
        duration: "1 Day",
        description: "Challenge meets reward on this exhilarating private trek to the summit of Mount Kilimanjaro...",
      },
    ],
    topDestinations: [
      {
        slug: "heading",
        title: "",
        heading: [{ heading: "Top Destinations in Switzerland" }],
        imageUrl: "",
        description: "",
      },
      {
        slug: "zermatt",
        title: "Zermatt",
        imageUrl: "/images/dest/Zermatt.webp",
        description: "A picturesque village at the foot of the Matterhorn.",
      },
      {
        slug: "lucerne",
        title: "Lucerne",
        imageUrl: "/images/dest/Lucerne.webp",
        description: "Charming city with lakeside views and historic streets.",
      },
    ],
  },


//   morocco
 {
    slug: "morocco",
    title: "Not Just Morocco. Your Passage Through Colour and Calm.",
    subtitle: "",
    heroImage: "/images/dest/Moroccon Cover.webp",
    description:
"Marrakech's medina maze. Sahara camps from luxury to lackluster. Atlas Mountain villages you'll never find alone. Morocco rewards insider knowledge.\n We design Morocco journeys that feel immersive, not touristy. Riads hidden behind unmarked doors. Desert camps under stars where silence is the luxury. Local guides who navigate souks without the hard sell. Atlas Mountain hikes ending at Berber homes for lunch. Whether you're drawn to culture, seeking adventure, or want the contrast of desert and coast, we pace it so you absorb—not just see. With everything from airport chaos to restaurant reservations handled, you experience Morocco's magic and mystique without the stress of navigating it solo."    ,
    cta:"Start Your Journey",
    imgTextSection: {
      heading: "",
      horizontal: "center",
      vertical: "bottom",
    },
    highlights: ["Breathtaking alpine scenery", "Luxury chalets & resorts", "Curated itineraries"],
    galleryImages: [],
    soloSectionIntro: {
      heading: "Top Swiss Experiences",
      subheading: "From Zurich to Zermatt, explore Switzerland in style."
    },
    soloTrips: [
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Ultimate Tanzania: Migrations, Masai Tribes & Beach Perfection",
        duration: "3 Days",
        description: "Experience East Africa’s charm, incredible landscapes and startling wildlife on our...",
      },
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Arusha, Serengeti & Tanganyika: Tanzania with a Twist",
        duration: "1 Day",
        description: "Fancy a safari holiday with a bit of a twist and all the perks? Whilst offering all the phenomenal description.",
      },
       {
        image: "/images/triple-creek-ranch.avif",
        title: "Kilimanjaro & Zanzibar: An Adventure from Summit to Sea",
        duration: "1 Day",
        description: "Challenge meets reward on this exhilarating private trek to the summit of Mount Kilimanjaro...",
      },
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Ultimate Tanzania: Migrations, Masai Tribes & Beach Perfection",
        duration: "3 Days",
        description: "Experience East Africa’s charm, incredible landscapes and startling wildlife on our...",
      },
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Arusha, Serengeti & Tanganyika: Tanzania with a Twist",
        duration: "1 Day",
        description: "Fancy a safari holiday with a bit of a twist and all the perks? Whilst offering all the phenomenal description.",
      },
       {
        image: "/images/triple-creek-ranch.avif",
        title: "Kilimanjaro & Zanzibar: An Adventure from Summit to Sea",
        duration: "1 Day",
        description: "Challenge meets reward on this exhilarating private trek to the summit of Mount Kilimanjaro...",
      },
    ],
    topDestinations: [
      {
        slug: "heading",
        title: "",
        heading: [{ heading: "Top Destinations in Switzerland" }],
        imageUrl: "",
        description: "",
      },
      {
        slug: "zermatt",
        title: "Zermatt",
        imageUrl: "/images/dest/Zermatt.webp",
        description: "A picturesque village at the foot of the Matterhorn.",
      },
      {
        slug: "lucerne",
        title: "Lucerne",
        imageUrl: "/images/dest/Lucerne.webp",
        description: "Charming city with lakeside views and historic streets.",
      },
    ],
  },

//   tanzania
 {
    slug: "tanzania",
    title: "Not Just Tanzania. Your Front-Row Seat to the Wild.",
    subtitle: "",
    heroImage: "/images/dest/Tanzania Cover.webp",
    description:
"Safari lodges from budget to ultra-luxury. Migration timing. Malaria zones. Zanzibar add-on or not? Tanzania requires expertise.\n We design Tanzania journeys that maximize wildlife encounters and minimize logistics headaches. We time it for the Great Migration or calving season. Choose lodges for location and exclusivity, not just marketing. Arrange private game drives with guides who've tracked leopards for decades. Pair Serengeti's drama with Zanzibar's beaches—or keep it all bush if that's your preference. Whether it's your first safari or fifth, traveling as a couple, family, or group—we handle permits, flights, transfers, and contingencies so you focus on the lions at sunrise, not the itinerary details."    ,
    cta:"Start Your Journey",
    imgTextSection: {
      heading: "",
      horizontal: "center",
      vertical: "bottom",
    },
    highlights: ["Breathtaking alpine scenery", "Luxury chalets & resorts", "Curated itineraries"],
    galleryImages: [],
    soloSectionIntro: {
      heading: "Top Swiss Experiences",
      subheading: "From Zurich to Zermatt, explore Switzerland in style."
    },
    soloTrips: [
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Ultimate Tanzania: Migrations, Masai Tribes & Beach Perfection",
        duration: "3 Days",
        description: "Experience East Africa’s charm, incredible landscapes and startling wildlife on our...",
      },
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Arusha, Serengeti & Tanganyika: Tanzania with a Twist",
        duration: "1 Day",
        description: "Fancy a safari holiday with a bit of a twist and all the perks? Whilst offering all the phenomenal description.",
      },
       {
        image: "/images/triple-creek-ranch.avif",
        title: "Kilimanjaro & Zanzibar: An Adventure from Summit to Sea",
        duration: "1 Day",
        description: "Challenge meets reward on this exhilarating private trek to the summit of Mount Kilimanjaro...",
      },
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Ultimate Tanzania: Migrations, Masai Tribes & Beach Perfection",
        duration: "3 Days",
        description: "Experience East Africa’s charm, incredible landscapes and startling wildlife on our...",
      },
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Arusha, Serengeti & Tanganyika: Tanzania with a Twist",
        duration: "1 Day",
        description: "Fancy a safari holiday with a bit of a twist and all the perks? Whilst offering all the phenomenal description.",
      },
       {
        image: "/images/triple-creek-ranch.avif",
        title: "Kilimanjaro & Zanzibar: An Adventure from Summit to Sea",
        duration: "1 Day",
        description: "Challenge meets reward on this exhilarating private trek to the summit of Mount Kilimanjaro...",
      },
    ],
    topDestinations: [
      {
        slug: "heading",
        title: "",
        heading: [{ heading: "Top Destinations in Switzerland" }],
        imageUrl: "",
        description: "",
      },
      {
        slug: "zermatt",
        title: "Zermatt",
        imageUrl: "/images/dest/Zermatt.webp",
        description: "A picturesque village at the foot of the Matterhorn.",
      },
      {
        slug: "lucerne",
        title: "Lucerne",
        imageUrl: "/images/dest/Lucerne.webp",
        description: "Charming city with lakeside views and historic streets.",
      },
    ],
  },


//   iceland
 {
    slug: "iceland",
    title: "Not Just Iceland. Your Edge of the Earth.",
    subtitle: "",
    heroImage: "/images/dest/Iceland Cover.webp",
    description:
"Northern lights or midnight sun? Ring road or focused? Ice caves, hot springs, glaciers—Iceland's natural wonders demand planning.\n We design Iceland journeys timed to what you want to experience. Chasing northern lights with meteorologists who track them nightly. Ice cave access before crowds. Hot springs locals actually use, not the touristy lagoon. Glacier walks, whale watching, or simply dramatic landscapes from your windshield—paced so you're not exhausted. Whether you're adventure-seeking or prefer luxury lodges with views, winter darkness or summer's endless daylight—we build it around your tolerance for cold, activity level, and sense of wonder. Everything confirmed, weather contingencies planned, so you experience Iceland's raw power stress-free."    ,
    cta:"Start Your Journey",
    imgTextSection: {
      heading: "",
      horizontal: "center",
      vertical: "bottom",
    },
    highlights: ["Breathtaking alpine scenery", "Luxury chalets & resorts", "Curated itineraries"],
    galleryImages: [],
    soloSectionIntro: {
      heading: "Top Swiss Experiences",
      subheading: "From Zurich to Zermatt, explore Switzerland in style."
    },
    soloTrips: [
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Ultimate Tanzania: Migrations, Masai Tribes & Beach Perfection",
        duration: "3 Days",
        description: "Experience East Africa’s charm, incredible landscapes and startling wildlife on our...",
      },
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Arusha, Serengeti & Tanganyika: Tanzania with a Twist",
        duration: "1 Day",
        description: "Fancy a safari holiday with a bit of a twist and all the perks? Whilst offering all the phenomenal description.",
      },
       {
        image: "/images/triple-creek-ranch.avif",
        title: "Kilimanjaro & Zanzibar: An Adventure from Summit to Sea",
        duration: "1 Day",
        description: "Challenge meets reward on this exhilarating private trek to the summit of Mount Kilimanjaro...",
      },
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Ultimate Tanzania: Migrations, Masai Tribes & Beach Perfection",
        duration: "3 Days",
        description: "Experience East Africa’s charm, incredible landscapes and startling wildlife on our...",
      },
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Arusha, Serengeti & Tanganyika: Tanzania with a Twist",
        duration: "1 Day",
        description: "Fancy a safari holiday with a bit of a twist and all the perks? Whilst offering all the phenomenal description.",
      },
       {
        image: "/images/triple-creek-ranch.avif",
        title: "Kilimanjaro & Zanzibar: An Adventure from Summit to Sea",
        duration: "1 Day",
        description: "Challenge meets reward on this exhilarating private trek to the summit of Mount Kilimanjaro...",
      },
    ],
    topDestinations: [
      {
        slug: "heading",
        title: "",
        heading: [{ heading: "Top Destinations in Switzerland" }],
        imageUrl: "",
        description: "",
      },
      {
        slug: "zermatt",
        title: "Zermatt",
        imageUrl: "/images/dest/Zermatt.webp",
        description: "A picturesque village at the foot of the Matterhorn.",
      },
      {
        slug: "lucerne",
        title: "Lucerne",
        imageUrl: "/images/dest/Lucerne.webp",
        description: "Charming city with lakeside views and historic streets.",
      },
    ],
  },

//   new zealand
 {
    slug: "new-zealand",
    title: "Not Just New Zealand. Your Freedom to Roam.",
    subtitle: "",
    heroImage: "/images/dest/Newz Cover.webp",
    description:
"North Island or South? Adventure or wine country? Fjords, lakes, mountains—New Zealand's vastness requires curation.\n We design New Zealand journeys that balance epic landscapes with luxurious ease. Helicopter to remote lodges. Private wine tastings in Marlborough. Milford Sound without the day-tripper crowds. Hikes graded to your ability, followed by lodges where someone else cooks dinner. Whether you're chasing Lord of the Rings scenery, want wellness in nature, or traveling with family who need variety—we pace it so you see the highlights without the burnout of constant movement. Domestic flights, car rentals, guides, reservations—all handled so you just drive, hike, sip, and stare.North Island or South? Adventure or wine country? Fjords, lakes, mountains—New Zealand's vastness requires curation.",
    cta:"Start Your Journey",
    imgTextSection: {
      heading: "",
      horizontal: "center",
      vertical: "bottom",
    },
    highlights: ["Breathtaking alpine scenery", "Luxury chalets & resorts", "Curated itineraries"],
    galleryImages: [],
    soloSectionIntro: {
      heading: "Top Swiss Experiences",
      subheading: "From Zurich to Zermatt, explore Switzerland in style."
    },
    soloTrips: [
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Ultimate Tanzania: Migrations, Masai Tribes & Beach Perfection",
        duration: "3 Days",
        description: "Experience East Africa’s charm, incredible landscapes and startling wildlife on our...",
      },
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Arusha, Serengeti & Tanganyika: Tanzania with a Twist",
        duration: "1 Day",
        description: "Fancy a safari holiday with a bit of a twist and all the perks? Whilst offering all the phenomenal description.",
      },
       {
        image: "/images/triple-creek-ranch.avif",
        title: "Kilimanjaro & Zanzibar: An Adventure from Summit to Sea",
        duration: "1 Day",
        description: "Challenge meets reward on this exhilarating private trek to the summit of Mount Kilimanjaro...",
      },
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Ultimate Tanzania: Migrations, Masai Tribes & Beach Perfection",
        duration: "3 Days",
        description: "Experience East Africa’s charm, incredible landscapes and startling wildlife on our...",
      },
      {
        image: "/images/triple-creek-ranch.avif",
        title: "Arusha, Serengeti & Tanganyika: Tanzania with a Twist",
        duration: "1 Day",
        description: "Fancy a safari holiday with a bit of a twist and all the perks? Whilst offering all the phenomenal description.",
      },
       {
        image: "/images/triple-creek-ranch.avif",
        title: "Kilimanjaro & Zanzibar: An Adventure from Summit to Sea",
        duration: "1 Day",
        description: "Challenge meets reward on this exhilarating private trek to the summit of Mount Kilimanjaro...",
      },
    ],
    topDestinations: [
      {
        slug: "heading",
        title: "",
        heading: [{ heading: "Top Destinations in Switzerland" }],
        imageUrl: "",
        description: "",
      },
      {
        slug: "zermatt",
        title: "Zermatt",
        imageUrl: "/images/dest/Zermatt.webp",
        description: "A picturesque village at the foot of the Matterhorn.",
      },
      {
        slug: "lucerne",
        title: "Lucerne",
        imageUrl: "/images/dest/Lucerne.webp",
        description: "Charming city with lakeside views and historic streets.",
      },
    ],
  },
];
