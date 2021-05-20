
const CartItem = ({ item, quantity }) => {

    return(
        <div className='item-container'>
            <h1>{item.name}</h1>
            <p>{item.desc}</p>
            <div className='price-wrapper'>$ {item.price}</div>
            <p>{quantity}</p>
        </div>

    );
}

export default CartItem