import React from "react";
import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { I_FormInputProps as input_props } from "@/app/types";

const FormInput: React.FC<input_props> = ({
  label,
  id,
  register,
  required,
  disabled,
  errors,
  type,
}) => {
  return (
    <div className="py-2">
      <label
        className="block text-xs font-light leading-6 text-black/80"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          id={id}
          type={id}
          autoComplete={id}
          {...register(id, { required })}
          className={clsx(
            `form-input
            leading-7
            text-md
            border-0 
            py-[2px]
            w-full
            block 
            rounded-md
            text-gray-900
            placeholder:text-gray-400
            ring-1
            ring-gray-300
            focus:ring-2
            focus:ring-gray-500
            `,
            errors[id] && "focus:ring-rose-500",
            disabled && "cursor-default opacity-50"
          )}
          disabled={disabled}
        ></input>
      </div>
    </div>
  );
};

export default FormInput;
