import "./styles.css";
import type { Metadata } from "next";
import { Onest } from "next/font/google";
import NavBar from "@/components/specific/NavBar";
import { ThemeProvider } from "@/context/themeContext";
import { MenuProvider } from "@/context/MenuContext";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-onest",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vleonardojuanpablo.com/"),
  title:
    "Leonardo Valdez | Frontend Developer Portfolio – React, TypeScript, Next.js Expert",
  icons: {
    icon: "icon.svg",
  },
  description:
    "Explore the portfolio of Leonardo Valdez, a skilled Frontend Developer specializing in React, TypeScript, and Next.js. Connect with Leonardo to bring high-quality, scalable web solutions to life.",
  keywords: [
    "Leonardo Juan Pablo Valdez",
    "Leonardo Valdez",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Next.js",
    "SaaS applications",
    "web development",
    "e-commerce backend",
    "AI prompt engineering",
    "responsive design",
    "JavaScript developer",
    "agile developer",
    "UI/UX developer",
    "scalable web applications",
    "Tucuman Argentina developer",
  ],
  alternates: {
    canonical: "https://vleonardojuanpablo.com/",
    languages: {
      en: "https://vleonardojuanpablo.com/",
    },
  },
  openGraph: {
    title:
      "Leonardo Valdez | Frontend Developer Portfolio – React, TypeScript, Next.js Expert",
    description:
      "Explore the portfolio of Leonardo Valdez, a skilled Frontend Developer specializing in React, TypeScript, and Next.js. Connect with Leonardo to bring high-quality, scalable web solutions to life.",
    url: "https://vleonardojuanpablo.com/",
    type: "website",
    images: [
      {
        url: "/portfolio-img.webp",
        width: 1200,
        height: 630,
        alt: "Leonardo Valdez Portfolio Thumbnail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Valdez | Frontend Developer Portfolio",
    description:
      "Explore the portfolio of Leonardo Valdez, a skilled Frontend Developer specializing in React, TypeScript, and Next.js.",
    images: ["icon.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${onest.variable}`}>
        <ThemeProvider>
          <MenuProvider>
            <NavBar />
            <main
              className="container"
              id="#main-content"
              role="main"
              tabIndex={-1}
            >
              {children}
            </main>
          </MenuProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
