import Link from "next/link";
import { Todo } from "./TodoQueryContainer";

interface  TodoQueryProps {
    todo: Todo;
}

export default function TodoQuery({todo}: TodoQueryProps) {
    const {id, title, completed, userId} = todo
    return (
        <Link href={`react-query-01/${id}`}>{title}</Link>
    );
}