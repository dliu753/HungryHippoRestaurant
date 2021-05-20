import { Fragment } from 'react'
import Item from './Item'

const Items = ({ items, addToCart }) => {

    return(
        <Fragment>
            {items.map((item, index) => (
                <Item key={index} item={item} addToCart={addToCart} />
            ))}
        </Fragment>
    )
}

export default Items