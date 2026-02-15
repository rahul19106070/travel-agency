export type MonthPackage = {
  image: string;
  title: string;
  duration: string;
  description: string;
  link: string;
};

export type FollowingMonth = {
  slug: string;
  title: string;
  image: string;
};

export type MonthPage = {
  slug: string;
  title: string;
  heroImage: string;
  heroText: string;

  description: string;
  ctaText: string;
  ctaLink: string;

  packages: MonthPackage[];
  followingMonths: FollowingMonth[];
};

export const MONTH_DATA: MonthPage[] = [

{
  slug: "january",
  title: "A New Year, A New Beginning",
  heroImage: "/images/month/HeroImageJanuary.webp",
  heroText: "Where to Travel This January",

  description:
    "This is the season of fresh starts — the perfect time to trade routine for something extraordinary. Think snow-covered alpine escapes, sunlit island retreats, or even a once-in-a-lifetime safari to begin the year with perspective. Whether you’re travelling as a couple, with family, or with friends, journeys now feel renewing and full of possibility. The world is quieter, experiences feel more personal, and every destination carries a sense of promise. This isn’t just a holiday — it’s a beautiful way to set the tone for everything ahead.",

  ctaText: "GET IN TOUCH",
  ctaLink: "/contact",

  packages: [
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Maldives Winter Escape",
      duration: "5 Nights / 6 Days",
      description: "Overwater villas, calm seas, private luxury living.",
      link: "/packages/maldives-winter"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Swiss Snow Experience",
      duration: "7 Nights / 8 Days",
      description: "Alps, ski towns, winter villages and frozen lakes.",
      link: "/packages/switzerland-snow"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Dubai Luxury Break",
      duration: "4 Nights / 5 Days",
      description: "Perfect weather, festivals, desert experiences.",
      link: "/packages/dubai-january"
    },
  ],

  followingMonths: [
    { slug: "february", title: "February", image: "/images/month/February.webp" },
    { slug: "march", title: "March", image: "/images/month/March.webp" },
    { slug: "april", title: "April", image: "/images/month/April.webp" },
    { slug: "explore", title: "Explore the year", image: "/images/month/explore.png" },

  ],
},

{
  slug: "february",
  title: "Romance, Warmth, and Escape",
  heroImage: "/images/month/HeroImageFeb.webp",
  heroText: "Where to Travel This February",

  description:
    "There is a softness in the air — a time made for meaningful travel. Picture overwater villas, candlelit dinners by the sea, or elegant cities filled with culture and charm. For couples, it’s a season of romance; for families, a chance to reconnect somewhere beautiful; for solo travellers, a quiet indulgence. The right journey now feels intimate and effortless, with warmth, luxury, and calm in perfect balance. Travel becomes a reminder that the best moments are often the ones you choose intentionally.",

  ctaText: "GET IN TOUCH",
  ctaLink: "/contact",

  packages: [
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Romantic Greece Escape",
      duration: "6 Nights / 7 Days",
      description: "Santorini, Athens, private sailing, slow living.",
      link: "/packages/greece-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
  ],

  followingMonths: [
    { slug: "march", title: "March", image: "/images/month/March.webp" },
    { slug: "april", title: "April", image: "/images/month/April.webp" },
    { slug: "may", title: "May", image: "/images/month/May.webp" },
    { slug: "explore", title: "Explore the year", image: "/images/month/explore.png" },

  ],
},



