import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Slug.module.css";
import RootLayout from "@/app/layout";
import SEO from "@/components/SEO";
import { siteConfig } from "@/config/site";

const GalleryImage = () => {
  const router = useRouter();
  const slug = router.query.slug;
  const imageSrc = typeof slug === "string" ? slug : Array.isArray(slug) ? slug[0] : "";

  // Extract a readable filename/title if available
  const imageName = imageSrc ? imageSrc.split("/").pop()?.replace(/\.[^/.]+$/, "") : "Photo";
  const displayTitle = `Photo - ${imageName} | Shashank Shekhar Gallery`;
  const canonicalUrl = imageSrc ? `/gallery/${encodeURIComponent(imageSrc)}` : "/gallery";

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
      {
        "@type": "ListItem",
        position: 3,
        name: `Photo ${imageName}`,
        item: `${siteConfig.siteUrl}${canonicalUrl}`,
      },
    ],
  };

  const imageSchema = imageSrc
    ? {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        contentUrl: `${siteConfig.siteUrl}${imageSrc.startsWith("/") ? "" : "/"}${imageSrc}`,
        name: displayTitle,
        description: "Photograph from the official gallery of Shashank Shekhar",
        author: {
          "@type": "Person",
          name: siteConfig.name,
        },
      }
    : null;

  return (
    <>
      <SEO
        title={displayTitle}
        description="शशांक शेखर के सार्वजनिक कार्यक्रमों एवं गतिविधियों की तस्वीर - आधिकारिक फोटो गैलरी।"
        canonical={canonicalUrl}
        ogImage={imageSrc || siteConfig.ogImage}
        ogImageAlt={`Shashank Shekhar - ${imageName}`}
        ogType="article"
        structuredData={
          imageSchema ? [breadcrumbSchema, imageSchema] : [breadcrumbSchema]
        }
      />
      <RootLayout>
        <div
          style={{
            padding: "0.75rem 1.25rem",
            background: "#1f1d2b",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <Link
            href="/gallery"
            style={{
              color: "#d88a4f",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.95rem",
              fontWeight: 500,
              minHeight: "44px",
            }}
          >
            ← Back to Gallery / गैलरी
          </Link>
        </div>
        <div className={styles.imageContaner}>
          {imageSrc ? (
            <Image
              height="1600"
              width="2100"
              alt={`Shashank Shekhar - ${imageName}`}
              src={imageSrc}
              className={styles.img}
              loading="eager"
            />
          ) : (
            <div style={{ color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <p>Loading photo...</p>
            </div>
          )}
        </div>
      </RootLayout>
    </>
  );
};

export default GalleryImage;
