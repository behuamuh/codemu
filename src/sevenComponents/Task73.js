import React, { Component } from 'react';

export default class Task73 extends Component {
  state = {
    products: [
      {
        title: 'aple',
        price: 10,
        quantity: 2,
      },
      {
        title: 'orange',
        price: 5,
        quantity: 5,
      },
      {
        title: 'mango',
        price: 30,
        quantity: 1,
      },
      {
        title: 'kiwi',
        price: 15,
        quantity: 3,
      },
      {
        title: 'cocos',
        price: 60,
        quantity: 1,
      },
      {
        title: 'aiwa',
        price: 4,
        quantity: 12,
      },
    ],
  };

  deleteProduct = index => () => {
    const { products } = this.state;
    this.setState({
      products: [...products.slice(0, index), ...products.slice(index + 1)],
    });
  };

  render() {
    const { products } = this.state;
    let total = 0;
    const list = products.map((product, index) => {
      const { title, price, quantity } = product;
      total += price * quantity;
      return (
        <Product
          key={title}
          title={title}
          price={price}
          quantity={quantity}
          handleSubmit={this.deleteProduct(index)}
        />
      );
    });
    return (
      <table>
        <tr>
          <td>Title</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Delete</td>
        </tr>
        {list}
        <tr>
          <td>Total</td>
          <td colSpan="3">{total}</td>
        </tr>
      </table>
    );
  }
}

class Product extends Component {
  render() {
    const { title, price, quantity, handleSubmit } = this.props;
    return (
      <tr>
        <td>{title}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>
          <a onClick={handleSubmit}>Delete</a>
        </td>
      </tr>
    );
  }
}
