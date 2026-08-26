import React from "react";
import Link from "next/link";
import RootLayout from "@/app/layout";
import SEO from "@/components/SEO";

export default function Custom404() {
  return (
    <>
      <SEO
        title="Page Not Found (404) | Shashank Shekhar"
        description="The page you are looking for does not exist or has been moved."
        noindex={true}
      />
      <RootLayout>
        <div
          style={{
            minHeight: "calc(100vh - 72px)",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "3rem 1.5rem",
            background: "#1f1d2b",
            color: "#fff",
            boxSizing: "border-box",
          }}
        >
          <h1
            style={{
              fontSize: "5rem",
              fontWeight: "bold",
              color: "#d88a4f",
              marginBottom: "1rem",
            }}
          >
            404
          </h1>
          <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
            पृष्ठ नहीं मिला / Page Not Found
          </h2>
          <p
            style={{
              maxWidth: "500px",
              marginBottom: "2rem",
              color: "rgba(255, 255, 255, 0.75)",
              fontSize: "1.1rem",
            }}
          >
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <Link
            href="/"
            style={{
              display: "inline-block",
              background: "#d88a4f",
              color: "#ffffff",
              padding: "0.75rem 1.75rem",
              borderRadius: "6px",
              fontWeight: 600,
              textDecoration: "none",
              transition: "opacity 0.2s ease",
            }}
          >
            Go Back Home / मुख्य पृष्ठ पर जाएं
          </Link>
        </div>
      </RootLayout>
    </>
  );
}
