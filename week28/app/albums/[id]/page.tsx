import Link from "next/link";
import { notFound } from "next/navigation";
import { getAlbum } from "@/data/albums";

// 과제: generateMetadata로 앨범마다 title, description 다르게 넣기

// 과제: generateMetadata에 openGraph 추가해서 앨범 표지가 링크 미리보기에 뜨게 하기

// 도전 과제: generateStaticParams로 상세 페이지를 빌드할 때 미리 만들어두기

export default async function AlbumPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const album = getAlbum(id);

  if (!album) {
    notFound();
  }

  return (
    <main className="container">
      <Link href="/" className="back-link">
        ← 목록으로
      </Link>

      <div className="detail">
        <img src={album.cover} className="detail-cover" />

        <div className="detail-info">
          <div className="detail-genre">
            {album.genre} · {album.year}
          </div>
          {/* 과제: 앨범 제목을 div 대신 알맞은 시맨틱 태그로 바꾸기 */}
          <div className="detail-title">{album.title}</div>
          <div className="detail-artist">{album.artist}</div>
          <p className="detail-desc">{album.description}</p>

          <div className="track-heading">수록곡</div>
          <ol className="track-list">
            {album.tracks.map((track) => (
              <li key={track}>{track}</li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
}