import Item from './Item'

const Items = ({ items }) => {

    return(
        <>
            {items.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </>
    )
}

export default Items