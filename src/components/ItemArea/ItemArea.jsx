import React from 'react';

import Image from 'next/image';

import styles from './ItemArea.module.scss';

const formatter = new Intl.NumberFormat('tr-TR', {
  style: 'currency',
  currency: 'TRY'
});
const ItemArea = ({ item }) => {
  return (
    <div className={styles.itemArea__container}>
      <div className="d-flex justify-content-center">
        <Image
          src={process.env.NEXT_PUBLIC_STORAGE_URL + '/' + item.images[0]}
          width={300}
          height={300}
        />
      </div>
      <p>{item.name}</p>
      <p className={styles.itemArea__price}>{formatter.format(item.price)}</p>
    </div>
  );
};

export default ItemArea;
