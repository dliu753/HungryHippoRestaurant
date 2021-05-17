import { Fragment } from 'react'
import Item from './Item'

const Items = ({ items }) => {

    return(
        <Fragment>
            {items.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </Fragment>
    )
}

export default Items