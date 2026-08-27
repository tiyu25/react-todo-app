const TodoFilter = () => {
    return (
        <div className="flex justify-between my-5 p-2 bg-gray-f9 rounded-md overflow-hidden">
            <button className="py-2 flex-1 bg-white font-semibold text-black-5 rounded-md">All</button>
            <button className="py-2 flex-1 text-black-6">To Do</button>
            <button className="py-2 flex-1 text-black-6">In Progress</button>
            <button className="py-2 flex-1 text-black-6">Done</button>
        </div>
    )
}
export default TodoFilter;