interface ButtonStyleProps {
    colorVariant?: "red" | "navy";
    className?: string;
    children: React.ReactNode;
}

const ButtonStyle1 = ({ colorVariant, className, children }: ButtonStyleProps) => {
    const colorVariantClass = colorVariant === "red" ? "text-red1" : "text-navy1";

    return (
        <button
            className={`flex items-center text-sm ${colorVariantClass} ${className}`}
        >
            {children}
        </button>
    )
}
export default ButtonStyle1;