import { Fragment } from 'react'
import CartItem from './CartItem'

const CartItems = ({ items, remove }) => {

    return(
        <Fragment>
            {items.map((item, index) => (
                <CartItem key={index} item={item.key} quantity={item.value} remove={remove} />
            ))}
        </Fragment>
    )
}

export default CartItems