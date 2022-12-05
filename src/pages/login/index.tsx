import { IconDrone } from "@tabler/icons";
import React, { useState } from "react";
import { Input, Form, Button } from "antd";
import clsx from "clsx";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

const LoginPage: React.FC = () => {
  const [isLoading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const onFinish = async (data: { email: string; password: string }) => {
    setLoading(true);
    const result = await signIn("credentials", {
      username: data?.email,
      password: data?.password,
      redirect: false,
      callbackUrl: searchParams.get("from") || "/dashboard",
    });
    if (result?.ok) {
      router.replace(searchParams.get("from") || "/dashboard");
    } else {
      console.log("somthing error when signIn");
    }
    setLoading(false);
  };
  return (
    <>
      <div className="h-screen flex justify-center">
        <div className="container mx-auto flex">
          <div className="flex flex-col w-6/12 h-full relative">
            <div className="text-2xl font-black italic absolute top-[20px] flex items-center">
              <div className="logo my-2 mx-2">
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
              <div className="grid gap-6 my-4">
                <Form onFinish={onFinish}>
                  <Form.Item
                    name="email"
                    rules={[{ required: true, message: "请填写邮箱" }]}
                  >
                    <Input
                      className={clsx(
                        "min-w-[160px] xl:min-w-[320px] lg:min-w-[260px] md:min-w-[240px]"
                      )}
                      placeholder="邮箱"
                      size="large"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[{ required: true, message: "请填写密码" }]}
                  >
                    <Input
                      type={"password"}
                      className={clsx(
                        "",
                        "min-w-[160px] xl:min-w-[320px] lg:min-w-[260px] md:min-w-[240px]"
                      )}
                      placeholder="密码"
                      size="large"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" block size="large" loading={isLoading}>
                      登录
                    </Button>
                  </Form.Item>
                </Form>
                {/* <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-300"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-slate-600">
                      其他登录方式
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
