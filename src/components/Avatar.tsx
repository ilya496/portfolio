import { ReactNode } from "react";

import userIcon from "../assets/icons/user.svg";

interface AvatarProps {
  children?: ReactNode;
}

function Avatar({ children }: AvatarProps) {
  return (
    <div className="avatar">
      {children ? children : <img src={userIcon} alt="User avatar" />}
    </div>
  );
}

export default Avatar;
