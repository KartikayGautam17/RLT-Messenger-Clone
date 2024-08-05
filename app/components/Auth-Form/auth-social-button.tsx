import React from "react";
import { I_SocialIconProps } from "@/app/types";
import { FaGithub } from "react-icons/fa";
import { IconType } from "react-icons";
const AuthSocialButton: React.FC<I_SocialIconProps> = ({
  Icon,
  text,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex justify-center gap-2 items-center mt-2 hover:bg-rose-400/50 rounded-lg duration-500 transition-colors p-2"
    >
      <span>{text}</span>
      <Icon />
    </button>
  );
};

export default AuthSocialButton;
