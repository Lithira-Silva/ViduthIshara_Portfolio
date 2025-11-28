import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Viduth Ishara Portfolio",
  description: "Data Scientist & AI Engineer specializing in Computer Vision, Deep Learning, Sports Analytics & Enterprise Automation. Building real-world AI systems.",
  keywords: ["AI Engineer", "Data Scientist", "Computer Vision", "Deep Learning", "Machine Learning", "Pose Estimation", "Sports Analytics"],
  authors: [{ name: "Viduth Ishara" }],
  openGraph: {
    title: "Viduth Ishara | AI Engineer & Data Scientist",
    description: "Building real-world AI systems — Computer Vision, Deep Learning, Sports Analytics & Enterprise Automation",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viduth Ishara | AI Engineer & Data Scientist",
    description: "Building real-world AI systems — Computer Vision, Deep Learning, Sports Analytics",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
