
const CartItem = ({ item, quantity, remove }) => {
    const handleClick = () => {
        // remove()
    }

    return(
        <div className='item-container'>
            <h1>{item.name}</h1>
            <p>{item.desc}</p>
            <p>$ {item.price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={ ()=> handleClick() }>remove</button>
        </div>

    );
}

export default CartItem