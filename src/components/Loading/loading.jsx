import styles from './loading.module.scss';
import clsx from 'clsx';

// console.log(styles);
const loadingTextArray = new Array(11).fill();
const Loading = () => {
  // console.log(loadingTextArray);
  return (
    <>
      <div className={clsx(styles['loading-page'])}>
        <div className={clsx(styles['g-container'])}>
          {loadingTextArray.map(() => {
            return (
              <div className={clsx(styles['g-view'])}>
                <div className={clsx(styles['g-text'])}>Loading</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Loading;
