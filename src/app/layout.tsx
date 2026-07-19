import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ascendra",
  description: "Transforming workplace culture through strategic alignment frameworks, corporate talent acquisition, and professional development programs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Replace this placeholder link with your exact Cloudinary logo image URL
  const logoUrl = "https://res.cloudinary.com/ws5jqxi7/image/upload/v1784478507/logo-no-bg_a7tiij.png";

  return (
    <html lang="en" className="h-full antialiased selection:bg-[#0D7C66]/10 selection:text-[#0D7C66]">
      <head>
        {/* Forces the browser to load the custom Cloudinary icon directly */}
        <link rel="icon" href={logoUrl} type="image/png" sizes="any" />
        <link rel="shortcut icon" href={logoUrl} type="image/png" />
        <link rel="apple-touch-icon" href={logoUrl} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-full flex flex-col bg-white overflow-x-hidden text-gray-900`}>
        {children}
      </body>
    </html>
  );
}