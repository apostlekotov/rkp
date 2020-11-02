import React from 'react';

import Product from "@/components/Product";
import CartList from "@/components/cart/CartList"

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      cart: []
    };
  }
  handleAddFunc(product) {
    const existingProductIndex = this.state.cart.findIndex(p => p.id === product.id);

    if (existingProductIndex >= 0) {

        const cartProducts = this.state.cart.slice();

        const existingProduct = cartProducts[existingProductIndex];

        const updatedUnitsProduct = {
          ...existingProduct,
          units: existingProduct.units + product.units
        };

        cartProducts[existingProductIndex] = updatedUnitsProduct;

        this.setState({
          cart: cartProducts
        });

    } else {
      this.setState({
        cart: [...this.state.cart, product]
      });
    }
  }

  render() {  
    return (
      <>
        <CartList cart={ this.state.cart } />
        {
          this.props.products.map((product) => (
            <Product
              id={product.id}
              title={product.title}
              price={product.price}
              old_price={product.old_price}
              weight={product.weight}
              img={
              product.photo?.formats.medium.url ||
              'https://kotovjs-portfolio.s3.eu-central-1.amazonaws.com/large_sedam_93d158cc85.jpg'
              }
              addFunc={this.handleAddFunc.bind(this)}
            />
          ))
        }
      </>
    );
  }
}

export default Store;