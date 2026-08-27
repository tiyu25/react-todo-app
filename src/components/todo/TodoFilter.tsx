interface TodoFilterProps {
    filter: "all" | "inProgress" | "done";
    setFilter: (filter: "all" | "inProgress" | "done") => void;
}

const tabs = [
    { value: "all", label: "All" },
    { value: "inProgress", label: "In Progress" },
    { value: "done", label: "Done" },
] as const;

const TodoFilter = ({ filter, setFilter }: TodoFilterProps) => {
    return (
        <div className="flex justify-between my-5 p-2 bg-gray-f9 rounded-md overflow-hidden">
            {tabs.map((tab) => (
                <button
                    key={tab.value}
                    onClick={() => setFilter(tab.value)}
                    className={`py-2 flex-1 cursor-pointer
                        ${ 
                            filter === tab.value
                            ? "bg-white font-semibold text-black-5 rounded-md"
                            : "text-black-6"
                        }
                    `}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    )
}
export default TodoFilter;