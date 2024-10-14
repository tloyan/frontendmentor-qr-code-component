import "@/app/globals.css";

import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-outfit",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
      </head>
      <body className={`${outfit.variable} h-full antialiased`}>
        {children}
      </body>
    </html>
  );
}
