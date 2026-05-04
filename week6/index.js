//한국관광공사 사진 갤러리 API의 기본 주소
const baseURL="https://apis.data.go.kr/B551011/PhotoGalleryService1";

//API에 데이터를 요청할 떄 필요한 세부 조건(파라미터)들을 모아둔 객체
const option = {
    //인증키
  serviceKey:
    "a2883c7d4ebb2f45b6531df914f5ab14d67bfbe71638dc31ab303e9cadfcb714",
  numofRows: 6,//한 번에 불러올 사진 개수
  MobileApp: "test",//어플리케이션 이름
  MobileOS: "ETC",//OS 구분
  arrange: "A",//정렬 기준(A=제목순 등)
  _type: "json",//응답 데이터 타입
  pageNo: 1,
};

//HTML에서 id="contatiner"인 요소를 찾아 변수에 저장자
//->앞으로 불러오는 사진들이 이 공간에 채워짐
const container = document.getElementById("container");

//사진의 순번을 매기기 위해 사용하는 숫자 변수
let photoIndex=1;

//비동기 함수 ->API 서버에서 데이터들을 가져오는 시간이 걸리는 작업들을 순차적으로 처리
async function getData(){
    try{
        option.pageNo = Math.floor(Math.random() * 50) + 1;

        //baseURL과 option 객체들의 값을 조합하여 최종적으로 데이터를 요청할 주소를 만듦
        const url = `${baseURL}/galleryList1?numOfRows=${option.numofRows}&MobileApp=${option.MobileApp}&MobileOS=${option.MobileOS}&arrange=${option.arrange}&_type=${option._type}&pageNo=${option.pageNo}&serviceKey=${option.serviceKey}`;

        const fetchData=await fetch(url);// 해당 URL로 네트워크 요청을 보내 데이터를 가져옴
        const toJSON=await fetchData.json();
    
        const datas=await toJSON.response.body.items.item;//JSON 구조에서 실제로 우리가 필요한 '사진 정보'


        datas.forEach((data) => {
            const list = document.createElement("div");
            list.className = "list"; //위에서 만든 <div>에 id="list"라는 이름표를 붙이게 됨

            const image=document.createElement("img");
            //자바스크립트가 image라는 변수로 만든 <img> 태그의 주소(src) 값으로 API에서 가져온 진짜 이미지 URL을 연결
            image.src = (data.galWebImageUrl || "").replace("http://", "https://");

            const info=document.createElement("span");
            info.innerText=`
            ${photoIndex++}번째 사진 
            제목: ${data.galTitle}
            장소: ${data.galPhotographyLocation}`;

        const btn = document.createElement("button");
        btn.innerText = "더보기";

        btn.addEventListener("click", () => {
            const query = new URLSearchParams({
            img: data.galWebImageUrl || "",
            title: data.galTitle || "",
            location: data.galPhotographyLocation || "",
            date: data.galCreatedtime || "",
            photographer: data.galPhotographer || "정보 없음",
            keyword: data.galSearchKeyword || "",
            }).toString();

            window.location.href = `detail.html?${query}`;
        });

        list.appendChild(image);
        list.appendChild(info);
        list.appendChild(btn);
        container.appendChild(list);
    });

    }catch(error){
        console.log("데이터 불러오기 실패:",error);
        alert("데이터를 불러오는 데 실패했습니다.");
    }
}

