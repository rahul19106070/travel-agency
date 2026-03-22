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

  
// switzerland package 1 -- alpine peaks to amalfi dreams    DONE
  {
    slug: "switzerland",
    packageSlug: "ALPINE_PEAKS_TO_AMALFI_DREAMS",
    title: "ALPINE PEAKS TO AMALFI DREAMS",
    heroImage: "/images/packages/ALPINE_PEAKS_TO_AMALFI_DREAMS_HERO.webp",

    heroMeta: {
      country: "SWITZERLAND",
      headline: "ALPINE PEAKS TO AMALFI DREAMS",
      when: " May – October",
      price: {
        label: "$16,800 per person (excluding international flights)",
      },
      duration: "12 Nights",
    },

    intro:
"This journey combines the dramatic beauty of the Swiss Alps with the effortless elegance of the Italian Riviera. Beginning in Zermatt beneath the iconic Matterhorn, the itinerary travels through Switzerland’s most scenic alpine landscapes by legendary rail journeys before descending into the romantic lakes of northern Italy.\n From the refined shores of Lake Como to the sun-drenched cliffs of the Amalfi Coast, the experience blends alpine adventure with Mediterranean luxury — creating a seamless journey through two of Europe’s most iconic destinations.",
    sections: [
  {
    title1: "DAY 1–3 — ZERMATT & ST. MORITZ: ALPINE ICONS",
    description1:
"Your journey begins in the car-free alpine village of Zermatt, set beneath the majestic Matterhorn. Spend your first days exploring Switzerland’s dramatic mountain scenery, with opportunities for cable car excursions to Klein Matterhorn or optional helicopter flights above the Alps.\n From here, board the legendary Glacier Express, one of the world’s most scenic rail journeys, traveling through mountain valleys and panoramic alpine landscapes to the glamorous resort town of St. Moritz.",
    image1: "/images/packages/ALPINE_PEAKS_TO_AMALFI_DREAMS_Block01.webp",
  },
  {
    title1: "DAY 4–5 — ENGADINE VALLEY TO LAKE COMO",
    description1:
"Discover the charming villages and dramatic viewpoints of the Engadine Valley, paired with a gourmet chocolate tasting experience before boarding the scenic Bernina Express.\n This extraordinary rail route crosses the Alps into Italy before arriving at the elegant shores of Lake Como, where historic villas, mountain scenery, and relaxed Italian charm define the experience.",
    image1: "/images/packages/ALPINE_PEAKS_TO_AMALFI_DREAMS_Block02.webp",
  },
  {
    title1: "DAY 6–7 — LAKE COMO: VILLAS & LAKESIDE LIVING",
    description1:
"Lake Como offers a slower rhythm of discovery. Cruise the lake by private boat, passing iconic villas, botanical gardens, and hidden coves.\n Days here may include lakeside cycling routes, relaxed wine-paired lunches, and time to enjoy the refined atmosphere that has drawn artists, aristocrats, and travelers for centuries.",
    image1: "/images/packages/ALPINE_PEAKS_TO_AMALFI_DREAMS_Block03.webp",
  },
  {
    title1: "DAY 8–12 — AMALFI COAST: CLIFFSIDE VILLAGES & MEDITERRANEAN BEAUTY",
    description1:
"Fly south to the spectacular Amalfi Coast, where pastel villages cling dramatically to seaside cliffs. Stay in a luxury coastal retreat while exploring the region’s highlights.\n Visit traditional limoncello farms, hike the iconic Path of the Gods, wander through the colorful streets of Positano, and take a private boat to the glamorous island of Capri. Your final days embrace the relaxed elegance of la dolce vita.",
    image1: "/images/packages/ALPINE_PEAKS_TO_AMALFI_DREAMS_Block_04.webp",
  },
   {
    title1: "DAY 13 — DEPARTURE",
    description1:
"Enjoy a final morning overlooking the Mediterranean before departing Italy, concluding a journey that seamlessly blends Swiss alpine grandeur with the timeless charm of Italy’s most celebrated coastline.",
    image1: "/images/packages/ALPINE_PEAKS_TO_AMALFI_DREAMS_Block05.webp",
  }
  
],

    hotels: [
      {
        name: "THE OMNIA – ZERMATT",
        image: "/images/packages/ALPINE_PEAKS_TO_AMALFI_DREAMS_Hotel01.webp",
        desc:"A stylish alpine retreat offering panoramic views of the Matterhorn and contemporary mountain luxury.",
      },
      {
        name: "GRAND HOTEL TREMEZZO – LAKE COMO",
        image: "/images/packages/ALPINE_PEAKS_TO_AMALFI_DREAMS_Hotel02.webp",
        desc:"An iconic lakeside palace known for its elegant gardens, floating pool, and timeless Italian glamour.",
      },
      {
        name: "LE SIRENUSE – POSITANO",
        image: "/images/packages/ALPINE_PEAKS_TO_AMALFI_DREAMS_Hotel03.webp",
        desc:"A legendary Amalfi Coast hotel overlooking the Mediterranean, celebrated for its refined design and spectacular coastal views.",
      },
    ],
      similarPackages: [
  {
    slug: "switzerland",
    packageSlug: "SWISS_STORYBOOK_ESCAPE",
    title: "SWISS STORYBOOK ESCAPE",
    heroImage: "/images/triple-creek-ranch.avif",
    heroMeta: {
      duration: "6 NIGHTS",
      headline: "Switzerland feels like a storybook brought to life — alpine villages, sparkling lakes, mountain railways...",
    }
  },
  {
    slug: "switzerland",
    packageSlug: "HIDDEN_ZURICH",
    title: "Hidden Zurich",
    heroImage: "/images/triple-creek-ranch.avif",
    heroMeta: {
      duration: "5 NIGHTS",
      headline: "Zurich is often associated with banking and efficiency, yet beneath its polished surface lies one of Europe’s..."
    }
  },
]
  },

  // switzerland package 2 -- swiss storybook escape    DONE
  {
    slug: "switzerland",
    packageSlug: "SWISS_STORYBOOK_ESCAPE",
    title: "SWISS STORYBOOK ESCAPE",
    heroImage: "/images/packages/SWISS_STORYBOOK_ESCAPE_HERO.webp",

    heroMeta: {
      country: "SWITZERLAND",
      headline: "SWISS STORYBOOK ESCAPE",
      when: " May – October",
      price: {
        label: "$9,800 per person (excluding international flights)",
      },
      duration: "6 Nights",
    },

    intro:
"Switzerland feels like a storybook brought to life — alpine villages, sparkling lakes, mountain railways, and centuries-old traditions. This family-friendly journey explores the country’s most iconic landscapes while blending scenic rail adventures, cultural discoveries, and hands-on culinary experiences.\n From the charming streets of Lucerne to the dramatic peaks of Jungfraujoch, the journey continues through the lakes and valleys of Interlaken before ending in the elegant lakeside town of Montreux. Along the way, experience traditional Swiss culture, legendary mountain trains, and the delicious world of Swiss cheese and chocolate.",
    sections: [
  {
    title1: "DAY 1–2 — LUCERNE & MOUNT RIGI: SWISS LAKESIDE CHARM",
    description1:
"Begin your journey in Lucerne, one of Switzerland’s most picturesque towns. Wander through its medieval Old Town, cross the famous Chapel Bridge, and enjoy an evening filled with traditional Swiss culture.\n The following day brings a scenic cogwheel railway journey to Mount Rigi, offering panoramic alpine views and the chance to enjoy a classic Swiss fondue lunch high in the mountains.",
    image1: "/images/packages/SWISS_STORYBOOK_ESCAPE_Block01.webp",
  },
  {
    title1: "DAY 3–4 — INTERLAKEN & JUNGFRAUJOCH: ALPINE ADVENTURE",
    description1:
"Travel through stunning landscapes by train to Interlaken, nestled between Lakes Thun and Brienz and surrounded by dramatic alpine peaks.\n From here, embark on an unforgettable excursion to Jungfraujoch, known as the Top of Europe, where Europe’s highest railway station offers breathtaking glacier views and a magical ice palace carved within the mountain.",
    image1: "/images/packages/SWISS_STORYBOOK_ESCAPE_Block02.webp",
  },
  {
    title1: "DAY 5 — MONTREUX & CHILLON CASTLE: LAKE GENEVA BEAUTY",
    description1:
"Board the panoramic Golden Pass train, traveling along spectacular alpine and lakeside scenery to the elegant town of Montreux.\n Visit the fairy-tale Chillon Castle, one of Switzerland’s most famous landmarks, before enjoying a relaxed lakeside dinner overlooking Lake Geneva.",
    image1: "/images/packages/SWISS_STORYBOOK_ESCAPE_Block03.webp",
  },
  {
    title1: "DAY 6 — GRUYÈRES & BROC: SWISS CHEESE & CHOCOLATE",
    description1:
"Discover the culinary heart of Switzerland with a visit to Gruyères, a charming medieval village known for its famous cheese.\n Continue to Broc, home of the Maison Cailler chocolate factory, where you’ll experience the art of Swiss chocolate making and sample some of the country’s finest sweets.",
    image1: "/images/packages/SWISS_STORYBOOK_ESCAPE_Block04.webp",
  },
   {
    title1: "DAY 7 — DEPARTURE",
    description1:
"After a final morning overlooking Lake Geneva or enjoying a relaxed breakfast in Montreux, depart Switzerland with unforgettable memories of alpine landscapes, scenic rail journeys, and Switzerland’s most beloved culinary traditions.",
    image1: "/images/packages/SWISS_STORYBOOK_ESCAPE_Block05.webp",
  }
  
],

    hotels: [
      {
        name: "MANDARIN ORIENTAL PALACE – LUCERNE",
        image: "/images/packages/SWISS_STORYBOOK_ESCAPE_Hotel01.webp",
        desc:"A lakeside luxury retreat offering elegant design and stunning views of Lake Lucerne.",
      },
      {
        name: "VICTORIA JUNGFRAU GRAND HOTEL – INTERLAKEN",
        image: "/images/packages/SWISS_STORYBOOK_ESCAPE_Hotel02.webp",
        desc:"A historic alpine resort combining grand architecture with world-class spa facilities.",
      },
      {
        name: "FAIRMONT LE MONTREUX PALACE – MONTREUX",
        image: "/images/packages/SWISS_STORYBOOK_ESCAPE_Hotel03.webp",
        desc:"A Belle Époque landmark hotel overlooking Lake Geneva and the surrounding Alps.",
      },
    ],

          similarPackages: [
  {
    slug: "switzerland",
    packageSlug: "ALPINE_PEAKS_TO_AMALFI_DREAMS",
    title: "ALPINE PEAKS TO AMALFI DREAMS",
    heroImage: "/images/triple-creek-ranch.avif",
    heroMeta: {
      duration: "12 NIGHTS",
      headline: "This journey combines the dramatic beauty of the Swiss Alps with the effortless elegance of the Italian Riviera....",
    }
  },
  {
    slug: "switzerland",
    packageSlug: "HIDDEN_ZURICH",
    title: "Hidden Zurich",
    heroImage: "/images/triple-creek-ranch.avif",
    heroMeta: {
      duration: "5 NIGHTS",
      headline: "Zurich is often associated with banking and efficiency, yet beneath its polished surface lies one of Europe’s..."
    }
  },
]
  },

  // switzerland package 3 -- hidden zurich    DONE
  {
    slug: "switzerland",
    packageSlug: "HIDDEN_ZURICH",
    title: "HIDDEN ZURICH",
    heroImage: "/images/packages/HIDDEN_ZURICH_HERO.webp",

    heroMeta: {
      country: "SWITZERLAND",
      headline: "HIDDEN ZURICH",
      when: "April – October",
      price: {
        label: "$6,200 per person (excluding international flights)",
      },
      duration: "5 Nights",
    },

    intro:
"Zurich is often associated with banking and efficiency, yet beneath its polished surface lies one of Europe’s most creative and culturally vibrant cities. This journey reveals the hidden layers of Switzerland’s largest city — where medieval streets meet contemporary art districts and refined culinary culture.\n From the cobblestone alleys of Zurich’s historic Old Town to the industrial-chic creativity of Zurich West, the experience blends heritage, design, and Swiss craftsmanship. Paired with a countryside excursion to Rhine Falls and the watchmaking traditions of Schaffhausen, this itinerary offers a sophisticated and unexpected perspective on Switzerland.",
    sections: [
  {
    title1: "DAY 1–2 — ZURICH OLD TOWN: MEDIEVAL HERITAGE",
    description1:
"Your journey begins in Zurich’s enchanting Altstadt (Old Town), where narrow cobblestone streets wind between historic guild houses, churches, and elegant cafés along the Limmat River.\n A private walking tour introduces the city’s medieval heritage, uncovering hidden courtyards, artisan boutiques, and historic landmarks such as the Grossmünster and Fraumünster. Evenings offer time to explore Zurich’s vibrant dining scene and lakeside promenades.",
    image1: "/images/packages/HIDDEN_ZURICH_Block01.webp",
  },
  {
    title1: "DAY 3 — ZURICH WEST: ART, DESIGN & CREATIVE DISTRICTS",
    description1:
"Discover Zurich’s modern creative identity in Zurich West, a once-industrial district transformed into the city’s cultural playground.\n Former warehouses now house contemporary art galleries, design studios, concept stores, and innovative restaurants. Explore this dynamic neighborhood where architecture, fashion, and urban culture redefine Zurich’s modern character.",
    image1: "/images/packages/HIDDEN_ZURICH_Block02.webp",
  },
  {
    title1: "DAY 4 — SCHAFFHAUSEN & RHINE FALLS: SWISS COUNTRYSIDE",
    description1:
"Leave the city behind for a scenic countryside journey toward Schaffhausen, a picturesque town near the German border.\n Here you’ll discover Switzerland’s watchmaking heritage through a private atelier visit before continuing to the spectacular Rhine Falls, Europe’s largest waterfall. Viewing platforms and boat excursions bring you close to the thunderous cascades.",
    image1: "/images/packages/HIDDEN_ZURICH_Block03.webp",
  },
  {
    title1: "DAY 5 — ZURICH CULTURE & MARKETS",
    description1:
"Return to Zurich to explore the city’s artistic and cultural life. A behind-the-scenes visit to the Zurich Opera House offers insight into Switzerland’s rich performing arts tradition.\n The day continues through artisan markets, design boutiques, and stylish café districts, offering a relaxed immersion into Zurich’s refined urban lifestyle.",
    image1: "/images/packages/HIDDEN_ZURICH_Block04.webp",
  },
   {
    title1: "DAY 6 — DEPARTURE",
    description1:
"Enjoy a final morning overlooking Lake Zurich, perhaps with a leisurely breakfast along the waterfront promenade before departing Switzerland.\n Your journey concludes having uncovered the elegant contrasts that make Zurich one of Europe’s most intriguing and creative cities.",
    image1: "/images/packages/HIDDENZURICH-Block05.webp",
  }
  
],

    hotels: [
      {
        name: "THE DOLDER GRAND – ZURICH",
        image: "/images/packages/HIDDEN_ZURICH_Hotel01.webp",
        desc:"A legendary luxury hotel overlooking Zurich, blending historic architecture with contemporary art and sweeping views of the city and Alps.",
      },
      {
        name: "WIDDER HOTEL – ZURICH",
        image: "/images/packages/HIDDEN_ZURICH_Hotel02.webp",
        desc:"A boutique design hotel set within beautifully restored medieval houses in Zurich’s Old Town.",
      },
      {
        name: "STORCHEN ZURICH – LIFESTYLE BOUTIQUE HOTEL",
        image: "/images/packages/HIDDEN_ZURICH_Hotel03.webp",
        desc:"A charming riverside hotel offering elegant rooms and stunning views over the Limmat River.",
      },
    ],
          similarPackages: [
  {
    slug: "switzerland",
    packageSlug: "SWISS_STORYBOOK_ESCAPE",
    title: "SWISS STORYBOOK ESCAPE",
    heroImage: "/images/triple-creek-ranch.avif",
    heroMeta: {
      duration: "6 NIGHTS",
      headline: "Switzerland feels like a storybook brought to life — alpine villages, sparkling lakes, mountain railways...",
    }
  },
   {
    slug: "switzerland",
    packageSlug: "ALPINE_PEAKS_TO_AMALFI_DREAMS",
    title: "ALPINE PEAKS TO AMALFI DREAMS",
    heroImage: "/images/triple-creek-ranch.avif",
    heroMeta: {
      duration: "12 NIGHTS",
      headline: "This journey combines the dramatic beauty of the Swiss Alps with the effortless elegance of the Italian Riviera....",
    }
  },
]
  },

  // ---------------------------------------------------------------------------

  // japan package 1 -- okinawa blue serenity
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

  // Japan package 2 -- imperial japan
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

  // Japan package 3 -- japan winter journey
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

  // Japan package 4-- the essence of japan
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

   // Japan package 5-- the soul of japan
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

  // Japan package 6 -- echoes of old japan
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

   // Japan package 7 -- falvour of japan
   {
    slug: "japan",
    packageSlug: "FLAVOURS_OF_JAPAN",
    title: "FLAVOURS OF JAPAN",
    heroImage: "/images/packages/FLAVOURS OF JAPAN - Hero Image.webp",

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
    image1: "/images/packages/FLAVOURS OF JAPAN - Block 1.webp",
  },
  {
    title1: "DAY 4-5 - TOKYO COUNTRYSIDE: FARM-TO-TABLE DISCOVERY",
    description1:
"Venture beyond the city to Akigawa Valley, where the focus shifts to Japan’s countryside food culture. Here, local farms and producers showcase seasonal ingredients and traditional cooking methods.\n Enjoy a memorable farm-to-table meal prepared with fresh local produce before returning to Tokyo for further neighbourhood culinary exploration.",
    image1: "/images/packages/FLAVOURS OF JAPAN - Block 2.webp",
  },
  {
    title1: "DAY 6-7 - HAKONE: RYOKAN HOSPITALITY & KAISEKI DINING",
    description1:
"Travel to Hakone, a peaceful mountain retreat known for its natural beauty and traditional hot springs. Stay in a classic Japanese ryokan, where the highlight is an elegant kaiseki dinner — a multi-course meal that reflects the season’s finest ingredients.\n Days here combine cultural walks, scenic landscapes, and refined dining experiences.",
    image1: "/images/packages/FLAVOURS OF JAPAN - Block 3.webp",
  },
   {
    title1: "DAY 8–13 — OSAKA & KYOTO: STREET FOOD TO REFINED CUISINE",
    description1:
"Continue to Osaka, widely regarded as Japan’s street food capital. Explore the lively districts of Dotonbori and Shinsekai, tasting local favorites such as takoyaki and okonomiyaki during guided food crawls.\n The journey concludes in Kyoto, where culinary traditions become more refined. Visit Nishiki Market, participate in a Japanese sweets workshop, and enjoy a farewell dinner after experiencing a traditional tea ceremony.",
    image1: "/images/packages/FLAVOURS OF JAPAN - Block 4.webp",
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

  // ------------------------------------------------------------------------------

  // tanzania pacakage 1 -- tanzania wildlife & culture
   {
    slug: "tanzania",
    packageSlug: "FROM_CRATERS_TO_CORAL",
    title: "FROM CRATERS TO CORAL: TANZANIA’S ULTIMATE WILD-TO-WATER ESCAPE",
    heroImage: "/images/packages/FROM_CRATERS_TO_CORAL_Tanzania_HERO.webp",

    heroMeta: {
      country: "TANZANIA",
      headline: "FROM CRATERS TO CORAL: TANZANIA’S ULTIMATE WILD-TO-WATER ESCAPE",
      when: "June – October",
      price: {
        label: "$14,900 per person (excluding international flights)",
      },
      duration: "12 Nights",
    },

    intro:
"This extraordinary journey through Tanzania combines some of Africa’s most dramatic wildlife landscapes with the tranquil beauty of the Indian Ocean. Beginning in the lush foothills of Mount Meru near Arusha, the experience moves through northern Tanzania’s iconic safari circuit — where elephants roam Tarangire, lions dominate the Ngorongoro Crater, and the vast Serengeti plains host one of the planet’s most extraordinary wildlife spectacles.\n The adventure concludes on the pristine white sands of Mnemba Island near Zanzibar, where turquoise waters, coral reefs, and barefoot luxury offer the perfect contrast to the thrill of safari. Designed for travelers seeking both wilderness and serenity, this itinerary seamlessly blends African adventure with tropical island escape.",
   sections: [
  {
    title1: "DAY 1–3 — ARUSHA & TARANGIRE: BEGINNING THE SAFARI",
    description1:
"Arrive in Arusha beneath the slopes of Mount Meru and settle into a peaceful coffee-estate lodge surrounded by lush gardens and panoramic views. After a relaxed introduction to Tanzania, travel to the wildlife-rich Tarangire region to begin your safari experience.\n Tarangire is known for its vast elephant herds and iconic baobab trees. Guided game drives and walking safaris reveal the rhythms of the African wilderness, while a champagne bush lunch offers a memorable moment in the heart of the savannah.",
    image1: "/images/packages/FROM_CRATERS_TO_CORAL_Tanzania_Block01.webp",
  },
  {
    title1: "DAY 4–6 — NGORONGORO CRATER: AFRICA’S NATURAL WONDER",
    description1:
"Journey toward the legendary Ngorongoro Conservation Area, where the world’s largest intact volcanic caldera shelters an extraordinary concentration of wildlife.\n Game drives inside the crater offer exceptional opportunities to encounter the Big Five, while cultural visits introduce the traditions of the Maasai people. With dramatic crater views and rich ecosystems, this region provides one of Africa’s most unique safari landscapes.",
    image1: "/images/packages/FROM_CRATERS_TO_CORAL_Tanzania_Block02.webp",
  },
  {
    title1: "DAY 7–10 — SERENGETI: THE HEART OF THE WILD",
    description1:
"Continue to the endless plains of the Serengeti, Tanzania’s most iconic national park. Here, classic game drives reveal vast herds of wildlife, roaming predators, and breathtaking African sunsets.\n A highlight of your stay is a sunrise hot-air balloon safari, floating silently above the plains before landing for a champagne breakfast in the bush. Evenings conclude with lantern-lit dinners beneath the African sky.",
    image1: "/images/packages/FROM_CRATERS_TO_CORAL_Tanzania_Block03.webp",
  },
   {
    title1: "DAY 11–12 — MNEMBA ISLAND: INDIAN OCEAN PARADISE",
    description1:
"Fly from the Serengeti to Zanzibar before continuing to the private island sanctuary of Mnemba Island, one of East Africa’s most exclusive beach destinations.\n Surrounded by coral reefs and turquoise waters, the island offers days of relaxation and exploration — snorkeling, diving, sailing, and quiet moments on powder-soft beaches. The setting provides the perfect transition from safari adventure to barefoot island luxury.",
    image1: "/images/packages/FROM_CRATERS_TO_CORAL_Tanzania_Block04.webp",
  },
  {
    title1: "DAY 13 — DEPARTURE",
    description1:
"Enjoy a final morning by the Indian Ocean before departing Zanzibar, bringing to a close a journey that blends Tanzania’s extraordinary wildlife with the serene beauty of its tropical coast.",
    image1: "/images/packages/FROM_CRATERS_TO_CORAL_Tanzania_Block05.webp",
  }


],

    hotels: [
      {
        name: "ARUSHA COFFEE LODGE – ARUSHA ",
        image: "/images/packages/FROM_CRATERS_TO_CORAL_Tanzania_Hotel01.webp",
        desc:"A charming plantation-style lodge surrounded by coffee fields at the foothills of Mount Meru.",
      },
      {
        name: "NGORONGORO CRATER LODGE – NGORONGORO",
        image: "/images/packages/FROM_CRATERS_TO_CORAL_Tanzania_Hotel02.webp",
        desc:"One of Africa’s most spectacular safari lodges, offering dramatic views over the crater floor.",
      },
       {
        name: "MNEMBA ISLAND LODGE – ZANZIBAR",
        image: "/images/packages/FROM_CRATERS_TO_CORAL_Tanzania_Hotel03.webp",
        desc:"An exclusive private island retreat known for pristine beaches, coral reefs, and barefoot luxury.",
      },
    ],

    similarPackages: [
  {
    slug: "tanzania",
    packageSlug: "interlaken-adventure",
    title: "Interlaken Adventure",
    heroImage: "/images/triple-creek-ranch.avif",
    heroMeta: {
      duration: "5 DAYS",
      headline: "Explore lakes and alpine adventures in Interlaken."
    }
  },
  {
    slug: "tanzania",
    packageSlug: "jungfrau-glacier",
    title: "Jungfrau Glacier Escape",
    heroImage: "/images/triple-creek-ranch.avif",
    heroMeta: {
      duration: "4 DAYS",
      headline: "Experience the Top of Europe and stunning glacier views."
    }
  },
  {
    slug: "tanzania",
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


   // tanzania pacakage 2 -- KILIMANJARO & ZANZIBAR
   {
    slug: "tanzania",
    packageSlug: "KILIMANJARO_SUMMIT",
    title: "KILIMANJARO SUMMIT & ZANZIBAR RECOVERY ESCAPE",
    heroImage: "/images/packages/KILIMANJARO_SUMMIT_Tanzania_HERO.webp",

    heroMeta: {
      country: "TANZANIA",
      headline: "KILIMANJARO SUMMIT & ZANZIBAR RECOVERY ESCAPE",
      when: " January – March, June – October",
      price: {
        label: "$13,800 per person (excluding international flights)",
      },
      duration: "12 Nights",
    },

    intro:
"This journey combines one of the world’s most iconic mountain climbs with the serene beauty of the Indian Ocean. Beginning in Arusha at the foothills of Mount Kilimanjaro, the adventure follows the remote Northern Circuit route — considered one of the most scenic and successful paths to Africa’s highest summit.\n Trekking across Kilimanjaro’s diverse landscapes, from lush rainforest to alpine desert and glacial summit terrain, the expedition culminates at Uhuru Peak, the highest point on the African continent. After the exhilaration of the climb, the journey concludes on the tranquil beaches of Zanzibar, where turquoise waters, coral reefs, and barefoot luxury offer the perfect recovery.",
   sections: [
  {
    title1: "DAY 1–3 — ARUSHA & NORTHERN CIRCUIT: BEGINNING THE CLIMB",
    description1:
"Arrive in Arusha and settle into a comfortable lodge near the slopes of Mount Kilimanjaro. After final preparations and briefing with your trekking guides, transfer to Kilimanjaro National Park to begin the Northern Circuit route.\n The early stages of the trek pass through lush montane forests and rolling moorlands, allowing gradual acclimatization while revealing the dramatic scenery surrounding Africa’s tallest mountain.",
    image1: "/images/packages/KILIMANJARO_SUMMIT_Tanzania_Block01.webp",
  },
  {
    title1: "DAY 4–6 — KILIMANJARO TREKKING: ALPINE LANDSCAPES",
    description1:
"As the trek progresses along Kilimanjaro’s northern slopes, the landscape transitions from moorland to alpine desert. Wide volcanic plains and dramatic views toward Kenya create a remote and awe-inspiring environment.\n Crossing the saddle between Kilimanjaro’s main peak and the jagged Mawenzi summit, trekkers experience one of the mountain’s most spectacular high-altitude landscapes.",
    image1: "/images/packages/KILIMANJARO_SUMMIT_Tanzania_Block02.webp",
  },
  {
    title1: "DAY 7–8 — SUMMIT ATTEMPT: UHURU PEAK",
    description1:
"After final acclimatization at high camp, the summit push begins before dawn. Trekking beneath a star-filled sky, climbers ascend slowly toward Uhuru Peak (5,895 m) — the highest point in Africa.\n Reaching the summit at sunrise reveals sweeping views across glaciers, volcanic plains, and the vast African horizon before beginning the descent.",
    image1: "/images/packages/KILIMANJARO_SUMMIT_Tanzania_Block03.webp",
  },
   {
    title1: "DAY 9–10 — ARUSHA TO ZANZIBAR: FROM MOUNTAIN TO OCEAN",
    description1:
"Descend through Kilimanjaro’s rainforest and return to Arusha to celebrate the achievement before flying to Zanzibar.\n Upon arrival, transfer to a luxury beach resort where the rhythm of the journey shifts from adventure to relaxation along the Indian Ocean.",
    image1: "/images/packages/KILIMANJARO_SUMMIT_Tanzania_Block04.webp",
  },
  {
    title1: "DAY 11–12 — ZANZIBAR: ISLAND RECOVERY",
    description1:
"The final days are spent unwinding on Zanzibar’s pristine beaches. Snorkeling, diving, sailing, and spa treatments offer the perfect recovery after the Kilimanjaro ascent.\n With warm turquoise waters and powder-soft sand, Zanzibar provides a serene and luxurious conclusion to this extraordinary adventure.",
    image1: "/images/packages/KILIMANJARO_SUMMIT_Tanzania_Block05.webp",
  },
  {
    title1: "DAY 13 — DEPARTURE",
    description1:
"Enjoy a final morning by the Indian Ocean before departing Tanzania, completing a journey that blends the exhilaration of Africa’s highest summit with the peaceful beauty of Zanzibar’s tropical coast.",
    image1: "/images/packages/KILIMANJARO_SUMMIT_Tanzania_Block05.webp",
  }


],

    hotels: [
      {
        name: "LEGENDARY LODGE – ARUSHA",
        image: "/images/packages/KILIMANJARO_SUMMIT_Tanzania_Hotel01.webp",
        desc:"A tranquil plantation-style lodge set within lush tropical gardens near Mount Kilimanjaro.",
      },
      {
        name: "KILIMANJARO TREKKING CAMPS",
        image: "/images/packages/KILIMANJARO_SUMMIT_Tanzania_Hotel02.webp",
        desc:"Comfortable expedition camps along the Northern Circuit route, designed to support safe acclimatization and summit success.",
      },
       {
        name: "ZURI ZANZIBAR – ZANZIBAR",
        image: "/images/packages/KILIMANJARO_SUMMIT_Tanzania_Hotel03.webp",
        desc:"A luxury beachfront resort surrounded by tropical gardens and turquoise Indian Ocean waters.",
      },
    ],

    similarPackages: [
  {
    slug: "tanzania",
    packageSlug: "interlaken-adventure",
    title: "Interlaken Adventure",
    heroImage: "/images/triple-creek-ranch.avif",
    heroMeta: {
      duration: "5 DAYS",
      headline: "Explore lakes and alpine adventures in Interlaken."
    }
  },
  {
    slug: "tanzania",
    packageSlug: "jungfrau-glacier",
    title: "Jungfrau Glacier Escape",
    heroImage: "/images/triple-creek-ranch.avif",
    heroMeta: {
      duration: "4 DAYS",
      headline: "Experience the Top of Europe and stunning glacier views."
    }
  },
  {
    slug: "tanzania",
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


// TANZANIA PACKAGE 3 -- TANZANIA WILDLIFE & BEACHES
  {
  slug: "tanzania",
  packageSlug: "GORILLAS_ZANZIBAR",
  title: "GORILLAS & ZANZIBAR PRIVATE ISLAND ESCAPE",
  heroImage: "/images/packages/GORILLAS_ZANZIBAR_PRIVATE_ISLAND_ESCAPE_Tanzania_HERO.webp",

  heroMeta: {
    country: "RWANDA & TANZANIA",
    headline: "GORILLAS & ZANZIBAR PRIVATE ISLAND ESCAPE",
    when: "June – October, December – February",
    price: {
      label: "$12,600 per person (excluding international flights)",
    },
    duration: "8 Nights",
  },

  intro:
"This remarkable journey blends one of the world’s most extraordinary wildlife encounters with the tranquil beauty of the Indian Ocean. Beginning in Rwanda’s lush volcanic highlands, the experience centers on intimate encounters with the rare mountain gorillas of Volcanoes National Park — one of Africa’s most profound and emotional safari experiences.\n From dense rainforest trekking and conservation experiences to the turquoise waters of Zanzibar’s private islands, the itinerary balances adventure with serene luxury. The journey concludes on Mnemba Island, where coral reefs, dhow sunsets, and barefoot elegance create the perfect ending to an unforgettable East African escape.",

sections: [
{
title1: "DAY 1–2 — KIGALI & VOLCANOES NATIONAL PARK",
description1:
"Arrive in Kigali and begin with a private city tour that introduces Rwanda’s culture, resilience, and modern identity. The journey then continues north toward the dramatic landscapes of Volcanoes National Park, home to the endangered mountain gorillas.\n Nestled among mist-covered volcanic peaks, your eco-lodge offers an intimate base for exploring Rwanda’s remarkable wilderness.",
image1: "/images/packages/GORILLAS_ZANZIBAR_PRIVATE_ISLAND_ESCAPE_Tanzania_Block01.webp",
},

{
title1: "DAY 3–4 — GORILLA & GOLDEN MONKEY TREKKING",
description1:
"Set out early for the extraordinary experience of mountain gorilla trekking, hiking through lush rainforest with expert guides to observe these gentle giants in their natural habitat. The moment of encountering a gorilla family in the wild is one of Africa’s most powerful wildlife experiences.\n The following day offers a different perspective with golden monkey tracking, along with insights into conservation initiatives protecting the region’s fragile ecosystems.",
image1: "/images/packages/GORILLAS_ZANZIBAR_PRIVATE_ISLAND_ESCAPE_Tanzania_Block02.webp",
},

{
title1: "DAY 5 — RWANDA TO ZANZIBAR",
description1:
"Depart Rwanda and fly toward the Indian Ocean, arriving in Zanzibar via historic Stone Town, once a major trading hub along East Africa’s Swahili Coast.\n From here, continue onward to one of the region’s most exclusive island retreats, where turquoise waters and coral reefs signal a shift from jungle adventure to barefoot luxury.",
image1: "/images/packages/GORILLAS_ZANZIBAR_PRIVATE_ISLAND_ESCAPE_Tanzania_Block03.webp",
},

{
title1: "DAY 6–7 — MNEMBA ISLAND: PRIVATE ISLAND LUXURY",
description1:
"Settle into the idyllic rhythm of Mnemba Island, an exclusive private island sanctuary surrounded by vibrant coral reefs.\n Days are spent snorkeling among tropical fish, kayaking across crystal-clear lagoons, and sailing traditional dhow boats at sunset. The island’s relaxed elegance offers the perfect balance of adventure and serenity.",
image1: "/images/packages/GORILLAS_ZANZIBAR_PRIVATE_ISLAND_ESCAPE_Tanzania_Block04.webp",
},

{
title1: "DAY 8–9 — ZANZIBAR: ISLAND RELAXATION & DEPARTURE",
description1:
"Enjoy your final days immersed in island life. Relax on powder-soft beaches, explore coral reefs, or simply unwind with oceanfront dining and breathtaking sunset views.\n On your final morning, depart Zanzibar with memories of Rwanda’s rare wildlife encounters and the peaceful beauty of the Indian Ocean.",
image1: "/images/packages/GORILLAS_ZANZIBAR_PRIVATE_ISLAND_ESCAPE_Tanzania_Block05.webp",
}

],

hotels: [
{
name: "SINGITA KWITONDA LODGE – VOLCANOES NATIONAL PARK",
image: "/images/packages/GORILLAS_ZANZIBAR_PRIVATE_ISLAND_ESCAPE_Tanzania_Hotel01.webp",
desc: "A luxurious eco-lodge offering stunning views of Rwanda’s volcanic mountains and exceptional access to gorilla trekking experiences.",
},
{
name: "BISATE LODGE – VOLCANOES NATIONAL PARK",
image: "/images/packages/GORILLAS_ZANZIBAR_PRIVATE_ISLAND_ESCAPE_Tanzania_Hotel02.webp",
desc: "An award-winning conservation lodge known for its striking architecture and immersive rainforest setting.",
},
{
name: "MNEMBA ISLAND LODGE – ZANZIBAR",
image: "/images/packages/GORILLAS_ZANZIBAR_PRIVATE_ISLAND_ESCAPE_Tanzania_Hotel03.webp",
desc: "A private island retreat offering barefoot luxury, coral reefs, and pristine white-sand beaches.",
}
],

similarPackages: [
{
slug: "rwanda-tanzania",
packageSlug: "serengeti-safari",
title: "Serengeti Safari Experience",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "6 DAYS",
headline: "Witness the vast wildlife plains of the Serengeti."
}
},
{
slug: "rwanda-tanzania",
packageSlug: "ngorongoro-crater",
title: "Ngorongoro Crater Journey",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "5 DAYS",
headline: "Explore one of Africa’s most remarkable wildlife sanctuaries."
}
},
{
slug: "rwanda-tanzania",
packageSlug: "zanzibar-island-retreat",
title: "Zanzibar Island Retreat",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "4 DAYS",
headline: "Relax on white-sand beaches and turquoise waters."
}
}
]
},


// TANZANIA PACKAGE 4 -- CLASSIC SERENGETI, TARANGIRE & ZANZIBAR
{
  slug: "tanzania",
  packageSlug: "SERENGETI_TARANGIRE_ZANZIBAR",
  title: "CLASSIC SERENGETI, TARANGIRE & ZANZIBAR COASTLINE",
  heroImage: "/images/packages/CLASSIC_SERENGETI_TARANGIRE_ZANZIBAR_COASTLINE_Hero.webp",

  heroMeta: {
    country: "TANZANIA",
    headline: "CLASSIC SERENGETI, TARANGIRE & ZANZIBAR COASTLINE",
    when: "June – October, January – March",
    price: {
      label: "$13,200 per person (excluding international flights)",
    },
    duration: "11 Nights",
  },

  intro:
"This classic East African journey captures the essence of Tanzania’s legendary safari landscapes before transitioning to the turquoise waters of the Indian Ocean. Beginning in the vast plains of the Serengeti, travelers encounter one of the world’s greatest wildlife ecosystems, where lions, elephants, and vast herds of wildebeest roam across dramatic savannah horizons.\n The journey continues to the private wilderness concessions of Tarangire, known for its remarkable elephant populations and ancient baobab trees, before concluding along the white-sand beaches of Zanzibar. Combining thrilling wildlife encounters with relaxed coastal luxury, this itinerary offers the perfect balance of safari adventure and tropical escape.",

sections: [
{
title1: "DAY 1–3 — ARUSHA & SERENGETI: BEGINNING THE SAFARI",
description1:
"Arrive in Tanzania via Dar es Salaam before continuing onward to Arusha, the gateway to the country’s northern safari circuit. From here, a scenic flight carries you deep into the Serengeti, one of Africa’s most celebrated wildlife reserves.\n Settle into a classic safari lodge surrounded by endless plains. Early game drives introduce the region’s extraordinary biodiversity, where elephants, giraffes, and predators roam freely across vast landscapes.",
image1: "/images/packages/CLASSIC_SERENGETI_TARANGIRE_ZANZIBAR_COASTLINE_Block01.webp",
},

{
title1: "DAY 4–5 — SERENGETI: PREDATORS & GREAT PLAINS",
description1:
"The Serengeti offers some of the most dramatic wildlife encounters on the African continent. Guided game drives explore predator-rich territories where lions, cheetahs, and leopards hunt across the golden savannah.\n Expert guides track wildlife movements while revealing the delicate balance of the Serengeti ecosystem. Evenings conclude with lantern-lit dinners beneath star-filled skies.",
image1: "/images/packages/CLASSIC_SERENGETI_TARANGIRE_ZANZIBAR_COASTLINE_Block02.webp",
},

{
title1: "DAY 6–7 — TARANGIRE PRIVATE CONCESSION",
description1:
"Fly south toward the Tarangire region and the private wilderness concessions surrounding the national park. Known for its enormous elephant herds and iconic baobab trees, Tarangire offers a more intimate safari experience.\n Activities here include walking safaris, Big Five tracking, and bush drives across remote landscapes rarely visited by other travelers. A champagne bush lunch beneath ancient trees provides a memorable highlight of the experience.",
image1: "/images/packages/CLASSIC_SERENGETI_TARANGIRE_ZANZIBAR_COASTLINE_Block03.webp",
},

{
title1: "DAY 8–9 — ZANZIBAR & STONE TOWN",
description1:
"Depart the safari landscapes and fly to Zanzibar, the historic island of spice traders and Swahili culture. Begin with a guided exploration of Stone Town, a UNESCO World Heritage Site filled with labyrinthine streets, carved wooden doors, and centuries of maritime history.\n From here, transfer to a luxury beachfront resort where the rhythm shifts from adventure to relaxation beside the Indian Ocean.",
image1: "/images/packages/CLASSIC_SERENGETI_TARANGIRE_ZANZIBAR_COASTLINE_Block04.webp",
},

{
title1: "DAY 10–12 — ZANZIBAR COASTLINE",
description1:
"Spend your final days enjoying the serene beauty of Zanzibar’s coastline. Snorkeling among coral reefs, sailing traditional dhow boats, and visiting nearby islands such as Prison Island reveal the vibrant marine life of the region.\n The journey concludes with leisurely beach days and oceanfront dining, offering the perfect ending to an unforgettable East African adventure.",
image1: "/images/packages/CLASSIC_SERENGETI_TARANGIRE_ZANZIBAR_COASTLINE_Block05.webp",
}

],

hotels: [
{
name: "SERENGETI BUSHTOPS – SERENGETI",
image: "/images/packages/CLASSIC_SERENGETI_TARANGIRE_ZANZIBAR_COASTLINE_Hotel01.webp",
desc: "An elegant safari camp offering luxury tented suites overlooking the vast plains of the Serengeti.",
},
{
name: "CHEM CHEM LODGE – TARANGIRE",
image: "/images/packages/CLASSIC_SERENGETI_TARANGIRE_ZANZIBAR_COASTLINE_Hotel02.webp",
desc: "A refined wilderness lodge set within a private concession between Tarangire and Lake Manyara.",
},
{
name: "ZURI ZANZIBAR – ZANZIBAR",
image: "/images/packages/CLASSIC_SERENGETI_TARANGIRE_ZANZIBAR_COASTLINE_Hotel03.webp",
desc: "A luxury beachfront resort surrounded by tropical gardens and turquoise waters of the Indian Ocean.",
}
],

similarPackages: [
{
slug: "tanzania",
packageSlug: "serengeti-safari",
title: "Serengeti Safari Experience",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "6 DAYS",
headline: "Witness the vast wildlife plains of the Serengeti."
}
},
{
slug: "tanzania",
packageSlug: "ngorongoro-crater",
title: "Ngorongoro Crater Journey",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "5 DAYS",
headline: "Explore one of Africa’s most remarkable wildlife sanctuaries."
}
},
{
slug: "tanzania",
packageSlug: "zanzibar-island-retreat",
title: "Zanzibar Island Retreat",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "4 DAYS",
headline: "Relax on white-sand beaches and turquoise waters."
}
}
]
},

// TANZANIA PACKAGE 5 -- SAVANNAH_CHIMPANZEE_SHORES TANZANIA WILDLIFE & CULTURE
{
  slug: "tanzania",
  packageSlug: "SAVANNAH_CHIMPANZEE",
  title: "SAVANNAH TO CHIMPANZEE SHORES: TANZANIA’S WILDEST ESCAPE",
  heroImage: "/images/packages/SAVANNAH_TO_CHIMPANZEE_SHORES_Tanzania_Hero.webp",

  heroMeta: {
    country: "TANZANIA",
    headline: "SAVANNAH TO CHIMPANZEE SHORES: TANZANIA’S WILDEST ESCAPE",
    when: "June – October",
    price: {
      label: "$12,900 per person (excluding international flights)",
    },
    duration: "9 Nights",
  },

  intro:
"This extraordinary Tanzanian journey combines the legendary wildlife plains of the Serengeti with one of Africa’s most remote and untouched primate habitats. Beginning in the vast savannah landscapes of the Serengeti, travelers experience classic safari encounters among migrating herds, powerful predators, and sweeping golden horizons.\n The adventure then shifts westward to the remote shores of Lake Tanganyika within the Mahale Mountains National Park — one of the most spectacular and isolated wildlife destinations in Africa. Here, dense rainforest meets turquoise lake waters, offering the rare opportunity to trek among wild chimpanzees before unwinding along pristine lakeside beaches.",

sections: [
{
title1: "DAY 1–3 — ARUSHA & SERENGETI: CLASSIC SAFARI BEGINNING",
description1:
"Arrive in Arusha and settle into a peaceful coffee-estate lodge surrounded by lush gardens and views toward Mount Meru. From here, a scenic bush flight carries you deep into the Serengeti, one of Africa’s most iconic wildlife ecosystems.\n Game drives across the sweeping plains reveal vast herds of wildebeest, zebras, elephants, and predators that define the Serengeti’s extraordinary biodiversity.",
image1: "/images/packages/SAVANNAH_TO_CHIMPANZEE_SHORES_Tanzania_Block01.webp",
},

{
title1: "DAY 4 — SERENGETI: MIGRATION & PREDATOR TERRITORIES",
description1:
"Spend the day exploring the Serengeti’s diverse habitats with experienced safari guides. Depending on the season, the plains may host the dramatic movements of the Great Migration, one of the world’s most remarkable wildlife spectacles.\n Evenings conclude with classic safari traditions — sundowners overlooking the savannah as the sun sets over the endless plains.",
image1: "/images/packages/SAVANNAH_TO_CHIMPANZEE_SHORES_Tanzania_Block02.webp",
},

{
title1: "DAY 5 — JOURNEY TO MAHALE MOUNTAINS",
description1:
"Depart the Serengeti and fly west across Tanzania toward the remote wilderness of Mahale Mountains National Park, located along the pristine shores of Lake Tanganyika.\n Accessible only by light aircraft and boat, this remote destination offers one of Africa’s most extraordinary wilderness experiences, where rainforest-covered mountains rise dramatically from crystal-clear lake waters.",
image1: "/images/packages/SAVANNAH_TO_CHIMPANZEE_SHORES_Tanzania_Block03.webp",
},

{
title1: "DAY 6–8 — MAHALE MOUNTAINS: CHIMPANZEE TREKKING & LAKE ADVENTURES",
description1:
"The Mahale Mountains are home to one of the world’s largest populations of wild chimpanzees. Guided treks through dense rainforest offer the rare opportunity to observe these intelligent primates in their natural habitat.\n Beyond chimpanzee tracking, the region offers waterfall hikes, kayaking across the clear waters of Lake Tanganyika, dhow cruises at sunset, and relaxed beach dining beside the lake.",
image1: "/images/packages/SAVANNAH_TO_CHIMPANZEE_SHORES_Tanzania_Block04.webp",
},

{
title1: "DAY 9–10 — LAKESIDE RELAXATION & DEPARTURE",
description1:
"Spend your final days enjoying the tranquility of the lakeside lodge. Swim in the warm waters of Lake Tanganyika, relax along the white-sand beaches, or simply enjoy the serenity of this extraordinary wilderness setting.\n After breakfast on your final morning, depart Tanzania with memories of an adventure that combines iconic safari landscapes with one of Africa’s most remote primate experiences.",
image1: "/images/packages/SAVANNAH_TO_CHIMPANZEE_SHORES_Tanzania_Block05.webp",
}

],

hotels: [
{
name: "ARUSHA COFFEE LODGE – ARUSHA",
image: "/images/packages/SAVANNAH_TO_CHIMPANZEE_SHORES_Tanzania_Hotel01.webp",
desc: "A charming plantation-style lodge surrounded by coffee estates near the foothills of Mount Meru.",
},
{
name: "SERENGETI SAFARI CAMP – SERENGETI",
image: "/images/packages/SAVANNAH_TO_CHIMPANZEE_SHORES_Tanzania_Hotel02.webp",
desc: "A luxury tented safari camp offering immersive wildlife experiences in the heart of the Serengeti plains.",
},
{
name: "GREYSTOKE MAHALE – LAKE TANGANYIKA",
image: "/images/packages/SAVANNAH_TO_CHIMPANZEE_SHORES_Tanzania_Hotel03.webp",
desc: "One of Africa’s most iconic remote lodges, set between rainforest mountains and the turquoise waters of Lake Tanganyika.",
}
],

similarPackages: [
{
slug: "tanzania",
packageSlug: "serengeti-safari",
title: "Serengeti Safari Experience",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "6 DAYS",
headline: "Witness the vast wildlife plains of the Serengeti."
}
},
{
slug: "tanzania",
packageSlug: "ngorongoro-crater",
title: "Ngorongoro Crater Journey",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "5 DAYS",
headline: "Explore one of Africa’s most remarkable wildlife sanctuaries."
}
},
{
slug: "tanzania",
packageSlug: "zanzibar-island-retreat",
title: "Zanzibar Island Retreat",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "4 DAYS",
headline: "Relax on white-sand beaches and turquoise waters."
}
}
]
},

