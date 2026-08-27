import Header from "../layout/Header";
import TodoFilter from "./TodoFilter";
import TodoInput from "./TodoInput";
import TodoListItem from "./TodoListItem";

const TodoContainer = () => {
    return (
        <div>
            <Header />
            <TodoFilter />
            <TodoListItem />
            <TodoInput />
        </div>
    )
}
export default TodoContainer;