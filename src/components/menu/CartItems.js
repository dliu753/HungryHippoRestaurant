import { Fragment } from 'react'
import CartItem from './CartItem'

const CartItems = ({ items }) => {

    return(
        <Fragment>
            {items.map((item, index) => (
                <CartItem key={index} item={item.key} quantity={item.value} />
            ))}
        </Fragment>
    )
}

export default CartItems