import type { Todo } from "./TodoContainer";

interface todoProps {
    index: number;
    todo: Todo;
    toggleDone: (index: number) => void;
}

// done true라면 checkbox가 체크된다.
// done이 true라면 line-through 스타일을 적용하기
// done이 true또는 false로 변경된다.


export default function Todo({todo, index, toggleDone}: todoProps) {
    const {task, done} = todo

    return (
        <li>
            <input type="checkbox" checked={done} onChange={() => {toggleDone(index)}} />
            <span className={done ? "line-through" : ""}>{task}</span>
        </li>
    );
}