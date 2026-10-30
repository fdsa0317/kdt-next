// import TodoQueryContainer from "./_component/TodoQueryContainer";
import TodoQueryContainer02 from "./_component/TodoQueryContainer02";

export default function page() {
    return (
        <>
            <h1>투두 목록</h1> {/* SSR */}
            <TodoQueryContainer02 /> {/* CSR */}
        </>
    );
}