// TANZANIA PACKAGE 6 -- SELOUS & PEMBA ESCAPE
{
  slug: "tanzania",
  packageSlug: "SAVANNAH_SECLUDED_ISLAND_SHORES",
  title: "SAVANNAH TO SECLUDED ISLAND SHORES: SELOUS & PEMBA ESCAPE",
  heroImage: "/images/packages/SELOUS_PEMBA_ESCAPE_Tanzania_HERO.webp",

  heroMeta: {
    country: "TANZANIA",
    headline: "SAVANNAH TO SECLUDED ISLAND SHORES: SELOUS & PEMBA ESCAPE",
    when: "June – October",
    price: {
      label: "$11,800 per person (excluding international flights)",
    },
    duration: "8 Nights",
  },

  intro:
"This remarkable Tanzanian journey combines one of Africa’s most untouched safari regions with the secluded tropical beauty of the Zanzibar Archipelago. Beginning in the vast wilderness of the Selous Game Reserve, travelers explore one of the continent’s largest protected ecosystems, where rivers, forests, and savannah plains support extraordinary wildlife far from the crowds of more visited parks.\n Game drives, walking safaris, and river explorations along the Rufiji River reveal elephants, lions, hippos, crocodiles, and abundant birdlife thriving within this remote landscape. Evenings are spent in peaceful riverside camps surrounded by the sounds of the African wilderness.\n The journey then transitions to the hidden island of Pemba, one of the least explored islands of the Zanzibar Archipelago. Here, lush green hills meet turquoise waters and vibrant coral reefs, offering a perfect setting for snorkeling, diving, and quiet relaxation along pristine tropical beaches.",

sections: [
{
title1: "DAY 1–2 — SELOUS GAME RESERVE: ARRIVAL INTO UNTAMED WILDERNESS",
description1:
"Arrive in Dar es Salaam and board a scenic light aircraft flight into the vast Selous Game Reserve, a UNESCO-listed protected area known for its untouched landscapes and extraordinary biodiversity.\n Upon arrival, settle into a riverside safari lodge overlooking the Rufiji River, where hippos and crocodiles gather along the water’s edge. Afternoon game drives introduce the reserve’s remarkable wildlife, including elephants, giraffes, buffalo, and predators roaming the open plains.\n Evenings are spent enjoying classic safari traditions — sundowners overlooking the river followed by dinners beneath starlit African skies.",
image1: "/images/packages/SELOUS_PEMBA_ESCAPE_Tanzania_Block01.webp",
},

{
title1: "DAY 3 — WALKING SAFARIS & RIVER BOAT EXPLORATION",
description1:
"Selous offers one of Africa’s most authentic safari experiences, including guided walking safaris led by expert trackers. Exploring the bush on foot allows travelers to discover the finer details of the ecosystem, from animal tracks to rare plants and birdlife often overlooked during vehicle safaris.\n Later in the day, embark on a boat safari along the Rufiji River, drifting quietly past hippos, crocodiles, and abundant water birds. The golden evening light reflecting across the river creates one of the most beautiful safari moments in Tanzania.",
image1: "/images/packages/SELOUS_PEMBA_ESCAPE_Tanzania_Block02.webp",
},

{
title1: "DAY 4 — BESPOKE SAFARI EXPERIENCES",
description1:
"Spend the day enjoying flexible safari activities tailored to your interests. Additional game drives offer opportunities to encounter lions, leopards, and large herds of elephants moving through the reserve’s diverse habitats.\n Alternatively, relax at the lodge overlooking the river, enjoy a bush breakfast in the wilderness, or simply take in the tranquility of one of Africa’s most remote safari regions.",
image1: "/images/packages/SELOUS_PEMBA_ESCAPE_Tanzania_Block03.webp",
},

{
title1: "DAY 5–6 — PEMBA ISLAND: HIDDEN SHORES OF ZANZIBAR",
description1:
"Depart Selous and fly east toward the Zanzibar Archipelago, arriving on the secluded island of Pemba. Known for its emerald hills, mangrove forests, and vibrant coral reefs, Pemba remains one of the Indian Ocean’s most untouched island destinations.\n Settle into a beachfront retreat where white sands meet crystal-clear waters. Days unfold at a relaxed pace with snorkeling excursions across coral reefs, swimming in warm turquoise lagoons, and exploring the island’s quiet coastal villages.",
image1: "/images/packages/SELOUS_PEMBA_ESCAPE_Tanzania_Block04.webp",
},

{
title1: "DAY 7–8 — CORAL REEFS & ISLAND RELAXATION",
description1:
"Pemba Island is considered one of East Africa’s premier diving and snorkeling destinations, home to thriving coral reefs and extraordinary marine biodiversity.\n Optional experiences include scuba diving along dramatic underwater drop-offs, mangrove canoeing through coastal forests, traditional dhow sailing at sunset, or spa treatments overlooking the Indian Ocean.\n Evenings conclude with relaxed beachside dining beneath the stars as the gentle sound of the ocean provides a peaceful ending to each day.",
image1: "/images/packages/SELOUS_PEMBA_ESCAPE_Tanzania_Block05.webp",
},

{
title1: "DAY 9 — DEPARTURE",
description1:
"Spend your final morning enjoying the serenity of Pemba Island — perhaps with a sunrise swim or breakfast overlooking the Indian Ocean.\n Later, transfer to the airstrip for your return flight to Dar es Salaam, concluding a journey that blends one of Africa’s most untouched safari regions with the secret shores of the Zanzibar archipelago.",
image1: "/images/packages/SELOUS_PEMBA_ESCAPE_Tanzania_Block02.webp",
}

],

hotels: [
{
name: "SIWANDU CAMP – SELOUS GAME RESERVE",
image: "/images/packages/SELOUS_PEMBA_ESCAPE_Tanzania_Hotel01.webp",
desc: "A luxury tented safari camp located along the Rufiji River, offering immersive wildlife experiences in one of Africa’s largest wilderness areas.",
},
{
name: "THE MANTA RESORT – PEMBA ISLAND",
image: "/images/packages/SELOUS_PEMBA_ESCAPE_Tanzania_Hotel02.webp",
desc: "A secluded beachfront resort known for its pristine coral reefs, turquoise waters, and unique Indian Ocean island atmosphere.",
}
],

similarPackages: [
{
slug: "tanzania",
packageSlug: "serengeti-safari",
title: "Serengeti Safari Experience",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "6 DAYS",
headline: "Witness the vast wildlife plains of the Serengeti."
}
},
{
slug: "tanzania",
packageSlug: "ngorongoro-crater",
title: "Ngorongoro Crater Journey",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "5 DAYS",
headline: "Explore one of Africa’s most remarkable wildlife sanctuaries."
}
},
{
slug: "tanzania",
packageSlug: "zanzibar-island-retreat",
title: "Zanzibar Island Retreat",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "4 DAYS",
headline: "Relax on white-sand beaches and turquoise waters."
}
}
]
},

