import React from "react";
import Head from "next/head";
import { siteConfig } from "@/config/site";

export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  ogType?: "website" | "article" | "profile";
  keywords?: string[] | string;
  noindex?: boolean;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = siteConfig.description,
  canonical,
  ogImage = siteConfig.ogImage,
  ogImageAlt = "Shashank Shekhar - BJP Bihar Leader",
  ogImageWidth = 1200,
  ogImageHeight = 630,
  ogType = "website",
  keywords = siteConfig.keywords,
  noindex = false,
  structuredData,
}) => {
  const pageTitle = title
    ? title.includes(siteConfig.name)
      ? title
      : `${title} | ${siteConfig.name}`
    : siteConfig.title;

  const fullCanonicalUrl = canonical
    ? canonical.startsWith("http")
      ? canonical
      : `${siteConfig.siteUrl}${canonical.startsWith("/") ? "" : "/"}${canonical}`
    : siteConfig.siteUrl;

  const fullOgImageUrl = ogImage.startsWith("http")
    ? ogImage
    : `${siteConfig.siteUrl}${ogImage.startsWith("/") ? "" : "/"}${ogImage}`;

  const keywordsString = Array.isArray(keywords)
    ? keywords.join(", ")
    : keywords;

  // Base Person schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    alternateName: siteConfig.hindiName,
    url: siteConfig.siteUrl,
    image: `${siteConfig.siteUrl}${siteConfig.profileImage}`,
    jobTitle: "Leader & Youth Activist",
    worksFor: {
      "@type": "Organization",
      name: "Bharatiya Janata Yuva Morcha (BJYM) / BJP Bihar",
      url: "https://bihar.bjp.org/",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.author.address.streetAddress,
      addressLocality: siteConfig.author.address.addressLocality,
      addressRegion: siteConfig.author.address.addressRegion,
      postalCode: siteConfig.author.address.postalCode,
      addressCountry: siteConfig.author.address.addressCountry,
    },
    email: siteConfig.author.email,
    telephone: siteConfig.author.formattedPhone,
    sameAs: [
      siteConfig.social.twitter,
      siteConfig.social.facebook,
      siteConfig.social.instagram,
    ],
  };

  // Base WebSite schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} - Official Website`,
    alternateName: `${siteConfig.hindiName} - आधिकारिक वेबसाइट`,
    url: siteConfig.siteUrl,
    inLanguage: ["hi-IN", "en-IN"],
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };

  const schemasToRender = [
    personSchema,
    websiteSchema,
    ...(Array.isArray(structuredData)
      ? structuredData
      : structuredData
      ? [structuredData]
      : []),
  ];

  return (
    <Head>
      {/* Basic HTML Meta */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {keywordsString && <meta name="keywords" content={keywordsString} />}
      <meta name="author" content={siteConfig.author.name} />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Robots Directive */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <>
          <meta
            name="robots"
            content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta
            name="googlebot"
            content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
        </>
      )}

      {/* Open Graph (Facebook / LinkedIn / WhatsApp) */}
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:locale" content={siteConfig.locale} />
      <meta property="og:locale:alternate" content={siteConfig.alternateLocale} />

      <meta property="og:image" content={fullOgImageUrl} />
      <meta property="og:image:secure_url" content={fullOgImageUrl} />
      <meta property="og:image:width" content={ogImageWidth.toString()} />
      <meta property="og:image:height" content={ogImageHeight.toString()} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta
        property="og:image:type"
        content={fullOgImageUrl.endsWith(".png") ? "image/png" : "image/jpeg"}
      />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteConfig.social.twitterHandle} />
      <meta name="twitter:creator" content={siteConfig.social.twitterHandle} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImageUrl} />
      <meta name="twitter:image:alt" content={ogImageAlt} />

      {/* Mobile & Browser Appearance */}
      <meta name="theme-color" content={siteConfig.themeColor} />
      <meta name="msapplication-TileColor" content={siteConfig.themeColor} />
      <meta name="application-name" content={siteConfig.name} />
      <meta name="apple-mobile-web-app-title" content={siteConfig.name} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />

      {/* Structured Data (JSON-LD) */}
      {schemasToRender.map((schema, index) => (
        <script
          key={`ldjson-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
};

export default SEO;
