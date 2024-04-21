import "./globals.css";
import Head from "next/head";
import Header from "@/views/Shared/Header";
import Footer from "@/views/Shared/Footer";
export const props = {};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <div style={{ position: "relative" }}>
          <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
