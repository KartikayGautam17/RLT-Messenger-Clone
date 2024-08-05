import clsx from "clsx";
import React from "react";
import { I_FormButtonProps as ButtonProps } from "@/app/types";

const AuthButton: React.FC<ButtonProps> = ({
  onClick,
  danger,
  disabled,
  secondary,
  children,
  fullwidth,
}) => {
  return (
    <button
      className={clsx(
        `mx-auto mt-8 p-2 px-4 text-white rounded-lg font-medium outline-none focus:ring-2 w-${
          fullwidth ? "full" : "auto"
        }`,
        disabled && "opacity-50 cursor-default ",
        !disabled && " hover:bg-sky-500 hover:ring-2 hover:ring-sky-400",
        secondary ? "text-gray-900" : "text-white",
        danger && "bg-rose-500 hover:bg-rose-600 focus:bg-rose-600",
        !secondary && !danger && "bg-sky-400"
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default AuthButton;
