import { combineReducers } from 'redux'
import cart from './cart'
import product from './product'

export default combineReducers({
  product,
  cart
})

export const getProduct = (products, cart) => {
  return {
    ...products,
    variants: products.variants.map(variant => {
      if (variant.sku in cart) {
        return {
          ...variant,
          inventory: variant.inventory - cart[variant.sku].quanity
        }
      }
      return variant
    })
  }
}
