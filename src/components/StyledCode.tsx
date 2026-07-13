import { CSSProperties, ReactNode } from "react";

interface StyledCodeProps {
  children?: ReactNode;
  style?: CSSProperties;
}

function StyledCode({ children, style }: StyledCodeProps) {
  return (
    <code
      className="styled-code"
      style={{
        ...style,
      }}
    >
      {children}
    </code>
  );
}

export default StyledCode;
