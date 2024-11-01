import localFont from "next/font/local";
import { Poppins } from "next/font/google"; // Import Poppins from Google Fonts
import "./globals.css";

// Local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Google Fonts
const poppins = Poppins({
  subsets: ["latin"], // specify the subsets you want
  weight: ["400", "700"], // specify the font weights you want to use
});

export const metadata = {
  title: "Artist Area | Wiraa",
  description: "Laman resmi Abbulosibatang Pramuka Salis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="abbscout" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} antialiased`} // Include Poppins class
      >
        {children}
      </body>
    </html>
  );
}
