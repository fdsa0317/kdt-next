"use client"
import { useQuery } from "@tanstack/react-query";
import type { Todo } from "../../_component/TodoQueryContainer";
import Loading from "@/components/common/Loading";
import ErrorComponent from "@/components/common/ErrorComponent";

interface TodoReadProps {
    id: string;
}

const getTodoById = async (id: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    if(!response.ok) {
        throw new Error("Fetching Failed")
    }
    return await response.json()
}

export default function TodoRead({id}: TodoReadProps) {
    const {data, isLoading, refetch, error} = useQuery({
        queryFn: () => getTodoById(id),
        queryKey: ["todo", id]
    })

    if(isLoading) return <Loading />
    if(error) return <ErrorComponent />

    return (
        <>
            <h1>[{id}번 게시글{data?.title}]</h1>
            <p>{data?.completed ? "할일 완료" : "미완료"}</p>
            <p>유저: {data?.userId}</p>
        </>
    );
}