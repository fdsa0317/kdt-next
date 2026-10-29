import { Suspense } from "react";

export default function Loading() {
    return (
        <Suspense fallback={<>로딩중...</>}>
        </Suspense>
    );
}