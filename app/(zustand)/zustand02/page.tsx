"use client"
import useCountStore from "@/store/useCountStore";

export default function page() {
    const count = useCountStore((state) => state.count)

    return (
        <>
            <h1>다른 페이지: {count}</h1>
        </>
    );
}