import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "백요한 — 프로필 카드",
  description: "AI 기반 1인 기업 준비 중인 바이브코더의 프로필 카드",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable} h-full dark`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  )
}
