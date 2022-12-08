import LoadingDrip from '@/components/LoadingDrip/loading-drip';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Dashboard = () => {
  // if 判断是否登录
  // true 跳转到dashboard
  // false 跳转到login ，记录redict 参数
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/dashboard');
    }, 300);
    return () => {};
  }, []);
  return (
    <>
      <Head>
        <title>Admin</title>
      </Head>
      <LoadingDrip />
    </>
  );
};

export default Dashboard;
