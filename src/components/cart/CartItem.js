import React from "react";

const CartItem = ({ id, title, price, weight, old_price, units, img} ) => {
  return(
    <>
      <div className="cart-product-wrapper">
        <table>
          <tr>
            <td><img src="https://ikrahouse.com.ua/images/45/ikra-foreli-tm-paramush-100g-st.b.-70338125993754_small10.jpg"></img></td>
            <td><h3>{ title }</h3>{ weight }г</td>
            <td>{ price } грн</td>
            <td>
              - 
              {units} 
              +
            </td>
            <td>
              <button class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i class="fa fa-trash"></i></button>
            </td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default CartItem;
