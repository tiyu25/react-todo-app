import AddIcon from "../../assets/images/add_icn.svg"

const TodoInput = () => {
    return (
        <div className="absolute left-0 bottom-7 w-full px-7">
            <div className="flex items-center w-full h-14 px-5 gap-5 bg-gray-f5 rounded-lg">
                <img src={AddIcon} alt="" />
                <input
                    type="text"
                    placeholder="Add a new task..."
                    className="w-full"
                />
            </div>
        </div>
    )
}
export default TodoInput;