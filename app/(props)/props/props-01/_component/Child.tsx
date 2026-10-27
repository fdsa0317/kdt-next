// Props란?
// - 하나의 컴포넌트에서 다른 컴포넌트로 데이터를 전달할 때 사용합니다.
// 부모 컴포넌트에서 자식 컴포넌트에게 값을 전달하고,
// Props의 타입은 컴포넌트 위에 선언하는 것이 관례입니다.
interface childProps {
    name: string;
    phone: string;
}

// 구조분해할당 가능
export default function Child({name, phone}: childProps) {
    // console.log("props", props)

    return (
        <>
            자식 컴포넌트!👶
            <p>{name}</p>
            <p>{phone}</p>
        </>
    );
}