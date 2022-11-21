import LoadingDrip from "@/components/LoadingDrip/loading-drip";
import { useEffect, useState } from "react";
import styles from "./login.module.scss";
import { useSession, signIn, signOut } from "next-auth/react";
import { useForm } from "react-hook-form";
import clsx from "clsx";

const Login = () => {
  const [isLoading, setLoading] = useState(false);
  // const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    const result = await signIn("credentials", {
      username: data.email,
      password: data.password,
      redirect: false,
    });
    setLoading(false);
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
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex justify-center items-center cursor-pointer rounded-lg bg-[#24292F] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none"
                >
                  Sign In with Email
                </button>
              </div>
            </form>
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
