// 미디어 쿼리
export default function page() {
    return (
        <>
            <div>
                {/*
                    sm보다 작으면 mobile
                    sm: 640px 이상(큰 핸드폰-가로)
                    md: 768px 이상(테블릿, 아이패드)
                    lg: 1024px 이상(작은 데스크탑, 노트북)
                    xl: 1200px 이상(일반 데스크탑)    
                */}
                <div className="
                    w-full
                    h-12.5
                    bg-amber-300
                    sm:bg-red-600
                    md:bg-blue-500
                    lg:bg-green-500
                    xl:bg-purple-500
                "></div>
            </div>
        </>
    );
}