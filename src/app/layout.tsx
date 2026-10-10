import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/lib/site";
import { OrderProvider } from "@/components/site/OrderContext";
import { CartDrawer } from "@/components/site/CartDrawer";

const shabby = localFont({
  src: [
    { path: "../fonts/another-shabby-regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/another-shabby-bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/another-shabby-heavy.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-shabby",
  display: "swap",
});

const nunito = localFont({
  src: [
    { path: "../fonts/nunito-variable.ttf", weight: "200 1000", style: "normal" },
    { path: "../fonts/nunito-italic-variable.ttf", weight: "200 1000", style: "italic" },
  ],
  variable: "--font-nunito",
  display: "swap",
});

const poppins = localFont({
  src: [
    { path: "../fonts/poppins-regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/poppins-medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/poppins-semibold.ttf", weight: "600", style: "normal" },
    { path: "../fonts/poppins-bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/poppins-extrabold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://feeding-life-coffee-shop.vercel.app";

const title = "Feeding Life Coffee Shop — Café de origen local";
const description =
  "Café de especialidad de origen local. Catálogo de cafés, historia de origen y pedidos. Tostado artesanal, frescura garantizada.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "café de especialidad",
    "café de origen",
    "coffee shop",
    "tueste artesanal",
    "Feeding Life",
  ],
  applicationName: site.name,
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  icons: { icon: "/logo.png", apple: "/logo.png" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title,
    description:
      "Café de especialidad de origen local. Catálogo, origen y pedidos.",
    url: "/",
    siteName: site.name,
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: `${site.name} — logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Café de especialidad de origen local. Catálogo, origen y pedidos.",
    images: ["/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: site.name,
  description: site.description,
  url: siteUrl,
  image: `${siteUrl}/logo.png`,
  logo: `${siteUrl}/logo.png`,
  telephone: `+${site.whatsappNumber}`,
  email: site.email,
  priceRange: "$$",
  servesCuisine: "Café de especialidad",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressCountry: "CO",
  },
  openingHours: site.hours,
  sameAs: [site.socials.instagram, site.socials.tiktok, site.socials.facebook],
};

export const viewport: Viewport = {
  themeColor: "#1b0f09",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${shabby.variable} ${nunito.variable} ${poppins.variable}`}
    >
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <OrderProvider>
          {children}
          <CartDrawer />
        </OrderProvider>
      </body>
    </html>
  );
}
