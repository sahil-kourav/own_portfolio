import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: "Portfolio - Sahil.",
  description: "Portfolio website of Sahil, a passionate web developer and designer. Showcasing my skills, projects, and experience in creating beautiful and functional web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 dark:bg-darkTheme dark:text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
