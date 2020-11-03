import React, {useContext, useEffect} from 'react'
import { ProductContext } from '@/components/Store'

export const Cart = () => {
    const { cart, increase, decrease, removeProduct, total, getTotal } = useContext(ProductContext);
    const [showing, setShowing] = React.useState("false");

    useEffect(() => {
        getTotal();
    });

    return (
        <>
        <button className="btn-cart" onClick={() => setShowing(!showing)}>
            <span className="badge bg-primary rounded-pill">{ cart.length }</span>
            <i className="fas fa-shopping-basket display-5"/>
        </button>
    <div className="cart-list-wrapper">
        { !showing
            ?
            <div>
                <hr className="hr-dashed"/>
                {
                    (cart.length === 0)
                        ?
                        <div>
                            <h2 >У кошику пусто :(</h2>
                            <hr className="hr-dashed"/>
                        </div>

                        :
                        <div>
                            {
                            cart.map(item =>(
                                <div key={ item.id } className="cart-product-wrapper">
                                    <table>
                                        <tr>
                                            <td><img src="https://ikrahouse.com.ua/images/45/ikra-foreli-tm-paramush-100g-st.b.-70338125993754_small10.jpg"/></td>
                                            <td><h3>{ item.title }</h3>{ item.weight }г</td>
                                            <td>{ item.price } грн</td>
                                            <td>
                                                <button className="btn-count" onClick={ () => decrease(item.id) }> - </button>
                                                <span>{ item.count }</span>
                                                <button className="btn-count" onClick={ () => increase(item.id) }> + </button>
                                            </td>
                                            <td>
                                                <button className="btn btn-danger btn-sm btn-remove " onClick={ () => removeProduct(item.id) }>
                                                    <i className="fa fa-trash"/>
                                                </button>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            ))
                        }
                        <hr className="hr-dashed"/>
                        <div className="btn-order-wrapper">
                            <button className="btn btn-lg btn-primary">Замовити</button>
                        </div>
                        <div className="cart-total-price">
                            <h3>До сплати: <b>{ total } грн</b></h3>
                        </div>
                        </div>
                }
            </div>
            : null
        }
    </div>
    </>
    )
}