import { useState } from "react";

export interface Todo {
    task: string;
    done: boolean;
}

export interface TodoProps {
    todo: Todo
}

export default function Todo({todo}: TodoProps) {
    const {task} = todo;
    const [done, setDone] = useState(todo.done)

    const handleDoneLine = (e: React.ChangeEvent<HTMLInputElement>) => {
            setDone(e.target.checked)
        }

    return (
        <div>
            <input type="checkbox" checked={done} onChange={handleDoneLine}/>
            <span className={done ? "line-through" : ""}>{task}</span>
        </div>
    );
}