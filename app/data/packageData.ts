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

  intro: string;

  sections: {
    title: string;
    description: string;
  }[];

  hotels: {
    name: string;
    image: string;
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
        title: "Zermatt & The Matterhorn",
        description:
          "Flying into Venice, your trip begins an hour and a half due west in the storied town of Verona. Immortalised as the home of Shakespeare’s star-crossed lovers, Romeo & Juliet, you’ll spend your first night at the equally historic Hotel Due Torri. Take some time to explore the sights, from the Arena to the Piazza Delle Erbe, before you leave the city behind tomorrow for the tranquil banks of Lake Garda.",
      },
      {
        title: "Interlaken Adventures",
        description:
          "Flying into Venice, your trip begins an hour and a half due west in the storied town of Verona. Immortalised as the home of Shakespeare’s star-crossed lovers, Romeo & Juliet, you’ll spend your first night at the equally historic Hotel Due Torri. Take some time to explore the sights, from the Arena to the Piazza Delle Erbe, before you leave the city behind tomorrow for the tranquil banks of Lake Garda.",
      },
    ],

    hotels: [
      {
        name: "The Chedi Andermatt",
        image: "/images/switzerland/hotels/chedi.jpg",
      },
      {
        name: "Badrutt’s Palace",
        image: "/images/switzerland/hotels/badrutts.jpg",
      },
    ],
  },


  {
    slug: "switzerland",
    packageSlug: "classic-loss",
    title: "luxury",
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
        title: "Zermatt & The Matterhorn",
        description:
          "Flying into Venice, your trip begins an hour and a half due west in the storied town of Verona. Immortalised as the home of Shakespeare’s star-crossed lovers, Romeo & Juliet, you’ll spend your first night at the equally historic Hotel Due Torri. Take some time to explore the sights, from the Arena to the Piazza Delle Erbe, before you leave the city behind tomorrow for the tranquil banks of Lake Garda.",
      },
      {
        title: "Interlaken Adventures",
        description:
          "Flying into Venice, your trip begins an hour and a half due west in the storied town of Verona. Immortalised as the home of Shakespeare’s star-crossed lovers, Romeo & Juliet, you’ll spend your first night at the equally historic Hotel Due Torri. Take some time to explore the sights, from the Arena to the Piazza Delle Erbe, before you leave the city behind tomorrow for the tranquil banks of Lake Garda.",
      },
    ],

    hotels: [
      {
        name: "The Chedi Andermatt",
        image: "/images/switzerland/hotels/chedi.jpg",
      },
      {
        name: "Badrutt’s Palace",
        image: "/images/switzerland/hotels/badrutts.jpg",
      },
    ],
  },
];