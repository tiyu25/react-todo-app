import { useState } from "react";
import type { TodoProps } from "../../types/todo";
import ButtonStyle1 from "../common/ButtonStyle1";

import EditIcon from "../../assets/images/edit_icn.svg";
import DeleteIcon from "../../assets/images/delete_icn.svg";
import { Check } from "lucide-react";

interface TodoListItemProps {
    todo: TodoProps,
    handleDelete: (id: number) => void;
    handleEdit: (id: number, title: string) => void;
    handleToggle: (id: number) => void;
}

const TodoListItem = ({ todo, handleDelete, handleEdit, handleToggle }: TodoListItemProps) => {
    // 수정 모드인지 확인
    const [editing, setEditing] = useState(false);

    // 수정할 텍스트
    const [editTitle, setEditTitle] = useState(todo.title);

    return (
        <div className="flex justify-between py-5 px-5 border border-gray-f5 rounded-lg">
            <div className="flex gap-2">
                <div className="relative">
                    <input
                        type="checkbox"
                        id={`todo-${todo.id}`}
                        checked={todo.status === "done"}
                        onChange={() => handleToggle(todo.id)}
                        className="peer appearance-none w-5 h-5 border border-gray-cc rounded-md mt-0.5 cursor-pointer checked:bg-navy1 checked:border-0"
                    />
                    <Check
                        size={16}
                        color="white"
                        className="
                            absolute
                            left-0.5
                            top-1
                            pointer-events-none
                            hidden
                            peer-checked:block
                            text-white
                        "
                    />
                </div>
                {editing ? (
                    <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        className="border-b border-black-6"
                    />
                ) : (
                    <label
                        htmlFor={`todo-${todo.id}`}
                        className={`${
                            todo.status === "done" ? "line-through text-gray-9" : "text-black-5"
                        }`}
                    >
                        {todo.title}
                    </label>
                )}
            </div>
            <div>
                {editing ? (
                    <ButtonStyle1
                        className="text-navy1"
                        onClick={() => {
                            handleEdit(todo.id, editTitle);
                            setEditing(false);
                        }}
                    >
                        저장
                    </ButtonStyle1>
                ) : (
                    <div className="flex items-center gap-3">
                        <ButtonStyle1
                            icon={EditIcon}
                            className="text-navy1"
                            onClick={() => {
                                setEditing(true);
                            }}
                        >
                            수정
                        </ButtonStyle1>
                        <ButtonStyle1
                            icon={DeleteIcon}
                            className="text-red1"
                            onClick={() => handleDelete(todo.id)}
                        >
                            삭제
                        </ButtonStyle1>
                    </div>
                )}
                
            </div>
        </div>
    )
}
export default TodoListItem;