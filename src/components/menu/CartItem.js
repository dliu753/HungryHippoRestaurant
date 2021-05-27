
const CartItem = ({ item, quantity, remove }) => {

    const handleClick = (item) => {
        remove(item)
    }

    return(
        <div className='item-container'>
            <div>{item.name}</div>
            <p>{item.desc}</p>
            <p>$ {item.price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={ ()=> handleClick(item) }>remove</button>
        </div>

    );
}

export default CartItem