// app/data/packageData.ts

export type Package = {
  slug: string;          // destination slug
  packageSlug: string;   // package slug
  title: string;
  heroImage: string;

  heroMeta: {
    country: string;
    headline: string;
    when: string;
    price: {
      label: string;
      note?: string;
    };
    duration: string;
  };
   similarPackages?: {
    slug: string
    packageSlug: string
    title: string
    heroImage: string
    heroMeta: {
      duration: string
      headline: string
    }
  }[]

  intro: string;

 sections: {
  title1: string;
  description1: string;
  image1: string;
}[];

  hotels: {
    name: string;
    image: string;
    desc:string;
  }[];
};
export const PACKAGES: Package[] = [
  {
    slug: "switzerland",
    packageSlug: "classic-alps",
    title: "Classic Alpine Escape",
    heroImage: "/images/demo.avif",

    heroMeta: {
      country: "SWITZERLAND",
      headline: "A LUXURY JOURNEY THROUGH THE ALPS",
      when: "Year round",
      price: {
        label: "From £11,900pp",
      },
      duration: "10 nights",
    },

    intro:
      " Shake off thoughts of the Mediterranean – for Northern Italy is having its time in the sun. It’s long held a reputation as home to Italy’s most inimitably stylish cities, however, it’s keen to show off it’s got the landscapes and the cuisine too. With that in mind, spend 12-days taking in the best experiences, hotels and unknown wonders the north has to offer. We’ll take you from private boat trips to the limonaie of Lake Garda to stargazing in the peaks of the Dolomites and hiking into mountain rifugios before winding up with a private Prosecco tasting in the newly UNESCO-dubbed DOCG region of Conegliano Valdobbiadene. Bookended on either end by the culture of Verona and Venice, this makes for one irresistible summer getaway. This curated alpine journey takes you through snow-capped peaks, serene lakes and charming mountain villages. A seamless blend of nature and refined luxury.",
sections: [
  {
    title1: "Zermatt & The Matterhorn",
    description1:
      "Flying into Venice, your trip begins an hour and a half due west in the storied town of Verona. Immortalised as the home of Shakespeare’s star-crossed lovers, Romeo & Juliet, you’ll spend your first night at the equally historic Hotel Due Torri. Take some time to explore the sights, from the Arena to the Piazza Delle Erbe, before leaving the city behind tomorrow for the tranquil banks of Lake Garda.",
    image1: "/images/zermatt.jpg",
  },
  {
    title1: "Interlaken Adventures",
    description1:
      "Nestled between Lake Thun and Lake Brienz, Interlaken is the gateway to the Swiss Alps. Enjoy breathtaking landscapes, thrilling adventure sports, and peaceful lakeside moments while exploring this charming alpine town.",
    image1: "/images/interlaken.jpg",
  },
  {
    title1: "Jungfrau Glacier Views",
    description1:
      "Travel to the Top of Europe at Jungfraujoch where snow-covered peaks stretch endlessly across the horizon. Walk through the Ice Palace, experience the alpine air, and capture unforgettable views of the glacier.",
    image1: "/images/jungfrau.jpg",
  }
],

    hotels: [
      {
        name: "The Chedi Andermatt",
        image: "/images/switzerland/hotels/chedi.jpg",
        desc:"ghd",
      },
      {
        name: "Badrutt’s Palace",
        image: "/images/switzerland/hotels/badrutts.jpg",
        desc:"ghd",
      },
    ],
  },



  // japan
   {
    slug: "japan",
    packageSlug: "c",
    title: "luxury",
    heroImage: "/images/packages/ImperialJapanHeroImage.webp",

    heroMeta: {
      country: "JAPAN",
      headline: "OKINAWA BLUE SERENITY",
      when: " April – October",
      price: {
        label: "$9,250 pp (excluding international flights)",
      },
      duration: "6 Nights",
    },

    intro:
"Discover Japan’s tropical side through a journey that blends Ryukyu culture, pristine coral lagoons, and tranquil island landscapes. From lively Okinawan markets and hidden sea caves to the crystal-clear waters of Miyako Island, this experience reveals a slower and more serene rhythm of Japan.\n Far from the bright lights of Tokyo and Osaka lies Okinawa, a chain of subtropical islands where turquoise waters, coral reefs, and centuries-old Ryukyu traditions shape everyday life. This carefully curated journey introduces travelers to Okinawa’s vibrant culture, breathtaking coastlines, and peaceful island atmosphere. \n Begin by exploring lively local markets and food streets before discovering the glowing waters of the famous Blue Cave. Paddle through the lush mangrove forests of Yanbaru National Park and witness Okinawa’s traditional dance performances that reflect the heritage of the Ryukyu Kingdom.\n The journey continues to Miyako Island, home to some of Japan’s clearest waters and most pristine beaches. Here, you’ll experience the birthplace of karate, discover local glass-blowing traditions, and unwind in serene coastal surroundings that capture the true essence of island life.",
   sections: [
  {
    title1: "Day 1–3 - Tokyo: Arrival, Culture & First Encounters",
    description1:
"Your journey begins in Tokyo, where Japan’s vibrant modernity meets centuries-old tradition. After arriving, settle into the city with relaxing views over the Imperial Palace gardens before exploring Tokyo’s most iconic neighborhoods. Visit the peaceful Meiji Shrine set within a forested park before wandering through the creative streets of Harajuku and the famous Shibuya Crossing. The experience continues with a visit to the historic Tsukiji Market where you’ll discover Japan’s rich culinary heritage and participate in a sushi masterclass with an expert chef. Later, explore the historic district of Asakusa where traditional temples and lantern-lit streets reveal Tokyo’s timeless character.",
    image1: "/images/packages/ImperialJapanBlock1.webp",
  },
  {
    title1: "Day 4–5 - Tokyo & Kanazawa: Local Traditions & Samurai Heritage",
    description1:
"Tokyo’s cultural depth unfolds further with a visit to a traditional sumo stable where you can observe the discipline behind Japan’s national sport. In the evening, enjoy a relaxed izakaya crawl through atmospheric alleys where locals gather for small plates and sake. The following day, travel by bullet train to Kanazawa, a beautifully preserved city known for its samurai heritage and refined culture. Wander through the Nagamachi Samurai District before visiting Kenroku-en Garden, widely considered one of Japan’s most beautiful landscape gardens. The day concludes with a peaceful stay in a traditional ryokan where seasonal kaiseki cuisine offers a true taste of Japanese hospitality.",
    image1: "/images/packages/ImperialJapanBlock2.webp",
  },
  {
    title1: "Day 6–8 - Kyoto: Temples, Geisha Traditions & Timeless Culture",
    description1:
"Arriving in Kyoto feels like stepping into Japan’s living history. Begin with a visit to Kiyomizu-dera Temple before wandering through Kyoto’s historic streets lined with wooden houses and traditional tea shops. Continue exploring the atmospheric district of Gion where geisha traditions still flourish today. Over the following days, visit Kyoto’s most iconic landmarks including the Golden Pavilion and tranquil Zen gardens. The experience deepens with a traditional tea ceremony guided by a local tea master, offering insight into one of Japan’s most elegant cultural rituals.",
    image1: "/images/packages/ImperialJapanBlock3.webp",
  },
   {
    title1: "Day 9–11 - Lake Biwa & Tokyo: Countryside Calm & Farewell",
    description1:
"Leaving the historic streets of Kyoto behind, journey into the peaceful countryside surrounding Lake Biwa, Japan’s largest freshwater lake. Cycle through quiet rural landscapes dotted with farms and traditional villages before enjoying a farm-to-table lunch prepared with seasonal local ingredients. This slower pace provides a refreshing contrast to Japan’s vibrant cities. The journey concludes with a return to Tokyo where a final evening is spent enjoying a relaxed ramen tasting experience before departing Japan with memories of its culture, cuisine and timeless beauty.",
    image1: "/images/packages/ImperialJapanBlock4.webp",
  }

],

    hotels: [
      {
        name: "Aman Tokyo",
        image: "/images/packages/ImperialHotel01.webp",
        desc:"Located high above the city in the Otemachi district, Aman Tokyo offers a serene retreat combining minimalist Japanese design with sweeping skyline views and world-class wellness facilities.",
      },
      {
        name: "Beniya Mukayu – Kanazawa",
        image: "/images/packages/ImperialHotel02.webp",
        desc:"A tranquil ryokan experience that blends traditional Japanese hospitality with contemporary design, offering peaceful garden surroundings and exceptional seasonal cuisine.",
      },
       {
        name: "The Ritz-Carlton Kyoto",
        image: "/images/packages/ImperialHotel03.webp",
        desc:"Set beside the Kamogawa River, this elegant property combines Kyoto’s traditional craftsmanship with refined modern luxury, providing an ideal base for exploring the city’s historic temples and districts.",
      },
    ],

    similarPackages: [
  {
    slug: "japan",
    packageSlug: "interlaken-adventure",
    title: "Interlaken Adventure",
    heroImage: "/images/triple-creek-ranch.avif",
    heroMeta: {
      duration: "5 DAYS",
      headline: "Explore lakes and alpine adventures in Interlaken."
    }
  },
  {
    slug: "japan",
    packageSlug: "jungfrau-glacier",
    title: "Jungfrau Glacier Escape",
    heroImage: "/images/triple-creek-ranch.avif",
    heroMeta: {
      duration: "4 DAYS",
      headline: "Experience the Top of Europe and stunning glacier views."
    }
  },
  {
    slug: "japan",
    packageSlug: "lucerne-lake-tour",
    title: "Lucerne Lake Journey",
    heroImage: "/images/triple-creek-ranch.avif",
    heroMeta: {
      duration: "3 DAYS",
      headline: "Historic bridges, lakeside beauty, and mountain scenery."
    }
  }
]
  },
];