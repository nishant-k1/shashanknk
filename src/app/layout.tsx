import "./globals.css";
import Header from "@/views/Shared/Header";
import Footer from "@/views/Shared/Footer";
export const props = {};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
