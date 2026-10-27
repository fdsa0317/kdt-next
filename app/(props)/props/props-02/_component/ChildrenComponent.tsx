interface ChildrenComponentProps {
    // children: 컴포넌트로 감싸진 하위 태그들
    children: React.ReactNode;
    colors : {
        blue: string;
        red: string; 
        green: string;
    }
}

// 타입을 수정하고, 각 컬러를 p태그로 출력하기
export default function ChildrenComponent({colors, children}: ChildrenComponentProps) {
    const {blue, green, red} = colors
    console.log(children)

    return (
        <>
            {children}
            <p style={{color: blue}}>자식 태그!</p>
            <p>{blue}</p>
            <p>{green}</p>
            <p>{red}</p>
        </>
    );
}