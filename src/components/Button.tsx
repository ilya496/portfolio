import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "reverse" | "outline" | "icon";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`btn btn--${variant}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
