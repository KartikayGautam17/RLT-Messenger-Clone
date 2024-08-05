import Image from "next/image";
import AuthForm from "./components/Auth-Form/auth-form";
export default function Home() {
  return (
    <div className="flex flex-col justify-start py-6 sm:px-6 lg:px-8 bg-gray-100 h-full items-center gap-2">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="logo"
          height={48}
          width={48}
          className="mx-auto rounded-lg h-[48px] w-[48px]"
          src="/messenger-icon.svg"
        />
      </div>
      <div className="text-xl font-light mx-auto">Messenger</div>

      <AuthForm />
    </div>
  );
}
