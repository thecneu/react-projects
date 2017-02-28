const cart = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_TO_CART':
      const { product, sku } = action.payload
      product.quanity = sku in state ? state[sku].quanity + 1 : 1
      return {
        ...state,
        [sku]: product
      }

    default:
      return state
  }

}

export default cart

export const getTotal = (cart) =>
  Object.keys(cart).reduce((total, next) => total + cart[next].price * cart[next].quanity, 0)