// --------------------------------------------------------------------------------------
// GREECE PACKAGE 1 -- LEGENDS_LEISURE_GREECE
{
  slug: "greece",
  packageSlug: "LEGENDS_LEISURE_GREECE",
  title: "LEGENDS & LEISURE: A FAMILY ODYSSEY THROUGH GREECE",
  heroImage: "/images/packages/Greece_LEGENDS_LEISURE_HERO.webp",

  heroMeta: {
    country: "GREECE",
    headline: "LEGENDS & LEISURE: A FAMILY ODYSSEY THROUGH GREECE",
    when: "April – October",
    price: {
      label: "$9,800 per person (excluding international flights)",
    },
    duration: "11–12 Nights",
  },

  intro:
"This thoughtfully designed Greek journey blends mythology, culture, and coastal leisure across three of the country’s most captivating destinations. Beginning in Athens, travelers explore the birthplace of Western civilization through immersive guided experiences among legendary landmarks including the Acropolis and the ancient Oracle site of Delphi.\n The adventure then moves to the cosmopolitan island of Mykonos, where pristine beaches, charming whitewashed villages, and vibrant Aegean landscapes create the perfect setting for relaxation and exploration. A private yacht journey to the sacred island of Delos adds a unique historical dimension to the island experience.\n The journey concludes in Crete, Greece’s largest island, where ancient Minoan civilization, dramatic mountain landscapes, and picturesque coastal towns offer a rich blend of culture and natural beauty. From exploring the legendary Palace of Knossos to discovering hidden villages and seaside harbors, this itinerary offers a seamless balance of discovery and leisure for families seeking an unforgettable Greek adventure.",

sections: [
{
title1: "DAY 1–2 — ATHENS: ARRIVAL & CLASSICAL GREEK HERITAGE",
description1:
"Arrive in Athens and settle into your luxury hotel in the heart of the historic city. Spend the afternoon exploring charming neighbourhoods such as Plaka and Monastiraki, where cobbled streets, boutique shops, and lively cafés introduce the vibrant spirit of the Greek capital.\n The following day begins with a private excursion to the Argolis region of the Peloponnese, visiting the ancient theatre of Epidaurus — one of the best-preserved classical theatres in the world — and the historic city of Nafplio, once Greece’s first modern capital.",
image1: "/images/packages/Greece_LEGENDS_LEISURE_Block01.webp",
},

{
title1: "DAY 3–4 — DELPHI & THE MYTHOLOGICAL WORLD OF THE ACROPOLIS",
description1:
"Journey north from Athens to the UNESCO-listed archaeological site of Delphi, once believed by the ancient Greeks to be the center of the world. Explore the Temple of Apollo, the ancient theatre, and the fascinating Delphi Museum with a knowledgeable guide who brings the stories of Greek mythology and history vividly to life.\n Back in Athens, enjoy a unique family-focused exploration of the Acropolis and its legendary monuments. Interactive storytelling reveals the myths of Athena, Poseidon, and Zeus while visiting the Parthenon, Erechtheion, and the Acropolis Museum.",
image1: "/images/packages/Greece_LEGENDS_LEISURE_Block02.webp",
},

{
title1: "DAY 5–7 — MYKONOS: AEGEAN ISLAND LEISURE",
description1:
"Fly from Athens to the beautiful island of Mykonos, known for its whitewashed villages, sparkling blue waters, and laid-back island atmosphere. After settling into your seaside resort, enjoy time at leisure along the island’s famous beaches.\n A highlight of your stay is a private yacht excursion to the nearby island of Delos — one of Greece’s most significant archaeological sites and the legendary birthplace of Apollo and Artemis. Explore ancient temples and ruins before enjoying swimming and snorkeling in the surrounding crystal-clear waters.",
image1: "/images/packages/Greece_LEGENDS_LEISURE_Block03.webp",
},

{
title1: "DAY 8–9 — CRETE: MINOAN CIVILIZATION & HERAKLION",
description1:
"Continue your journey with a flight to Heraklion on the island of Crete, transferring to the elegant coastal town of Elounda. This region offers spectacular views across Mirabello Bay and serves as a gateway to Crete’s rich history and natural beauty.\n Visit the legendary Palace of Knossos, the center of the ancient Minoan civilization and the mythical home of the Minotaur. Later, explore the vibrant city of Heraklion with its Venetian harbor, local markets, and historic architecture.",
image1: "/images/packages/Greece_LEGENDS_LEISURE_Block04.webp",
},

{
title1: "DAY 10–11 — CRETE ADVENTURES & COASTAL DISCOVERY",
description1:
"Venture into Crete’s mountainous interior to explore the legendary Cave of Zeus, believed in mythology to be the birthplace of the king of the Greek gods. The journey offers spectacular views across the island’s rugged landscapes and traditional villages.\n Later experiences include a boat excursion to the historic island of Spinalonga and a relaxed stroll through the charming harbor town of Agios Nikolaos, known for its scenic waterfront cafés and lively atmosphere.",
image1: "/images/packages/Greece_LEGENDS_LEISURE_Block05.webp",
},

{
title1: "DAY 12 — DEPARTURE",
description1:
"Spend your final morning enjoying the coastal beauty of Crete before transferring to the airport for your onward journey. Depart Greece with lasting memories of ancient myths, vibrant island life, and unforgettable family experiences.",
image1: "/images/packages/Greece_LEGENDS_LEISURE_Block06.webp",
}

],

hotels: [
{
name: "GRANDE BRETAGNE – ATHENS",
image: "/images/packages/Greece_LEGENDS_LEISURE_Hotel01.webp",
desc: "A landmark luxury hotel overlooking Syntagma Square, offering elegant rooms and spectacular views of the Acropolis.",
},
{
name: "MYCONIAN COLLECTION RESORT – MYKONOS",
image: "/images/packages/Greece_LEGENDS_LEISURE_Hotel02.webp",
desc: "A stylish Aegean resort combining contemporary luxury with breathtaking views of the island’s beaches.",
},
{
name: "DOMES OF ELOUNDA – CRETE",
image: "/images/packages/Greece_LEGENDS_LEISURE_Hotel03.webp",
desc: "An award-winning luxury resort overlooking Mirabello Bay, offering private villas and exceptional Mediterranean hospitality.",
}
],

similarPackages: [
{
slug: "greece",
packageSlug: "santorini-escape",
title: "Santorini Escape",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "5 DAYS",
headline: "Experience iconic sunsets and cliffside beauty in Santorini."
}
},
{
slug: "greece",
packageSlug: "athens-history-tour",
title: "Athens Cultural Journey",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "4 DAYS",
headline: "Dive into the ancient history and vibrant culture of Athens."
}
},
{
slug: "greece",
packageSlug: "crete-island-retreat",
title: "Crete Island Retreat",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "6 DAYS",
headline: "Discover Crete’s beaches, history, and scenic landscapes."
}
}
]
},

// GREECE PACKAGE 2 -- NORTHERN_AEGEAN_REVERIE: CITIES, SEAS & ARTISAN ISLES
{
  slug: "greece",
  packageSlug: "AEGEAN_REVERIE",
  title: "NORTHERN AEGEAN REVERIE: CITIES, SEAS & ARTISAN ISLES",
  heroImage: "/images/packages/Greece_NORTHERN_AEGEAN_REVERIE_Hero.webp",

  heroMeta: {
    country: "GREECE",
    headline: "NORTHERN AEGEAN REVERIE: CITIES, SEAS & ARTISAN ISLES",
    when: "May – October",
    price: {
      label: "$9,400 per person (excluding international flights)",
    },
    duration: "11 Nights",
  },

  intro:
"This immersive journey through northern Greece and the Aegean islands reveals a side of the country often overlooked by traditional itineraries. Combining vibrant coastal cities, unspoiled peninsulas, and artisan island traditions, the experience offers a rich blend of culture, gastronomy, and scenic island exploration.\n The journey begins in Thessaloniki, Greece’s lively northern capital, where Byzantine heritage, Ottoman influences, and an acclaimed culinary scene create one of the country’s most vibrant cultural hubs.\n From here, the adventure continues to the stunning peninsula of Halkidiki, known for its pine-covered landscapes, hidden coves, and tranquil beaches. Sailing south into the Sporades archipelago, travelers discover secluded islands, emerald waters, and charming harbors accessible only by boat.\n The journey concludes with time in Athens before venturing to the island of Sifnos, where traditional crafts, culinary heritage, and authentic Cycladic charm provide a memorable finale to this unique Greek exploration.",

sections: [
{
title1: "DAY 1–2 — THESSALONIKI: NORTHERN GREECE’S CULTURAL CAPITAL",
description1:
"Arrive in Thessaloniki and settle into a boutique hotel overlooking the Thermaic Gulf. Spend your first evening strolling along the city’s lively waterfront promenade, where cafés, restaurants, and historic landmarks create a vibrant atmosphere.\n The following day explores Thessaloniki’s celebrated culinary heritage. Visit bustling local markets and artisan food stalls while discovering the city’s famous meze culture — a rich tradition of small shared dishes reflecting centuries of Greek, Balkan, and Mediterranean influences.",
image1: "/images/packages/Greece_NORTHERN_AEGEAN_REVERIE_Block1.webp",
},

{
title1: "DAY 3–4 — HALKIDIKI: COASTAL PENINSULAS & HIDDEN VILLAGES",
description1:
"Depart Thessaloniki and drive south to the Halkidiki peninsula, renowned for its crystal-clear waters and lush Mediterranean landscapes.\n Explore the Sithonia region, where pine forests meet quiet beaches and scenic coastal roads reveal spectacular views across the Aegean Sea.\n A relaxed day follows, offering time to enjoy the beaches of Halkidiki or visit the charming hilltop village of Old Nikiti, where stone houses, local bakeries, and traditional tavernas reflect the region’s authentic character.",
image1: "/images/packages/Greece_NORTHERN_AEGEAN_REVERIE_Block2.webp",
},

{
title1: "DAY 5–6 — SPORADES ISLANDS: PRIVATE SAILING ADVENTURE",
description1:
"Board a private yacht and sail into the emerald waters of the Sporades archipelago. En route, stop at the remote island of Kyra Panagia, known for its pristine coastline and turquoise bays.\n Arrive on the island of Alonissos, part of the National Marine Park of the Northern Sporades — one of Europe’s most important marine ecosystems.\n The following day includes a coastal hike through scenic landscapes before sailing onward to the picturesque island of Skopelos, famous for its whitewashed houses cascading down hillsides above the sea.",
image1: "/images/packages/Greece_NORTHERN_AEGEAN_REVERIE_Block3.webp",
},

{
title1: "DAY 7–8 — SKIATHOS & RETURN TO ATHENS",
description1:
"Continue exploring the Sporades with a beach day on the island of Skiathos, home to some of the most beautiful beaches in Greece. Visit the famous Lalaria Beach with its dramatic white cliffs and the golden sands of Koukounaries, surrounded by fragrant pine forests.\n Later, sail back toward the mainland before taking a flight to Athens, where the journey transitions back to Greece’s historic capital.",
image1: "/images/packages/Greece_NORTHERN_AEGEAN_REVERIE_Block4.webp",
},

{
title1: "DAY 9–11 — SIFNOS: ARTISAN TRADITIONS & ISLAND GASTRONOMY",
description1:
"From Athens, travel by speedboat to the Cycladic island of Sifnos, celebrated for its culinary heritage and artisan crafts.\n Enjoy a hands-on cooking experience where local chefs share traditional recipes passed down through generations.\n The island is also famous for its pottery tradition. Participate in a masterclass with local artisans, learning about the craftsmanship that has shaped Sifnos’ identity for centuries.\n Between experiences, explore picturesque villages, scenic coastal trails, and quiet beaches that capture the timeless beauty of the Cyclades.",
image1: "/images/packages/Greece_NORTHERN_AEGEAN_REVERIE_Block5.webp",
},

{
title1: "DAY 12 — DEPARTURE",
description1:
"Spend your final morning enjoying the relaxed pace of island life before transferring back to Athens for your onward departure.\n Depart Greece with lasting memories of vibrant cities, secluded islands, and authentic cultural encounters across the northern Aegean.",
image1: "/images/packages/Greece_NORTHERN_AEGEAN_REVERIE_Block6.webp",
}

],

hotels: [
{
name: "ONOMA HOTEL – THESSALONIKI",
image: "/images/packages/Greece_NORTHERN_AEGEAN_REVERIE_Hotel1.webp",
desc: "A contemporary boutique hotel offering modern design and panoramic views across the city.",
},
{
name: "EKIES ALL SENSES RESORT – HALKIDIKI",
image: "/images/packages/Greece_NORTHERN_AEGEAN_REVERIE_Hotel2.webp",
desc: "A stylish beachfront retreat surrounded by pine forests and crystal-clear waters.",
},
{
name: "SKOPELOS VILLAGE HOTEL – SPORADES",
image: "/images/packages/Greece_NORTHERN_AEGEAN_REVERIE_Hotel3.webp",
desc: "A charming seaside hotel overlooking the Aegean, blending traditional island architecture with elegant comfort.",
},
// {
// name: "VERINA ASTRA – SIFNOS",
// image: "/images/packages/Greece_NORTHERN_AEGEAN_REVERIE_Hotel4.webp",
// desc: "A refined boutique retreat with sweeping views across the Cycladic landscape.",
// }
],

similarPackages: [
{
slug: "greece",
packageSlug: "santorini-escape",
title: "Santorini Escape",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "5 DAYS",
headline: "Experience iconic sunsets and cliffside beauty in Santorini."
}
},
{
slug: "greece",
packageSlug: "athens-history-tour",
title: "Athens Cultural Journey",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "4 DAYS",
headline: "Dive into the ancient history and vibrant culture of Athens."
}
},
{
slug: "greece",
packageSlug: "crete-island-retreat",
title: "Crete Island Retreat",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "6 DAYS",
headline: "Discover Crete’s beaches, history, and scenic landscapes."
}
}
]
},

// GREECE PACKAGE 3 -- CLASSIC_SERENGETI_TARANGIRE_ZANZIBAR_COASTLINE
{
  slug: "greece",
  packageSlug: "AEGEAN_ICONS_EPICUREAN_ISLES",
  title: "AEGEAN ICONS & EPICUREAN ISLES",
  heroImage: "/images/packages/AEGEAN_ICONS_EPICUREAN_ISLES_HERO.webp",

  heroMeta: {
    country: "GREECE",
    headline: "AEGEAN ICONS & EPICUREAN ISLES",
    when: "May – October",
    price: {
      label: "$8,900 per person (excluding international flights)",
    },
    duration: "9 Nights",
  },

  intro:
"This refined island journey explores some of the most captivating destinations of the Cyclades, combining Greece’s historic capital with three distinctive Aegean islands known for their culinary traditions, elegant villages, and breathtaking coastal scenery.\n Beginning in Athens, travelers experience the legendary Acropolis and ancient landmarks that shaped Western civilization before sailing into the heart of the Cyclades.\n The journey continues to Sifnos, an island celebrated for its gastronomic heritage and charming whitewashed villages perched above turquoise coves. From here, the adventure moves to Paros and nearby Antiparos, where Venetian architecture, hidden caves, and pristine beaches offer a balance of discovery and leisure.\n The final chapter unfolds on the iconic island of Santorini, where dramatic volcanic cliffs rise above the Aegean Sea. Here, luxury caldera-view stays, private winery tastings, and unforgettable sunset sailing experiences provide a spectacular conclusion to this elegant island-hopping journey.",

sections: [
{
title1: "DAY 1–2 — ATHENS: CLASSICAL LANDMARKS & AEGEAN GATEWAY",
description1:
"Arrive in Athens and settle into a luxury hotel overlooking the Acropolis, offering panoramic views of the city’s ancient skyline.\n Spend the afternoon wandering through historic districts such as Plaka and Kolonaki, where neoclassical architecture, elegant cafés, and boutique shops create a vibrant introduction to Greek culture.\n The following day begins with a guided exploration of the Acropolis and its surrounding archaeological landmarks. Discover the Parthenon, the Temple of Athena Nike, and the Acropolis Museum while learning about the myths and legends that shaped ancient Greece.\n Later in the afternoon, transfer to the port of Piraeus and board a ferry to the Cycladic island of Sifnos.",
image1: "/images/packages/AEGEAN_ICONS_EPICUREAN_ISLES_Block01.webp",
},

{
title1: "DAY 3–4 — SIFNOS: GASTRONOMY & COASTAL CHARM",
description1:
"Sifnos is widely regarded as one of Greece’s culinary capitals, known for its traditional recipes and rich food culture.\n Begin your stay with a hands-on cooking class led by a local chef, where you learn to prepare classic Greek dishes using fresh island ingredients. Later, explore the charming harbor village of Vathi and enjoy dinner at a traditional seaside taverna while watching the sunset over the Aegean.\n The following day offers time at leisure to enjoy the island’s tranquil beaches, scenic walking trails, or optional private boat excursions exploring hidden coves and turquoise bays along the coastline.",
image1: "/images/packages/AEGEAN_ICONS_EPICUREAN_ISLES_Block02.webp",
},

{
title1: "DAY 5–6 — PAROS & ANTIPAROS: CYCLADIC BEAUTY",
description1:
"Travel by ferry to the picturesque island of Paros, known for its elegant Cycladic architecture and lively waterfront villages.\n Explore the Venetian Kastro in the historic town of Naoussa and wander through narrow marble-paved streets lined with boutique shops and cafés.\n A short boat excursion brings you to the nearby island of Antiparos, where you can visit the famous Antiparos Cave — an impressive cavern filled with dramatic stalactites and stalagmites — before enjoying swimming and relaxation along secluded beaches.",
image1: "/images/packages/AEGEAN_ICONS_EPICUREAN_ISLES_Block03.webp",
},

{
title1: "DAY 7 — SANTORINI: THE AEGEAN’S MOST ICONIC ISLAND",
description1:
"Continue your journey with a ferry to Santorini, one of the most spectacular islands in the Mediterranean.\n Upon arrival, settle into a luxury cliffside hotel overlooking the caldera — the vast volcanic basin that defines Santorini’s dramatic landscape.\n Spend the evening exploring the whitewashed villages of Oia or Imerovigli, where terraces, infinity pools, and candlelit restaurants overlook the deep blue waters of the Aegean Sea.",
image1: "/images/packages/AEGEAN_ICONS_EPICUREAN_ISLES_Block04.webp",
},

{
title1: "DAY 8–9 — SANTORINI: WINE, VOLCANOES & SUNSET SAILING",
description1:
"Santorini’s volcanic soil has created one of Greece’s most distinctive wine regions. Enjoy a private winery tour visiting several boutique vineyards while sampling renowned local varieties such as Assyrtiko.\n Later, explore the island’s dramatic volcanic landscapes and black-sand beaches shaped by ancient eruptions.\n A highlight of your stay is a sunset sailing cruise around the caldera. Swim in secluded coves, enjoy views of the island’s towering cliffs, and savor a freshly prepared dinner onboard as the sun sets over the Aegean.",
image1: "/images/packages/AEGEAN_ICONS_EPICUREAN_ISLES_Block05.webp",
},

{
title1: "DAY 10 — DEPARTURE",
description1:
"Spend your final morning relaxing on the terrace of your caldera-view hotel, taking in the remarkable scenery of Santorini.\n Later, transfer to the airport or ferry port for your onward journey, concluding an unforgettable exploration of Greece’s most beautiful islands.",
image1: "/images/packages/AEGEAN_ICONS_EPICUREAN_ISLES_Block06.webp",
}

],

hotels: [
{
name: "GRANDE BRETAGNE – ATHENS",
image: "/images/packages/AEGEAN_ICONS_EPICUREAN_ISLES_Hotel01.webp",
desc: "A historic luxury hotel overlooking Syntagma Square with exceptional views of the Acropolis.",
},
{
name: "VERINA ASTRA – SIFNOS",
image: "/images/packages/AEGEAN_ICONS_EPICUREAN_ISLES_Hotel02.webp",
desc: "A refined boutique retreat offering sweeping views of the Aegean and authentic Cycladic elegance.",
},
{
name: "PARILIO HOTEL – PAROS",
image: "/images/packages/AEGEAN_ICONS_EPICUREAN_ISLES_Hotel03.webp",
desc: "A contemporary luxury sanctuary near Naoussa known for its minimalist Cycladic design.",
}
],

similarPackages: [
{
slug: "greece",
packageSlug: "santorini-escape",
title: "Santorini Escape",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "5 DAYS",
headline: "Experience iconic sunsets and cliffside beauty in Santorini."
}
},
{
slug: "greece",
packageSlug: "athens-history-tour",
title: "Athens Cultural Journey",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "4 DAYS",
headline: "Dive into the ancient history and vibrant culture of Athens."
}
},
{
slug: "greece",
packageSlug: "crete-island-retreat",
title: "Crete Island Retreat",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "6 DAYS",
headline: "Discover Crete’s beaches, history, and scenic landscapes."
}
}
]
},

