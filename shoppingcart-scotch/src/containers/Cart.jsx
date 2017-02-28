import React from 'react'
import { connect } from 'react-redux'
import { getTotal } from '../reducers/cart'

class Cart extends React.Component {
  render() {
    const { cart, total } = this.props
    console.log(total)
    return(
      <aside>
        <h2>The Cart</h2>
        <div className="products">
          {Object.keys(cart).map(sku =>
            <div className="product" key={sku}>
              <h3>{cart[sku].type}</h3>
              <p>{cart[sku].quanity}</p>
              <p>{cart[sku].price * cart[sku].quanity}</p>
            </div>
          )}
          <h3>Total: ${total.toFixed(2)}</h3>
        </div>
      </aside>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  total: getTotal(state.cart)
})

export default connect(mapStateToProps)(Cart)
