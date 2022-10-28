import React from 'react';
import styles from '../CardModal.module.scss';

type DescribeModalProp = {
  title: string;
  describe?: string | number;
};

const ModalList = ({ title, describe }: DescribeModalProp) => {
  return (
    <>
      <li className={styles.modalList}>
        {title}: <span className={styles.modalText}>{describe}</span>
      </li>
    </>
  );
};

export default ModalList;
