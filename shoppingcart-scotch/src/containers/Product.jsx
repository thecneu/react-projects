import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getProduct } from '../reducers'

class Product extends React.Component {
  state = { selected: 0 }
  render() {
    const { product } = this.props
    const { name, description, variants, image } = product
    const selected = variants[this.state.selected]

    return(
      <section>
        <img src={image} alt="" />
        <div className="content">
          <h3>{name}</h3>
          <p>{description}</p>
          <p>Total Price: {selected.price}</p>
          <p>Inventory: {selected.inventory}</p>

          <select onChange={(e) => this.setState({selected: e.currentTarget.value})}>
            {variants.map((variant, index) =>
              <option key={variant.sku} value={index}>{variant.type}</option>
            )}
          </select>
          <button disabled={selected.inventory === 0} onClick={() => this.props.addToCart(selected.sku, {
            price: selected.price,
            type: selected.type
          })}>{selected.inventory === 0 ? 'Sold Out' : 'Add to Cart'}</button>
       </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  product: getProduct(state.product, state.cart)
})

export default connect(mapStateToProps, { addToCart })(Product)
