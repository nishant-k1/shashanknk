import React from "react";
import GalleryView from "@/views/GalleryView";
import RootLayout from "@/app/layout";
import SEO from "@/components/SEO";
import { siteConfig } from "@/config/site";

type Props = {
  id?: string;
};

const Gallery = ({ id = "gallery" }: Props) => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Gallery",
        item: `${siteConfig.siteUrl}/gallery`,
      },
    ],
  };

  return (
    <>
      <SEO
        title="Photo Gallery | Shashank Shekhar"
        description="शशांक शेखर के सार्वजनिक कार्यक्रमों, जनसभाओं, सामाजिक गतिविधियों और संगठनात्मक अभियानों की विशेष तस्वीरें देखें।"
        canonical="/gallery"
        ogImage="/heroAssets/shashank-modiji.jpeg"
        ogImageAlt="Shashank Shekhar Gallery Photos"
        ogType="website"
        keywords={[
          ...siteConfig.keywords,
          "Shashank Shekhar Photos",
          "BJP Bihar Photos",
          "BJYM Gallery",
          "Begusarai Events",
        ]}
        structuredData={breadcrumbSchema}
      />
      <RootLayout>
        <GalleryView id={id} />
      </RootLayout>
    </>
  );
};

export default Gallery;
