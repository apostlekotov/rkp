import React from "react";

import CartItem from "@/components/cart/CartItem";

export default class CartList extends React.PureComponent {
  state = {
    showing: false
  }
  render() {
    const { showing } = this.state;
    return (
        <>
          <button className="btn-cart" onClick={() => this.setState({ showing: !showing })}>
            <span className="badge bg-primary rounded-pill">2</span>
            <i className="fas fa-shopping-basket display-5"></i>
          </button>
          <div className="cart-list-wrapper">
          { showing 
            ? 
            <div>
              <hr className="hr-dashed"></hr>
              {
                this.props.cart.map(item => <CartItem {...item} key={item.id} />)
              }
              <hr className="hr-dashed"></hr>
            </div>
            : null
          }
          </div>
        </>
    )
  }
}