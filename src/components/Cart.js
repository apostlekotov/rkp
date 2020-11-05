import React, {useContext, useEffect} from 'react';
import StoreContext from '../context/store/StoreContext';

export const Cart = () => {
    const storeContext = useContext(StoreContext);

    const [showing, setShowing] = React.useState("false");

    return (
        <>
            <button className="btn-cart" onClick={() => setShowing(!showing)}>
                {
                    (storeContext.cart.length > 0)
                    ?
                    <span className="badge bg-primary rounded-pill">
                        {
                            storeContext.cart.reduce((count, currentProduct) => {
                                return count + currentProduct.quantity;
                            }, 0)
                        }
                    </span>
                    : null
                }
                <i className="fas fa-shopping-basket display-5"/>
            </button>
            <div className="cart-list-wrapper">
                { !showing
                    ?
                    <div>
                        <hr className="hr-dashed"/>
                        {
                            (storeContext.cart.length === 0)
                            ?
                            <div>
                                <h2 >У кошику пусто :(</h2>
                                <hr className="hr-dashed"/>
                            </div>
                            :
                            <div>
                                {
                                    storeContext.cart.map(product =>(
                                        <div key={ product.id } className="cart-product-wrapper">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td><img src="https://ikrahouse.com.ua/images/45/ikra-foreli-tm-paramush-100g-st.b.-70338125993754_small10.jpg"/></td>
                                                        <td><h3>{ product.title }</h3>{ product.weight }г</td>
                                                        <td>{ product.price } грн</td>
                                                        <td>
                                                            <button className="btn-count" onClick={ storeContext.decrease.bind(this, product) }> - </button>
                                                            <span>{ product.quantity }</span>
                                                            <button className="btn-count" onClick={ storeContext.increase.bind(this, product) }> + </button>
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-danger btn-sm btn-remove " onClick={ storeContext.removeProductFromCart.bind(this, product) }>
                                                                <i className="fa fa-trash"/>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    ))
                                }
                                <hr className="hr-dashed"/>
                                <div className="btn-order-wrapper">
                                    <button className="btn btn-lg btn-primary">Замовити</button>
                                </div>
                                <div className="cart-total-price">
                                <h3>До сплати:
                                    <b>
                                        {
                                            storeContext.cart.reduce((count, currentProduct) => {
                                                    return count + currentProduct.quantity * currentProduct.price;
                                            }, 0)
                                        }
                                        грн
                                    </b>
                                </h3>
                            </div>
                            </div>
                        }
                    </div>
                    : null
                }
            </div>
        </>
    )
};