// march
{
  slug: "march",
  title: "Romance, Warmth, and Escape",
  heroImage: "/images/month/HeroImageMarch.webp",
  heroText: "Where to Travel This March",

  description:
    "There is a softness in the air — a time made for meaningful travel. Picture overwater villas, candlelit dinners by the sea, or elegant cities filled with culture and charm. For couples, it’s a season of romance; for families, a chance to reconnect somewhere beautiful; for solo travellers, a quiet indulgence. The right journey now feels intimate and effortless, with warmth, luxury, and calm in perfect balance. Travel becomes a reminder that the best moments are often the ones you choose intentionally.",

  ctaText: "GET IN TOUCH",
  ctaLink: "/contact",

  packages: [
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Romantic Greece Escape",
      duration: "6 Nights / 7 Days",
      description: "Santorini, Athens, private sailing, slow living.",
      link: "/packages/greece-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
  ],

  followingMonths: [
    { slug: "april", title: "April", image: "/images/month/April.webp" },
    { slug: "may", title: "May", image: "/images/month/May.webp" },
    { slug: "june", title: "June", image: "/images/month/June.webp" },
    { slug: "explore", title: "Explore the year", image: "/images/month/explore.png" },

  ],
},


// april
{
  slug: "april",
  title: "Spring at Its Most Beautiful",
  heroImage: "/images/month/HeroImageApril.webp",
  heroText: "Where to Travel This April",

  description:
"This is one of the most uplifting times to travel. Landscapes are in bloom, cities feel vibrant, and the world carries a gentle sense of renewal. It’s ideal for countryside retreats, cultural capitals, and coastal escapes before summer arrives. Families love the ease of the season, couples find romance in every street and sunset, and groups enjoy experiences that feel perfectly balanced. Travel now is about colour, comfort, and beauty — discovering destinations at their seasonal best, with luxury that feels effortless.",
  ctaText: "GET IN TOUCH",
  ctaLink: "/contact",

  packages: [
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Romantic Greece Escape",
      duration: "6 Nights / 7 Days",
      description: "Santorini, Athens, private sailing, slow living.",
      link: "/packages/greece-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
  ],

  followingMonths: [
    { slug: "may", title: "May", image: "/images/month/May.webp" },
    { slug: "june", title: "June", image: "/images/month/June.webp" },
    { slug: "july", title: "July", image: "/images/month/July.webp" },
    { slug: "explore", title: "Explore the year", image: "/images/month/explore.png" },

  ],
},

// may
{
  slug: "may",
  title: "Golden Days Before Summer Arrives (May)",
  heroImage: "/images/month/HeroImageMay.webp",
  heroText: "Where to Travel This May",

  description:
"The world feels warm, open, and beautifully in-between — just before peak season begins. This is the time for vineyard journeys, iconic Mediterranean coastlines, and cultural cities at their most inviting. Whether you’re planning a romantic escape, a family holiday, or a friends’ getaway, experiences feel expansive and unhurried. Long evenings, perfect weather, and destinations full of life make travel now deeply rewarding. It’s a season of indulgence — where every journey feels sunlit, elegant, and perfectly timed.",
  ctaText: "GET IN TOUCH",
  ctaLink: "/contact",

  packages: [
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Romantic Greece Escape",
      duration: "6 Nights / 7 Days",
      description: "Santorini, Athens, private sailing, slow living.",
      link: "/packages/greece-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
  ],

  followingMonths: [
    { slug: "june", title: "June", image: "/images/month/June.webp" },
    { slug: "july", title: "July", image: "/images/month/July.webp" },
    { slug: "august", title: "August", image: "/images/month/August.webp" },
    { slug: "explore", title: "Explore the year", image: "/images/month/explore.png" },

  ],
},

// june
{
  slug: "june",
  title: "Summer Begins in Style (June)",
  heroImage: "/images/month/HeroImgJune.webp",
  heroText: "",

  description:
"A sense of anticipation fills the air. This is the season for island escapes, sailing along dramatic coastlines, and iconic summer destinations before they reach their busiest. Imagine beach clubs, mountain air, or elegant cities under endless blue skies. Families find adventure, couples find effortless romance, and groups find celebration in every shared moment. Travel now feels bright and easy — the beginning of summer done beautifully, with experiences shaped by warmth, freedom, and unforgettable luxury.",
  ctaText: "GET IN TOUCH",
  ctaLink: "/contact",

  packages: [
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Romantic Greece Escape",
      duration: "6 Nights / 7 Days",
      description: "Santorini, Athens, private sailing, slow living.",
      link: "/packages/greece-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
  ],

  followingMonths: [
    { slug: "july", title: "July", image: "/images/month/July.webp" },
    { slug: "august", title: "August", image: "/images/month/August.webp" },
    { slug: "september", title: "September", image: "/images/month/Sept.webp" },
    { slug: "explore", title: "Explore the year", image: "/images/month/explore.png" },

  ],
},

