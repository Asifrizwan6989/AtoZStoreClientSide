
const ProductReducer = (state = { productList:[] }, actionType) => {
  let products = state.productList.slice();
  var nextProductId = state.productList.length;
  console.log('product reducer', products);
  console.log('Actions Product', actionType);

  switch (actionType.type) {
    case 'ADD_PRODUCT':
      nextProductId++;
      var product = {
        productId: nextProductId,
        productName: actionType.productName,
      };
      products.push(product);
      break;
    case 'UPDATE_PRODUCT':
      var idx = getIndexByProductId(products, actionType.productId);
      if (idx != -1) {
        products[idx].weight = actionType.quantity;
      }
      break;
    default:
      return state;
  }
  const newState = {
    productList: products,
  };
  console.log('Current State', newState);
  return newState;
};

const getIndexByProductId = (products, productId) => {
  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    if (product.productId === productId) {
      return i;
    }
  }
  return -1;
};

export default ProductReducer;
