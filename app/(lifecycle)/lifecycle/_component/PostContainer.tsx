"use client"

import { Suspense, use, useEffect, useState } from "react";
import User from "./User";
import Loading from "@/components/common/Loading";
import Link from "next/link";

export interface Post {
    userId: number;
    id:     number;
    title:  string;
    body:   string;
}

const getDatas = async (): Promise<Post[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const datas: Post[] = await response.json()
    return datas
}   
const postPromise = getDatas()

export default function PostContainer() {
    const posts = use<Post[]>(postPromise)
    const postList = posts.map((post: Post, i) => (
        // 페이지 이동 시 Link 태그(※필수)
        <Link key={i} href={`/lifecycle/side-effect/${post.id}`}>{post.title}</Link>
    ))

    return (
        <Suspense fallback={<Loading />}>
            <ul>{postList}</ul>
        </Suspense>
    );
}