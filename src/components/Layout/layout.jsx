import styles from './layout.module.css';
import { Toaster } from 'react-hot-toast';
import clsx from 'clsx';
import Head from 'next/head';

import Header from './header';
import Aside from './asider';
import { useEffect, useRef, useState } from 'react';

const Layout = ({ children }) => {
  const [ fixedNav, setFixedNav ] = useState(false);
  const mainRef = useRef(null);
  useEffect(() => {
    const handleScroll = (event) => {
      if (mainRef.current?.scrollTop && mainRef.current.scrollTop > 0) {
        // 超出高度
        setFixedNav(true);
      } else {
        setFixedNav(false);
      }
    };
    mainRef.current?.addEventListener('scroll', handleScroll);

    return () => mainRef.current?.removeEventListener('scroll', handleScroll);
  }, [ mainRef ]);
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='bg-[#f0f2f5] h-screen flex'>
        <Aside />
        <div
          ref={mainRef}
          className='h-screen flex-1 p-6 overflow-y-auto relative'
        >
          <Header fixedNav={fixedNav} />
          <main>
            {children}
            <Toaster position='top-right' />
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
