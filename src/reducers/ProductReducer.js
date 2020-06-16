
const listedproduct = [
  {
    "productId": 1,
    "category": "Veggies",
    "name": "Tomato",
    "weight": "5kg",
    "price": "Rs 21.00 per Kg",
    "imageURL": "https://icon2.cleanpng.com/20180223/chq/kisspng-cherry-tomato-lecsxf3-cultivar-auglis-fruit-fresh-tomatoes-5a8fd985a3f870.6415068315193767736716.jpg",
    "offer_badge": "Get 20% OFF"
  },
  {
    "productId": 2,
    "category": "Veggies",
    "name": "Onion",
    "weight": "50kg",
    "price": "Rs 30.00 per Kg",
    "imageURL": "https://pngimg.com/uploads/orange/orange_PNG791.png",
    "offer_badge": "Get 20% OFF"
  },
  {
    "productId": 3,
    "category": "Veggies",
    "name": "Brinjal",
    "weight": "25kg",
    "price": "Rs 25.00 per Kg",
    "imageURL": "https://www.pngitem.com/pimgs/m/127-1272370_brinjal-png-image-brinjal-png-transparent-png.png",
    "offer_badge": "Get 20% OFF"
  },
  {
    "productId": 4,
    "category": "Veggies",
    "name": "Carrot",
    "weight": "15kg",
    "price": "Rs 15.00 per Kg",
    "imageURL": "https://pluspng.com/img-png/carrot-png-carrot-cutting-pieces-png-500.png",
    "offer_badge": "Get 20% OFF"
  },
  {
    "productId": 5,
    "category": "Fruits",
    "name": "Apple",
    "weight": "53kg",
    "price": "Rs 65.00 per Kg",
    "imageURL": "https://pngriver.com/wp-content/uploads/2018/04/Transparent-Clipart-Image-Apple_PNG_image-3.png",
    "offer_badge": "Get 30% OFF"
  },
  {
    "productId": 6,
    "category": "Fruits",
    "name": "Orange",
    "weight": "45kg",
    "price": "Rs 45.00 per Kg",
    "imageURL": "https://pngimg.com/uploads/orange/orange_PNG791.png",
    "offer_badge": "Get 10% OFF"
  },
  {
    "productId": 7,
    "category": "Fruits",
    "name": "Banana",
    "weight": "17kg",
    "price": "Rs 25.00 per Kg",
    "imageURL": "https://png.pngtree.com/element_pic/00/16/05/09572ff84273ed6.jpg",
    "offer_badge": "Get 10% OFF"
  },
  {
    "productId": 8,
    "category": "Fruits",
    "name": "Kiwi",
    "weight": "85kg",
    "price": "Rs 55.00 per Kg",
    "imageURL": "https://banner2.cleanpng.com/20180202/vpq/kisspng-kiwifruit-icon-kiwi-5a74c49a256b88.1399010615176019461533.jpg",
    "offer_badge": "Get 10% OFF"
  }
];

const ProductReducer = (state = {listedproduct}, actionType) => {
  console.log("ProductReducer print productList "+state.productList)
  let products = state.listedproduct.slice();
  var nextProductId = state.listedproduct.length;
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
