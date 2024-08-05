"use client";
import { T_Variant } from "../../types";
import React, { useCallback, useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import FormInput from "./auth-form-inputs";
import AuthButton from "./auth-form-button";
import AuthSocialButton from "./auth-social-button";
import { FaGithub, FaGoogle } from "react-icons/fa";
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
      <div className="bg-white px-8 py-8 rounded-[20px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/*{"((data) => (onSubmit(data))"}*/}
          {_variant === "REGISTER" ? (
            <FormInput
              label="Name"
              id="name"
              register={register}
              errors={errors}
              disabled={_isLoading}
            />
          ) : (
            ""
          )}

          <FormInput
            label="Email"
            id="email"
            register={register}
            errors={errors}
            disabled={_isLoading}
          />
          <FormInput
            label="Password"
            id="password"
            register={register}
            errors={errors}
            disabled={_isLoading}
          />
          <AuthButton fullwidth={true} disabled={_isLoading}>
            {_variant === "REGISTER" ? "Sign Up" : "Login"}
          </AuthButton>
        </form>

        <div className="relative mt-6">
          <div className="absolute inset-0 flex items-center">
            <div className="border-t border-gray-400 w-full" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-400 ">
              Or continue with
            </span>
          </div>
        </div>
        <div className="mt-3">
          <AuthSocialButton
            Icon={FaGithub}
            onClick={() => {
              SocialAction("Github");
            }}
            text="Github"
          />
        </div>
        <div>
          <AuthSocialButton
            Icon={FaGoogle}
            onClick={() => {
              SocialAction("Google");
            }}
            text="Google"
          />
        </div>
        <div className="flex justify-center text-sm font-light gap-1 mt-4">
          <div>
            {_variant === "LOGIN"
              ? "New to Messenger?"
              : "Already have an account?"}
          </div>
          <button onClick={ToggleVariant} className="underline">
            {" "}
            {_variant === "LOGIN" ? "Create an account" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
