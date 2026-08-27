import { useState } from "react";
import AddIcon from "../../assets/images/add_icn.svg"

interface TodoInputProps {
    onAddTodo: (text:string) => void;
}

const TodoInput = ({ onAddTodo }: TodoInputProps) => {
    const [text, setText] = useState("");

    return (
        <div className="absolute left-0 bottom-7 w-full px-7">
            <div className="flex items-center w-full h-14 px-5 gap-5 bg-gray-f5 rounded-lg">
                <img src={AddIcon} alt="" />
                <input
                    type="text"
                    placeholder="Add a new task..."
                    className="w-full"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.nativeEvent.isComposing) {
                            onAddTodo(text);
                            setText("");
                        }
                    }}
                />
            </div>
        </div>
    )
}
export default TodoInput;