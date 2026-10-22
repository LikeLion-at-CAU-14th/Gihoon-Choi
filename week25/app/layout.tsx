import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "맛집 도감",
  description: "우리 학교 앞 맛집을 모아둔 도감",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return ( <html lang="ko">
      <body className="min-h-screen bg-orange-50 text-gray-900">
        <header className="flex items-center justify-between bg-white px-8 py-4 shadow-sm">
          <Link href="/" className="text-xl font-bold text-orange-500">
            🦁 맛집 도감
          </Link>
          <nav className="flex gap-6 font-medium">
            <Link href="/restaurants">맛집 목록</Link>
            <Link href="/about">소개</Link>
          </nav>
        </header>
        <main className="mx-auto max-w-3xl px-6 py-10">{children}</main>
      </body>
    </html>);
}