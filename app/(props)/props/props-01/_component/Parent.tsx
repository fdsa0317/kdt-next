import Child from "./Child";

export default function Parent() {

    const name: string = "홍길동"
    const phone: string = "010-1234-1234"

    return (
        <>
            부모 태그!😎
            <Child name={name} phone={phone}/>
        </>
    );
}