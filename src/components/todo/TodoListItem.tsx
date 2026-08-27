import ButtonStyle1 from "../common/ButtonStyle1";

const TodoListItem = () => {
    return (
        <div className="flex justify-between py-5 px-5 border border-gray-f5 rounded-lg">
            <div className="flex gap-2">
                <input
                    type="checkbox"
                    id=""
                    className="appearance-none w-5 h-5 border border-gray-cc rounded-md mt-0.5"
                />
                <label
                    htmlFor=""
                    className="text-black-5"
                >
                    할 일명이 출력됩니다.
                </label>
            </div>
            <div className="flex items-center gap-3">
                <ButtonStyle1
                    colorVariant={"navy"}
                >
                    수정
                </ButtonStyle1>
                <ButtonStyle1
                    colorVariant={"red"}
                >
                    삭제
                </ButtonStyle1>
            </div>
        </div>
    )
}
export default TodoListItem;