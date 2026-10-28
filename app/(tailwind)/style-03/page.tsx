// hover: 마우스를 올렸을 때
// active: 버튼이 눌렸을 때
// 스타일 분리
// 역할 객체이름을 지정(권장)
import { STYLES } from "./style-03.style"

export default function page() {
    return (
        <>
            <a href="#" className={STYLES.a}>hover시 스타일 변경!😎</a>
            {/* button: 버튼이 눌리면 배경 컬러를 그린, 글자 색을 흰색으로 변경 */}
            <button className={STYLES.button}>스타일 변경!</button>
        </>
    );
}