// GREECE PACKAGE 4 -- CYCLADIC_CALM_ISLAND_HOPPING_ESCAPE
{
  slug: "greece",
  packageSlug: "CYCLADIC_CALM",
  title: "CYCLADIC CALM: AN ISLAND-HOPPING ESCAPE",
  heroImage: "/images/packages/Greece_CYCLADIC_CALM_AN_ISLAND_HERO.webp",

  heroMeta: {
    country: "GREECE",
    headline: "CYCLADIC CALM: AN ISLAND-HOPPING ESCAPE",
    when: "May – October",
    price: {
      label: "$7,900 per person (excluding international flights)",
    },
    duration: "8 Nights",
  },

  intro:
"This elegant island-hopping journey through the Cyclades reveals a slower, more refined side of Greece, where relaxed coastal villages, turquoise bays, and timeless island traditions create the perfect Mediterranean escape.\n Beginning in Athens, the gateway to the Greek islands, travelers soon transition to the laid-back charm of Paros — an island known for its elegant fishing villages, secluded coves, and vibrant waterfront life.\n The journey continues to the peaceful island of Sifnos, celebrated for its culinary heritage and scenic walking trails connecting whitewashed villages and hidden beaches.\n The final chapter unfolds on the dramatic volcanic island of Santorini, where caldera cliffs, legendary sunsets, and luxury cliffside stays create one of the Mediterranean’s most unforgettable travel experiences.",

sections: [
{
title1: "DAY 1–2 — PAROS: CYCLADIC VILLAGES & COASTAL BEAUTY",
description1:
"Arrive in Athens and take a short domestic flight to the island of Paros, where the relaxed pace of the Cyclades immediately sets the tone for your journey.\n After settling into your boutique seaside hotel, spend the afternoon unwinding along the island’s beautiful coastline or exploring the charming harbor town of Naoussa.\n The following day reveals the island’s diverse landscapes, from traditional villages and hidden coves to the sculpted granite formations of Kolymbithres Bay. Enjoy leisurely exploration through narrow Cycladic streets lined with cafés, boutiques, and whitewashed homes overlooking the sea.",
image1: "/images/packages/Greece_CYCLADIC_CALM_AN_ISLAND_Block01.webp",
},

{
title1: "DAY 3–4 — ANTIPAROS & SIFNOS: ISLAND DISCOVERY",
description1:
"Take a short boat excursion to the nearby island of Antiparos, a peaceful destination known for its relaxed atmosphere, quiet beaches, and dramatic natural cave formations.\n Spend the day exploring its charming village and swimming in secluded bays before returning to Paros.\n The next day, continue your island-hopping journey by boat to Sifnos, an island celebrated for its authentic Cycladic architecture and rich culinary traditions. Upon arrival, settle into your hillside retreat overlooking the Aegean Sea.",
image1: "/images/packages/Greece_CYCLADIC_CALM_AN_ISLAND_Block02.webp",
},

{
title1: "DAY 5–6 — SIFNOS: CULINARY TRADITIONS & ISLAND TRAILS",
description1:
"Sifnos is widely regarded as one of Greece’s gastronomic capitals, known for recipes and cooking techniques passed down through generations.\n Participate in a hands-on cooking class led by a local chef, preparing classic Greek dishes using seasonal island ingredients.\n Beyond its culinary heritage, Sifnos offers scenic walking paths connecting picturesque villages, monasteries, and quiet beaches. Spend the following day exploring hidden coves, hiking traditional stone pathways, or simply enjoying the tranquil pace of island life.",
image1: "/images/packages/Greece_CYCLADIC_CALM_AN_ISLAND_Block03.webp",
},

{
title1: "DAY 7–8 — SANTORINI: CALDERA VIEWS & VOLCANIC LANDSCAPES",
description1:
"Continue your journey by boat to Santorini, one of the Mediterranean’s most iconic destinations. Upon arrival, check into your luxury caldera-view hotel perched dramatically above the sea.\n Spend your evening wandering through the enchanting village of Oia, where narrow lanes, boutique galleries, and elegant terraces overlook Santorini’s legendary sunsets.\n The following day explores the island’s unique volcanic heritage with a visit to the ancient ruins of Akrotiri — a remarkably preserved Bronze Age settlement often referred to as the “Pompeii of the Aegean.”\n Later, enjoy time to relax at your hotel spa or soak in the dramatic scenery from your private terrace overlooking the caldera.",
image1: "/images/packages/Greece_CYCLADIC_CALM_AN_ISLAND_Block04.webp",
}

],

hotels: [
{
name: "PARILIO HOTEL – PAROS",
image: "/images/packages/Greece_CYCLADIC_CALM_AN_ISLAND_Hotel1.webp",
desc: "A refined Cycladic retreat combining minimalist design with tranquil gardens and elegant suites.",
},
{
name: "VERINA ASTRA – SIFNOS",
image: "/images/packages/Greece_CYCLADIC_CALM_AN_ISLAND_Hotel2.webp",
desc: "A boutique hillside property offering sweeping views across the Aegean and authentic island charm.",
},
{
name: "CANAVES OIA SUITES – SANTORINI",
image: "/images/packages/Greece_CYCLADIC_CALM_AN_ISLAND_Hotel3.webp",
desc: "A luxury cliffside sanctuary featuring iconic caldera views, private terraces, and unforgettable sunset scenery.",
}
],

similarPackages: [
{
slug: "greece",
packageSlug: "santorini-escape",
title: "Santorini Escape",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "5 DAYS",
headline: "Experience iconic sunsets and cliffside beauty in Santorini."
}
},
{
slug: "greece",
packageSlug: "athens-history-tour",
title: "Athens Cultural Journey",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "4 DAYS",
headline: "Dive into the ancient history and vibrant culture of Athens."
}
},
{
slug: "greece",
packageSlug: "crete-island-retreat",
title: "Crete Island Retreat",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "6 DAYS",
headline: "Discover Crete’s beaches, history, and scenic landscapes."
}
}
]
},

// GREECE PACKAGE 5 -- EMPIRES_AEGEAN_DREAMS: GREECE & TURKEY EXPLORATION
{
  slug: "greece",
  packageSlug: "EMPIRES_AEGEAN_DREAMS",
  title: "EMPIRES & AEGEAN DREAMS",
  heroImage: "/images/packages/AEGEAN_ICONS_EPICUREAN_ISLES_HERO.webp",

  heroMeta: {
    country: "GREECE & TURKEY",
    headline: "EMPIRES & AEGEAN DREAMS",
    when: "April – October",
    price: {
      label: "$11,900 per person (excluding international flights)",
    },
    duration: "13 Nights",
  },

  intro:
"This extraordinary journey blends the glamour of the Greek islands with the grandeur of two ancient empires, creating a seamless exploration of Mediterranean elegance and historic wonder.\n The journey begins in Mykonos, where turquoise waters, iconic windmills, and sophisticated beach clubs create one of the most vibrant atmospheres in the Aegean. From here, a scenic helicopter transfer leads to the dramatic volcanic island of Santorini, where cliffside villages and caldera views offer one of the world’s most breathtaking island settings.\n Continuing to Athens, travelers explore the legendary landmarks of ancient Greece before crossing into Turkey to discover the imperial heritage of Istanbul — a city where Byzantine and Ottoman influences meet along the Bosphorus.\n The journey concludes in the surreal landscapes of Cappadocia, where fairy chimneys, cave dwellings, and sunrise hot-air balloon flights create an unforgettable finale.",

sections: [
{
title1: "DAY 1–3 — MYKONOS: AEGEAN GLAMOUR & BEACHFRONT LUXURY",
description1:
"Arrive on the island of Mykonos and settle into your luxury beachfront hotel overlooking the crystal-clear waters of the Aegean Sea.\n Spend your first evening exploring Mykonos Town, where whitewashed alleyways, charming boutiques, and vibrant cafés create a lively island atmosphere. Visit the iconic windmills overlooking Little Venice as the sun sets over the harbor.\n The following days offer time to enjoy the island’s famous beach clubs and secluded coves. Whether relaxing on golden sands or enjoying private yacht excursions along the coastline, Mykonos provides the perfect introduction to the glamour of the Greek islands.",
image1: "/images/packages/AEGEAN_ICONS_EPICUREAN_ISLES_Block01.webp",
},

{
title1: "DAY 4–6 — SANTORINI: VOLCANIC LANDSCAPES & CALDERA LUXURY",
description1:
"Depart Mykonos by helicopter for a spectacular aerial journey to Santorini, offering unforgettable views across the Cycladic islands.\n Upon arrival, settle into your luxury cliffside hotel overlooking the island’s dramatic caldera. Spend time exploring the enchanting villages of Oia and Fira, where narrow lanes, boutique galleries, and elegant terraces reveal breathtaking views across the Aegean Sea.\n The island’s rich volcanic history is revealed through visits to the ancient ruins of Akrotiri, one of the most remarkable archaeological sites in the Mediterranean. Continue with a wine tasting experience at a local vineyard before visiting Santorini’s famous Red Beach, where striking volcanic cliffs meet deep blue waters.",
image1: "/images/packages/AEGEAN_ICONS_EPICUREAN_ISLES_Block02.webp",
},

{
title1: "DAY 7–8 — ATHENS: LEGENDS OF ANCIENT GREECE",
description1:
"Travel from Santorini to Athens, Greece’s historic capital and the birthplace of Western civilization.\n Explore the Acropolis and its remarkable monuments including the Parthenon and the Temple of Athena Nike. Your guide brings ancient myths and historical stories to life while revealing the significance of these extraordinary landmarks.\n Later, ascend Lycabettus Hill for panoramic views across the city before enjoying time to explore Athens’ vibrant neighbourhoods filled with cafés, galleries, and traditional tavernas.",
image1: "/images/packages/AEGEAN_ICONS_EPICUREAN_ISLES_Block03.webp",
},

{
title1: "DAY 9–13 — ISTANBUL & CAPPADOCIA: EMPIRES & ANCIENT LANDSCAPES",
description1:
"Fly to Istanbul, where East meets West in one of the world’s most captivating historic cities. Explore the magnificent Hagia Sophia, the opulent Topkapi Palace, and the colorful labyrinth of the Grand Bazaar.\n Continue your journey with a flight to Cappadocia, a region famous for its surreal landscapes shaped by volcanic activity over thousands of years.\n Discover the region’s remarkable fairy chimneys, ancient cave dwellings, and the hilltop fortress of Uçhisar Castle. A highlight of your stay is a sunrise hot-air balloon flight drifting above Cappadocia’s extraordinary valleys — one of the most unforgettable experiences in Turkey.",
image1: "/images/packages/AEGEAN_ICONS_EPICUREAN_ISLES_Block04.webp",
}

],

hotels: [
{
name: "MYCONIAN COLLECTION RESORT – MYKONOS",
image: "/images/packages/AEGEAN_ICONS_EPICUREAN_ISLES_Hotel01.webp",
desc: "A sophisticated luxury resort offering elegant suites, private pools, and sweeping views across the Aegean Sea.",
},
{
name: "CANAVES OIA SUITES – SANTORINI",
image: "/images/packages/AEGEAN_ICONS_EPICUREAN_ISLES_Hotel02.webp",
desc: "A legendary caldera-side property featuring luxurious cave-style suites and breathtaking sunset views.",
},
{
name: "HOTEL GRANDE BRETAGNE – ATHENS",
image: "/images/packages/AEGEAN_ICONS_EPICUREAN_ISLES_Hotel03.webp",
desc: "A historic luxury hotel overlooking Syntagma Square with panoramic views of the Acropolis.",
},
// {
// name: "ARGOS IN CAPPADOCIA – CAPPADOCIA",
// image: "/images/packages/EMPIRES_AEGEAN_DREAMS_Hotel04.webp",
// desc: "A stunning cave hotel set within ancient stone dwellings offering dramatic views across Cappadocia’s valleys.",
// }
],

similarPackages: [
{
slug: "greece",
packageSlug: "santorini-escape",
title: "Santorini Escape",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "5 DAYS",
headline: "Experience iconic sunsets and cliffside beauty in Santorini."
}
},
{
slug: "greece",
packageSlug: "athens-history-tour",
title: "Athens Cultural Journey",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "4 DAYS",
headline: "Dive into the ancient history and vibrant culture of Athens."
}
},
{
slug: "greece",
packageSlug: "crete-island-retreat",
title: "Crete Island Retreat",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "6 DAYS",
headline: "Discover Crete’s beaches, history, and scenic landscapes."
}
}
]
},

// GREECE PACKAGE 6 -- FROM_POLIS_TO_PARADISE
{
  slug: "greece",
  packageSlug: "FROM_POLIS_TO_PARADISE",
  title: "FROM POLIS TO PARADISE: A TIMELESS GREEK ESCAPE",
  heroImage: "/images/packages/FROM_POLIS_TO_PARADISE_Greece_HERO.webp",

  heroMeta: {
    country: "GREECE",
    headline: "FROM POLIS TO PARADISE: A TIMELESS GREEK ESCAPE",
    when: "April – October",
    price: {
      label: "$9,600 per person (excluding international flights)",
    },
    duration: "8 Nights",
  },

  intro:
"This elegant journey through mainland Greece and the Saronic islands reveals a timeless blend of classical heritage, coastal beauty, and refined luxury experiences.\n Beginning in Athens, travelers explore the legendary landmarks of ancient Greece while enjoying the modern sophistication of the Athens Riviera. From sunrise visits to the Acropolis to sunset views at the Temple of Poseidon, the journey offers an immersive introduction to the country’s rich cultural heritage.\n The adventure then continues to the charming island of Spetses, known for its elegant harbor, horse-drawn carriages, and relaxed seaside atmosphere. Nearby Hydra, one of Greece’s most picturesque islands, offers a car-free environment where cobbled streets and stone mansions preserve the island’s historic character.\n The journey concludes in the Peloponnese at Amanzoe, one of Greece’s most exclusive resorts, where wellness experiences, ancient sanctuaries, and serene Mediterranean landscapes provide a tranquil finale.",

sections: [
{
title1: "DAY 1–2 — ATHENS: ANCIENT LANDMARKS & RIVIERA LIFESTYLE",
description1:
"Arrive in Athens and settle into your luxury resort along the Athens Riviera, where sweeping views across the Aegean Sea create a serene introduction to Greece.\n The following morning begins with an early sunrise hike to the Acropolis, offering a peaceful exploration of the Parthenon and surrounding monuments before the crowds arrive. Later, enjoy a guided food tour through Athens’ vibrant neighborhoods, discovering traditional bakeries, bustling markets, and authentic Greek flavors that reflect the city’s rich culinary heritage.",
image1: "/images/packages/FROM_POLIS_TO_PARADISE_Greece_Block01.webp",
},

{
title1: "DAY 3 — CAPE SOUNION: TEMPLES & AEGEAN SUNSETS",
description1:
"Venture south along the scenic Athens Riviera to Cape Sounion, one of the most dramatic coastal landscapes in Greece.\n Here, the Temple of Poseidon stands atop towering cliffs overlooking the Aegean Sea. As the sun begins to set, the temple’s marble columns glow in golden light, creating one of the most unforgettable sunset views in the Mediterranean.",
image1: "/images/packages/FROM_POLIS_TO_PARADISE_Greece_Block02.webp",
},

{
title1: "DAY 4–5 — SPETSES & HYDRA: SARONIC ISLAND CHARM",
description1:
"Travel by water taxi across the Saronic Gulf to the island of Spetses, known for its elegant neoclassical architecture and charming harbor lined with cafés and boutique hotels.\n Spend the day exploring the island’s relaxed atmosphere before embarking on a boat excursion to Hydra — one of Greece’s most beautiful and historic islands. With no cars allowed, Hydra preserves a timeless character where donkeys and boats remain the primary means of transport.\n Stroll through its cobbled streets, visit historic mansions overlooking the harbor, and enjoy leisurely seaside dining in this enchanting island setting.",
image1: "/images/packages/FROM_POLIS_TO_PARADISE_Greece_Block03.webp",
},

{
title1: "DAY 6–8 — PELOPONNESE: WELLNESS & CLASSICAL HERITAGE",
description1:
"Continue your journey to the Peloponnese peninsula and arrive at Amanzoe, a world-renowned luxury resort set among rolling hills overlooking the Aegean Sea.\n Designed with classical Greek inspiration, Amanzoe offers a serene retreat focused on wellness and relaxation. Spend your time enjoying spa treatments, private pools, and tranquil Mediterranean landscapes.\n A highlight of your stay includes visiting the ancient healing sanctuary of Epidaurus, famous for its remarkable theatre and its historic role as a center of medicine in the ancient Greek world.",
image1: "/images/packages/FROM_POLIS_TO_PARADISE_Greece_Block04.webp",
}

],

hotels: [
{
name: "FOUR SEASONS ASTIR PALACE – ATHENS RIVIERA",
image: "/images/packages/FROM_POLIS_TO_PARADISE_Greece_Hotel01.webp",
desc: "A legendary luxury resort offering private beaches, world-class dining, and panoramic views across the Aegean Sea.",
},
{
name: "POSEIDONION GRAND HOTEL – SPETSES",
image: "/images/packages/FROM_POLIS_TO_PARADISE_Greece_Hotel02.webp",
desc: "An iconic Belle Époque hotel overlooking Spetses’ historic harbor, known for its timeless elegance.",
},
{
name: "AMANZOE – PELOPONNESE",
image: "/images/packages/FROM_POLIS_TO_PARADISE_Greece_Hotel03.webp",
desc: "One of Greece’s most exclusive resorts, combining classical architecture with extraordinary wellness experiences and breathtaking coastal views.",
}
],

similarPackages: [
{
slug: "greece",
packageSlug: "santorini-escape",
title: "Santorini Escape",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "5 DAYS",
headline: "Experience iconic sunsets and cliffside beauty in Santorini."
}
},
{
slug: "greece",
packageSlug: "athens-history-tour",
title: "Athens Cultural Journey",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "4 DAYS",
headline: "Dive into the ancient history and vibrant culture of Athens."
}
},
{
slug: "greece",
packageSlug: "crete-island-retreat",
title: "Crete Island Retreat",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "6 DAYS",
headline: "Discover Crete’s beaches, history, and scenic landscapes."
}
}
]
},

// ------------------------------------------------------------------------------------

