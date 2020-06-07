import React from 'react';

import { connect } from 'react-redux';
import store from '../../redux/store';

import MinusIcon from '../product/icons/minus.svg';
import PlusIcon from '../product/icons/plus.svg';
import { increment, decrement } from '../../redux/actions';

import styles from './cart.module.css';

const Cart = ({ products, increment, decrement }) => (
  <div className={styles.cart}>
    {/* {products.map(item) => (
            <div key={item.id}>
                <div>item.name</div>
                <div>item.count</div>
                <div>
                    <button onClick={() => decrement(item.id)}><img src={MinusIcon} alt="minus" /></button>
                </div>
                <div><button onClick={() => increment(item.id)}><img src={PlusIcon} alt="plus" /></button></div>
                <div><button onClick={() => remove(item.id)}>Remove</button></div>
            </div>
        )} */}
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  products: store.getState().order,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
