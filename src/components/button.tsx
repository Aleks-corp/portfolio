interface ButtonProps {
  className: "primary" | "secondary";
  text: string;
  type?: "button" | "submit" | "reset";
  onClick: () => void;
}

export default function Button({
  className,
  text,
  type = "button",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "w-full sm:w-auto py-4 px-8 text-base font-semibold cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-[0.98] shadow-boxShadow hover:shadow-boxShadowHover rounded-2xl";

  const variant =
    className === "primary"
      ? "bg-accent text-background border-none"
      : "bg-accent-foreground border-2 border-accent text-accent";

  return (
    <button
      type={type}
      className={`${baseStyles} ${variant}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