// july
{
  slug: "july",
  title: "Escape Into Cool Horizons (July)",
  heroImage: "/images/month/HeroImgJuly.webp",
  heroText: "Where to Travel This July",

  description:
"As the heat rises, the best journeys offer contrast — cooler landscapes, open skies, and space to breathe differently. Think alpine lakes, northern coastlines, or even wildlife adventures where nature feels extraordinary. For families, it’s a season of discovery; for couples, a refreshing retreat; for groups, an unforgettable shared escape. Travel now is not just about getting away — it’s about finding places that feel expansive, elevated, and alive. This is the luxury of summer at its most freeing.",
  ctaText: "GET IN TOUCH",
  ctaLink: "/contact",

  packages: [
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Romantic Greece Escape",
      duration: "6 Nights / 7 Days",
      description: "Santorini, Athens, private sailing, slow living.",
      link: "/packages/greece-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
  ],

  followingMonths: [
    { slug: "august", title: "August", image: "/images/month/August.webp" },
    { slug: "september", title: "September", image: "/images/month/Sept.webp" },
    { slug: "october", title: "October", image: "/images/month/October.webp" },
    { slug: "explore", title: "Explore the year", image: "/images/month/explore.png" },

  ],
},


// aug
{
  slug: "august",
  title: "The Height of Summer, Done Beautifully (August)",
  heroImage: "/images/month/HeroImgAugust.webp",
  heroText: "Where to Travel This August",

  description:
"This is the season of bold energy and iconic experiences. Picture private villas, yacht days on glamorous coastlines, cultural festivals in world-class cities, or island luxury at its peak. Whether you’re travelling with family, friends, or as a couple, journeys now feel celebratory and full of colour. The world is vibrant, the days are long, and every moment carries a sense of indulgence. Travel becomes a statement — a season lived beautifully, with memories made at the highest level.",
  ctaText: "GET IN TOUCH",
  ctaLink: "/contact",

  packages: [
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Romantic Greece Escape",
      duration: "6 Nights / 7 Days",
      description: "Santorini, Athens, private sailing, slow living.",
      link: "/packages/greece-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
  ],

  followingMonths: [
    { slug: "september", title: "September", image: "/images/month/Sept.webp" },
    { slug: "october", title: "October", image: "/images/month/October.webp" },
    { slug: "november", title: "November", image: "/images/month/November.webp" },
    { slug: "explore", title: "Explore the year", image: "/images/month/explore.png" },

  ],
},

// september
{
  slug: "september",
  title: "The World Feels Yours Again (September)",
  heroImage: "/images/month/HeroImgSep.webp",
  heroText: "Where to Travel This September",

  description:
"The crowds fade, the pace softens, and destinations feel calmer, richer, more personal. This is the season for vineyard harvests, golden coastlines, fashion-city escapes, and warm seas without the rush of summer. Families enjoy ease, couples find space, and groups travel with a sense of elegance and comfort. Experiences feel perfectly timed — cultural, scenic, and effortlessly luxurious. Travel now is about balance: exploring the world when it finally feels like it belongs to you again.",
  ctaText: "GET IN TOUCH",
  ctaLink: "/contact",

  packages: [
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Romantic Greece Escape",
      duration: "6 Nights / 7 Days",
      description: "Santorini, Athens, private sailing, slow living.",
      link: "/packages/greece-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
  ],

  followingMonths: [
    { slug: "october", title: "October", image: "/images/month/October.webp" },
    { slug: "november", title: "November", image: "/images/month/November.webp" },
    { slug: "december", title: "December", image: "/images/month/December.webp" },
    { slug: "explore", title: "Explore the year", image: "/images/month/explore.png" },

  ],
},

