import React from "react";
import DisclaimerView from "@/views/DisclaimerView";
import RootLayout from "@/app/layout";
import SEO from "@/components/SEO";
import { siteConfig } from "@/config/site";

const Disclaimer = () => {
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
        name: "Disclaimer",
        item: `${siteConfig.siteUrl}/disclaimer`,
      },
    ],
  };

  return (
    <>
      <SEO
        title="Disclaimer | Shashank Shekhar"
        description="Legal disclaimer, external links policy, and professional notice for the official website of Shashank Shekhar (https://www.shashanknk.in/)."
        canonical="/disclaimer"
        ogType="website"
        structuredData={breadcrumbSchema}
      />
      <RootLayout>
        <DisclaimerView />
      </RootLayout>
    </>
  );
};

export default Disclaimer;
