import { use, useEffect, useState } from "react";
import Header from "../layout/Header";
import TodoFilter from "./TodoFilter";
import TodoInput from "./TodoInput";
import type { TodoProps } from "../../types/todo";
import TodoList from "./TodoList";

const TodoContainer = () => {
    const [todos, setTodos] = useState<TodoProps[]>(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const [filter, setFilter] = useState<"all" | "inProgress" | "done">("all");

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    // 할 일 추가
    const addTodo = (text: string) => {
        const newTodo: TodoProps = {
            id: Date.now(),
            title: text,
            status: "inProgress"
        };

        if (text === "") return false;

        setTodos([
            ...todos,
            newTodo
        ])
    }

    // 할 일 삭제
    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    // 할 일 수정
    const handleEdit = (id: number, title: string) => {
        setTodos (
            todos.map((todo) =>
                todo.id === id
                    ? {...todo, title: title}
                    : todo
            )
        )
    }

    // 할 일 상태 변경
    const handleToggle = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? {
                        ...todo,
                        status: todo.status === "inProgress"
                            ? "done"
                            : "inProgress"
                    }
                    : todo
            )
        )
    }

    // 할 일 상태 필터링
    const filteredTodos = todos.filter((todo) => {
        if (filter === "all") {
            return true;
        }

        return todo.status === filter;
    })


    return (
        <div>
            <Header />
            <TodoFilter filter={filter} setFilter={setFilter} />
            <TodoList todos={filteredTodos} handleDelete={handleDelete} handleEdit={handleEdit} handleToggle={handleToggle} />
            <TodoInput onAddTodo={addTodo} />
        </div>
    )
}
export default TodoContainer;