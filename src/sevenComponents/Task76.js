import React, { Component } from 'react';

export default class Task76 extends Component {
  state = {
    products: [
      {
        title: 'aple',
        price: 10,
        quantity: 2,
        checked: true,
      },
      {
        title: 'orange',
        price: 5,
        quantity: 5,
        checked: true,
      },
      {
        title: 'mango',
        price: 30,
        quantity: 1,
        checked: true,
      },
      {
        title: 'kiwi',
        price: 15,
        quantity: 3,
        checked: true,
      },
      {
        title: 'cocos',
        price: 60,
        quantity: 1,
        checked: true,
      },
      {
        title: 'aiwa',
        price: 4,
        quantity: 12,
        checked: true,
      },
    ],
  };

  toggleCheck = index => () => {
    const { products } = this.state;
    const newProducts = [
      ...products.slice(0, index),
      { ...products(index), ...{ checked: !products(index).checked } },
      ...products.slice(index + 1),
    ];

    this.setState({
      products: newProducts,
    });
  };

  deleteProduct = index => () => {
    const { products } = this.state;
    this.setState({
      products: [...products.slice(0, index), ...products.slice(index + 1)],
    });
  };

  addProduct = (title, price, quantity) => {
    this.setState({
      products: [
        ...this.state.products,
        {
          title,
          price,
          quantity,
          checked: true,
        },
      ],
    });
  };

  render() {
    const { products } = this.state;
    let total = 0;
    const list = products.map((product, index) => {
      const { title, price, quantity, checked } = product;
      if (checked) {
        total += price * quantity;
      }
      return (
        <Product
          key={title}
          title={title}
          price={price}
          quantity={quantity}
          checked={checked}
          toggleCheck={this.toggleCheck(index)}
          handleSubmit={this.deleteProduct(index)}
        />
      );
    });
    return (
      <div>
        <table>
          <tr>
            <td />
            <td>Title</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Delete</td>
          </tr>
          {list}
          <tr>
            <td />
            <td>Total</td>
            <td colSpan="3">{total}</td>
          </tr>
        </table>
        <Total price={total} />
        <Form handleSubmit={this.addProduct} />
      </div>
    );
  }
}

class Product extends Component {
  render() {
    const {
      title,
      price,
      quantity,
      checked,
      toggleCheck,
      handleSubmit,
    } = this.props;
    return (
      <tr>
        <td>
          <input type="checkbox" checked={checked} onChange={toggleCheck} />{' '}
        </td>
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

class Form extends Component {
  state = {
    title: '',
    price: '',
    quantity: '',
  };

  handleSubmit = () => {
    const { title, price, quantity } = this.state;

    //проверка на корректность числовых полей
    const number = +price + quantity;
    if (isNaN(number)) {
      alert('Invalid price or quantity!');
      return;
    }

    this.props.handleSubmit(title, +price, +quantity);
    this.setState({
      title: '',
      price: '',
      quantity: '',
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { title, price, quantity } = this.state;
    return (
      <div>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="price"
          value={price}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="quantity"
          value={quantity}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Add</button>
      </div>
    );
  }
}

const Total = props => {
  return <h3>Total amount: {props.price}</h3>;
};
