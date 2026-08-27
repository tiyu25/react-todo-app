interface ButtonStyleProps {
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
    icon?: string;
}

const ButtonStyle1 = ({ className, children, onClick, icon }: ButtonStyleProps) => {

    return (
        <button
            className={`flex gap-1 items-center text-sm cursor-pointer ${className ?? ""}`}
            onClick={onClick}
        >
            <img src={icon} alt="" />
            {children}
        </button>
    )
}
export default ButtonStyle1;