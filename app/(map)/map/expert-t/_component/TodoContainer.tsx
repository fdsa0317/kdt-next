import Todo from "./Todo";

export interface Todo {
    task: string;
    done: boolean;
}

export interface TodoContainerProps {
    todos: Todo[],
    toggleDone: (index: number) => void;
}

export default function TodoContainer(props: TodoContainerProps) {
    const {todos, toggleDone} = props
    const todoList = todos.map((todo: Todo, i: number) => (
        <Todo key={i} index={i} todo={todo} toggleDone={toggleDone} />
    ))

    return (
        <ul>{todoList}</ul>
    );
}