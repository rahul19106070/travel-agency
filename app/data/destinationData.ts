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
    title: "SWITZERLAND",
    subtitle: "",
    heroImage: "/images/dest/Swizz Cover.webp",
    description:
"We specialise in creating remarkable, tailor-made experiences that thoughtfully connect our clients to the world and inspire them to explore it with curiosity, humility and a sense of wonder. So let’s begin. Let’s do something remarkable."
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


//   italy
 {
    slug: "italy",
    title: "ITALY",
    subtitle: "Cultural Wonders",
    heroImage: "/images/dest/Italy Cover.webp",
    description:
"We specialise in creating remarkable, tailor-made experiences that thoughtfully connect our clients to the world and inspire them to explore it with curiosity, humility and a sense of wonder. So let’s begin. Let’s do something remarkable."
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
    title: "MALDIVES",
    subtitle: "",
    heroImage: "/images/dest/Maldives Cover.webp",
    description:
"We specialise in creating remarkable, tailor-made experiences that thoughtfully connect our clients to the world and inspire them to explore it with curiosity, humility and a sense of wonder. So let’s begin. Let’s do something remarkable."
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


//   japan
  {
    slug: "japan",
    title: "JAPAN",
    subtitle: "Cultural Wonders",
    heroImage: "/images/dest/Japan DP.webp",
    description:
      "Japan blends ancient tradition with modern cities. Discover temples, cherry blossoms, and vibrant city life with curated experiences.",
    imgTextSection: {
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
    title: "GREECE",
    subtitle: "",
    heroImage: "/images/dest/Greece Cover.webp",
    description:
"We specialise in creating remarkable, tailor-made experiences that thoughtfully connect our clients to the world and inspire them to explore it with curiosity, humility and a sense of wonder. So let’s begin. Let’s do something remarkable."
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
"We specialise in creating remarkable, tailor-made experiences that thoughtfully connect our clients to the world and inspire them to explore it with curiosity, humility and a sense of wonder. So let’s begin. Let’s do something remarkable."
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


//   morocco
 {
    slug: "morocco",
    title: "MOROCCO",
    subtitle: "",
    heroImage: "/images/dest/Moroccon Cover.webp",
    description:
"We specialise in creating remarkable, tailor-made experiences that thoughtfully connect our clients to the world and inspire them to explore it with curiosity, humility and a sense of wonder. So let’s begin. Let’s do something remarkable."
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

//   tanzania
 {
    slug: "tanzania",
    title: "TANZANIA",
    subtitle: "",
    heroImage: "/images/dest/Tanzania Cover.webp",
    description:
"We specialise in creating remarkable, tailor-made experiences that thoughtfully connect our clients to the world and inspire them to explore it with curiosity, humility and a sense of wonder. So let’s begin. Let’s do something remarkable."
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


//   iceland
 {
    slug: "iceland",
    title: "ICELAND",
    subtitle: "",
    heroImage: "/images/dest/Iceland Cover.webp",
    description:
"We specialise in creating remarkable, tailor-made experiences that thoughtfully connect our clients to the world and inspire them to explore it with curiosity, humility and a sense of wonder. So let’s begin. Let’s do something remarkable."
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

//   new zealand
 {
    slug: "new-zealand",
    title: "NEW ZEALAND",
    subtitle: "",
    heroImage: "/images/dest/Newz Cover.webp",
    description:
"We specialise in creating remarkable, tailor-made experiences that thoughtfully connect our clients to the world and inspire them to explore it with curiosity, humility and a sense of wonder. So let’s begin. Let’s do something remarkable."
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
];
