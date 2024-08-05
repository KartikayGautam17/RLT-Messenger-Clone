import React from "react";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
import { IconType } from "react-icons";

type T_Variant = "LOGIN" | "REGISTER";

interface I_SocialIconProps {
  Icon: IconType;
  text: string;
  onClick: () => void;
}

interface I_FormInputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}

interface I_FormButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  fullwidth?: boolean;
  secondary?: boolean;
  children: React.ReactNode;
  danger?: boolean;
  disabled?: boolean;
}

export type {
  T_Variant,
  I_FormInputProps,
  I_FormButtonProps,
  I_SocialIconProps,
};
