import Loading from "@/components/common/Loading";
import PhotoRead from "./_component/PhotoRead";
import { Suspense } from "react";

interface Params {
    params: Promise<{id: string}>
}

export default async function page({params}: Params) {
    const { id } = await params;
    
    return (
        <Suspense fallback={<Loading />}>
            <h1>게시글 상세 정보</h1>
            <PhotoRead id={id} />
        </Suspense>
    );
}
