import {
	ADD_PRODUCT_TO_CART,
	INCREASE,
	DECREASE,
	REMOVE_PRODUCT_FROM_CART,
} from '../ActionTypes';

const addProductToCart = (product, state) => {
	const updatedCart = [...state.cart];
	const updatedProductCartId = updatedCart.findIndex(
		(item) => item.id === product.id
	);

	if (updatedProductCartId < 0) {
		updatedCart.push({ ...product, quantity: 1 });
	} else {
		const updatedProduct = {
			...updatedCart[updatedProductCartId],
		};
		updatedProduct.quantity++;
		updatedCart[updatedProductCartId] = updatedProduct;
	}

	return { ...state, cart: updatedCart };
};

const increase = (product, state) => {
	const updatedCart = [...state.cart];
	const updatedProductCartId = updatedCart.findIndex(
		(item) => item.id === product.id
	);

	const updatedProduct = {
		...updatedCart[updatedProductCartId],
	};
	updatedProduct.quantity++;
	updatedCart[updatedProductCartId] = updatedProduct;

	return { ...state, cart: updatedCart };
};

const decrease = (product, state) => {
	const updatedCart = [...state.cart];
	const updatedProductCartId = updatedCart.findIndex(
		(item) => item.id === product.id
	);

	const updatedProduct = {
		...updatedCart[updatedProductCartId],
	};

	if (updatedProduct.quantity > 1) {
		updatedProduct.quantity--;
		updatedCart[updatedProductCartId] = updatedProduct;
	}

	return { ...state, cart: updatedCart };
};

const removeProductFromCart = (product, state) => {
	const updatedCart = [...state.cart];
	const updatedProductCartId = updatedCart.findIndex(
		(item) => item.id === product.id
	);

	updatedCart.splice(updatedProductCartId, 1);

	return { ...state, cart: updatedCart };
};

const StoreReducer = (state, action) => {
	switch (action.type) {
		case ADD_PRODUCT_TO_CART:
			return addProductToCart(action.product, state);
		case INCREASE:
			return increase(action.product, state);
		case DECREASE:
			return decrease(action.product, state);
		case REMOVE_PRODUCT_FROM_CART:
			return removeProductFromCart(action.product, state);
		default:
			return state;
	}
};

export default StoreReducer;
