import TodoQueryContainer from "./_component/TodoQueryContainer";

export default function page() {
    return (
        <>
            <h1>투두 목록</h1> {/* SSR */}
            <TodoQueryContainer /> {/* CSR */}
        </>
    );
}