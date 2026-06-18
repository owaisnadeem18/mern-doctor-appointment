import Link from "next/link";

const variantStyles = {
  primary: "bg-[#007e85] text-white hover:opacity-90",
  secondary: "bg-[#6EAB36] text-white hover:opacity-90",
  ghost: "bg-transparent text-[#007e85] hover:bg-[#007e8510]",
};

const sizeStyles = {
  sm: "px-3 py-1 text-sm",
  md: "px-5 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const roundedStyles = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  rounded = "md",
  href,
  onClick,
  className = "",
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-tera transition duration-200";

  const classes = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${roundedStyles[rounded]}
    ${className}
  `;

  // If link button
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  // Normal button
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}