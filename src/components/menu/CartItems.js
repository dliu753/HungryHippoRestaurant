import { Fragment } from 'react'
import CartItem from './CartItem'

const CartItems = ({ items }) => {

    return(
        <Fragment>
            {items.MenuData.map((item, index) => (
                <CartItem key={index} item={item[0]} quantity={item[1]} />
            ))}
        </Fragment>
    )
}

export default CartItems