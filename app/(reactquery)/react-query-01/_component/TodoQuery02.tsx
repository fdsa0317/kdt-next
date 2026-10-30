import Link from "next/link";
import { Todo } from "./TodoQueryContainer";

interface  TodoQueryProps {
    todo: Todo;
}

export default function TodoQuery02({todo}: TodoQueryProps) {
    const {id, title, completed, userId} = todo
    return (
        // 쿼리 스트링(Query String)
        <Link href={`react-query-01/read?id=${id}`}>{title}</Link>
    );
}