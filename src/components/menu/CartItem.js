
const CartItem = ({ item, quantity, remove }) => {

    const handleClick = (item) => {
        // console.log("I'm from CartItem")
        remove(item)
    }

    return(
        <div className='item-container'>
            <h1>{item.name}</h1>
            <p>{item.desc}</p>
            <p>$ {item.price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={ ()=> handleClick(item) }>remove</button>
        </div>

    );
}

export default CartItem