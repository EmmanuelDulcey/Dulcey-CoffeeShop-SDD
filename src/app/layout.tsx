import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
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

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "https://feeding-life-coffee-shop.vercel.app"
  ),
  title: "Feeding Life Coffee Shop — Café de origen local",
  description:
    "Café de especialidad de origen local. Catálogo de cafés, historia de origen y pedidos. Tostado artesanal, frescura garantizada.",
  keywords: [
    "café de especialidad",
    "café de origen",
    "coffee shop",
    "tueste artesanal",
    "Feeding Life",
  ],
  icons: { icon: "/logo.png", apple: "/logo.png" },
  openGraph: {
    title: "Feeding Life Coffee Shop — Café de origen local",
    description:
      "Café de especialidad de origen local. Catálogo, origen y pedidos.",
    type: "website",
    images: ["/logo.png"],
  },
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
        <OrderProvider>
          {children}
          <CartDrawer />
        </OrderProvider>
      </body>
    </html>
  );
}
