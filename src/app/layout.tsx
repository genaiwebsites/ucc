import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#080d16" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Usha Commercial Corporation — Industrial Polymers & Chemical Distribution Since 1969",
  description: "Premier importers, distributors, and indenting agents of Synthetic Rubbers (SBR, NBR, EPDM, PBR), Natural Rubber, Carbon Black, and Rubber Chemicals across Eastern India and nationwide.",
  keywords: [
    "Synthetic Rubber Distributor",
    "Natural Rubber Importers Kolkata",
    "SBR 1502",
    "NBR Rubber",
    "EPDM Polymers",
    "Carbon Black N220 N330",
    "Rubber Chemicals Kolkata",
    "Usha Commercial Corporation",
    "Industrial Chemical Indenters Eastern India",
  ],
  authors: [{ name: "Usha Commercial Corporation" }],
  openGraph: {
    title: "Usha Commercial Corporation — Polymer & Chemical Specialists",
    description: "55+ Years of unbroken supply-chain trust. Importers, stockists, and indenters of synthetic and natural elastomers and chemical additives.",
    url: "https://ushacommercialcorporation.com",
    siteName: "Usha Commercial Corporation",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground min-h-screen selection:bg-amber selection:text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
