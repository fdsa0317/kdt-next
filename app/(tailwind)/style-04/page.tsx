import { cn } from "cn";
import { STYLES } from "./style-04.style";
// cn함수 권장
// 변수 + 변수, 변수 + 클래스를 추가하고 싶을 때
export default function page() {
    return (
        <>
            {/* <p className={`animate-wiggle ${STYLES.a}`}>사용자 정의 애니메이션(비권장)</p> */}
            <p className={cn("animate-wiggle", STYLES.a)}>사용자 정의 애니메이션</p>
        </>
    );
}