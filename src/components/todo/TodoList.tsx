import type { TodoProps } from "../../types/todo";
import TodoListItem from "./TodoListItem";

interface TodoListProps {
    todos: TodoProps[];
    handleDelete: (id: number) => void;
    handleEdit: (id: number, title: string) => void;
    handleToggle: (id: number) => void;
}

const TodoList = ({ todos, handleDelete, handleEdit, handleToggle }: TodoListProps) => {
    return (
        <div className="overflow-y-scroll h-[58vh] scrollbar_hide">
            <div className="flex flex-col gap-2">
                {todos.map((todo) => {
                    return (
                        <TodoListItem
                            key={todo.id}
                            todo={todo}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                            handleToggle={handleToggle}
                        />
                    )
                })}
            </div>
        </div>
    )
}
export default TodoList;