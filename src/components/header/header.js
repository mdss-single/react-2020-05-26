import React from 'react';

import { connect } from 'react-redux';

import store from '../../redux/store';

import Logo from './logo';
import CartIcon from '../carticon';
import Cart from '../cart';
import styles from './header.module.css';

const mapStateToProps = (state, ownProps) => ({
  amount: Object.values(store.getState().order).reduce((a, b) => a + b, 0),
  products: store.getState().order,
});

const Header = (state) => (
  <header className={styles.header}>
    <Logo />
    <CartIcon summ={state.amount} />
    <Cart products={state.products} />
  </header>
);

export default connect(mapStateToProps)(Header);
