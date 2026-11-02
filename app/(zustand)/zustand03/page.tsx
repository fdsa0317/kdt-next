"use client"

import { Suspense } from "react";
import PostContainer from "./_component/PostContainer";

export default function page() {
    return (
        <Suspense>
            <PostContainer />
        </Suspense>
    );
}