// october
{
  slug: "october",
  title: "Autumn’s Most Cinematic Chapter (October)",
  heroImage: "/images/month/HeroImageOct.webp",
  heroText: "Where to Travel This October",

  description:
"There is rare atmosphere in the world now. Think lantern-lit riads, heritage streets, autumn festivals, and landscapes turning gold and crimson. It’s the season for culture, storytelling, and journeys with texture — from maple-lined temples in Japan to desert evenings under the stars. Whether you’re travelling as a couple, with friends, or planning something meaningful for family, every destination feels immersive. Travel now becomes more than an escape — it feels like stepping into a film.",
  ctaText: "GET IN TOUCH",
  ctaLink: "/contact",

  packages: [
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Romantic Greece Escape",
      duration: "6 Nights / 7 Days",
      description: "Santorini, Athens, private sailing, slow living.",
      link: "/packages/greece-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
  ],

  followingMonths: [
    { slug: "november", title: "November", image: "/images/month/November.webp" },
    { slug: "december", title: "December", image: "/images/month/December.webp" },
    { slug: "january", title: "January", image: "/images/month/January.webp" },
    { slug: "explore", title: "Explore the year", image: "/images/month/explore.png" },

  ],
},


// nov
{
  slug: "november",
  title: "A Quiet Escape Before the Year Ends (November)",
  heroImage: "/images/month/HeroImageNov.webp",
  heroText: "Where to Travel This November",

  description:
"A pause arrives before the festive rush begins. This is the perfect season for desert serenity, wellness retreats, cultural depth, and destinations that feel restorative and unrushed. Imagine peaceful islands, vibrant bazaars, or safari landscapes under wide skies. Couples find quiet luxury, families reconnect in calm settings, and groups experience something truly different. Travel now feels like a breath — a chance to reset beautifully, with warmth, stillness, and unforgettable experiences before the year turns.",
  ctaText: "GET IN TOUCH",
  ctaLink: "/contact",

  packages: [
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Romantic Greece Escape",
      duration: "6 Nights / 7 Days",
      description: "Santorini, Athens, private sailing, slow living.",
      link: "/packages/greece-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
  ],

  followingMonths: [
    { slug: "december", title: "December", image: "/images/month/December.webp" },
    { slug: "january", title: "January", image: "/images/month/January.webp" },
    { slug: "february", title: "February", image: "/images/month/February.webp" },
    { slug: "explore", title: "Explore the year", image: "/images/month/explore.png" },

  ],
},

// dec
{
  slug: "december",
  title: "End the Year Somewhere Magical (December)",
  heroImage: "/images/month/HeroImageDec.webp",
  heroText: "Where to Travel This December",

  description:
"The world fills with celebration and emotion. This is the season for snowy fairytales, festive city glamour, luxury shopping streets, or sunlit escapes that feel like a reward. Families create memories that last for years, couples find romance in winter lights, and groups gather somewhere unforgettable. Whether it’s a chalet by the fire or a cultural capital dressed for the season, travel now becomes meaningful. This isn’t just where you go — it’s how you choose to finish beautifully.",
  ctaText: "GET IN TOUCH",
  ctaLink: "/contact",

  packages: [
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Romantic Greece Escape",
      duration: "6 Nights / 7 Days",
      description: "Santorini, Athens, private sailing, slow living.",
      link: "/packages/greece-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
  ],

  followingMonths: [
    { slug: "january", title: "January", image: "/images/month/January.webp" },
    { slug: "february", title: "February", image: "/images/month/February.webp" },
    { slug: "march", title: "March", image: "/images/month/March.webp" },
    { slug: "explore", title: "Explore the year", image: "/images/month/explore.png" },

  ],
},
];
