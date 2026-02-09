import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coffiy - Kopi Stamina Pria Dewasa | Coffee for Men Modern",
  description: "Kopi stamina pria dewasa premium untuk penambah energi dan vitalitas pria modern. Coffiy adalah kopi pria modern dengan formula khusus sebagai coffee for men terbaik di Indonesia.",
  keywords: [
    "kopi stamina pria",
    "kopi pria dewasa", 
    "coffee for men",
    "kopi pria modern",
    "kopi penambah energi pria",
    "coffiy",
    "kopi vitalitas pria",
    "kopi energi pria",
    "kopi kekuatan pria",
    "kopi performa pria"
  ],
  authors: [{ name: "Coffiy Team" }],
  icons: {
    icon: "/coffiy-logo-kopi-stamina-pria.png",
    apple: "/coffiy-logo-kopi-stamina-pria.png",
  },
  openGraph: {
    title: "Coffiy - Kopi Stamina Pria Dewasa",
    description: "Kopi stamina pria dewasa premium untuk penambah energi dan vitalitas pria modern. Coffee for men terbaik di Indonesia.",
    url: "https://coffiy.com",
    siteName: "Coffiy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coffiy - Kopi Stamina Pria",
    description: "Kopi stamina pria dewasa premium untuk penambah energi dan vitalitas pria modern.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Adcuan Tracking Script */}
        <script src="https://plus.adcuan.com/code.js?nomor=4" async></script>
        
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '864070406332606');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=864070406332606&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
