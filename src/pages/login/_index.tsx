import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import { useRouter, useSearchParams } from 'next/navigation';
import { IconDrone } from '@tabler/icons';
import { Input, Form } from 'antd';

// import Input from "@/components/Input/input";

const Login: React.FC = () => {
  const [ isLoading, setLoading ] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const searchParams = useSearchParams();
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    handleSubmit(async (data) => {
      setLoading(true);
      const result = await signIn('credentials', {
        username: data?.email,
        password: data?.password,
        redirect: false,
        callbackUrl: searchParams.get('from') || '/dashboard',
      });
      if (result?.ok) {
        router.replace(searchParams.get('from') || '/dashboard');
      } else {
        console.log('somthing error when signIn');
      }
      setLoading(false);
    })(e);
  };

  const registerUser = async () => {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email: 'admin@admin.com', password: '123456' }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
  };

  return (
    <>
      <div className="h-screen flex justify-center">
        <div className="container mx-auto flex">
          <div className="flex flex-col w-6/12 h-full relative">
            <div className="text-2xl font-black italic absolute top-[20px] flex items-center">
              <div className="logo my-2 mx-1">
                <IconDrone strokeWidth={2.5} size={32}></IconDrone>
              </div>
              <div>Next Admin</div>
            </div>
            <div className="text-xl font-semibold my-auto">
              一个开箱即用的中后台管理系统
            </div>
          </div>
          <div className="flex flex-col w-6/12 h-full">
            <div className="w-full px-5 py-8 mx-auto my-auto lg:w-auto">
              <h1 className="text-2xl font-bold">欢迎回来</h1>
              <p className="text-sm text-slate-500">在此处登录你的账号</p>
              <div className="grid gap-6">
                <form onSubmit={onSubmit}>
                  <div className="grid gap-2">
                    <div className="grid gap-2">
                      <label className="sr-only" htmlFor="email">
                        Email
                      </label>
                      <Input />
                      {/* <Input
                        id="email"
                        isError={errors?.email}
                        placeholder="name@example.com"
                        type="email"
                        name="email"
                        disabled={isLoading}
                        defaultValue="admin@admin.com"
                        {...register("email", { required: "请填写邮箱" })}
                      />
                      {errors?.email && (
                        <p className="px-1 text-xs text-red-600">
                          {errors.email.message}
                        </p>
                      )} */}
                    </div>
                    <div className="grid gap-2">
                      <label className="sr-only" htmlFor="password">
                        Password
                      </label>
                      {/* <Input
                        id="password"
                        isError={errors?.password}
                        placeholder="password"
                        type="password"
                        name="password"
                        disabled={isLoading}
                        defaultValue="123456"
                        {...register("password", { required: "请填写密码" })}
                      />
                      {errors?.password && (
                        <p className="px-1 text-xs text-red-600">
                          {errors.password.message}
                        </p>
                      )} */}
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="inline-flex justify-center items-center cursor-pointer rounded-lg bg-[#24292F] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none"
                    >
                      登录
                    </button>
                  </div>
                </form>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-300"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-slate-600">
                      其他登录方式
                    </span>
                  </div>
                </div>
                {/* <button
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
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;