// morocco PACKAGE 1 -- FROM IMPERIAL CITIES TO SAHARA STARS: A GRAND MOROCCAN JOURNEY
{
  slug: "morocco",
  packageSlug: "IMPERIAL_CITIES_SAHARA_STARS",
  title: "FROM IMPERIAL CITIES TO SAHARA STARS: A GRAND MOROCCAN JOURNEY",
  heroImage: "/images/packages/IMPERIAL_CITIES_SAHARA_STARS_Morocco_HERO.webp",

  heroMeta: {
    country: "MOROCCO",
    headline: "FROM IMPERIAL CITIES TO SAHARA STARS: A GRAND MOROCCAN JOURNEY",
    when: "March – May & September – November",
    price: {
      label: "$12,800 per person (excluding international flights)",
    },
    duration: "13 Nights",
  },

  intro:
"This extraordinary journey through Morocco reveals a captivating blend of imperial cities, desert landscapes, ancient kasbahs, and refined luxury experiences.\n Beginning in Casablanca, travelers are welcomed into Morocco before continuing to the enchanting blue town of Chefchaouen nestled within the Rif Mountains. The journey then unfolds through the historic imperial city of Fez, where labyrinthine medinas, artisan traditions, and centuries-old architecture offer a glimpse into Morocco’s rich cultural heritage.\n The adventure continues into the Sahara Desert where golden dunes stretch endlessly across the horizon. Here, a night beneath the stars at a luxury desert camp creates one of the most magical experiences in North Africa.\n From the dramatic gorges and palm oases of southern Morocco to the vibrant energy of Marrakech, the journey blends cultural discovery with exceptional comfort. The experience concludes peacefully in the Atlas Mountains, where Morocco’s landscapes and traditions meet in serene luxury surroundings.",

sections: [
{
title1: "DAY 1–2 — CHEFCHAOUEN: THE BLUE PEARL OF MOROCCO",
description1:
"Arrive in Casablanca before beginning a scenic journey into the Rif Mountains toward Chefchaouen, one of Morocco’s most picturesque towns known for its striking blue-washed streets and relaxed mountain atmosphere.\n Upon arrival, settle into a charming riad and explore the peaceful medina as the evening light casts soft shades across the city’s famous blue walls.\n The following day is dedicated to discovering Chefchaouen’s hidden corners with a guided photography walk through its winding alleys, vibrant artisan shops, and quiet squares. The town’s tranquil rhythm offers a beautiful introduction to Morocco’s unique charm and culture.",
image1: "/images/packages/IMPERIAL_CITIES_SAHARA_STARS_Morocco_Block01.webp",
},

{
title1: "DAY 3–5 — FEZ: MEDIEVAL TRADITIONS & ARTISAN HERITAGE",
description1:
"Travel south toward the imperial city of Fez, stopping along the way at the ancient Roman ruins of Volubilis and the sacred town of Moulay Idriss.\n In Fez, step into one of the world’s oldest living medieval cities. A private guided tour through the UNESCO-listed medina reveals bustling souks, intricate madrasas, historic mosques, and the famous leather tanneries that have operated for centuries.\n Beyond the city, visit nearby villages such as Sefrou and Bhalil where traditional crafts and Berber culture continue to thrive. These intimate encounters offer a deeper understanding of Morocco’s artisan heritage and rural life.",
image1: "/images/packages/IMPERIAL_CITIES_SAHARA_STARS_Morocco_Block02.webp",
},

{
title1: "DAY 6–9 — SAHARA DESERT & SOUTHERN OASES",
description1:
"Journey across the Middle Atlas Mountains toward the vast Sahara Desert. As landscapes shift from cedar forests to dramatic desert terrain, the golden dunes of Erg Chebbi appear on the horizon.\n Arrive at a luxury desert camp where camel rides across the dunes and candlelit dinners beneath star-filled skies create an unforgettable Sahara experience.\n Continue through the dramatic Todra Gorge before reaching the palm-filled Skoura Oasis. Along the legendary “Route of a Thousand Kasbahs,” explore ancient fortified villages and the fragrant Valley of the Roses before traveling toward Marrakech via the iconic kasbah of Aït Ben Haddou.",
image1: "/images/packages/IMPERIAL_CITIES_SAHARA_STARS_Morocco_Block03.webp",
},

{
title1: "DAY 10–13 — MARRAKECH & ATLAS MOUNTAINS",
description1:
"Arriving in Marrakech, experience the vibrant energy of one of Morocco’s most iconic cities. Explore the lively medina by vintage sidecar, wander through colorful souks, and discover hidden riads and spice markets.\n A sunrise hot air balloon flight over the surrounding desert plains offers a breathtaking perspective of the Atlas Mountains in the distance, followed by a traditional Moroccan cooking experience.\n The journey concludes in the Atlas Mountains at the legendary Kasbah Tamadot. Here, peaceful Berber villages, dramatic mountain landscapes, and luxurious wellness experiences provide the perfect finale to this unforgettable Moroccan adventure.",
image1: "/images/packages/IMPERIAL_CITIES_SAHARA_STARS_Morocco_Block04.webp",
}

],

hotels: [
{
name: "ROYAL MANSOUR – MARRAKECH",
image: "/images/packages/IMPERIAL_CITIES_SAHARA_STARS_Morocco_Hotel01.webp",
desc: "One of Morocco’s most extraordinary luxury hotels, offering private riads, exceptional dining, and impeccable Moroccan craftsmanship.",
},
{
name: "SAHARA LUXURY DESERT CAMP – ERG CHEBBI",
image: "/images/packages/IMPERIAL_CITIES_SAHARA_STARS_Morocco_Hotel02.webp",
desc: "An exclusive desert camp combining traditional Berber design with refined comfort beneath the vast Sahara sky.",
},
{
name: "KASBAH TAMADOT – ATLAS MOUNTAINS",
image: "/images/packages/IMPERIAL_CITIES_SAHARA_STARS_Morocco_Hotel03.webp",
desc: "Sir Richard Branson’s renowned mountain retreat featuring breathtaking views, tranquil gardens, and world-class hospitality.",
}
],

similarPackages: [
{
slug: "morocco",
packageSlug: "BEYOND_THE_ATLAS",
title: "BEYOND THE ATLAS: MOROCCO’S HIDDEN DESERT KINGDOM",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "10 NIGHTS",
headline: "This extraordinary journey ventures beyond Morocco’s well-known cities into the country’s most remote desert landscapes, ancient caravan routes, and hidden oasis valleys."
}
},
]
},

// MOROCCO PACKAGE 2
{
  slug: "morocco",
  packageSlug: "BEYOND_THE_ATLAS",
  title: "BEYOND THE ATLAS: MOROCCO’S HIDDEN DESERT KINGDOM",
  heroImage: "/images/packages/BEYONDTHEATLASMOROCCO'S_HERO.webp",

  heroMeta: {
    country: "MOROCCO",
    headline: "BEYOND THE ATLAS: MOROCCO’S HIDDEN DESERT KINGDOM",
    when: "March – May & September – November",
    price: {
      label: "$11,400 per person (excluding international flights)",
    },
    duration: "10 Nights",
  },

  intro:
"This extraordinary journey ventures beyond Morocco’s well-known cities into the country’s most remote desert landscapes, ancient caravan routes, and hidden oasis valleys.\n Beginning in Marrakech, travelers explore the vibrant medina and historic landmarks before crossing the dramatic High Atlas Mountains via remote mountain passes and cinematic kasbah villages.\n The journey continues through the palm-filled Skoura Oasis and the vast Draa Valley, where centuries-old caravan routes once connected Morocco to the great trading cities of the Sahara.\n Deep in the southern desert, the towering dunes of Erg Chigaga offer one of the most secluded Sahara experiences in North Africa. Here, camel treks, stargazing, and evenings around desert fires create unforgettable moments beneath the vast Sahara sky.\n The journey concludes in Taroudant, a charming fortified town often called “Little Marrakech,” where traditional souks, peaceful riads, and mountain scenery offer a tranquil finale before returning to Marrakech.",

sections: [
{
title1: "DAY 1–2 — MARRAKECH: MEDINA DISCOVERY & ATLAS GATEWAY",
description1:
"Arrive in Marrakech, Morocco’s most vibrant and iconic city. Settle into a beautifully restored riad hidden within the historic medina before beginning your exploration of this captivating destination.\n A guided medina tour reveals colorful souks, intricate palaces, and centuries-old mosques while the lively Jemaa el-Fnaa square introduces travelers to the energy of traditional Moroccan street life.\n The following day, depart Marrakech and begin crossing the High Atlas Mountains via the scenic Telouet route, passing dramatic landscapes and remote Berber villages on the way toward the southern desert regions.",
image1: "/images/packages/BEYONDTHEATLASMOROCCO'S_Block01.webp",
},

{
title1: "DAY 3–4 — SKOURA & DADES VALLEY: KASBAHS AND OASIS LANDSCAPES",
description1:
"Arriving in Skoura Oasis, discover a tranquil landscape filled with palm groves, ancient kasbahs, and fertile valleys.\n Visit the legendary Kasbah Amridil, one of Morocco’s most beautifully preserved desert fortresses, before continuing toward the Valley of Roses and the dramatic cliffs of the Dades Valley.\n Guided walks through these scenic landscapes reveal traditional Berber villages, terraced farms, and remote canyon trails surrounded by spectacular desert scenery.",
image1: "/images/packages/BEYONDTHEATLASMOROCCO'S_Block02.webp",
},

{
title1: "DAY 5–7 — DRAA VALLEY & ERG CHIGAGA: SAHARA ADVENTURE",
description1:
"Travel deeper into southern Morocco along the legendary Draa Valley, where vast palm oases stretch for miles along ancient caravan routes.\n In Zagora, explore the historic Mellah quarter and enjoy a sunset picnic overlooking the surrounding desert landscapes.\n Continue to the sacred village of Tamegroute, famous for its ancient library and distinctive green pottery, before venturing by 4x4 into the remote Sahara dunes of Erg Chigaga.\n Here, towering dunes rise from the desert floor, offering one of the most untouched Sahara environments in Morocco. Enjoy camel treks across the dunes, traditional desert music, and unforgettable nights beneath the stars at a luxury desert camp.",
image1: "/images/packages/BEYONDTHEATLASMOROCCO'S_Block03.webp",
},

{
title1: "DAY 8–10 — TAROUDANT: SOUTHERN MOROCCAN CHARM",
description1:
"Depart the Sahara and journey west toward Taroudant, a historic trading town surrounded by impressive ramparts and framed by the Anti-Atlas Mountains.\n Often referred to as “Little Marrakech,” Taroudant offers a quieter and more authentic glimpse into Moroccan life. Wander through vibrant souks, visit artisan workshops, and enjoy peaceful afternoons within the gardens of your luxury riad.\n A highlight of your stay includes time to relax with traditional Moroccan spa treatments and explore the surrounding countryside before returning to Marrakech for your final evening.",
image1: "/images/packages/BEYONDTHEATLASMOROCCO'S_Block04.webp",
}

],

hotels: [
{
name: "LA SULTANA – MARRAKECH",
image: "/images/packages/BEYONDTHEATLASMOROCCO'S_Hotel01.webp",
desc: "An elegant riad-style luxury hotel in the heart of the medina, known for its exceptional service and rooftop views across Marrakech.",
},
{
name: "DAR AHLAM – SKOURA OASIS",
image: "/images/packages/BEYONDTHEATLASMOROCCO'S_Hotel02.webp",
desc: "One of Morocco’s most unique luxury properties, offering private experiences, dramatic desert landscapes, and personalized hospitality.",
},
{
name: "ERG CHIGAGA LUXURY DESERT CAMP",
image: "/images/packages/BEYONDTHEATLASMOROCCO'S_Hotel03.webp",
desc: "An exclusive Sahara camp combining traditional Berber design with refined comfort amid Morocco’s most remote dunes.",
}
],

similarPackages: [
{
slug: "morocco",
packageSlug: "IMPERIAL_CITIES_SAHARA_STARS",
title: "FROM IMPERIAL CITIES TO SAHARA STARS: A GRAND MOROCCAN JOURNEY",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "13 NIGHTS",
headline: "This extraordinary journey through Morocco reveals a captivating blend of imperial cities, desert landscapes, ancient kasbahs, and refined luxury experiences."
}
},
]
},

// ----------------------------------------------------------------------------------
// uk package 1 -- FROM BIG SMOKE TO WILD GLENS: A GRAND JOURNEY THROUGH BRITAIN  DONE-IMG PENDING
{
  slug: "uk",
  packageSlug: "BIG_SMOKE_TO_WILD_GLENS",
  title: "FROM BIG SMOKE TO WILD GLENS: A GRAND JOURNEY THROUGH BRITAIN",
  heroImage: "/images/packages/BIG_SMOKE_TO_WILD_GLENS_United_Kingdom_HERO.webp",

  heroMeta: {
    country: "UNITED KINGDOM",
    headline: "FROM BIG SMOKE TO WILD GLENS: A GRAND JOURNEY THROUGH BRITAIN",
    when: "May – September",
    price: {
      label: "$18,900 per person (excluding international flights)",
    },
    duration: "14 Nights",
  },

  intro:
"This grand journey through Britain blends royal heritage, storybook countryside, and dramatic Highland wilderness into an unforgettable luxury travel experience.\n Beginning in London, travelers explore the capital’s iconic landmarks, world-class museums, and vibrant culinary scene through carefully curated private experiences.\n From there, the journey moves into the idyllic landscapes of the Cotswolds, where charming villages, historic estates, and refined countryside hospitality offer a tranquil escape from the city.\n Continuing north into Scotland, the atmosphere transforms dramatically. Edinburgh’s medieval streets lead into the breathtaking landscapes of the Highlands, where ancient castles, remote glens, and dramatic lochs reveal the wild beauty of Britain’s northern frontier.\n The journey concludes at the legendary Gleneagles estate, where refined hospitality, classic sporting traditions, and Michelin-starred cuisine provide an exceptional finale.",

sections: [
{
title1: "DAY 1–3 — LONDON: ROYAL HERITAGE & CITY CULTURE",
description1:
"Arrive in London where a private chauffeur greets you for a seamless transfer to your luxury hotel in the heart of the city. After settling in, enjoy the remainder of the day at leisure exploring nearby neighborhoods or relaxing at the hotel.\n The following day introduces you to London’s rich royal history with a privately guided visit to the Tower of London, home to the Crown Jewels and centuries of royal intrigue. Continue to one of the city’s world-renowned museums before spending the evening enjoying a spectacular performance in London’s famous West End theatre district.\n Your final day in the capital includes a curated walking exploration of Westminster, visiting historic landmarks such as Westminster Abbey and Parliament Square before enjoying a private food tour that highlights London’s vibrant culinary scene.",
image1: "/images/packages/BIG_SMOKE_TO_WILD_GLENS_United_Kingdom_Block01.webp",
},

{
title1: "DAY 4–6 — THE COTSWOLDS: ENGLISH COUNTRYSIDE ELEGANCE",
description1:
"Depart London for the picturesque landscapes of the Cotswolds. Along the way, visit Windsor Castle, one of the official residences of the British monarchy, before continuing into the rolling countryside.\n Your luxury countryside estate offers the perfect base for discovering the region’s most charming villages including Bibury, Bourton-on-the-Water, and Stow-on-the-Wold.\n A highlight of your stay includes a visit to the magnificent Blenheim Palace, one of England’s most impressive aristocratic estates. Evenings are spent enjoying refined countryside dining and relaxing spa experiences within the tranquil surroundings of your country retreat.\n From here, continue north by first-class train toward Scotland.",
image1: "/images/packages/BIG_SMOKE_TO_WILD_GLENS_United_Kingdom_Block02.webp",
},

{
title1: "DAY 7–11 — EDINBURGH & THE SCOTTISH HIGHLANDS",
description1:
"Arrive in Edinburgh, Scotland’s historic capital, where dramatic castle views and cobbled streets create one of Europe’s most atmospheric cities.\n Explore Edinburgh Castle and stroll along the Royal Mile before enjoying a private whisky tasting experience introducing Scotland’s most celebrated spirit.\n Continue north into the Scottish Highlands where vast landscapes of mountains, forests, and glens offer an extraordinary sense of wilderness.\n Highlights include visiting Balmoral Castle, enjoying a traditional Highland picnic in a remote bothy, and exploring the breathtaking landscapes of Glencoe. Outdoor adventures such as kayaking across Loch Shiel and scenic hikes reveal the raw beauty of Scotland’s natural environment.",
image1: "/images/packages/BIG_SMOKE_TO_WILD_GLENS_United_Kingdom_Block03.webp",
},

{
title1: "DAY 12–14 — GLENEAGLES: SCOTTISH ESTATE LIVING",
description1:
"Your final destination is Gleneagles, one of the world’s most celebrated luxury estates.\n Set within the rolling landscapes of Perthshire, the estate offers a refined countryside lifestyle with activities including falconry, archery, horseback riding, and championship golf.\n Guests may also relax at the estate’s renowned spa or explore the surrounding countryside before enjoying an exceptional Michelin-starred dining experience showcasing Scotland’s finest seasonal ingredients.\n This elegant retreat provides the perfect grand finale to your journey through Britain before your departure.",
image1: "/images/packages/BIG_SMOKE_TO_WILD_GLENS_United_Kingdom_Block04.webp",
}

],

hotels: [
{
name: "THE SAVOY – LONDON",
image: "/images/packages/BIG_SMOKE_TO_WILD_GLENS_United_Kingdom_Hotel01.webp",
desc: "A legendary riverside hotel offering timeless British elegance and exceptional service.",
},
{
name: "ESTELLE MANOR – COTSWOLDS",
image: "/images/packages/BIG_SMOKE_TO_WILD_GLENS_United_Kingdom_Hotel02.webp",
desc: "A luxurious countryside estate blending historic charm with contemporary refinement.",
},
{
name: "THE BALMORAL – EDINBURGH",
image: "/images/packages/BIG_SMOKE_TO_WILD_GLENS_United_Kingdom_Hotel03.webp",
desc: "An iconic Scottish hotel overlooking Edinburgh Castle with refined hospitality and heritage.",
},
{
name: "GLENEAGLES – PERTHSHIRE",
image: "/images/packages/BIG_SMOKE_TO_WILD_GLENS_United_Kingdom_Hotel04.webp",
desc: "One of the world’s most celebrated luxury estates offering exceptional sporting experiences and Michelin-starred dining.",
}
],

similarPackages: [
{
slug: "uk",
packageSlug: "CROWNED_KINGDOM_ROYAL_JOURNEY",
title: "CROWNED KINGDOM ROYAL JOURNEY",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "9 NIGHTS",
headline: "This elegant journey through England and Scotland celebrates the grandeur of Britain’s royal heritage, combining historic palaces, refined city living, and iconic countryside estates."
}
},
{
slug: "uk",
packageSlug: "DOWNTON_TO_MAYFAIR",
title: "DOWNTON TO MAYFAIR: A QUINTESSENTIAL ENGLISH LIFESTYLE ESCAPE",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "6 NIGHTS",
headline: "This elegant journey offers a refined introduction to the English countryside and the sophisticated lifestyle of London."
}
},
]
},

// UK PACKAGE 2 -- THE CROWNED KINGDOM: AN ENGLAND & SCOTLAND ROYAL JOURNEY      DONE
{
  slug: "uk",
  packageSlug: "CROWNED_KINGDOM_ROYAL_JOURNEY",
  title: "THE CROWNED KINGDOM: AN ENGLAND & SCOTLAND ROYAL JOURNEY",
  heroImage: "/images/packages/CROWN&COUNTRYSIDEALONDON-HERO.webp",

  heroMeta: {
    country: "UNITED KINGDOM",
    headline: "THE CROWNED KINGDOM: AN ENGLAND & SCOTLAND ROYAL JOURNEY",
    when: "May – September",
    price: {
      label: "$15,800 per person (excluding international flights)",
    },
    duration: "9 Nights",
  },

  intro:
"This elegant journey through England and Scotland celebrates the grandeur of Britain’s royal heritage, combining historic palaces, refined city living, and iconic countryside estates.\n Beginning in London, travelers discover the city’s royal landmarks, prestigious fashion houses, and historic riverside districts through carefully curated private experiences.\n From the elegance of Mayfair and Kensington to a scenic Thames journey past historic palaces and gardens, the first part of the journey offers a deep immersion into the traditions of Britain’s monarchy.\n The adventure then continues north to Scotland, where the legendary Gleneagles estate introduces the world of Scottish country pursuits, from fly fishing and golf to dramatic Highland landscapes.\n The journey concludes in Edinburgh, one of Europe’s most atmospheric capitals, where medieval streets, royal residences, and breathtaking castle views provide the perfect finale.",

sections: [
{
title1: "DAY 1–3 — LONDON: ROYAL LIFESTYLE & PRIVATE CITY EXPERIENCES",
description1:
"Arrive in London where a private chauffeur welcomes you for a seamless transfer to your luxury hotel in Mayfair, one of the city’s most prestigious districts.\n After settling in, enjoy time at leisure exploring elegant boutiques, private members’ clubs, and refined dining establishments that define London’s sophisticated lifestyle.\n The following day focuses on London’s royal heritage with a privately guided exploration of the city’s most famous royal residences including Buckingham Palace and Kensington Palace. These historic landmarks reveal centuries of British royal history while offering remarkable architectural beauty.\n Your third day introduces London’s celebrated fashion heritage with visits to prestigious fashion houses and bespoke ateliers. A private designer consultation offers insight into the craftsmanship and artistry behind Britain’s luxury fashion industry.",
image1: "/images/packages/CROWN&COUNTRYSIDEALONDON-Block01.webp",
},

{
title1: "DAY 4–5 — THE THAMES & JOURNEY TO SCOTLAND",
description1:
"Today experience London from a unique perspective with a private journey along the River Thames. This elegant cruise reveals historic riverside landmarks including Hampton Court Palace, Richmond, and the beautiful botanical gardens of Kew.\n These riverside districts offer a peaceful contrast to central London while showcasing some of England’s most historic royal landscapes.\n The following day depart London and travel north toward Scotland, arriving at the legendary Gleneagles estate. Nestled within the rolling countryside of Perthshire, this celebrated retreat is renowned for its exceptional hospitality and classic Scottish elegance.",
image1: "/images/packages/CROWN&COUNTRYSIDEALONDON-Block02.webp",
},

{
title1: "DAY 6–7 — GLENEAGLES: SCOTTISH ESTATE LIFE",
description1:
"Your stay at Gleneagles introduces the traditions of Scottish country estate living.\n Guests may choose from a variety of classic countryside pursuits including fly fishing on Highland rivers, clay shooting, archery, or championship golf across the estate’s famous courses.\n Beyond these activities, the surrounding landscapes reveal beautiful lochs, rolling hills, and historic estates that have inspired countless royal visits and cinematic settings — including locations featured in the acclaimed series The Crown.\n These experiences offer a deeper connection to Scotland’s heritage while enjoying the comfort and refinement of one of Britain’s most celebrated luxury estates.",
image1: "/images/packages/CROWN&COUNTRYSIDEALONDON-Block03.webp",
},

{
title1: "DAY 8–9 — ST ANDREWS & EDINBURGH: SCOTTISH CAPITAL FINALE",
description1:
"Depart Gleneagles and travel east toward the historic coastal town of St Andrews, widely regarded as the home of golf. Explore the famous Old Course and stroll through the charming university town before continuing onward to Edinburgh.\n In Scotland’s capital, discover one of Europe’s most atmospheric historic cities. Visit Edinburgh Castle perched dramatically above the city skyline and walk along the historic Royal Mile lined with medieval architecture and hidden courtyards.\n Your final evening offers the opportunity to enjoy Scotland’s exceptional cuisine and whisky culture before concluding your royal journey through Britain.",
image1: "/images/packages/CROWN&COUNTRYSIDEALONDON-Block04.webp",
}

],

hotels: [
{
name: "THE CONNAUGHT – LONDON",
image: "/images/packages/CROWN&COUNTRYSIDEALONDON-Hotel01.webp",
desc: "A legendary Mayfair hotel known for its refined British elegance, exceptional service, and world-renowned dining.",
},
{
name: "GLENEAGLES – PERTHSHIRE",
image: "/images/packages/CROWN&COUNTRYSIDEALONDON-Hotel02.webp",
desc: "One of the world’s most celebrated luxury estates offering classic Scottish country pursuits and exceptional hospitality.",
},
{
name: "THE BALMORAL – EDINBURGH",
image: "/images/packages/CROWN&COUNTRYSIDEALONDON-Hotel03.webp",
desc: "An iconic Scottish hotel overlooking Edinburgh Castle, combining historic grandeur with contemporary luxury.",
}
],

similarPackages: [
{
slug: "uk",
packageSlug: "BIG_SMOKE_TO_WILD_GLENS",
title: "FROM BIG SMOKE TO WILD GLENS: A GRAND JOURNEY THROUGH BRITAIN",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "14 NIGHTS",
headline: "This grand journey through Britain blends royal heritage, storybook countryside, and dramatic Highland wilderness into an unforgettable luxury travel experience"
}
},
{
slug: "uk",
packageSlug: "DOWNTON_TO_MAYFAIR",
title: "DOWNTON TO MAYFAIR: A QUINTESSENTIAL ENGLISH LIFESTYLE ESCAPE",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "6 NIGHTS",
headline: "This elegant journey offers a refined introduction to the English countryside and the sophisticated lifestyle of London."
}
},
]
},

