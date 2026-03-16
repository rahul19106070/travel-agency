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



  // japan package 1
   {
    slug: "japan",
    packageSlug: "OKINAWA_BLUE_SERENITY",
    title: "luxury",
    heroImage: "/images/packages/OKINAWA_BLUE_SERENITYHeroImage.webp",

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
"Discover Japan’s tropical side through a journey that blends Ryukyu culture, pristine coral lagoons, and tranquil island landscapes. From lively Okinawan markets and hidden sea caves to the crystal-clear waters of Miyako Island, this experience reveals a slower and more serene rhythm of Japan.\n Far from the bright lights of Tokyo and Osaka lies Okinawa, a chain of subtropical islands where turquoise waters, coral reefs, and centuries-old Ryukyu traditions shape everyday life. This carefully curated journey introduces travelers to Okinawa’s vibrant culture, breathtaking coastlines, and peaceful island atmosphere.\n Begin by exploring lively local markets and food streets before discovering the glowing waters of the famous Blue Cave. Paddle through the lush mangrove forests of Yanbaru National Park and witness Okinawa’s traditional dance performances that reflect the heritage of the Ryukyu Kingdom.\n The journey continues to Miyako Island, home to some of Japan’s clearest waters and most pristine beaches. Here, you’ll experience the birthplace of karate, discover local glass-blowing traditions, and unwind in serene coastal surroundings that capture the true essence of island life.",
   sections: [
  {
    title1: "Day 1–2 — Okinawa Arrival & Island Culture",
    description1:
"Your journey begins on Okinawa’s main island where subtropical landscapes meet centuries-old Ryukyu traditions. After arriving, explore a vibrant local market filled with regional produce and Okinawan delicacies before joining a private cooking experience that introduces the island’s distinctive cuisine. In the evening, enjoy a tasting of Awamori, Okinawa’s traditional rice spirit, offering a warm introduction to the relaxed rhythm of island life.",
    image1: "/images/packages/JapanOkinawaBlock1.webp",
  },
  {
    title1: "Day 3 — Blue Cave & Coastal Serenity",
    description1:
"One of Okinawa’s most spectacular natural wonders awaits at the famous Blue Cave. As sunlight filters through the limestone cavern, the water glows with an extraordinary sapphire hue, creating an unforgettable snorkeling experience. Explore vibrant coral reefs and marine life before spending the afternoon unwinding with a luxurious oceanfront spa experience overlooking the East China Sea.",
    image1: "/images/packages/JapanOkinawaBlock2.webp",
  },
  {
    title1: "Day 4 — Yanbaru Wilderness & Ryukyu Traditions",
    description1:
"Travel north into Yanbaru, a lush subtropical forest recognized for its rare biodiversity. Glide through tranquil mangrove waterways by kayak while surrounded by dense jungle landscapes and unique wildlife. In the evening, experience Okinawa’s rich cultural heritage during a traditional Ryukyu dance performance where rhythmic music and vibrant costumes bring the island’s ancient traditions to life.",
    image1: "/images/packages/JapanOkinawaBlock3.webp",
  },
   {
    title1: "Day 5–6 — Miyako Island Escape ",
    description1:
"A short flight brings you to Miyako Island, home to some of Japan’s clearest waters and most pristine beaches. Begin with a traditional karate experience — the martial art born in Okinawa — before discovering the delicate craft of Ryukyu glass blowing. Evenings are spent paddleboarding across calm lagoons as the sun sinks into the Pacific horizon, while your final day invites complete relaxation at a coral reef spa overlooking Miyako’s turquoise coastline.",
    image1: "/images/packages/JapanOkinawaBlock4.webp",
  }

],

    hotels: [
      {
        name: "Hoshinoya Okinawa",
        image: "/images/packages/OkinawaHotel01.webp",
        desc:"Set along Okinawa’s dramatic coastline, Hoshinoya Okinawa blends contemporary luxury with traditional Ryukyu design. Spacious villas overlook the East China Sea, offering a peaceful retreat surrounded by nature and culture.",
      },
      {
        name: "Shigira Bayside Suite Allamanda – Miyako Island",
        image: "/images/packages/OkinawaHotel02.webp",
        desc:"Located on the serene shores of Miyako Island, this elegant resort offers lush gardens, private suites, and stunning views of the surrounding coral reefs, creating a perfect sanctuary for relaxation.",
      },
       {
        name: "The Ritz-Carlton Kyoto",
        image: "/images/packages/OkinawaHotel03.webp",
        desc:"Nestled within subtropical forest overlooking the coastline, The Ritz-Carlton Okinawa combines refined hospitality with the island’s natural beauty, offering a sophisticated and tranquil island experience.",
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

  // Japan package 2 
   {
    slug: "japan",
    packageSlug: "IMPERIAL_JAPAN",
    title: "IMPERIAL JAPAN: Cities, Culture & Quiet Luxury",
    heroImage: "/images/packages/ImperialJapanHeroImage.webp",

    heroMeta: {
      country: "JAPAN",
      headline: "IMPERIAL JAPAN: Cities, Culture & Quiet Luxury",
      when: " WHEN: March – May | September – November",
      price: {
        label: "$18,000 pp (excluding international flights)",
      },
      duration: "10 Nights",
    },

    intro:
"From the neon-lit avenues of Tokyo to the quiet temples of Kyoto and the samurai heritage of Kanazawa, this journey explores Japan through its most elegant cultural landscapes. Begin in Tokyo where ancient shrines stand beside futuristic skylines and vibrant culinary traditions shape everyday life. Continue to Kanazawa, a beautifully preserved city of samurai districts and refined gardens, before arriving in Kyoto where centuries-old temples, geisha traditions and Zen gardens offer a deeper connection to Japan’s cultural soul. This thoughtfully curated journey blends iconic highlights with quieter moments — from private tea ceremonies and sushi masterclasses to countryside cycling near Lake Biwa — creating an experience that reveals Japan at its most authentic and refined.",
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

  // Japan package 3
   {
    slug: "japan",
    packageSlug: "JAPAN_WINTER_JOURNEY",
    title: "Japan Winter Journey: Culture & Legendary Powder",
    heroImage: "/images/packages/JapanWinterJourneyHeroImage.webp",

    heroMeta: {
      country: "JAPAN",
      headline: "Japan Winter Journey: Culture & Legendary Powder",
      when: " December – February",
      price: {
        label: "$17,500 pp (excluding international flights)",
      },
      duration: "12 Nights",
    },

    intro:
"Japan’s winter season reveals a magical contrast of ancient temples, snow-covered landscapes and world-renowned alpine adventure. This journey begins in Tokyo where vibrant culinary traditions and futuristic cityscapes introduce the rhythm of modern Japan. Continue to Kyoto and Nara where historic temples, sacred shrines and centuries-old traditions offer a deeper glimpse into the country’s cultural soul. The journey then travels through the scenic mountain regions of Takayama and Shirakawa-go, where traditional villages and quiet ryokan hospitality reveal Japan’s rural heritage. Finally, arrive in the snow-rich mountains of Naeba, home to some of the finest powder skiing in the world. Here, days are spent exploring legendary slopes before unwinding in soothing natural hot spring onsens surrounded by serene winter landscapes - a perfect balance of culture, adventure and alpine luxury.",
   sections: [
  {
    title1: "Day 1–3 — Tokyo: Arrival, Culinary Culture & City Exploration",
    description1:
"Your journey begins in Tokyo where Japan’s cutting-edge modernity meets timeless traditions. After arriving, settle into the city and enjoy your first moments exploring its vibrant atmosphere. Discover the legendary Tsukiji Market alongside a local expert before participating in a private sushi-making experience that reveals the craftsmanship behind Japan’s most iconic cuisine. Continue exploring Tokyo’s fascinating districts including Akihabara’s electric streets and historic neighborhoods where ancient temples and modern culture blend seamlessly.",
    image1: "/images/packages/JapanWinterJourneyBlock1.webp",
  },
  {
    title1: "Day 4–6 — Kyoto, Nara & Japan’s Historic Heart",
    description1:
"Travel by bullet train to Kyoto, the cultural heart of Japan. Wander through historic temple districts, peaceful shrines and scenic viewpoints that reveal the city’s timeless beauty. Continue to nearby Nara where the famous Great Buddha temple stands as one of Japan’s most impressive cultural landmarks. The journey then leads into the mountain regions of Takayama and Shirakawa-go where UNESCO-listed villages and traditional ryokan hospitality offer a glimpse into Japan’s rural heritage and architectural traditions.",
    image1: "/images/packages/JapanWinterJourneyBlock2.webp",
  },
  {
    title1: "Day 7–10 — Naeba: Legendary Powder Skiing & Alpine Adventure",
    description1:
"Arrive in the alpine resort town of Naeba, one of Japan’s most famous ski destinations located in the snow-rich mountains of Niigata Prefecture. Known for its exceptional powder snow and extensive ski terrain, Naeba offers remarkable conditions for skiers of all levels. Spend your days carving through pristine slopes and enjoying breathtaking mountain views. Evenings are dedicated to relaxation in traditional Japanese onsens where steaming mineral waters provide the perfect recovery after a day on the mountain.",
    image1: "/images/packages/JapanWinterJourneyBlock3.webp",
  },
   {
    title1: "Day 11–12 — Return to Tokyo & Departure",
    description1:
"After your alpine adventure, return to Tokyo for your final evening in Japan. Take time to explore the city at your own pace, perhaps discovering hidden ramen bars or stylish neighbourhoods before reflecting on a journey that blended cultural exploration with unforgettable winter landscapes. The following day, depart Japan carrying memories of ancient temples, alpine powder and the unique traditions that make the country so captivating.",
    image1: "/images/packages/JapanWinterJourneyBlock4.webp",
  }

],

    hotels: [
      {
        name: "Aman Tokyo",
        image: "/images/packages/JapanWinterJourneyHotel01.webp",
        desc:"A serene urban sanctuary rising above Tokyo’s skyline, Aman Tokyo combines minimalist Japanese design with breathtaking city views and world-class wellness facilities.",
      },
      {
        name: "Gora Kadan (Traditional Ryokan Experience)",
        image: "/images/packages/JapanWinterJourneyHotel02.webp",
        desc:"Once a retreat for the Imperial family, Gora Kadan offers one of Japan’s most refined ryokan experiences, combining traditional hospitality with private hot spring baths and exquisite kaiseki cuisine.",
      },
       {
        name: "Naeba Prince Hotel",
        image: "/images/packages/JapanWinterJourneyHotel03.webp",
        desc:"Located directly on the slopes of the Naeba ski resort, this mountain retreat provides immediate access to some of Japan’s finest powder skiing while offering panoramic alpine views and relaxing onsen facilities.",
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

  // Japan package 4
   {
    slug: "japan",
    packageSlug: "YIN_YAG_JAPAN",
    title: "Yin & Yang of Japan: Tokyo to Kyoto Slow Luxury",
    heroImage: "/images/packages/YingYangHeroImage.webp",

    heroMeta: {
      country: "JAPAN",
      headline: "Yin & Yang of Japan: Tokyo to Kyoto Slow Luxury",
      when: " December – February",
      price: {
        label: "$14,500 per person (excluding international flights)",
      },
      duration: "8 Nights",
    },

    intro:
"This journey explores the beautiful contrast that defines Japan — the vibrant energy of Tokyo and the serene traditions of Kyoto. Begin in Tokyo where futuristic architecture, world-class cuisine and lively neighborhoods reveal the dynamic spirit of modern Japan. From the stylish avenues of Ginza to the peaceful forest of Meiji Shrine, Tokyo offers a fascinating balance of innovation and heritage. Continue by bullet train to Kyoto, the cultural heart of the country, where ancient temples, tea ceremonies and historic streets create a slower rhythm of discovery. Here, explore lantern-lit alleys, tranquil Zen gardens and traditional markets before retreating to the bamboo forests and countryside villages surrounding Arashiyama. Blending urban sophistication with rural serenity, this journey reveals the perfect harmony between Japan’s modern and timeless worlds.",
   sections: [
  {
    title1: "Day 1–3 — Tokyo: Modern Energy & Cultural Discoveries",
    description1:
"Arrive in Tokyo and begin exploring one of the world’s most dynamic cities. Stroll through the elegant streets of Ginza, known for its luxury boutiques and refined dining scene. Continue with visits to Meiji Shrine, a peaceful forest sanctuary in the heart of the city, before wandering through Omotesando’s stylish avenues and contemporary museums. Tokyo’s culinary culture comes alive with a visit to the famous Tsukiji Market followed by an immersive sushi experience where you’ll learn the craftsmanship behind Japan’s most iconic dish.",
    image1: "/images/packages/YingYangBlock1.webp",
  },
  {
    title1: "Day 4–5 — Kyoto: Temples, Markets & Timeless Traditions",
    description1:
"Travel by bullet train to Kyoto where Japan’s cultural heritage unfolds through its temples, historic districts and traditional tea houses. Begin with a visit to the famous Golden Pavilion before experiencing the elegance of a traditional tea ceremony guided by a local tea master. Continue exploring Kyoto’s vibrant Nishiki Market and wander through the atmospheric streets of Gion where geisha traditions continue to flourish. Visits to iconic temples such as Kiyomizu-dera reveal the spiritual heart of this ancient city.",
    image1: "/images/packages/YingYangBlock2.webp",
  },
  {
    title1: "Day 6–7 — Kyoto Countryside: Bamboo Forests & Rural Kyoto",
    description1:
"Venture beyond Kyoto’s historic center to discover the tranquil landscapes of its surrounding countryside. Walk through the famous bamboo groves of Arashiyama where towering green stalks create a serene natural cathedral. Continue exploring rural Kyoto villages and scenic river landscapes before retreating to a traditional ryokan where hot spring baths, seasonal cuisine and peaceful garden surroundings offer a deeply relaxing experience.",
    image1: "/images/packages/YingYangBlock3.webp",
  },
   {
    title1: "Day 8–9 — Kyoto Slow Living & Departure",
    description1:
"Your final days invite a slower immersion into Kyoto’s refined lifestyle. Enjoy time to explore quiet temples, hidden gardens and charming neighborhood streets at your own pace. Whether visiting artisan shops, enjoying a peaceful riverside walk or simply absorbing the city’s timeless atmosphere, Kyoto offers a graceful conclusion to the journey. Depart Japan with a deeper appreciation of the harmony between its vibrant modern cities and its enduring cultural traditions.",
    image1: "/images/packages/YingYangBlock4.webp",
  }

],

    hotels: [
      {
        name: "Aman Tokyo",
        image: "/images/packages/YingYangHotel01.webp",
        desc:"A refined urban sanctuary rising above Tokyo’s skyline, Aman Tokyo blends minimalist Japanese design with sweeping city views and exceptional wellness experiences.",
      },
      {
        name: "The Ritz-Carlton Kyoto",
        image: "/images/packages/YingYangHotel02.webp",
        desc:"Located along the Kamogawa River, this elegant hotel combines Kyoto’s traditional craftsmanship with contemporary luxury, offering a serene base for exploring the city’s historic districts.",
      },
       {
        name: "Hoshinoya Kyoto",
        image: "/images/packages/YingYangHotel03.webp",
        desc:"Hidden within the forested hills of Arashiyama, Hoshinoya Kyoto offers a secluded ryokan-style retreat accessible only by boat, where nature, design and traditional hospitality come together in perfect harmony.",
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

   // Japan package 5
   {
    slug: "japan",
    packageSlug: "SOUL_OF_JAPAN",
    title: "THE SOUL OF JAPAN: A CULTURAL IMMERSION",
    heroImage: "/images/packages/SoulJapanHeroImage.webp",

    heroMeta: {
      country: "JAPAN",
      headline: "THE SOUL OF JAPAN: A CULTURAL IMMERSION",
      when: "March – May | September – November",
      price: {
        label: "$14,900 per person (excluding international flights)",
      },
      duration: "12 Nights",
    },

    intro:
"Japan reveals itself slowly — not through monuments alone, but through rituals, craftsmanship, and centuries-old traditions that continue to shape everyday life.\n This journey invites you to experience the soul of Japan beyond the obvious highlights. From Tokyo’s refined museums and samurai heritage to Kyoto’s artistic traditions and sacred temples, and onward to the preserved alpine town of Takayama, the trip unfolds as a deep cultural immersion.\n Meet artisans, explore historic neighborhoods, taste regional cuisine, and witness the quiet beauty of traditions that have endured for generations. Designed for travelers seeking authenticity, elegance, and meaning, this itinerary blends cultural discovery with refined comfort and thoughtful pacing.",
   sections: [
  {
    title1: "Day 1–4 | Tokyo – Culture, Heritage & Modern Japan",
    description1:
"Your journey begins in Tokyo, where centuries of tradition exist alongside contemporary sophistication. Explore the National Museum’s remarkable collections, uncover the legacy of the samurai, and walk through the sacred pathways of Meiji Shrine to learn about Shinto traditions.\n Days here blend cultural discovery with culinary exploration — from sushi tastings to architecture-focused walks that reveal Tokyo’s evolving design landscape.",
    image1: "/images/packages/SoulJapanBlock1.webp",
  },
  {
    title1: "Day 5–8 | Kyoto – Artisans, Temples & Traditions",
    description1:
"Travel by bullet train to Kyoto, Japan’s historic cultural capital. Here, centuries-old traditions are preserved through artisans and temples that still shape daily life.\n Visit ceramic studios where generations of potters continue their craft, explore bustling local markets, and experience the elegance of a traditional tea ceremony. The slower rhythm of Kyoto allows time to absorb its temples, gardens, and hidden streets.",
    image1: "/images/packages/SoulJapanBlock2.webp",
  },
  {
    title1: "Day 9–11 | Takayama – Alpine Heritage & Old Japan",
    description1:
"Journey deep into the Japanese Alps to Takayama, one of the country’s best-preserved historic towns.\n Stroll through Edo-era streets lined with wooden merchant houses, visit traditional sake breweries, and explore the Hida Folk Village — an open-air museum showcasing rural Japanese life and architecture. Surrounded by mountain landscapes, Takayama offers a glimpse into Japan’s rural heritage.",
    image1: "/images/packages/SoulJapanBlock3.webp",
  },
   {
    title1: "Day 12–13 | Tokyo – Return & Departure",
    description1:
"Return to Tokyo for your final evening in Japan. Use this time for last discoveries — perhaps revisiting a favorite neighborhood, enjoying a refined farewell dinner, or shopping for unique artisan souvenirs.\n Depart the following day with a deeper appreciation of Japan’s cultural soul.",
    image1: "/images/packages/SoulJapanBlock4.webp",
  }

],

    hotels: [
      {
        name: "Aman Tokyo",
        image: "/images/packages/SoulJapanHotel01.webp",
        desc:"A serene urban sanctuary offering minimalist design, panoramic city views, and exceptional service in the heart of Tokyo.",
      },
      {
        name: "The Ritz-Carlton Kyoto",
        image: "/images/packages/SoulJapanHotel02.webp",
        desc:"Set along the Kamogawa River, this refined property blends modern luxury with traditional Kyoto aesthetics.",
      },
       {
        name: "Hotel Associa Takayama Resort",
        image: "/images/packages/SoulJapanHotel03.webp",
        desc:"A mountain retreat overlooking the Japanese Alps, offering spacious rooms and relaxing hot-spring baths.",
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

  // Japan package 6
   {
    slug: "japan",
    packageSlug: "ECHOES_OF_OLD_JAPAN",
    title: "ECHOES OF OLD JAPAN",
    heroImage: "/images/packages/ECHOESOFOLDJAPANHeroImage.webp",

    heroMeta: {
      country: "JAPAN",
      headline: "ECHOES OF OLD JAPAN",
      when: "March – May | September – November",
      price: {
        label: " $14,800 per person (excluding international flights)",
      },
      duration: "12 Nights",
    },

    intro:
"This journey explores the deeper cultural layers of Japan - from the disciplined traditions of samurai and sumo to the quiet elegance of Kyoto’s temples and the contemporary creativity of Naoshima’s art islands.\n Beginning in Tokyo, the experience immerses travelers in Japan’s martial heritage through visits to samurai collections and live sumo traditions. The journey then continues to Kyoto’s historic streets before concluding on Naoshima, where modern art blends seamlessly with island landscapes.",
   sections: [
  {
    title1: "DAY 1–5 — TOKYO: SAMURAI HERITAGE & SUMO TRADITIONS",
    description1:
"Your journey begins in Tokyo with an exploration of Japan’s martial traditions. Visit a samurai sword museum to understand the craftsmanship behind these historic weapons before observing the disciplined world of sumo wrestling through a stable visit and the excitement of a Grand Sumo tournament.\n Between these experiences, explore shrines, historic neighbourhoods, and Tokyo’s remarkable culinary scene.",
    image1: "/images/packages/ECHOESOFOLDJAPANBlock1.webp",
  },
  {
    title1: "DAY 6–9 — KYOTO: TEMPLES, TEA & TIMELESS STREETS",
    description1:
"Travel by bullet train to Kyoto, Japan’s cultural capital. Here you will wander through ancient temples, lantern-lit geisha districts, and hidden streets filled with traditional shops and restaurants.\n A highlight of this section is a private tea ceremony, where the rituals and philosophy of Japanese hospitality are revealed in an intimate setting.",
    image1: "/images/packages/ECHOESOFOLDJAPANBlock2.webp",
  },
  {
    title1: "DAY 10–12 — NAOSHIMA: JAPAN’S ART ISLAND",
    description1:
"Continue to Naoshima, an island in the Seto Inland Sea that has become one of the world’s most unique art destinations.\n Explore the famous Art House Project, contemporary museums designed by renowned architects, and galleries that merge art with landscape. The island offers a reflective conclusion to the journey, where culture, nature, and design come together.",
    image1: "/images/packages/ECHOESOFOLDJAPANBlock3.webp",
  },
   {
    title1: "DAY 13 — DEPARTURE",
    description1:
"After a final morning on Naoshima, transfer onward for your international departure, concluding a journey that reveals Japan’s historic traditions alongside its contemporary artistic spirit.",
    image1: "/images/packages/ECHOESOFOLDJAPANBlock4.webp",
  }

],

    hotels: [
      {
        name: "Aman Tokyo",
        image: "/images/packages/ECHOESOLDJAPANHotel01.webp",
        desc:"A serene urban sanctuary offering minimalist design, panoramic skyline views, and exceptional service.",
      },
      {
        name: "The Ritz-Carlton Kyoto",
        image: "/images/packages/ECHOESOLDJAPANHotel02.webp",
        desc:"Set beside the Kamogawa River, combining Kyoto’s heritage with modern luxury.",
      },
       {
        name: "BENESSE HOUSE NAOSHIMA",
        image: "/images/packages/ECHOESOLDJAPANHotel03.webp",
        desc:"An extraordinary art hotel where contemporary architecture, museum spaces, and island nature coexist.",
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

   // Japan package 7
   {
    slug: "japan",
    packageSlug: "FLAVOURS_OF_JAPAN",
    title: "FLAVOURS OF JAPAN",
    heroImage: "/images/packages/FLAVOURSOFJAPANHeroImage.webp",

    heroMeta: {
      country: "JAPAN",
      headline: "FLAVOURS OF JAPAN",
      when: "March – May | September – November",
      price: {
        label: "$15,400 per person (excluding international flights)",
      },
      duration: "12 Nights",
    },

    intro:
"Japan’s cuisine is as rich and diverse as its culture. This culinary journey explores the country through its most beloved traditions — from the bustling seafood markets of Tokyo to the refined artistry of kaiseki dining and the vibrant street food culture of Osaka.\n Travelers will experience hands-on cooking classes, local market explorations, countryside farm-to-table meals, and authentic neighbourhood food discoveries. The journey concludes in Kyoto with elegant tea ceremonies and traditional sweets workshops, revealing the deeper cultural connections behind Japanese cuisine.",
   sections: [
  {
    title1: "DAY 1-3 - TOKYO: SEAFOOD MARKETS & CULINARY TRADITIONS",
    description1:
"Your culinary adventure begins in Tokyo, one of the world’s most exciting food capitals. Explore the historic Tsukiji Market, sampling fresh sushi and discovering Japan’s seafood culture.\n Participate in a hands-on Japanese cooking class, learn the art of traditional dishes, and enjoy curated sake tastings that reveal the country’s brewing traditions.",
    image1: "/images/packages/ECHOESOFOLDJAPANBlock1.webp",
  },
  {
    title1: "DAY 4-5 - TOKYO COUNTRYSIDE: FARM-TO-TABLE DISCOVERY",
    description1:
"Venture beyond the city to Akigawa Valley, where the focus shifts to Japan’s countryside food culture. Here, local farms and producers showcase seasonal ingredients and traditional cooking methods.\n Enjoy a memorable farm-to-table meal prepared with fresh local produce before returning to Tokyo for further neighbourhood culinary exploration.",
    image1: "/images/packages/ECHOESOFOLDJAPANBlock2.webp",
  },
  {
    title1: "DAY 6-7 - HAKONE: RYOKAN HOSPITALITY & KAISEKI DINING",
    description1:
"Travel to Hakone, a peaceful mountain retreat known for its natural beauty and traditional hot springs. Stay in a classic Japanese ryokan, where the highlight is an elegant kaiseki dinner — a multi-course meal that reflects the season’s finest ingredients.\n Days here combine cultural walks, scenic landscapes, and refined dining experiences.",
    image1: "/images/packages/ECHOESOFOLDJAPANBlock3.webp",
  },
   {
    title1: "DAY 8–13 — OSAKA & KYOTO: STREET FOOD TO REFINED CUISINE",
    description1:
"Continue to Osaka, widely regarded as Japan’s street food capital. Explore the lively districts of Dotonbori and Shinsekai, tasting local favorites such as takoyaki and okonomiyaki during guided food crawls.\n The journey concludes in Kyoto, where culinary traditions become more refined. Visit Nishiki Market, participate in a Japanese sweets workshop, and enjoy a farewell dinner after experiencing a traditional tea ceremony.",
    image1: "/images/packages/ECHOESOFOLDJAPANBlock4.webp",
  }

],

    hotels: [
      {
        name: "Aman Tokyo",
        image: "/images/packages/ECHOESOLDJAPANHotel01.webp",
        desc:"A serene luxury retreat offering minimalist design, exceptional service, and panoramic views of the city skyline.",
      },
      {
        name: "GORA KADAN - HAKONE",
        image: "/images/packages/ECHOESOLDJAPANHotel02.webp",
        desc:"A celebrated ryokan combining traditional hospitality with refined modern comforts and relaxing hot springs.",
      },
       {
        name: "THE RITZ-CARLTON KYOTO",
        image: "/images/packages/ECHOESOLDJAPANHotel03.webp",
        desc:"A riverside sanctuary blending Kyoto’s historic atmosphere with contemporary luxury.",
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