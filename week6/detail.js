const params = new URLSearchParams(window.location.search);

const img = params.get("img") || "";
const title = params.get("title") || "";
const place = params.get("location") || "";
const date = params.get("date") || "";
const photographer = params.get("photographer") || "정보 없음";
const keyword = params.get("keyword") || "";

function formatDate(raw) {
  if (!raw || raw.length < 8) return "정보 없음";
  return `${raw.slice(2, 4)}/${raw.slice(4, 6)}/${raw.slice(6, 8)}`;
}

const cleanKeyword = keyword
  ? keyword.split(",").join(" / ")
  : "정보 없음";

document.getElementById("detail-img").src =
  img.replace("http://", "https://");

document.getElementById("title").innerText =
  title || "제목 없음";

document.getElementById("location").innerText =
  `장소: ${place || "정보 없음"}`;

document.getElementById("date").innerText =
  `날짜: ${formatDate(date)}`;

document.getElementById("photographer").innerText =
  `촬영자: ${photographer}`;

document.getElementById("keyword").innerText =
  `키워드: ${cleanKeyword}`;