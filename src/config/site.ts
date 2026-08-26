export const siteConfig = {
  name: "Shashank Shekhar",
  hindiName: "शशांक शेखर",
  title: "Shashank Shekhar | Official Website - BJP Bihar & Youth Leader",
  description:
    "Official website of Shashank Shekhar, BJP leader and youth activist from Begusarai, Bihar. Dedicated to unity, progress, good governance, and youth empowerment. एकता से विकास, नया भारत निर्माण।",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.shashanknk.in",
  ogImage: "/heroAssets/shashank-modiji.jpeg",
  profileImage: "/dpSS.png",
  locale: "hi_IN",
  alternateLocale: "en_IN",
  themeColor: "#2d2b3f",
  author: {
    name: "Shashank Shekhar",
    email: "ss@shashanknk.in",
    phone: "8871993468",
    formattedPhone: "+91-8871993468",
    address: {
      streetAddress: "Ward-15, Pipra, Professor Colony",
      addressLocality: "Begusarai",
      addressRegion: "Bihar",
      postalCode: "851117",
      addressCountry: "IN",
    },
  },
  social: {
    twitter: "https://x.com/shankyshekhar02?t=CUqNekL1aQz6QN2Di8LPPA&s=08",
    twitterHandle: "@shankyshekhar02",
    facebook: "https://www.facebook.com/shashanknk.shekhar/",
    instagram: "https://www.instagram.com/shankyshekhar02?igsh=cHJyNTl3MGhwZXQ=",
    bjpBiharFb: "https://www.facebook.com/share/RdDZtX7MycMhi5RS/?mibextid=qi2Omg",
    bjymFb: "https://www.facebook.com/share/VnoXFMY7tD2qyypB/?mibextid=qi2Omg",
  },
  keywords: [
    "Shashank Shekhar",
    "शशांक शेखर",
    "Shashank Shekhar Begusarai",
    "BJP Bihar",
    "BJYM Bihar",
    "भारतीय जनता युवा मोर्चा",
    "BJP Begusarai",
    "Begusarai Leader",
    "Bihar Youth Leader",
    "Shashank Shekhar BJP",
    "shashanknk",
    "shashanknk.in",
    "एकता से विकास",
    "नया भारत निर्माण",
    "Begusarai Bihar Politics",
  ],
};

export type SiteConfig = typeof siteConfig;
