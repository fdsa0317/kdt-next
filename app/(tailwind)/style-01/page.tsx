// 테일윈드 스타일 넣기!
// text컬러 text
export default function page() {
    return (
        <>
            <p className="text-blue-500 active:text-blue-700">테일윈드 컬러 사용</p>
            <p className="text-primary">기본 폰트 컬러 사용</p>
            <p className="text-sub">기본 서브 폰트 컬러 사용</p>
        </>
    );
}