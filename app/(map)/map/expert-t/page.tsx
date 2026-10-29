"use client"

import { useState } from "react";
import TodoContainer from "./_component/TodoContainer";

export default function page() {

    // 할 일 목록 상태 관리
    // 해당 목록을 화면에 리스트로 출력하고 할 일 앞에 체크박스를 클릭하면
    // done true라면 checkbox가 체크된다.
    // done이 true또는 false로 변경된다.
    // done이 true라면 line-through 스타일을 적용하기
    const [todos, setTodos] = useState([
        {
            task: "Next.ts 공부하기!",
            done: false
        },
        {
            task: "저녁 먹기",
            done: false
        },
        {
            task: "코딩 공부하기",
            done: true
        }
    ])

    const toggleDone = (index: number) => {
        setTodos(
            todos.map(
                (todo, i) => i === index ? {...todo, done: !todo.done} : todo
            )
        )
    }

    return (
        <>
            <TodoContainer todos={todos} toggleDone={toggleDone} />
        </>
    );
}