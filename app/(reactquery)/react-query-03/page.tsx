export const instant = false

import { Suspense } from "react";
import UserContainer from "./_component/UserContainer";
import Loading from "@/components/common/Loading";

export default function page() {
    return (
        <Suspense fallback={<Loading />}>
            <UserContainer />
        </Suspense>
    );
}