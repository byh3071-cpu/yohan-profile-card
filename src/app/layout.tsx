import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { STATIC_PROFILE, STATIC_SOCIAL_LINKS } from "@/data/site-content"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")

const title = `${STATIC_PROFILE.displayName} — 프로필 카드`
const description = STATIC_PROFILE.tagline

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "profile",
    locale: "ko_KR",
    siteName: title,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: STATIC_PROFILE.displayName,
  description: STATIC_PROFILE.tagline,
  image: STATIC_PROFILE.avatarSrc,
  url: siteUrl,
  sameAs: STATIC_SOCIAL_LINKS.map((link) => link.href.trim()).filter((href) => href.length > 0),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable} h-full dark`}>
      <body className="min-h-full antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  )
}
