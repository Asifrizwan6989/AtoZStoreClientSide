import * as actionType from './ActionType';

export const addProduct = (productName) => ({
  type: actionType.ADD_PRODUCT,
  productName: productName
});

export const updateProduct = (productId, updateQuantity) => ({
    type: actionType.UPDATE_PRODUCT,
    productId: productId,
    quantity: updateQuantity,
  });