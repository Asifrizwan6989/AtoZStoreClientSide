import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct, updateProduct } from '../actions/ProductAction';
import './Home.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const products = this.props.products;
    console.log('product list',products);
    const { addProduct, updateProduct } = this.props;
    var list = products.listedproduct.map((product) => {
      return (
        <div className="product_style" key={product.productId}>
          <img src={product.imageURL} alt="image" width="20%" height="20%" />
          <p>
            Quantity : 
            <input
              id="field"
              type="text"
              onChange={(e) =>
                updateProduct(product.productId,e.target.value)
              }
              value={product.weight}
            />
          </p>
        </div>
      );
    });

    return (
      <div>
        <h1 id="headline"> List of Products</h1>
        <div id="imgList">{list}</div>
        <br />
        <button id="addbtn" onClick={(e) => addProduct(e.target.value)}>Add Item</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.productList
  };
};

const mapDispatchToProps = (dispatch) => ({
  addProduct: (productName) => dispatch(addProduct(productName)),
  updateProduct: (productId, updateQuantity) =>
    dispatch(updateProduct(productId, updateQuantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
