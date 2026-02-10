export const NAV_LINKS = [
  { id: "about", label: "ABOUT", href: "/about", hasDropdown: false },
  {
    id: "destinations",
    label: "PLACES",
    href: "/#how-do-you-travel",
    hasDropdown: true,
  },
  {
    id: "experiences",
    label: "CURATIONS",
    href: "/experiences",
    hasDropdown: true,
  },
] as const;

export const EXPERIENCES_DATA = {
  categories: [
    {
      id: "who",
      label: "WHO",
      cards: [
        {
          title: "FAMILY\nHOLIDAYS",
          slug:'family-holidays',
          image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
          link: "/experiences/family-holidays",
        },
        {
          title: "COUPLES\nHOLIDAYS",
          slug:'romantic-holidays',
          image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
          link: "/experiences/couples-holidays",
        },
        {
          title: "GROUP\nHOLIDAYS",
          slug:'group-holidays',
          image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
          link: "/experiences/group-holidays",
        },
        {
          title: "SOLO\nHOLIDAYS",
          slug:'solo-holidays',
          image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
          link: "/experiences/solo-holidays",
        },
        {
          title: "HONEYMOONS",
          slug:'honeymoon-holidays',
          image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
          link: "/experiences/honeymoons",
        },
      ],
    },
    // {
    //   id: "what",
    //   label: "WHAT",
    //   cards: [
    //     {
    //       title: "SAFARI\nHOLIDAYS",
    //       image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
    //       link: "/experiences/safari-holidays",
    //     },
    //     {
    //       title: "REMOTE\nDESTINATIONS",
    //       image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
    //       link: "/experiences/remote-destinations",
    //     },
    //     {
    //       title: "BEACH\nHOLIDAYS",
    //       image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
    //       link: "/experiences/beach-holidays",
    //     },
    //     {
    //       title: "ADVENTURE\nHOLIDAYS",
    //       image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
    //       link: "/experiences/adventure-holidays",
    //     },
    //     {
    //       title: "FOOD\nHOLIDAYS",
    //       image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
    //       link: "/experiences/food-holidays",
    //     },
    //   ],
    // },
    // {
    //   id: "remarkable",
    //   label: "REMARKABLE EXPERIENCES",
    //   cards: [
    //     {
    //       title: "UNUSUAL\nHOLIDAYS",
    //       image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
    //       link: "/experiences/unusual-holidays",
    //     },
    //     {
    //       title: "ECLIPSE\nHOLIDAYS",
    //       image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
    //       link: "/experiences/eclipse-holidays",
    //     },
    //     {
    //       title: "SLOW TRAVEL",
    //       image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
    //       link: "/experiences/slow-travel",
    //     },
    //     {
    //       title: "PROPOSAL\nSERVICE",
    //       image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
    //       link: "/experiences/proposal-service",
    //     },
    //     {
    //       title: "TRAIN TRAVEL",
    //       image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
    //       link: "/experiences/train-travel",
    //     },
    //   ],
    // },
    // {
    //   id: "collaborations",
    //   label: "COLLABORATIONS",
    //   cards: [
    //     {
    //       title: "LUXURY\nPARTNERSHIPS",
    //       image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
    //       link: "/experiences/luxury-partnerships",
    //     },
    //     {
    //       title: "BRAND\nCOLLABORATIONS",
    //       image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
    //       link: "/experiences/brand-collaborations",
    //     },
    //     {
    //       title: "EXCLUSIVE\nOFFERS",
    //       image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
    //       link: "/experiences/exclusive-offers",
    //     },
    //     {
    //       title: "CURATED\nEXPERIENCES",
    //       image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
    //       link: "/experiences/curated-experiences",
    //     },
    //     {
    //       title: "SPECIAL\nEVENTS",
    //       image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
    //       link: "/experiences/special-events",
    //     },
    //   ],
    // },
  ],
};

export const ABOUT_DATA = {
  categories: [
    // {
    //   id: "who-we-are",
    //   label: "ABOUT I-SKY",
    //   items: ["OUR STORY"],
    // },
    // {
    //   id: "why-book",
    //   label: "WHY BOOK WITH US",
    //   items: [ "5 reasons to book with us","Why not just do it yourself?","How it all works","Regenerative travel"],
    // },
    // {
    //   id: "what-others-say",
    //   label: "WHAT OTHERS SAY",
    //   items: ["Client testimonials", "In the press"],
    // },
  ],
};

export const MENU_DATA = {
  categories: [
    {
      id: "month",
      label: "MONTH",
      items: [],
    },
    {
      id: "inspiration",
      label: "INSPIRATION",
      items: [],
    },
    {
      id: "trip-finder",
      label: "TRIP FINDER",
      items: [],
    },
    {
      id: "most-popular",
      label: "MOST POPULAR",
      items: [],
    },
  ],
  months: [
    { name: "JANUARY", image: "/images/month/January.webp" },
    { name: "FEBRUARY", image: "/images/month/February.webp" },
    { name: "MARCH", image: "/images/month/March.webp" },
    { name: "APRIL", image: "/images/month/April.webp" },
    { name: "MAY", image: "/images/month/May.webp" },
    { name: "JUNE", image: "/images/month/June.webp" },
    { name: "JULY", image: "/images/month/July.webp" },
    { name: "AUGUST", image: "/images/month/August.webp" },
    { name: "SEPTEMBER", image: "/images/month/Sept.webp" },
    { name: "OCTOBER", image: "/images/month/October.webp" },
    { name: "NOVEMBER", image: "/images/month/November.webp" },
    { name: "DECEMBER", image: "/images/month/December.webp" },
  ],
};


export const BY_DESTINATION = [
  { title: "SWITZERLAND", imageUrl: "/images/dest/Swiz DP.webp", slug:"switzerland" },
  { title: "ITALY", imageUrl: "/images/dest/italy dp.webp", slug:"italy" },
  { title: "MALDIVES", imageUrl: "/images/dest/Maldives DP.webp", slug:"maldives" },
  { title: "JAPAN", imageUrl: "/images/dest/Japan DP.webp", slug:"japan" },
  { title: "GREECE", imageUrl: "/images/dest/Greece DP.webp", slug:"greece" },
  { title: "UNITED KINGDOM", imageUrl: "/images/dest/UK DP.webp", slug:"uk" },
  { title: "MOROCCO", imageUrl: "/images/dest/Morocco DP.webp", slug:"morocco" },
  { title: "TANZANIA", imageUrl: "/images/dest/Tanzania DP.webp", slug:"tanzania" },
  { title: "ICELAND", imageUrl: "/images/dest/Iceland DP.webp", slug:"iceland" },
  { title: "NEW ZEALAND", imageUrl: "/images/dest/Newz DP.webp", slug:"new-zealand" },
];