import Image from "next/image";
import AuthForm from "./components/Auth-Form/auth-form";
export default function Home() {
  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100 min-h-full items-center gap-5">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="logo"
          height={48}
          width={48}
          className="mx-auto w-auto rounded-lg"
          src="/messenger-icon.png"
        />
      </div>
      <div className="text-xl font-bold mx-auto">Sign in to your account</div>
      <AuthForm />
    </div>
  );
}
