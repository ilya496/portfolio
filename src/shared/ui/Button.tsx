import { ReactNode } from "react";

type ButtonVariant = "outlined" | "filled" | "danger" | "success";
type ElementSize = "small" | "medium" | "large";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ElementSize;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

function Button({
  children,
  variant = "outlined",
  size = "medium",
  onClick,
  disabled = false,
  loading = false,
}: ButtonProps) {
  const classNames = `btn ${variant} ${size}${disabled || loading ? " disabled" : ""}`;

  return (
    <button
      className={classNames}
      onClick={onClick}
      disabled={disabled || loading}
    >
      <span className="btn__content">
        {loading ? <span className="spinner" /> : children}
      </span>
    </button>
  );
}

export default Button;
