import { AlertVariant } from "../types/AlertVariant";

import checkIcon from "../../app/assets/icons/check-solid.svg";
import infoIcon from "../../app/assets/icons/circle-info-solid.svg";
import warningIcon from "../../app/assets/icons/triangle-exclamation-solid.svg";
import errorIcon from "../../app/assets/icons/circle-xmark-regular.svg";

export const getAlertIcon = (variant: AlertVariant) => {
  switch (variant) {
    case "info":
      return <img src={infoIcon} alt="Info icon" />;
    case "warning":
      return <img src={warningIcon} alt="Warning icon" />;
    case "error":
      return <img src={errorIcon} alt="Error icon" />;
    case "success":
      return <img src={checkIcon} alt="Success icon" />;
  }
};
