import LoadingDrip from "@/components/LoadingDrip/loading-drip";
import { useEffect, useState } from "react";
import styles from "./login.module.scss";
import { useSession, signIn, signOut } from "next-auth/react";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";

const Login = () => {
  const [isLoading, setLoading] = useState(false);
  // const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const searchParams = useSearchParams();
  const router = useRouter();

  // console.log(searchParams.get("from"));

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    const result = await signIn("credentials", {
      username: data.email,
      password: data.password,
      redirect: false,
      callbackUrl: searchParams.get("from") || "/dashboard",
    });
    router.replace(searchParams.get("from") || "/dashboard");
    // console.log(result);
    setLoading(false);
  };

  const registerUser = async () => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email: "admin@admin.com", password: "123456" }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
  };

  return (
    <>
      <div className="mx-auto container h-screen flex flex-col items-center justify-center">
        <div className="mx-auto flex flex-col justify-center space-y-6">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-sm text-slate-500">
              Enter your email to sign in to your account
            </p>
          </div>
          <div className="grid gap-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    className={clsx(
                      "border rounded-md py-2 px-3 text-sm focus:outline-none",
                      errors?.email
                        ? "border-red-600 placeholder:text-red-600 hover:border-red-600 focus:border-red-600"
                        : "border-slate-300 placeholder:text-slate-400 hover:border-slate-400 focus:border-neutral-300"
                    )}
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    name="email"
                    disabled={isLoading}
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors?.email && (
                    <p className="px-1 text-xs text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="grid gap-1">
                  <label className="sr-only" htmlFor="password">
                    Password
                  </label>
                  <input
                    id="password"
                    className={clsx(
                      "border rounded-md py-2 px-3 text-sm focus:outline-none",
                      errors?.password
                        ? "border-red-600 placeholder:text-red-600 hover:border-red-600 focus:border-red-600"
                        : "border-slate-300 placeholder:text-slate-400 hover:border-slate-400 focus:border-neutral-300"
                    )}
                    placeholder=""
                    type="password"
                    autoCapitalize="none"
                    autoCorrect="off"
                    name="password"
                    disabled={isLoading}
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  {errors?.password && (
                    <p className="px-1 text-xs text-red-600">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex justify-center items-center cursor-pointer rounded-lg bg-[#24292F] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none"
                >
                  Sign In with Email
                </button>
                {/* <button
                  type="button"
                  onClick={registerUser}
                  disabled={isLoading}
                  className="inline-flex justify-center items-center cursor-pointer rounded-lg bg-[#24292F] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none"
                >
                  Sign Up
                </button> */}
              </div>
            </form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-300"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-slate-600">
                  Or continue with
                </span>
              </div>
            </div>
            <button
              type="button"
              className="inline-flex justify-center items-center cursor-pointer rounded-lg bg-[#24292F] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none"
              onClick={() =>
                signIn("github", {
                  redirect: true,
                })
              }
              disabled={isLoading}
            >
              Github
            </button>
          </div>
          <p className="px-8 text-center text-sm text-slate-500">
            Don't have an account? Let's sign Up.
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
