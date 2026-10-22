import type { Metadata } from 'next';
import { Gowun_Batang } from 'next/font/google';
import Header from '@/components/Header';
import './globals.css';

// 실습 - font optimization
const gowunBatang = Gowun_Batang({
  weight:'400',
  subsets: ['latin'],
  variable: '--font-gowun-batang',
})

export const metadata: Metadata = {
  title: '영화 아카이브',
  description: 'Next.js 영화 아카이브 실습',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={gowunBatang.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}