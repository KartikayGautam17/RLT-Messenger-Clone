"use client";
import { T_Variant } from "../../types";
import React, { useCallback, useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import FormInput from "./auth-form-inputs";
const AuthForm = () => {
  const [_variant, Set_variant] = useState<T_Variant>("LOGIN");
  const [_isLoading, Set_isLoading] = useState<boolean>(false);

  const ToggleVariant = useCallback(() => {
    if (_variant === "LOGIN") {
      Set_variant("REGISTER");
    } else {
      Set_variant("LOGIN");
    }
  }, [_variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { name: "", email: "", password: "" },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    Set_isLoading(true);
    if (_variant === "REGISTER") {
      //Axios Sign in
    } else {
      //NextAuth Sign up
    }
  };

  const SocialAction = (action: string) => {
    Set_isLoading(true);

    //NextAuth Social Sign in
  };

  return (
    <div className="mt-8 sm:max-w-md sm:w-full sm:mx-auto">
      <div className="bg-white px-4 py-4 rounded-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/*{"((data) => (onSubmit(data))"}*/}
          <FormInput />
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