// uk package 3 -- DOWNTON TO MAYFAIR: A QUINTESSENTIAL ENGLISH LIFESTYLE ESCAPE    DONE-IMG PENDING
{
  slug: "uk",
  packageSlug: "DOWNTON_TO_MAYFAIR",
  title: "DOWNTON TO MAYFAIR: A QUINTESSENTIAL ENGLISH LIFESTYLE ESCAPE",
  heroImage: "/images/packages/DOWNTON_TO_MAYFAIR_ESCAPE_England_HERO.webp",

  heroMeta: {
    country: "ENGLAND",
    headline: "DOWNTON TO MAYFAIR: A QUINTESSENTIAL ENGLISH LIFESTYLE ESCAPE",
    when: "April – October",
    price: {
      label: "$9,800 per person (excluding international flights)",
    },
    duration: "6 Nights",
  },

  intro:
"This elegant journey offers a refined introduction to the English countryside and the sophisticated lifestyle of London.\n Beginning in the rolling landscapes of rural England, travelers are welcomed into a world of historic estates, charming villages, and timeless traditions. Private experiences at Highclere Castle—known globally as the setting of Downton Abbey—reveal the grandeur of aristocratic country life.\n The journey then continues through Oxfordshire’s picturesque countryside, where boutique manor hotels, village tea rooms, and tranquil gardens showcase the charm of rural England.\n Concluding in London’s prestigious Mayfair district, guests experience the capital’s refined shopping arcades, historic streets, and iconic River Thames through curated private experiences that celebrate British elegance.",

sections: [
{
title1: "DAY 1–2 — ENGLISH COUNTRYSIDE & HIGHCLERE CASTLE",
description1:
"Arrive in London where a private chauffeur greets you before beginning your journey into the English countryside in a classic vintage car. Rolling landscapes, charming stone villages, and historic estates create the perfect introduction to rural England.\n Your countryside retreat offers refined comfort and tranquil surroundings where you can unwind with a seasonal fine-dining experience featuring locally sourced British ingredients.\n The following day is dedicated to one of England’s most celebrated historic estates—Highclere Castle, famously known as the filming location for Downton Abbey. Enjoy a private guided tour of the castle and its grand interiors before experiencing traditional countryside pursuits such as clay shooting on the estate grounds.",
image1: "/images/packages/DOWNTON_TO_MAYFAIR_ESCAPE_England_Block01.webp",
},

{
title1: "DAY 3 — OXFORDSHIRE: COUNTRY MANORS & VILLAGE LIFE",
description1:
"Travel through Oxfordshire’s picturesque countryside where elegant manor houses and peaceful gardens define the region’s charm.\n Your stay at the renowned Le Manoir aux Quat’Saisons introduces the refined hospitality of one of England’s most celebrated boutique country hotels.\n Spend the day exploring nearby villages, strolling along quiet lanes lined with stone cottages, and enjoying traditional tea rooms that capture the essence of English countryside culture.",
image1: "/images/packages/DOWNTON_TO_MAYFAIR_ESCAPE_England_Block02.webp",
},

{
title1: "DAY 4–5 — LONDON: MAYFAIR ELEGANCE & ROYAL HERITAGE",
description1:
"Depart the countryside and arrive in London where you check into a luxury hotel in the prestigious Mayfair district.\n The following day is dedicated to discovering London’s refined shopping and cultural heritage. Stroll through Burlington Arcade—one of the city’s most elegant historic shopping galleries—before visiting renowned British luxury brands and boutiques.\n A private historian-led walking experience reveals the fascinating stories behind Mayfair’s historic streets, grand townhouses, and royal connections.",
image1: "/images/packages/DOWNTON_TO_MAYFAIR_ESCAPE_England_Block03.webp",
},

{
title1: "DAY 6 — THE THAMES: CLASSIC LONDON FINALE",
description1:
"Your final day in London offers a relaxing yet memorable conclusion to the journey.\n Board a vintage boat for a private cruise along the River Thames, passing some of the city’s most iconic landmarks including Tower Bridge, the Houses of Parliament, and St Paul’s Cathedral.\n As the evening skyline illuminates the riverbanks, enjoy a refined dinner experience aboard the vessel while taking in panoramic views of London’s historic skyline.\n This elegant finale perfectly captures the timeless charm of England before your departure.",
image1: "/images/packages/DOWNTON_TO_MAYFAIR_ESCAPE_England_Block04.webp",
}

],

hotels: [
{
name: "COWORTH PARK – BERKSHIRE",
image: "/images/packages/DOWNTON_TO_MAYFAIR_ESCAPE_England_Hotel01.webp",
desc: "A refined countryside estate offering elegant rooms, peaceful gardens, and exceptional English hospitality.",
},
{
name: "LE MANOIR AUX QUAT’SAISONS – OXFORDSHIRE",
image: "/images/packages/DOWNTON_TO_MAYFAIR_ESCAPE_England_Hotel02.webp",
desc: "A world-renowned country house hotel celebrated for its gardens, Michelin-starred cuisine, and boutique luxury atmosphere.",
},
{
name: "CLARIDGE’S – LONDON",
image: "/images/packages/DOWNTON_TO_MAYFAIR_ESCAPE_England_Hotel03.webp",
desc: "An iconic Mayfair hotel known for its Art Deco elegance, exceptional service, and prestigious London location.",
}
],

similarPackages: [
{
slug: "uk",
packageSlug: "CROWNED_KINGDOM_ROYAL_JOURNEY",
title: "CROWNED KINGDOM ROYAL JOURNEY",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "9 NIGHTS",
headline: "This elegant journey through England and Scotland celebrates the grandeur of Britain’s royal heritage, combining historic palaces, refined city living, and iconic countryside estates."
}
},
{
slug: "uk",
packageSlug: "BIG_SMOKE_TO_WILD_GLENS",
title: "FROM BIG SMOKE TO WILD GLENS: A GRAND JOURNEY THROUGH BRITAIN",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "14 NIGHTS",
headline: "This grand journey through Britain blends royal heritage, storybook countryside, and dramatic Highland wilderness into an unforgettable luxury travel experience"
}
},

]
},


// --------------------------------------------------------------------------------------------------------

// maldives package 1 -- EMERALD ISLES & INDIAN OCEAN DREAMS    --   DONE
{
  slug: "maldives",
  packageSlug: "EMERALD_ISLES_INDIAN_OCEAN_DREAMS",
  title: "EMERALD ISLES & INDIAN OCEAN DREAMS: SRI LANKA TO MALDIVES LUXURY JOURNEY",
  heroImage: "/images/packages/EMERALDISLES&INDIANOCEANDREAMS-HERO.webp",

  heroMeta: {
    country: "SRI LANKA & MALDIVES",
    headline: "EMERALD ISLES & INDIAN OCEAN DREAMS: SRI LANKA TO MALDIVES LUXURY JOURNEY",
    when: "December – April",
    price: {
      label: "$14,900 per person (excluding international flights)",
    },
    duration: "12 Nights",
  },

  intro:
"This unforgettable Indian Ocean journey blends Sri Lanka’s extraordinary cultural heritage and wildlife with the ultimate barefoot luxury of the Maldives.\n\nBeginning in Sri Lanka, travelers discover ancient kingdoms, emerald tea plantations, and extraordinary wildlife reserves through curated private experiences and stays in some of the island’s most celebrated luxury retreats.\n\nFrom the Cultural Triangle’s historic temples and ancient rock fortresses to the rolling tea plantations of Sri Lanka’s highlands, the journey reveals the island’s remarkable diversity of landscapes and traditions.\n\nContinuing south to the wild coastal landscapes of Yala National Park, guests enjoy an exceptional luxury safari experience surrounded by extraordinary wildlife and dramatic scenery.\n\nAfter exploring Sri Lanka’s colonial heritage in historic Galle, the journey concludes in the Maldives — where crystal lagoons, private overwater villas, and barefoot island luxury provide the perfect finale.",

sections: [
{
title1: "DAY 1–3 — SRI LANKA CULTURAL TRIANGLE: ANCIENT KINGDOMS & HERITAGE",
description1:
"Your journey begins in Sri Lanka where a private chauffeur greets you upon arrival and escorts you north into the Cultural Triangle — home to some of the island’s most remarkable historic monuments.\n\nYour retreat at Ulagalla is set amid tranquil rice paddies and lush countryside, offering peaceful surroundings and private villas with plunge pools.\n\nOver the next days, explore Sri Lanka’s ancient civilizations with visits to UNESCO-listed heritage sites including the extraordinary rock fortress of Sigiriya and the sacred temple complexes of the ancient capitals.\n\nEvenings are spent relaxing in the serenity of your villa, watching the sun set over the surrounding countryside.",
image1: "/images/packages/EMERALDISLES&INDIANOCEANDREAMS-Block01.webp",
},

{
title1: "DAY 4–5 — TEA COUNTRY: COLONIAL BUNGALOWS & HIGHLAND LANDSCAPES",
description1:
"Continue inland to the cool highlands of Sri Lanka’s celebrated tea country.\n\nHere the landscapes transform into rolling hills carpeted in vibrant tea plantations. Your stay at the renowned Tea Trails estate introduces the elegance of Sri Lanka’s colonial heritage through beautifully restored plantation bungalows.\n\nSpend your days exploring the surrounding tea estates, learning about the art of tea production, or enjoying leisurely walks through the scenic hillsides.\n\nAfternoons invite relaxation with croquet on manicured lawns, afternoon tea overlooking the plantations, and refined dining in the warm atmosphere of these historic homes.",
image1: "/images/packages/EMERALDISLES&INDIANOCEANDREAMS-Block02.webp",
},

{
title1: "DAY 6–8 — YALA NATIONAL PARK & GALLE: WILDLIFE SAFARI & COLONIAL HISTORY",
description1:
"Your journey continues southeast to the dramatic coastal wilderness of Yala National Park, home to one of the highest concentrations of leopards in the world.\n\nStay at the remarkable Wild Coast Tented Lodge where luxury tented suites blend seamlessly with the surrounding natural environment.\n\nPrivate safari drives reveal a remarkable diversity of wildlife including elephants, sloth bears, crocodiles, and abundant birdlife.\n\nFrom Yala travel to the historic coastal town of Galle where centuries of Portuguese, Dutch, and British history have shaped one of Asia’s most beautiful fortified cities.\n\nWithin the walls of the Dutch fort, explore charming streets, colonial architecture, and vibrant boutiques before relaxing at the iconic Amangalla hotel.",
image1: "/images/packages/EMERALDISLES&INDIANOCEANDREAMS-Block03.webp",
},

{
title1: "DAY 9–12 — MALDIVES: PRIVATE ISLAND LUXURY",
description1:
"Conclude your journey with a short flight to the Maldives where turquoise lagoons and white sand beaches create one of the world’s most idyllic island escapes.\n\nArrive by seaplane or speedboat at the legendary Gili Lankanfushi resort — a sanctuary of barefoot luxury surrounded by crystal-clear waters.\n\nYour overwater villa offers total privacy with direct access to the lagoon and panoramic views across the Indian Ocean.\n\nSpend your days snorkeling vibrant coral reefs, enjoying spa treatments above the water, or simply relaxing on your private deck.\n\nFor ultimate seclusion, the resort’s iconic Crusoe Residences offer private island-style villas accessible only by boat — the perfect setting to end this extraordinary Indian Ocean journey.",
image1: "/images/packages/EMERALDISLES&INDIANOCEANDREAMS-Block04.webp",
}
],

hotels: [
{
name: "ULAGALLA – CULTURAL TRIANGLE",
image: "/images/packages/EMERALDISLES&INDIANOCEANDREAMS-Hotel01.webp",
desc: "A tranquil luxury retreat surrounded by rice paddies offering private villas and serene countryside views.",
},
{
name: "CEYLON TEA TRAILS – TEA COUNTRY",
image: "/images/packages/EMERALDISLES&INDIANOCEANDREAMS-Hotel02.webp",
desc: "Elegant colonial plantation bungalows set amid Sri Lanka’s breathtaking tea estates.",
},
{
name: "WILD COAST TENTED LODGE – YALA",
image: "/images/packages/EMERALDISLES&INDIANOCEANDREAMS-Hotel03.webp",
desc: "A unique luxury safari lodge offering immersive wildlife experiences along Sri Lanka’s southern coastline.",
},
// {
// name: "GILI LANKANFUSHI – MALDIVES",
// image: "/images/packages/EMERALDISLES&INDIANOCEANDREAMS-Hotel04.webp",
// desc: "One of the Maldives’ most celebrated private island resorts offering exceptional overwater villas and barefoot luxury.",
// }
],

similarPackages: [
{
slug: "maldives",
packageSlug: "PRIVATE_WELLNESS_ISLES",
title: "THE PRIVATE WELLNESS ISLES: OMAN & MALDIVES SPA ESCAPE",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "7 NIGHTS",
headline: "This extraordinary wellness journey blends dramatic Arabian landscapes with the pristine island beauty of the Maldives, creating the ultimate spa and beach escape across two of the Indian Ocean’s most breathtaking destinations."
}
},
{
slug: "maldives",
packageSlug: "SONEVA_SIGNATURE_ESCAPE",
title: "THE PRIVATE ISLAND DUO PACKAGE: SONEVA SIGNATURE MALDIVES ESCAPE",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "8 NIGHTS",
headline: "This exceptional Maldivian journey redefines the idea of a tropical escape by combining two of the world’s most celebrated private island resorts into one seamless luxury experience."
}
},

]
},

// maldives package 2 -- THE PRIVATE WELLNESS ISLES: OMAN & MALDIVES SPA ESCAPE    DONE-IMG PENDING
{
  slug: "maldives",
  packageSlug: "PRIVATE_WELLNESS_ISLES",
  title: "THE PRIVATE WELLNESS ISLES: OMAN & MALDIVES SPA ESCAPE",
  heroImage: "/images/packages/PRIVATE_WELLNESS_ISLES_HERO.webp",

  heroMeta: {
    country: "OMAN & MALDIVES",
    headline: "THE PRIVATE WELLNESS ISLES: OMAN & MALDIVES SPA ESCAPE",
    when: "October – April",
    price: {
      label: "$12,600 per person (excluding international flights)",
    },
    duration: "7 Nights",
  },

  intro:
"This extraordinary wellness journey blends dramatic Arabian landscapes with the pristine island beauty of the Maldives, creating the ultimate spa and beach escape across two of the Indian Ocean’s most breathtaking destinations.\n\nBeginning in Oman’s secluded Musandam Peninsula, travelers arrive at the remarkable Six Senses Zighy Bay where dramatic mountains descend into a private golden beach. Here, luxury villas, world-class wellness experiences, and authentic Omani culture create an atmosphere of complete serenity.\n\nFrom Oman, the journey continues to the Maldives where turquoise lagoons, coral reefs, and private overwater villas await at Six Senses Laamu. Surrounded by the endless Indian Ocean, guests enjoy barefoot luxury, marine adventures, and exceptional spa experiences.\n\nCombining relaxation, adventure, and indulgent wellness rituals, this carefully curated escape offers a perfect balance of privacy, luxury, and rejuvenation.",

sections: [
{
title1: "DAY 1–3 — MUSANDAM PENINSULA: PRIVATE ARRIVAL & OMANI SERENITY",
description1:
"Arrive in Dubai where you will be greeted by your private chauffeur for the scenic journey toward the spectacular Musandam Peninsula in Oman.\n\nYour destination is the iconic Six Senses Zighy Bay, a secluded luxury retreat tucked between dramatic mountain cliffs and a pristine private beach.\n\nFor a truly unforgettable arrival, guests may choose the resort’s legendary paraglide entrance, soaring above the mountains before landing directly on the golden sands of the bay. Alternatively, arrive by private speedboat across the clear waters of the Arabian Sea.\n\nUpon arrival, settle into your private pool villa where your personal butler ensures every detail of your stay is perfectly arranged.\n\nThe following days invite relaxation and exploration—whether hiking through the rugged mountains, sailing across the tranquil bay at sunset, or discovering nearby Omani villages and traditional souks.",
image1: "/images/packages/PRIVATE_WELLNESS_ISLES_Block01.webp",
},

{
title1: "DAY 4 — ZIGHY BAY: WELLNESS & COASTAL ADVENTURE",
description1:
"Spend your final day in Oman enjoying the many experiences offered by the resort.\n\nAdventure seekers may explore the peninsula by 4×4 safari or dive into the Arabian Sea on guided scuba excursions. Alternatively, unwind with a sunset dhow cruise across the calm waters of the bay.\n\nFor complete relaxation, indulge in the Six Senses Spa where traditional therapies and signature wellness rituals create a deeply restorative experience. One highlight is the renowned Bamboo Massage, an ancient technique designed to relieve deep muscular tension while restoring balance and harmony to the body.\n\nAs evening falls, enjoy a refined dining experience overlooking the bay beneath a sky filled with desert stars.",
image1: "/images/packages/PRIVATE_WELLNESS_ISLES_Block02.webp",
},

{
title1: "DAY 5–7 — MALDIVES: BAREFOOT ISLAND PARADISE",
description1:
"From Oman, fly onward to the Maldives where a scenic seaplane transfer brings you to the breathtaking private island of Six Senses Laamu.\n\nHere, turquoise lagoons stretch endlessly around the island while coral reefs teem with vibrant marine life.\n\nYour overwater villa provides the ultimate sanctuary, suspended above crystal-clear waters with panoramic views across the Indian Ocean.\n\nDays are spent exploring the surrounding reefs with a marine biologist, surfing gentle waves, or setting out on a dolphin safari across the open ocean.\n\nThe resort’s extraordinary Six Senses Spa offers a range of treatments inspired by the island’s natural ingredients—from coconut and papaya wraps to soothing spice-infused massages.",
image1: "/images/packages/PRIVATE_WELLNESS_ISLES_Block03.webp",
},

{
title1: "DAY 8 — MALDIVES: STARS, SEA & ISLAND FINALE",
description1:
"Your final full day invites complete relaxation in one of the world’s most idyllic island settings.\n\nSpend the morning snorkeling vibrant coral reefs or unwinding on your private deck as tropical fish glide beneath your villa.\n\nAs evening approaches, enjoy one final unforgettable experience with the resort’s resident astronomer who will guide you through the constellations visible across the clear Maldivian skies.\n\nDinner is served on the beach beneath the stars, with candlelight flickering across the sand and the gentle sound of the ocean completing this perfect finale to your Indian Ocean escape.",
image1: "/images/packages/PRIVATE_WELLNESS_ISLES_Block04.webp",
}
],

hotels: [
{
name: "SIX SENSES ZIGHY BAY – OMAN",
image: "/images/packages/PRIVATE_WELLNESS_ISLES_Hotel01.webp",
desc: "A spectacular luxury retreat set between dramatic mountains and a secluded private beach on the Musandam Peninsula.",
},
{
name: "SIX SENSES LAAMU – MALDIVES",
image: "/images/packages/PRIVATE_WELLNESS_ISLES_Hotel02.webp",
desc: "One of the Maldives’ most celebrated island resorts offering exceptional overwater villas, marine adventures, and world-class wellness experiences.",
}
],

similarPackages: [
  {
slug: "maldives",
packageSlug: "SONEVA_SIGNATURE_ESCAPE",
title: "THE PRIVATE ISLAND DUO PACKAGE: SONEVA SIGNATURE MALDIVES ESCAPE",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "8 NIGHTS",
headline: "This exceptional Maldivian journey redefines the idea of a tropical escape by combining two of the world’s most celebrated private island resorts into one seamless luxury experience."
}
},
{
  slug: "maldives",
packageSlug: "EMERALD_ISLES_INDIAN_OCEAN_DREAMS",
title: "EMERALD ISLES & INDIAN OCEAN DREAMS: SRI LANKA TO MALDIVES LUXURY JOURNEY",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "12 NIGHTS",
headline: "EMERALD ISLES & INDIAN OCEAN DREAMS: SRI LANKA TO MALDIVES LUXURY JOURNEY"
}
}
],
},

// maldives package 3 -- THE PRIVATE ISLAND DUO PACKAGE: SONEVA SIGNATURE MALDIVES ESCAPE    DONE-IMG PENDING
{
  slug: "maldives",
  packageSlug: "SONEVA_SIGNATURE_ESCAPE",
  title: "THE PRIVATE ISLAND DUO PACKAGE: SONEVA SIGNATURE MALDIVES ESCAPE",
  heroImage: "/images/packages/SONEVA_SIGNATURE_ESCAPE_HERO.webp",

  heroMeta: {
    country: "MALDIVES",
    headline: "THE PRIVATE ISLAND DUO PACKAGE: SONEVA SIGNATURE MALDIVES ESCAPE",
    when: "November – April",
    price: {
      label: "$18,800 per person (excluding international flights)",
    },
    duration: "8 Nights",
  },

  intro:
"This exceptional Maldivian journey redefines the idea of a tropical escape by combining two of the world’s most celebrated private island resorts into one seamless luxury experience.\n\nSet across the pristine Baa and Noonu Atolls, this curated escape blends barefoot elegance, extraordinary marine life, and signature Soneva experiences into a journey that is both indulgent and deeply immersive.\n\nBeginning at Soneva Fushi, the original Maldivian castaway paradise, guests experience island living in its purest form—where jungle meets beach, and luxury is defined by space, privacy, and nature.\n\nThe journey then continues in extraordinary fashion aboard a private yacht, sailing across the Indian Ocean before arriving at Soneva Jani, a destination known for its iconic overwater villas, water slides, and celestial dining experiences.\n\nDesigned for those seeking exclusivity, romance, and once-in-a-lifetime moments, this is the ultimate Maldives escape—elevated to an art form.",

sections: [
{
title1: "DAY 1–4 — SONEVA FUSHI: CASTAWAY LUXURY & ISLAND EXPERIENCES",
description1:
"Arrive in the Maldives where a scenic seaplane transfer brings you to the lush island sanctuary of Soneva Fushi.\n\nSurrounded by dense tropical jungle and pristine white-sand beaches, your private beachfront villa offers complete seclusion, with expansive living spaces and direct access to the crystal-clear lagoon.\n\nThe following days are yours to embrace the island’s effortless luxury lifestyle. With your dedicated Mr. Friday butler managing every detail, each experience is tailored entirely to your preferences.\n\nBegin your stay with a signature wellness ritual at the Six Senses Spa before indulging in the island’s exceptional culinary experiences—from dining in the organic herb gardens to private beachfront dinners under the stars.\n\nAdventures range from snorkeling with manta rays and dolphin encounters to open-air cinema experiences beneath the night sky. A highlight of your stay is a private sandbank experience, where a secluded island is transformed into your personal dining retreat, complete with a private chef and candlelit setting surrounded by the ocean.",
image1: "/images/packages/SONEVA_SIGNATURE_ESCAPE_Block01.webp",
},

{
title1: "DAY 5–6 — SONEVA IN AQUA: PRIVATE YACHT JOURNEY",
description1:
"Depart Soneva Fushi in the most exclusive way possible—aboard Soneva in Aqua, the brand’s private luxury yacht.\n\nOver the next two days, sail across the Indian Ocean through some of the Maldives’ most untouched waters, where vibrant coral reefs and hidden lagoons create an ever-changing seascape.\n\nYour floating residence features a master suite with a glass-bottom spa tub, expansive sun decks, and a dedicated crew including a private chef, dive master, massage therapist, and personal butler.\n\nDays are spent snorkeling remote reefs, swimming in secluded lagoons, or simply relaxing on deck as the horizon stretches endlessly before you.\n\nEvenings offer a unique experience of dining under the stars, where the ocean and sky merge into one unforgettable setting.",
image1: "/images/packages/SONEVA_SIGNATURE_ESCAPE_Block02.webp",
},

{
title1: "DAY 7–8 — SONEVA JANI: OVERWATER ICONS & ISLAND LIFE",
description1:
"Arrive at the extraordinary Soneva Jani, a private island retreat renowned for its iconic overwater villas set within a vast turquoise lagoon.\n\nYour Water Retreat Villa offers expansive living spaces, infinity pools, private slides into the lagoon, and retractable roofs that reveal the night sky from the comfort of your bed.\n\nDays are filled with curated island experiences including dolphin safaris, private sandbank picnics, and snorkeling excursions through vibrant coral ecosystems.\n\nDining at Soneva Jani is equally exceptional, from the playful So Cool ice cream and chocolate rooms to elevated culinary experiences set across the island.",
image1: "/images/packages/SONEVA_SIGNATURE_ESCAPE_Block03.webp",
},

{
title1: "DAY 9 — CELESTIAL FINALE & DEPARTURE",
description1:
"Your final moments in the Maldives are designed to be truly unforgettable.\n\nExperience the island’s signature Full Moon Dinner on a secluded sandbank, where candlelight, ocean reflections, and the lunar glow create an atmosphere of pure magic.\n\nFor a deeper connection to the night sky, visit So Starstruck—the Maldives’ first overwater observatory—where an expert astronomer guides you through constellations visible across the Indian Ocean.\n\nAs your journey concludes, take a final moment to relax on your private deck or within your villa before your departure, carrying with you memories of one of the most exclusive island experiences in the world.",
image1: "/images/packages/SONEVA_SIGNATURE_ESCAPE_Block04.webp",
}
],

hotels: [
{
name: "SONEVA FUSHI – BAA ATOLL",
image: "/images/packages/SONEVA_SIGNATURE_ESCAPE_Hotel01.webp",
desc: "A pioneering luxury island resort offering barefoot elegance, expansive villas, and immersive nature experiences.",
},
{
name: "SONEVA IN AQUA – PRIVATE YACHT",
image: "/images/packages/SONEVA_SIGNATURE_ESCAPE_Hotel02.webp",
desc: "An ultra-exclusive floating residence combining bespoke service, ocean exploration, and unparalleled privacy.",
},
{
name: "SONEVA JANI – NOONU ATOLL",
image: "/images/packages/SONEVA_SIGNATURE_ESCAPE_Hotel03.webp",
desc: "A world-renowned overwater resort featuring iconic villas, innovative dining, and extraordinary lagoon experiences.",
}
],

similarPackages: [
  {
slug: "maldives",
packageSlug: "PRIVATE_WELLNESS_ISLES",
title: "THE PRIVATE WELLNESS ISLES: OMAN & MALDIVES SPA ESCAPE",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "7 NIGHTS",
headline: "This extraordinary wellness journey blends dramatic Arabian landscapes with the pristine island beauty of the Maldives, creating the ultimate spa and beach escape across two of the Indian Ocean’s most breathtaking destinations."
}
},
{
  slug: "maldives",
packageSlug: "EMERALD_ISLES_INDIAN_OCEAN_DREAMS",
title: "EMERALD ISLES & INDIAN OCEAN DREAMS: SRI LANKA TO MALDIVES LUXURY JOURNEY",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "12 NIGHTS",
headline: "EMERALD ISLES & INDIAN OCEAN DREAMS: SRI LANKA TO MALDIVES LUXURY JOURNEY"
}
},
]
},

