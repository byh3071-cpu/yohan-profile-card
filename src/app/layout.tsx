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

/**
 * 첫 페인트 전에 동기 실행되어 FOUC를 막는 인라인 스크립트.
 * localStorage의 명시적 선택을 우선하고, 없으면 prefers-color-scheme.
 */
const themeInitScript = `try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
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
