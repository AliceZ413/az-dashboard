import Head from 'next/head';
import styles from '@/styles/404.module.scss';

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Admin | 404</title>
      </Head>
      <div className={styles['page-404']}>
        <div className={styles['text-magic']} data-word='404 Not Found'>
          {'404 Not Found'}
          <div className={styles['white']}></div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
