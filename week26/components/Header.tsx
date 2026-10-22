
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <Link href="/">🎬 영화 아카이브</Link>

      <nav>
        <Link href="/movies">영화 목록</Link>
      </nav>
    </header>
  );
}