// -----------------------------------------------------------------------------------------
// iceland package1  NORDIC LEGENDS -- DONE
{
  slug: "iceland",
  packageSlug: "NORDIC_LEGENDS_ICELAND",
  title: "NORDIC LEGENDS: A LUXURY ICELAND FAMILY ADVENTURE",
  heroImage: "/images/packages/NORDICLEGENDS-HERO.webp",

  heroMeta: {
    country: "ICELAND",
    headline: "NORDIC LEGENDS: A LUXURY ICELAND FAMILY ADVENTURE",
    when: "May – September",
    price: {
      label: "$14,900 per person (excluding international flights)",
    },
    duration: "6 Nights",
  },

  intro:
"This extraordinary journey introduces travelers to Iceland’s dramatic landscapes through a carefully curated blend of adventure, nature, and refined comfort.\n\nBeginning in Reykjavík, Iceland’s vibrant Nordic capital, guests are welcomed into a land shaped by volcanic forces, ancient glaciers, and breathtaking natural wonders. Private experiences across lava fields, coastal waters, and volcanic terrain offer an exciting introduction to the island’s untamed beauty.\n\nThe journey then ventures deeper into Iceland’s wilderness where remote valleys, glacier landscapes, and geothermal wonders create a setting unlike anywhere else on Earth.\n\nConcluding with some of Iceland’s most remarkable natural experiences—including snorkeling between tectonic plates and relaxing in the Blue Lagoon’s famous geothermal waters—the journey offers a rare combination of adventure and tranquility in one of the world’s most extraordinary destinations.",

  sections: [
    {
      title1: "DAY 1 — ARRIVAL IN REYKJAVÍK & LAVA FIELD ADVENTURE",
      description1:
"Arrive in Reykjavík where a private chauffeur greets you at the airport before transferring you into Iceland’s vibrant capital.\n\nAfter settling into your hotel, your adventure begins with an exhilarating quad biking experience across the Reykjanes Peninsula’s volcanic lava fields. Riding through dramatic black landscapes formed by ancient eruptions, you explore rugged terrain, steaming geothermal vents, and coastal cliffs that showcase Iceland’s remarkable geology.\n\nThe evening is yours to enjoy Reykjavík’s charming Nordic atmosphere. Stroll through the colorful harbour district or enjoy a refined dining experience featuring Icelandic seafood and seasonal Nordic cuisine.",
      image1: "/images/packages/NORDICLEGENDS-Block01.webp",
    },

    {
      title1: "DAY 2 — WHALE WATCHING & ICELANDIC HORSE RIDING",
      description1:
"Today introduces you to Iceland’s remarkable wildlife and countryside traditions.\n\nBegin with a private whale watching experience in Faxaflói Bay, one of the country’s most active marine habitats. Guided by local experts, observe humpback whales, minke whales, and dolphins as they surface against a backdrop of distant mountains and open ocean.\n\nLater in the day, experience Iceland’s countryside through one of its most iconic traditions—riding the Icelandic horse. Known for its gentle temperament and unique gait, this ancient breed offers a peaceful way to explore volcanic landscapes and open valleys.\n\nAlternatively, adventurous travelers may visit a nearby volcanic crater for a guided geological exploration.",
      image1: "/images/packages/NORDICLEGENDS-Block02.webp",
    },

    {
      title1: "DAY 3–4 — ÞÓRSMÖRK VALLEY & GLACIER EXPLORATION",
      description1:
"Depart Reykjavík in a specially modified Super-Jeep designed to navigate Iceland’s rugged terrain as you journey toward the spectacular Þórsmörk Valley.\n\nSurrounded by glaciers, volcanic ridges, and braided rivers, this remote region is considered one of Iceland’s most breathtaking natural landscapes.\n\nYour stay at the exclusive Torfhús Retreat offers an authentic yet luxurious Icelandic experience inspired by traditional turf houses. Private geothermal hot tubs and panoramic mountain views create a serene atmosphere immersed in nature.\n\nThe following day brings a guided exploration of Sólheimajökull Glacier, where expert guides lead you across ancient ice formations, deep crevasses, and dramatic glacial ridges while sharing insights into Iceland’s fascinating glacial landscapes.",
      image1: "/images/packages/NORDICLEGENDS-Block03.webp",
    },

    {
      title1: "DAY 5–6 — GLACIER ADVENTURES & GEOTHERMAL RELAXATION",
      description1:
"Your Icelandic adventure continues with an exhilarating snowmobiling experience across Langjökull Glacier, the country’s second-largest ice cap. Riding across the vast white landscape offers sweeping views of Iceland’s highland wilderness.\n\nLater, explore the legendary Golden Circle, visiting iconic natural wonders including the erupting Strokkur geyser and the majestic Gullfoss waterfall.\n\nOn your final day, experience one of Iceland’s most unique natural phenomena—snorkeling in the crystal-clear waters of Silfra, where you swim between the tectonic plates of North America and Eurasia.\n\nThe journey concludes with a luxurious VIP soak at the Blue Lagoon, Iceland’s famous geothermal spa, where mineral-rich waters provide the perfect moment of relaxation before your private transfer to the airport for departure.",
      image1: "/images/packages/NORDICLEGENDS-Block04.webp",
    }
  ],

  hotels: [
    {
      name: "THE EDITION REYKJAVÍK – REYKJAVÍK",
      image: "/images/packages/NORDICLEGENDS-Hotel01.webp",
      desc: "A contemporary luxury hotel offering refined Nordic design, harbour views, and exceptional dining experiences in Iceland’s vibrant capital.",
    },
    {
      name: "TORFHÚS RETREAT – ÞÓRSMÖRK REGION",
      image: "/images/packages/NORDICLEGENDS-Hotel02.webp",
      desc: "A unique luxury lodge inspired by traditional Icelandic turf houses, featuring private geothermal pools and breathtaking mountain views.",
    },
    {
      name: "THE RETREAT AT BLUE LAGOON – GRINDAVÍK",
      image: "/images/packages/NORDICLEGENDS-Hotel03.webp",
      desc: "One of Iceland’s most exclusive spa hotels, offering private lagoon access, serene suites, and immersive geothermal wellness experiences.",
    }
  ],

  similarPackages: [
     {
slug: "iceland",
packageSlug: "FIRE_ICE_SILENCE_ICELAND",
title: "SAGA OF FIRE, ICE & SILENCE: A LUXURY ICELAND EXPEDITION",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "9 NIGHTS",
headline: "This remarkable journey reveals Iceland through its most dramatic contrasts—volcanoes and glaciers, remote highlands and refined luxury retreats.",
},
     },
{
slug: "iceland",
packageSlug: "CHASING_AURORA_ESCAPE",
title: "CHASING THE AURORA: NORTHERN LIGHTS ESCAPE",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "5 NIGHTS",
headline: "This winter journey reveals Iceland in its most magical season, when snow-covered landscapes, frozen waterfalls, and star-filled Arctic skies create the perfect setting for witnessing the Northern Lights.",
},
     },
     {
slug: "iceland",
packageSlug: "ICELAND_FROM_ABOVE",
title: "ICELAND FROM ABOVE: HELICOPTER ADVENTURE",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "5 NIGHTS",
headline: "This extraordinary journey reveals Iceland from a unique perspective—high above its glaciers, volcanoes, and dramatic landscapes.",
},
     }

  ]
},

// iceland package 2  SAGA OF FIRE, ICE --- DONE
{
  slug: "iceland",
  packageSlug: "FIRE_ICE_SILENCE_ICELAND",
  title: "SAGA OF FIRE, ICE & SILENCE: A LUXURY ICELAND EXPEDITION",
  heroImage: "/images/packages/SAGAOFFIRE,ICE&SILENCE-HERO.webp",

  heroMeta: {
    country: "ICELAND",
    headline: "SAGA OF FIRE, ICE & SILENCE: A LUXURY ICELAND EXPEDITION",
    when: "May – September",
    price: {
      label: "$18,900 per person (excluding international flights)",
    },
    duration: "9 Nights",
  },

  intro:
"This remarkable journey reveals Iceland through its most dramatic contrasts—volcanoes and glaciers, remote highlands and refined luxury retreats.\n\nBeginning in Reykjavík, Iceland’s vibrant Nordic capital, guests are welcomed into a world shaped by ancient volcanic forces and breathtaking natural beauty. Exclusive experiences introduce travelers to Iceland’s geological wonders, including a descent into a dormant volcano’s magma chamber and scenic helicopter flights above lava fields and glaciers.\n\nThe journey then ventures deep into the Icelandic highlands and along the dramatic south coast, where waterfalls, glaciers, and geothermal landscapes define the country’s raw beauty.\n\nContinuing north to the remote wilderness of Deplar Farm, guests experience Iceland’s Arctic frontier through curated adventure experiences before concluding with relaxation at the iconic Blue Lagoon Retreat—one of the country’s most celebrated luxury spa destinations.",

  sections: [
    {
      title1: "DAY 1–2 — REYKJAVÍK: VOLCANOES & HELICOPTER VIEWS",
      description1:
"Arrive in Reykjavík where a private chauffeur greets you at the airport before transferring you into Iceland’s stylish Nordic capital.\n\nAfter settling into your hotel, the evening begins with a refined gourmet dining experience showcasing modern Icelandic cuisine inspired by local seafood, lamb, and seasonal ingredients.\n\nThe following day introduces one of Iceland’s most extraordinary geological experiences—a guided descent into a dormant volcano magma chamber, where visitors enter the vast interior of an ancient volcanic crater.\n\nLater, enjoy a spectacular private helicopter flight above Iceland’s lava fields and volcanic landscapes, offering breathtaking aerial views of glaciers, mountains, and rugged coastline that reveal the powerful forces shaping the island.",
      image1: "/images/packages/SAGAOFFIRE,ICE&SILENCE-Block01.webp",
    },

    {
      title1: "DAY 3–4 — HIGHLANDS ADVENTURE & SOUTH COAST GLACIERS",
      description1:
"Depart Reykjavík in a specially modified Super-Jeep, designed to navigate Iceland’s rugged highland terrain as you journey into the dramatic wilderness of the interior.\n\nYour destination is the extraordinary Torfhús Retreat, a luxury lodge inspired by traditional Icelandic turf houses and surrounded by mountain landscapes and pristine nature.\n\nThe following day explores Iceland’s famous South Coast, where towering waterfalls cascade from volcanic cliffs and vast glaciers dominate the horizon.\n\nVisit iconic sites such as Seljalandsfoss and Skógafoss before embarking on a guided glacier hike across Sólheimajökull, where deep crevasses and shimmering blue ice formations create one of Iceland’s most unforgettable natural experiences.",
      image1: "/images/packages/SAGAOFFIRE,ICE&SILENCE-Block02.webp",
    },

    {
      title1: "DAY 5–7 — GOLDEN CIRCLE & ARCTIC WILDERNESS",
      description1:
"Today’s journey takes you through the legendary Golden Circle, Iceland’s most famous scenic route.\n\nWitness the erupting Strokkur geyser, explore the historic landscapes of Thingvellir National Park, and enjoy a unique geothermal culinary experience, where lunch is prepared using Iceland’s natural geothermal heat.\n\nFrom Reykjavík, continue north by scenic flight toward Iceland’s remote Arctic region, arriving at the spectacular Deplar Farm, a luxury wilderness lodge set within dramatic mountain landscapes.\n\nOver the following days, enjoy curated Arctic adventures tailored to your interests. Activities may include sea kayaking through quiet fjords, horseback riding across remote valleys, hiking untouched mountain trails, or exploring Iceland’s northern coastline with expert guides.",
      image1: "/images/packages/SAGAOFFIRE,ICE&SILENCE-Block03.webp",
    },

    {
      title1: "DAY 8–9 — REYKJANES PENINSULA & BLUE LAGOON RETREAT",
      description1:
"Returning south, explore the dramatic volcanic landscapes of the Reykjanes Peninsula, where steaming geothermal fields and black lava plains create one of Iceland’s most surreal environments.\n\nYour final stay is at the exclusive Retreat at Blue Lagoon, a world-renowned luxury spa hotel built within Iceland’s iconic geothermal landscape.\n\nSpend your final day relaxing in the mineral-rich waters of the private lagoon, enjoying spa treatments inspired by Iceland’s volcanic elements, and soaking in the tranquil atmosphere of this remarkable retreat.\n\nThis peaceful finale offers the perfect conclusion to your Iceland expedition before your private transfer to the airport for departure.",
      image1: "/images/packages/SAGAOFFIRE,ICE&SILENCE-Block04.webp",
    }
  ],

  hotels: [
    {
      name: "THE REYKJAVÍK EDITION – REYKJAVÍK",
      image: "/images/packages/SAGAOFFIRE,ICE&SILENCE-Hotel01.webp",
      desc: "A contemporary luxury hotel offering refined Nordic design, harbour views, and exceptional dining experiences in Iceland’s vibrant capital.",
    },
    {
      name: "TORFHÚS RETREAT – HIGHLANDS REGION",
      image: "/images/packages/SAGAOFFIRE,ICE&SILENCE-Hotel02.webp",
      desc: "A distinctive luxury lodge inspired by traditional Icelandic turf houses, offering geothermal pools and spectacular mountain surroundings.",
    },
    {
      name: "DEPLAR FARM – NORTHERN ICELAND",
      image: "/images/packages/SAGAOFFIRE,ICE&SILENCE-Hotel03.webp",
      desc: "A remote luxury wilderness lodge renowned for its world-class adventure experiences, wellness spa, and dramatic mountain setting.",
    },
    // {
    //   name: "THE RETREAT AT BLUE LAGOON – REYKJANES",
    //   image: "/images/packages/SAGAOFFIRE,ICE&SILENCE-Hotel04.webp",
    //   desc: "One of Iceland’s most exclusive spa hotels offering private lagoon access, serene suites, and immersive geothermal wellness experiences.",
    // }
  ],

  similarPackages: [
     {
slug: "iceland",
packageSlug: "NORDIC_LEGENDS_ICELAND",
title: "NORDIC LEGENDS: A LUXURY ICELAND FAMILY ADVENTURE",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "7 NIGHTS",
headline: "This extraordinary journey introduces travelers to Iceland’s dramatic landscapes through a carefully curated blend of adventure, nature, and refined comfort."
}
},
{
slug: "iceland",
packageSlug: "CHASING_AURORA_ESCAPE",
title: "CHASING THE AURORA: NORTHERN LIGHTS ESCAPE",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "5 NIGHTS",
headline: "This winter journey reveals Iceland in its most magical season, when snow-covered landscapes, frozen waterfalls, and star-filled Arctic skies create the perfect setting for witnessing the Northern Lights.",
},
     },
         {
slug: "iceland",
packageSlug: "ICELAND_FROM_ABOVE",
title: "ICELAND FROM ABOVE: HELICOPTER ADVENTURE",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "5 NIGHTS",
headline: "This extraordinary journey reveals Iceland from a unique perspective—high above its glaciers, volcanoes, and dramatic landscapes.",
},
     }

  ]
},

// iceland package 3  CHASING THE AURORA -- DONE
{
  slug: "iceland",
  packageSlug: "CHASING_AURORA_ESCAPE",
  title: "CHASING THE AURORA: NORTHERN LIGHTS ESCAPE",
  heroImage: "/images/packages/CHASINGTHEAURORA-HERO.webp",

  heroMeta: {
    country: "ICELAND",
    headline: "CHASING THE AURORA: NORTHERN LIGHTS ESCAPE",
    when: "November – March",
    price: {
      label: "$12,900 per person (excluding international flights)",
    },
    duration: "5 Nights",
  },

  intro:
"This winter journey reveals Iceland in its most magical season, when snow-covered landscapes, frozen waterfalls, and star-filled Arctic skies create the perfect setting for witnessing the Northern Lights.\n\nBeginning in Reykjavík, Iceland’s stylish Nordic capital, guests experience the city’s vibrant culinary culture and contemporary design before venturing into the country’s dramatic winter landscapes.\n\nThe journey then travels through Iceland’s volcanic countryside and remote valleys where geothermal hot springs, glacier landscapes, and vast wilderness create an unforgettable Arctic setting.\n\nDesigned around some of Iceland’s most iconic winter experiences—including glacier adventures, Super-Jeep exploration, and private Northern Lights hunting—this itinerary combines thrilling adventure with the comfort of luxurious wilderness retreats.",

  sections: [
    {
      title1: "DAY 1 — ARRIVAL IN REYKJAVÍK & CULINARY DISCOVERY",
      description1:
"Arrive in Reykjavík where a private chauffeur greets you at the airport before transferring you into Iceland’s vibrant Nordic capital.\n\nAfter settling into your hotel, the afternoon offers time to explore Reykjavík’s charming streets, boutique shops, and contemporary Nordic design culture.\n\nIn the evening, join a curated Reykjavík food walk, where a local culinary expert introduces you to the city’s evolving gastronomic scene. Sampling traditional Icelandic dishes alongside modern Nordic cuisine, this experience offers an authentic introduction to Iceland’s culinary heritage.",
      image1: "/images/packages/CHASINGTHEAURORA-Block01.webp",
    },

    {
      title1: "DAY 2 — BLUE LAGOON & NORTHERN LIGHTS EXPERIENCE",
      description1:
"Depart Reykjavík and journey through the dramatic volcanic landscapes of the Reykjanes Peninsula, where steaming geothermal fields and black lava plains create one of Iceland’s most unique environments.\n\nYour first stop is the famous Blue Lagoon, where mineral-rich geothermal waters offer a relaxing spa experience surrounded by striking lava formations.\n\nContinuing into Iceland’s countryside, arrive at the beautiful Torfhús Retreat, a luxury lodge inspired by traditional Icelandic turf houses and set within a tranquil mountain landscape.\n\nAs darkness falls, embark on an exclusive Northern Lights hunt, where expert guides lead you away from light pollution to search for the spectacular aurora borealis dancing across the Arctic sky.",
      image1: "/images/packages/CHASINGTHEAURORA-Block02.webp",
    },

    {
      title1: "DAY 3 — GOLDEN CIRCLE & GLACIER SUPER-JEEP ADVENTURE",
      description1:
"Today’s journey explores Iceland’s legendary Golden Circle, a route that reveals some of the country’s most iconic natural wonders.\n\nWitness the dramatic eruption of the Strokkur geyser, explore the historic landscapes of Thingvellir National Park, and admire the powerful Gullfoss waterfall cascading through a frozen canyon.\n\nThe adventure continues with a thrilling Super-Jeep excursion onto Langjökull Glacier, where vast snow-covered landscapes stretch endlessly across Iceland’s winter highlands.",
      image1: "/images/packages/CHASINGTHEAURORA-Block03.webp",
    },

    {
      title1: "DAY 4–5 — SOUTH COAST GLACIERS & WINTER WATERFALLS",
      description1:
"Travel along Iceland’s spectacular South Coast, where towering waterfalls, volcanic cliffs, and glacial landscapes define one of the country’s most dramatic regions.\n\nVisit the famous Seljalandsfoss and Skógafoss waterfalls, which in winter transform into stunning frozen cascades surrounded by icy formations.\n\nLater, embark on a guided glacier walk across Sólheimajökull, where deep crevasses, shimmering blue ice, and dramatic ridges create an unforgettable Arctic adventure.\n\nYour final day offers a scenic return journey toward Reykjavík before your private transfer to the airport for departure.",
      image1: "/images/packages/CHASINGTHEAURORA-Block04.webp",
    }
  ],

  hotels: [
    {
      name: "THE REYKJAVÍK EDITION – REYKJAVÍK",
      image: "/images/packages/CHASINGTHEAURORA-Hotel01.webp",
      desc: "A contemporary luxury hotel offering refined Nordic design, harbour views, and exceptional dining experiences in Iceland’s vibrant capital.",
    },
    {
      name: "TORFHÚS RETREAT – SOUTH ICELAND",
      image: "/images/packages/CHASINGTHEAURORA-Hotel02.webp",
      desc: "A distinctive countryside retreat inspired by traditional Icelandic turf houses, offering private geothermal hot tubs and tranquil mountain surroundings.",
    }
  ],

  similarPackages: [
         {
slug: "iceland",
packageSlug: "NORDIC_LEGENDS_ICELAND",
title: "NORDIC LEGENDS: A LUXURY ICELAND FAMILY ADVENTURE",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "7 NIGHTS",
headline: "This extraordinary journey introduces travelers to Iceland’s dramatic landscapes through a carefully curated blend of adventure, nature, and refined comfort."
}
},
  {
slug: "iceland",
packageSlug: "FIRE_ICE_SILENCE_ICELAND",
title: "SAGA OF FIRE, ICE & SILENCE: A LUXURY ICELAND EXPEDITION",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "9 NIGHTS",
headline: "This remarkable journey reveals Iceland through its most dramatic contrasts—volcanoes and glaciers, remote highlands and refined luxury retreats.",
},
     },
         {
slug: "iceland",
packageSlug: "ICELAND_FROM_ABOVE",
title: "ICELAND FROM ABOVE: HELICOPTER ADVENTURE",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "5 NIGHTS",
headline: "This extraordinary journey reveals Iceland from a unique perspective—high above its glaciers, volcanoes, and dramatic landscapes.",
},
     }
  ]
},

