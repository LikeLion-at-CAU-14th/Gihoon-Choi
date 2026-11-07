export type Album = {
  id: string;
  title: string;
  artist: string;
  year: number;
  genre: string;
  cover: string;
  description: string;
  tracks: string[];
};

export const albums: Album[] = [
  {
    id: "1",
    title: "HEROES & VILLAINS",
    artist: "Metro Boomin",
    year: 2022,
    genre: "힙합",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/09/72/3b/09723b88-9b18-e466-7ae0-05a17688bb52/22UM1IM35114.rgb.jpg/3000x3000bb.jpg",
    description: "Metro Boomin이 2018년 데뷔작 이후 4년 만에 낸 솔로 정규 앨범.",
    tracks: ["On Time", "Superhero (Heroes & Villains)", "Too Many Nights", "Raindrops (Insane)"],
  },
  {
    id: "2",
    title: "Love Sick",
    artist: "Don Toliver",
    year: 2023,
    genre: "힙합",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/15/3a/d1/153ad1fe-7884-a2e5-18be-750a21bd1af1/075679699893.jpg/3000x3000bb.jpg",
    description: "Don Toliver의 세 번째 정규 앨범.",
    tracks: ["LoveSickness", "Let Her Go", "Leave the Club", "4 Me"],
  },
  {
    id: "3",
    title: "NEVER ENOUGH",
    artist: "Daniel Caesar",
    year: 2023,
    genre: "R&B",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/24/4f/ec/244fec58-ea20-e0b0-eea6-e06c6aff948b/23UMGIM14483.rgb.jpg/3000x3000bb.jpg",
    description: "Daniel Caesar의 세 번째 정규 앨범.",
    tracks: ["Ocho Rios", "Valentina", "Toronto 2014", "Let Me Go"],
  },
  {
    id: "4",
    title: "Ctrl",
    artist: "SZA",
    year: 2017,
    genre: "R&B",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/20/28/8f/20288f6f-fbf2-fb0f-6732-e7d334e1ff50/886446548432.jpg/3000x3000bb.jpg",
    description: "SZA의 첫 정규 앨범.",
    tracks: ["Supermodel", "Love Galore", "Doves in the Wind", "Drew Barrymore"],
  },
  {
    id: "5",
    title: "ASTROWORLD",
    artist: "Travis Scott",
    year: 2018,
    genre: "힙합",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/30/66/90/306690d4-2a29-402e-e406-6b319ce7731a/886447227169.jpg/3000x3000bb.jpg",
    description: "Travis Scott의 세 번째 정규 앨범.",
    tracks: ["Stargazing", "Carousel", "Sicko Mode", "R.I.P. Screw"],
  },
  {
    id: "6",
    title: "channel ORANGE",
    artist: "Frank Ocean",
    year: 2012,
    genre: "R&B",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/04/f8/63/04f863fc-2852-604f-c910-a97ac069506b/12UMGIM40339.rgb.jpg/3000x3000bb.jpg",
    description: "Frank Ocean의 첫 정규 앨범.",
    tracks: ["Start", "Thinkin Bout You", "Fertilizer", "Sierra Leone"],
  },
  {
    id: "7",
    title: "My Beautiful Dark Twisted Fantasy",
    artist: "Kanye West",
    year: 2010,
    genre: "힙합",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0a/0b/31/0a0b31cc-077c-31bf-e7fe-612191774948/10UMGIM30072.rgb.jpg/3000x3000bb.jpg",
    description: "Kanye West의 다섯 번째 정규 앨범.",
    tracks: ["Dark Fantasy", "Gorgeous", "Power", "All of the Lights"],
  },
  {
    id: "8",
    title: "Whole Lotta Red",
    artist: "Playboi Carti",
    year: 2020,
    genre: "힙합",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ba/1e/05/ba1e058e-5637-e53c-563c-f5b9a1a6c344/20UM1IM18331.rgb.jpg/3000x3000bb.jpg",
    description: "Playboi Carti의 두 번째 정규 앨범.",
    tracks: ["Rockstar Made", "Go2DaMoon", "Stop Breathing", "Beno!"],
  },
];

export function getAlbum(id: string) {
  return albums.find((album) => album.id === id);
}