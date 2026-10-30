export const instant = false

import { Suspense } from "react";
import TodoRead from "./_component/TodoRead";

export default function page() {
    return (
        <Suspense fallback={<div>페이지 로딩중...</div>}>
            <TodoRead />
        </Suspense>
    );
}