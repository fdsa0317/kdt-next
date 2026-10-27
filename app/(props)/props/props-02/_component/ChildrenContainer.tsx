import ChildrenComponent from "./ChildrenComponent";

export default function ChildrenContainer() {
    const colors = {
        blue: "blue",
        red: "red",
        green: "green"
    }

    return (
        <>
            <ChildrenComponent colors={colors}>
                <p>Hello, World!😎</p>
            </ChildrenComponent>
        </>
    );
}