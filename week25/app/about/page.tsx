export default function AboutPage(){
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">소개</h1>
            <p>Next.js를 처음 배우면서 만든 맛집 도감입니다.</p>
            <p className="text-gray-600">
                이 페이지는 app/about/page.tsx 파일 하나로 만들어졌어요
            </p>
        </div>
    );
}