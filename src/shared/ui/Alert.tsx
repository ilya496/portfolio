import { ReactNode } from "react";
import { AlertVariant } from "../types/AlertVariant";
import { getAlertIcon } from "../utils/getAlertIcon";

interface AlertProps {
  variant: AlertVariant;
  children: ReactNode;
}

function Alert({ variant, children }: AlertProps) {
  return (
    <div className={`alert alert-${variant}`} aria-live="assertive">
      <span className="alert__icon">{getAlertIcon(variant)}</span>
      {children}
    </div>
  );
}

export default Alert;
