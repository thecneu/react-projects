export const addToCart = (sku, product) => ({
    type: 'ADD_TO_CART',
    payload: {
      sku,
      product
    }
})
