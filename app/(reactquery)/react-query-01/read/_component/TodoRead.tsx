"use client"

import ErrorComponent from "@/components/common/ErrorComponent";
import Loading from "@/components/common/Loading";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { todo } from "node:test";

// 데이터 fetching 코드 완성하기
// 투두가 완성상태라면 게시글 제목의 색깔을 green으로 지정하기

const getTodos = async (id: string | null) => {
    if(!id) {
        throw new Error("id is null")
    }
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    if(!response.ok) {
        throw new Error("getTodos fetching failed")
    }
    const datas = await response.json()
    return datas
}

export default function TodoRead() {
    // useSearchParams: 리액트의 쿼리스트링을 가져오는 훅함수
    // .get(key)
    const searchParams = useSearchParams()
    const id = searchParams.get("id")

    const {data: todo, isLoading, error} = useQuery({
        queryFn: () => getTodos(id),
        queryKey: ["todo", id]
    })

    if(isLoading) return <Loading />
    if(error) return <ErrorComponent />

    return (
        <>
            <h1 className={todo?.completed ? "text-green-500" : ""}>{todo?.title}</h1>
        </>
    );
}