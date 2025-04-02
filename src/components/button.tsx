interface ButtonProps {
  className: "primary" | "secondary";
  text: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  className,
  text,
  type: type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      className={
        className === "primary"
          ? "bg-accent text-background py-4 px-8 rounded-lg text-base font-semibold border-none cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-[0.98] shadow-boxShadow hover:shadow-boxShadowHover"
          : "bg-accent-foreground border-2 border-accent text-base text-accent py-4 px-8 rounded-lg font-semibold cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-[0.98] shadow-boxShadow hover:shadow-boxShadowHover"
      }
    >
      {text}
    </button>
  );
}
