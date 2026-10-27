// tsx의 연산
// 1. tsx문법은 if문이 없다. 대신 삼항연산자를 지원한다: 값 ? (참) : (거짓)
export default function Page(){

    const getName = (name: any) => name || "홍길동"
    const login = true

    // 만약 사용자가 로그인이라면 회원의 이름을 화면에 태그로 출력하고,
    // 만약 로그인이 아니라면 비회원입니다를 화면에 태그로 출력.

    // Fragment는 DOM을 하나로 묶기위한 태그로 화면에 랜더링되지 않는다.
    return (
        <>
            {login ? (
                <>
                    <p>{getName("장보고")}님 환영합니다.</p>
                </>
            ) : (
                <>
                    <p>비회원님 환영합니다.</p>
                </>
            )}
        </>
    )
}