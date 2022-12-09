import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const FirstPost = () => {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href='/'>← Back to home</Link>
      </h2>
      {/* <Image src="/images/profile.jpg" width={144} height={144} alt="profile" /> */}
    </>
  );
};

export default FirstPost;
