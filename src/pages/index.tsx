import React from "react";
import RootLayout from "@/app/layout";
import HomeView from "@/views/HomeView";
import SEO from "@/components/SEO";

const HomePage = () => {
  return (
    <>
      <SEO
        title="Shashank Shekhar | Official Website - BJP Bihar & Youth Leader"
        description="शशांक शेखर - भारतीय जनता युवा मोर्चा (BJYM) एवं भाजपा बिहार के युवा नेता। एकता से विकास और नया भारत निर्माण के संकल्प के साथ बेगूसराय एवं बिहार के समग्र विकास के लिए समर्पित।"
        canonical="/"
        ogImage="/heroAssets/shashank-modiji.jpeg"
        ogImageAlt="Shashank Shekhar with Prime Minister Narendra Modi"
        secondaryOgImage="/dpSS.png"
        ogType="website"
      />
      <RootLayout>
        <HomeView />
      </RootLayout>
    </>
  );
};

export default HomePage;
