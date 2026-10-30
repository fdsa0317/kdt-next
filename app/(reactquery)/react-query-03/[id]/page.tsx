import { Suspense } from "react";
import UserRead from "./_component/UserRead";
import Loading from "@/components/common/Loading";

// read도 분리된 함수를 사용하여 코드 제작하기
export const instant = false

interface Params {
    params: Promise<{id: string}>
}

export default async function page({params}: Params) {
    const { id } = await params;

    return (
        <Suspense fallback={<Loading />}>
            <UserRead id={id} />
        </Suspense>
    );
}