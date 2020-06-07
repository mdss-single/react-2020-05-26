import React from 'react';

import styles from './carticon.module.css';

const CartIcon = (amount) => (
  <div className={styles.carticon}>Товаров в корзине: {amount.summ}</div>
);

export default CartIcon;
