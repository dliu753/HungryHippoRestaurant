
const CartItem = ({ item, quantity }) => {

    return(
        <div className='item-container'>
            <h1>{item.name}</h1>
            <p>{item.desc}</p>
            <p>$ {item.price}</p>
            <p>Quantity: {quantity}</p>
        </div>

    );
}

export default CartItem