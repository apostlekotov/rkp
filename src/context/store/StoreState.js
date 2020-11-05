import React, { useReducer } from 'react';
import StoreContext from './StoreContext';
import StoreReducer from './StoreReducer';
import {
	ADD_PRODUCT_TO_CART,
	INCREASE,
	DECREASE,
	REMOVE_PRODUCT_FROM_CART,
} from '../ActionTypes';

const StoreState = (props) => {
	const [cartState, dispatch] = useReducer(StoreReducer, { cart: [] });

	const addProductToCart = (product) => {
		dispatch({ type: ADD_PRODUCT_TO_CART, product: product });
	};

	const increase = (product) => {
		dispatch({ type: INCREASE, product: product });
	};

	const decrease = (product) => {
		dispatch({ type: DECREASE, product: product });
	};

	const removeProductFromCart = (product) => {
		dispatch({ type: REMOVE_PRODUCT_FROM_CART, product: product });
	};

	return (
		<StoreContext.Provider
			value={{
				cart: cartState.cart,
				addProductToCart,
				increase,
				decrease,
				removeProductFromCart,
			}}
		>
			{props.children}
		</StoreContext.Provider>
	);
};

export default StoreState;
