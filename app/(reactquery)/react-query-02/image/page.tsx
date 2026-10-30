import { Suspense } from "react";
import PhotoContainer from "../_component/PhotoContainer";
import Loading from "@/components/common/Loading";

export default function page() {
    return (
        <Suspense fallback={<Loading />}>
            <PhotoContainer />
        </Suspense>
    );
}