// iceland package 4 -- ICELAND FROM ABOVE --   DONE
{
  slug: "iceland",
  packageSlug: "ICELAND_FROM_ABOVE",
  title: "ICELAND FROM ABOVE: HELICOPTER ADVENTURE",
  heroImage: "/images/packages/ICELANDFROMABOVE-HERO.webp",

  heroMeta: {
    country: "ICELAND",
    headline: "ICELAND FROM ABOVE: HELICOPTER ADVENTURE",
    when: "May – September",
    price: {
      label: "$16,900 per person (excluding international flights)",
    },
    duration: "5 Nights",
  },

  intro:
"This extraordinary journey reveals Iceland from a unique perspective—high above its glaciers, volcanoes, and dramatic landscapes.\n\nBeginning in Reykjavík, Iceland’s vibrant Nordic capital, travelers are welcomed into a world shaped by volcanic forces and breathtaking natural scenery. Private helicopter experiences allow guests to explore regions that are otherwise inaccessible, offering an unparalleled view of Iceland’s most spectacular landscapes.\n\nFrom flying above active volcanic systems and glacial valleys to landing beside remote glacier lagoons and exploring the famous Golden Circle from the air, each experience offers a rare perspective of the island’s remarkable geography.\n\nCombining aerial exploration with refined luxury experiences on the ground, this itinerary offers an exclusive way to discover Iceland’s natural wonders.",

  sections: [
    {
      title1: "DAY 1 — ARRIVAL IN REYKJAVÍK & CITY LEISURE",
      description1:
"Arrive in Reykjavík where a private chauffeur greets you at the airport before transferring you into Iceland’s stylish capital.\n\nAfter checking into your luxury hotel, the afternoon is yours to relax and explore the city at your own pace. Reykjavík’s charming streets offer a blend of Nordic design boutiques, art galleries, and scenic harbour walks.\n\nIn the evening, enjoy a refined dining experience at one of the city’s celebrated restaurants where contemporary Icelandic cuisine highlights fresh seafood, seasonal produce, and traditional Nordic flavors.",
      image1: "/images/packages/ICELANDFROMABOVE-Block01.webp",
    },

    {
      title1: "DAY 2 — VOLCANO DESCENT OR WHALE HELICOPTER FLIGHT",
      description1:
"Today offers two extraordinary ways to explore Iceland’s volcanic and coastal landscapes.\n\nGuests may choose to descend into the interior of a dormant volcano’s magma chamber, a remarkable geological experience where visitors enter the vast interior of an ancient volcanic crater.\n\nAlternatively, embark on a spectacular helicopter flight along Iceland’s rugged coastline, where sweeping aerial views reveal lava fields, dramatic cliffs, and the open Atlantic Ocean while searching for whales that inhabit these waters.\n\nBoth experiences offer a rare opportunity to witness Iceland’s natural forces from extraordinary perspectives.",
      image1: "/images/packages/ICELANDFROMABOVE-Block02.webp",
    },

    {
      title1: "DAY 3 — EYJAFJALLAJÖKULL HELICOPTER EXPEDITION",
      description1:
"Today’s highlight is a private helicopter expedition across Iceland’s dramatic southern landscapes.\n\nFlying above the famous Eyjafjallajökull volcano and glacier, you witness vast ice caps, volcanic ridges, and sweeping valleys that reveal the island’s powerful geological contrasts.\n\nYour helicopter then lands beside a remote glacier lagoon, where floating icebergs drift across calm waters surrounded by dramatic mountain scenery. Here you can explore the pristine environment and experience the quiet beauty of Iceland’s untouched wilderness.",
      image1: "/images/packages/ICELANDFROMABOVE-Block03.webp",
    },

    {
      title1: "DAY 4–5 — GOLDEN CIRCLE HELICOPTER JOURNEY",
      description1:
"Experience Iceland’s most iconic landscapes from the air as you embark on a helicopter journey along the Golden Circle.\n\nFlying above Thingvellir National Park, the erupting Strokkur geyser, and the powerful Gullfoss waterfall, this aerial route offers a breathtaking view of the geological features that define Iceland.\n\nDuring the journey, land in a scenic remote location for a luxury gourmet lunch, surrounded by Iceland’s dramatic wilderness.\n\nYour final day offers time to explore the volcanic landscapes of the Reykjanes Peninsula before your private transfer to the airport for departure.",
      image1: "/images/packages/ICELANDFROMABOVE-Block04.webp",
    }
  ],

  hotels: [
    {
      name: "THE REYKJAVÍK EDITION – REYKJAVÍK",
      image: "/images/packages/ICELANDFROMABOVE-Hotel01.webp",
      desc: "A contemporary luxury hotel offering refined Nordic design, harbour views, and exceptional dining experiences in Iceland’s vibrant capital.",
    },
    {
      name: "TORFHÚS RETREAT – SOUTH ICELAND",
      image: "/images/packages/ICELANDFROMABOVE-Hotel02.webp",
      desc: "A distinctive countryside retreat inspired by traditional Icelandic turf houses, offering private geothermal hot tubs and tranquil mountain surroundings.",
    }
  ],

     similarPackages: [
     {
slug: "iceland",
packageSlug: "NORDIC_LEGENDS_ICELAND",
title: "NORDIC LEGENDS: A LUXURY ICELAND FAMILY ADVENTURE",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "7 NIGHTS",
headline: "This extraordinary journey introduces travelers to Iceland’s dramatic landscapes through a carefully curated blend of adventure, nature, and refined comfort."
}
},
{
slug: "iceland",
packageSlug: "CHASING_AURORA_ESCAPE",
title: "CHASING THE AURORA: NORTHERN LIGHTS ESCAPE",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "5 NIGHTS",
headline: "This winter journey reveals Iceland in its most magical season, when snow-covered landscapes, frozen waterfalls, and star-filled Arctic skies create the perfect setting for witnessing the Northern Lights.",
},
     },
   {
slug: "iceland",
packageSlug: "FIRE_ICE_SILENCE_ICELAND",
title: "SAGA OF FIRE, ICE & SILENCE: A LUXURY ICELAND EXPEDITION",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "9 NIGHTS",
headline: "This remarkable journey reveals Iceland through its most dramatic contrasts—volcanoes and glaciers, remote highlands and refined luxury retreats.",
},
     },

    ]
},

// iceland package 5 -- SOUL OF ICLAND -- DONE
{
  slug: "iceland",
  packageSlug: "SOUL_OF_ICELAND",
  title: "SOUL OF ICELAND: CULTURE, FOLKLORE & WELLNESS",
  heroImage: "/images/packages/SOULOFICELAND-HERO.webp",

  heroMeta: {
    country: "ICELAND",
    headline: "SOUL OF ICELAND: CULTURE, FOLKLORE & WELLNESS",
    when: "May – September",
    price: {
      label: "$13,900 per person (excluding international flights)",
    },
    duration: "7 Nights",
  },

  intro:
"This thoughtfully curated journey reveals Iceland beyond its dramatic landscapes, offering an immersive experience into the island’s culture, folklore, and wellness traditions.\n\nBeginning in Reykjavík, guests discover the capital’s vibrant art scene, Nordic cuisine, and creative culture that reflects Iceland’s modern identity while remaining deeply connected to its Viking heritage.\n\nThe journey then ventures through West Iceland and the legendary Snæfellsnes Peninsula, a region often described as “Iceland in miniature” for its diverse landscapes of lava fields, glaciers, coastal cliffs, and charming fishing villages.\n\nAlong the way, travelers explore Icelandic folklore trails, visit geothermal farms, discover hidden valleys and waterfalls, and unwind in tranquil luxury retreats surrounded by pristine nature.\n\nThe experience concludes with rejuvenating geothermal spa rituals and peaceful moments of wellness inspired by Iceland’s natural elements.",

  sections: [
    {
      title1: "DAY 1–2 — REYKJAVÍK CULTURE & FOLKLORE TRAILS",
      description1:
"Arrive in Reykjavík where a private chauffeur greets you at the airport before transferring you into Iceland’s vibrant Nordic capital.\n\nYour first day introduces Reykjavík’s rich artistic and culinary culture. Explore the city’s galleries, contemporary Nordic design boutiques, and lively harbour district before enjoying a curated food immersion experience featuring traditional Icelandic flavours and modern Nordic cuisine.\n\nThe following day ventures into Iceland’s countryside along a fascinating folklore trail, where stories of elves, hidden people, and ancient Viking legends remain deeply rooted in Icelandic culture.\n\nContinue toward the spectacular Glymur Waterfall, once considered Iceland’s tallest cascade. A scenic hike through moss-covered cliffs and dramatic canyon landscapes reveals one of the country’s most beautiful hidden natural wonders.",
      image1: "/images/packages/SOULOFICELAND-Block01.webp",
    },

    {
      title1: "DAY 3 — WEST ICELAND & SNÆFELLSNES PENINSULA",
      description1:
"Journey into the scenic landscapes of West Iceland, where rural farms, coastal villages, and volcanic terrain define the region’s peaceful beauty.\n\nVisit local Icelandic farms where guests are introduced to traditional agricultural practices and regional produce that form an important part of the country’s culinary heritage.\n\nContinue toward the magnificent Snæfellsnes Peninsula, a region of dramatic contrasts where lava fields, coastal cliffs, glaciers, and fishing villages create one of Iceland’s most picturesque landscapes.\n\nOften referred to as “Iceland in miniature,” this peninsula offers a rich combination of nature, culture, and folklore.",
      image1: "/images/packages/SOULOFICELAND-Block02.webp",
    },

    {
      title1: "DAY 4–5 — GOLDEN CIRCLE & HEAVEN VALLEY EXPLORATION",
      description1:
"Today’s journey explores Iceland’s legendary Golden Circle, a route that showcases some of the country’s most remarkable natural wonders.\n\nVisit Thingvellir National Park, where the North American and Eurasian tectonic plates dramatically meet, before witnessing the powerful eruption of the Strokkur geyser and the magnificent Gullfoss waterfall.\n\nAlong the way, enjoy a unique culinary experience at Friðheimar Farm, where lunch is served inside a geothermal greenhouse surrounded by thriving tomato plants.\n\nContinue toward the tranquil landscapes surrounding Torfhús Retreat, a luxury lodge inspired by traditional Icelandic turf houses.\n\nThe following day explores the spectacular Þjórsárdalur Valley, often called “Heaven Valley,” where hidden waterfalls, lava formations, and wide open landscapes create a peaceful environment for exploration and relaxation.",
      image1: "/images/packages/SOULOFICELAND-Block03.webp",
    },

    {
      title1: "DAY 6–7 — REYKJANES ADVENTURE & GEOTHERMAL WELLNESS",
      description1:
"Your final days combine adventure with relaxation.\n\nBegin with an exciting ATV exploration across the volcanic landscapes of the Reykjanes Peninsula, where rugged lava fields, geothermal vents, and dramatic coastline create a truly otherworldly setting.\n\nLater, arrive at the world-renowned Blue Lagoon Retreat, one of Iceland’s most exclusive geothermal spa destinations.\n\nSpend your final day enjoying a rejuvenating wellness experience including geothermal bathing, peaceful yoga sessions, and spa rituals inspired by Iceland’s natural minerals and volcanic elements.\n\nThis serene finale offers the perfect conclusion to your Iceland journey before your private transfer to the airport for departure.",
      image1: "/images/packages/SOULOFICELAND-Block04.webp",
    }
  ],

  hotels: [
    {
      name: "THE REYKJAVÍK EDITION – REYKJAVÍK",
      image: "/images/packages/SOULOFICELAND-Hotel01.webp",
      desc: "A contemporary luxury hotel offering refined Nordic design, harbour views, and exceptional dining experiences in Iceland’s vibrant capital.",
    },
    {
      name: "TORFHÚS RETREAT – SOUTH ICELAND",
      image: "/images/packages/SOULOFICELAND-Hotel02.webp",
      desc: "A distinctive countryside retreat inspired by traditional Icelandic turf houses, offering private geothermal hot tubs and tranquil mountain surroundings.",
    },
    {
      name: "THE RETREAT AT BLUE LAGOON – REYKJANES",
      image: "/images/packages/SOULOFICELAND-Hotel03.webp",
      desc: "An exclusive geothermal spa hotel known for its private lagoon access, luxurious suites, and tranquil wellness experiences.",
    }
  ],
  similarPackages: [
     {
slug: "iceland",
packageSlug: "NORDIC_LEGENDS_ICELAND",
title: "NORDIC LEGENDS: A LUXURY ICELAND FAMILY ADVENTURE",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "7 NIGHTS",
headline: "This extraordinary journey introduces travelers to Iceland’s dramatic landscapes through a carefully curated blend of adventure, nature, and refined comfort."
}
},
{
slug: "iceland",
packageSlug: "CHASING_AURORA_ESCAPE",
title: "CHASING THE AURORA: NORTHERN LIGHTS ESCAPE",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "5 NIGHTS",
headline: "This winter journey reveals Iceland in its most magical season, when snow-covered landscapes, frozen waterfalls, and star-filled Arctic skies create the perfect setting for witnessing the Northern Lights.",
},
     },
   {
slug: "iceland",
packageSlug: "FIRE_ICE_SILENCE_ICELAND",
title: "SAGA OF FIRE, ICE & SILENCE: A LUXURY ICELAND EXPEDITION",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "9 NIGHTS",
headline: "This remarkable journey reveals Iceland through its most dramatic contrasts—volcanoes and glaciers, remote highlands and refined luxury retreats.",
},
     },

    ]
},

// iceland package 6 -- MIDNIGHT GIANTS -- DONE
{
  slug: "iceland",
  packageSlug: "MIDNIGHT_GIANTS",
  title: "MIDNIGHT GIANTS: ARCTIC OCEAN EXPEDITION",
  heroImage: "/images/packages/MIDNIGHTGIANTS-HERO.webp",

  heroMeta: {
    country: "ICELAND",
    headline: "MIDNIGHT GIANTS: ARCTIC OCEAN EXPEDITION",
    when: "June – August",
    price: {
      label: "$14,900 per person (excluding international flights)",
    },
    duration: "5 Nights",
  },

  intro:
"This extraordinary summer journey explores Iceland’s northern frontier, where dramatic coastlines, Arctic wildlife, and the endless glow of the midnight sun create one of the most remarkable travel experiences in the world.\n\nBeginning in Reykjavík, Iceland’s stylish Nordic capital, travelers are welcomed into a vibrant cultural setting before venturing north toward the remote Arctic coastline.\n\nHere, guests encounter Iceland’s extraordinary marine life, explore volcanic caves, and visit the isolated island of Grímsey—located directly on the Arctic Circle and famous for its thriving puffin colonies.\n\nCombining Arctic exploration with exclusive wellness experiences and dramatic landscapes, this journey offers a rare opportunity to discover Iceland’s northern wilderness in refined comfort.",

  sections: [
    {
      title1: "DAY 1 — REYKJAVÍK ARRIVAL & CITY DINING",
      description1:
"Arrive in Reykjavík where a private chauffeur greets you at the airport before transferring you into Iceland’s vibrant capital.\n\nAfter settling into your hotel, spend the afternoon exploring Reykjavík’s charming harbour district, art galleries, and Nordic design boutiques.\n\nIn the evening, enjoy a refined dining experience at one of the city’s celebrated restaurants where Icelandic culinary traditions are elevated through modern Nordic techniques, highlighting fresh seafood, local lamb, and seasonal ingredients.",
      image1: "/images/packages/2_MIDNIGHTGIANTS-Block01.webp",
    },

    {
      title1: "DAY 2 — ARCTIC FLIGHT & THERMAL BATHS",
      description1:
"Today your journey continues north with a scenic flight across Iceland’s dramatic landscapes toward the country’s Arctic region.\n\nUpon arrival, explore the peaceful northern coastline where rugged mountains meet the Arctic Ocean.\n\nYour afternoon is dedicated to relaxation at one of Iceland’s Arctic thermal baths, where naturally heated geothermal waters overlook the vast northern seascape. Surrounded by dramatic landscapes and the soft glow of the midnight sun, this tranquil setting offers one of the country’s most peaceful wellness experiences.",
      image1: "/images/packages/3_MIDNIGHTGIANTS-Block02.webp",
    },

    {
      title1: "DAY 3 — ARCTIC COASTLINE & GRÍMSEY ISLAND",
      description1:
"Today brings an exciting exploration of Iceland’s Arctic waters.\n\nTravel along the dramatic coastline by Jet Ski, navigating the pristine northern fjords and volcanic shores while enjoying breathtaking views of remote cliffs and ocean landscapes.\n\nLater, continue toward Grímsey Island, the only part of Iceland located directly on the Arctic Circle. This remote island is renowned for its spectacular birdlife, particularly its large colonies of puffins that nest along the dramatic sea cliffs during summer months.\n\nWalking along the island’s rugged coastline offers unforgettable encounters with Arctic wildlife in a pristine natural environment.",
      image1: "/images/packages/5_MIDNIGHTGIANTS-Block03.webp",
    },

    {
      title1: "DAY 4–5 — LAKE MÝVATN LANDSCAPES & WHALE ADVENTURE",
      description1:
"Your Arctic exploration continues with a journey toward the remarkable volcanic landscapes surrounding Lake Mývatn, one of Iceland’s most geologically fascinating regions.\n\nDiscover the mystical Lofthellir Ice Cave, where frozen formations and crystal ice sculptures create an extraordinary underground world.\n\nLater, enjoy a unique Arctic adventure as you paddleboard along the calm coastal waters, where humpback whales are frequently spotted feeding in the surrounding fjords.\n\nYour final day returns south toward Reykjavík where a relaxing visit to the iconic Blue Lagoon offers a peaceful conclusion to the journey before your private transfer to the airport for departure.",
      image1: "/images/packages/1_MIDNIGHTGIANTS-Block04.webp",
    }
  ],

  hotels: [
    {
      name: "THE REYKJAVÍK EDITION – REYKJAVÍK",
      image: "/images/packages/7_MIDNIGHTGIANTS-Hotel01.webp",
      desc: "A contemporary luxury hotel offering refined Nordic design, harbour views, and exceptional dining experiences in Iceland’s vibrant capital.",
    },
    {
      name: "DEPLAR FARM – NORTHERN ICELAND",
      image: "/images/packages/6_MIDNIGHTGIANTS-Hotel02.webp",
      desc: "A world-renowned wilderness lodge offering luxury adventure experiences, spa facilities, and spectacular Arctic landscapes.",
    },
    {
      name: "THE RETREAT AT BLUE LAGOON – REYKJANES",
      image: "/images/packages/4_MIDNIGHTGIANTS-Hotel03.webp",
      desc: "An exclusive geothermal spa resort offering private lagoon access, serene suites, and exceptional wellness experiences.",
    }
  ],

    similarPackages: [
     {
slug: "iceland",
packageSlug: "NORDIC_LEGENDS_ICELAND",
title: "NORDIC LEGENDS: A LUXURY ICELAND FAMILY ADVENTURE",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "7 NIGHTS",
headline: "This extraordinary journey introduces travelers to Iceland’s dramatic landscapes through a carefully curated blend of adventure, nature, and refined comfort."
}
},
{
slug: "iceland",
packageSlug: "CHASING_AURORA_ESCAPE",
title: "CHASING THE AURORA: NORTHERN LIGHTS ESCAPE",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "5 NIGHTS",
headline: "This winter journey reveals Iceland in its most magical season, when snow-covered landscapes, frozen waterfalls, and star-filled Arctic skies create the perfect setting for witnessing the Northern Lights.",
},
     },
   {
slug: "iceland",
packageSlug: "FIRE_ICE_SILENCE_ICELAND",
title: "SAGA OF FIRE, ICE & SILENCE: A LUXURY ICELAND EXPEDITION",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "9 NIGHTS",
headline: "This remarkable journey reveals Iceland through its most dramatic contrasts—volcanoes and glaciers, remote highlands and refined luxury retreats.",
},
     },

    ]
},

// ----------------------------------------------------------------------------------
// italy package 1 -- THE ULTIMATE DOLCE VITA ESCAPE: VINEYARDS, COASTLINES & ICONIC ITALIAN LUXURY   DONE
{
  slug: "italy",
  packageSlug: "DOLCE_VITA_ESCAPE",
  title: "THE ULTIMATE DOLCE VITA ESCAPE: VINEYARDS, COASTLINES & ICONIC ITALIAN LUXURY",
  heroImage: "/images/packages/THEULTIMATEDOLCEVITAESCAPE-HERO.webp",

  heroMeta: {
    country: "ITALY",
    headline: "THE ULTIMATE DOLCE VITA ESCAPE: VINEYARDS, COASTLINES & ICONIC ITALIAN LUXURY",
    when: "April – October",
    price: {
      label: "$10,200 per person (excluding international flights)",
    },
    duration: "9 Nights",
  },

  intro:
"This elegant journey captures the essence of Italy’s most iconic landscapes, blending the rolling vineyards of Tuscany with the dramatic coastal beauty of Sorrento and the Amalfi Coast.\n\nBeginning in the heart of Tuscany, guests are immersed in a world of countryside charm, historic towns, and world-renowned wine culture. Private experiences reveal the region’s rich culinary heritage and timeless Italian lifestyle.\n\nThe journey then continues south to Sorrento, where coastal elegance and Mediterranean views define the experience. From charming streets and historic sites to curated wine tastings and cultural exploration, each moment reflects the refined spirit of southern Italy.\n\nConcluding along the Amalfi Coast, travelers experience one of the world’s most breathtaking coastlines through private excursions, scenic drives, and exclusive experiences that embody the true meaning of la dolce vita.",

sections: [
{
title1: "DAY 1–3 — TUSCANY: COUNTRYSIDE RETREAT & WINE CULTURE",
description1:
"Arrive in Florence, where a private transfer welcomes you before continuing into the rolling landscapes of Tuscany.\n\nYour stay at a luxury countryside estate such as Borgo Pignano offers an immersive introduction to Italy’s rural elegance, surrounded by vineyards, olive groves, and panoramic valley views.\n\nSpend your days at leisure enjoying the estate’s refined amenities, including infinity pools, spa treatments, and curated culinary experiences that highlight seasonal Tuscan ingredients.\n\nExplore the historic towns of Siena and Montalcino, where private wine tastings introduce you to some of Italy’s most celebrated wines, paired with authentic dining experiences that reflect the region’s rich culinary traditions.",
image1: "/images/packages/THEULTIMATEDOLCEVITAESCAPE-Block01.webp",
},

{
title1: "DAY 4–5 — SORRENTO: COASTAL ELEGANCE & LEISURE",
description1:
"Travel south toward the Mediterranean, arriving in the charming coastal town of Sorrento.\n\nCheck into a luxury hotel such as Bellevue Syrene, where panoramic sea views and refined interiors create a sophisticated coastal retreat.\n\nYour time in Sorrento is designed for relaxed exploration. Stroll through picturesque streets lined with artisan boutiques, enjoy seaside cafés, and take in the serene beauty of the Bay of Naples.\n\nOptional experiences include private coastal excursions or simply unwinding at the hotel while enjoying the Mediterranean atmosphere.",
image1: "/images/packages/THEULTIMATEDOLCEVITAESCAPE-Block02.webp",
},

{
title1: "DAY 6–7 — CULTURE, WINE & AMALFI COAST",
description1:
"Discover the cultural richness of the region with visits to historic sites, monasteries, and hidden gems that reflect southern Italy’s layered heritage.\n\nEnjoy a unique wine tasting experience inside a Roman grotto cellar, offering a distinctive perspective on Italy’s ancient winemaking traditions.\n\nContinue your journey along the legendary Amalfi Coast, arriving in Praiano at an elegant property such as Casa Angelina, where minimalist luxury meets breathtaking coastal views.\n\nSpend your time soaking in the dramatic scenery, enjoying curated dining experiences, and experiencing the relaxed yet refined lifestyle that defines the Amalfi Coast.",
image1: "/images/packages/THEULTIMATEDOLCEVITAESCAPE-Block03.webp",
},

{
title1: "DAY 8–9 — AMALFI COAST EXPLORATION & CULINARY EXPERIENCES",
description1:
"Explore the iconic towns of Positano, Ravello, and Amalfi, each offering its own charm, from pastel-coloured cliffside villages to historic villas and panoramic viewpoints.\n\nA highlight of the journey is a private boat experience to Capri, where crystal-clear waters, hidden coves, and dramatic rock formations create an unforgettable coastal adventure.\n\nOn your final day, explore the ancient ruins of Pompeii or Herculaneum, gaining insight into Italy’s fascinating history.\n\nThe experience concludes with a private Neapolitan cooking experience, where traditional recipes and local ingredients come together in an intimate and memorable culinary setting.",
image1: "/images/packages/THEULTIMATEDOLCEVITAESCAPE-Block04.webp",
}
],

hotels: [
{
name: "BORGO PIGNANO – TUSCANY",
image: "/images/packages/THEULTIMATEDOLCEVITAESCAPE-Hotel01.webp",
desc: "A luxurious countryside estate offering refined rustic elegance, panoramic views, and immersive Tuscan experiences.",
},
{
name: "BELLEVUE SYRENE – SORRENTO",
image: "/images/packages/THEULTIMATEDOLCEVITAESCAPE-Hotel02.webp",
desc: "An iconic cliffside hotel known for its historic charm, sea views, and refined Mediterranean hospitality.",
},
{
name: "CASA ANGELINA – PRAIANO",
image: "/images/packages/THEULTIMATEDOLCEVITAESCAPE-Hotel03.webp",
desc: "A contemporary luxury retreat offering minimalist design, breathtaking Amalfi Coast views, and an intimate boutique atmosphere.",
}
],

similarPackages: [
{
slug: "italy",
packageSlug: "CROWNED_KINGDOM_ROYAL_JOURNEY",
title: "CROWNED KINGDOM ROYAL JOURNEY",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "9 NIGHTS",
headline: "This elegant journey through England and Scotland celebrates the grandeur of Britain’s royal heritage, combining historic palaces, refined city living, and iconic countryside estates."
}
},
{
slug: "uk",
packageSlug: "BIG_SMOKE_TO_WILD_GLENS",
title: "FROM BIG SMOKE TO WILD GLENS: A GRAND JOURNEY THROUGH BRITAIN",
heroImage: "/images/triple-creek-ranch.avif",
heroMeta: {
duration: "14 NIGHTS",
headline: "This grand journey through Britain blends royal heritage, storybook countryside, and dramatic Highland wilderness into an unforgettable luxury travel experience"
}
},

]

},
];