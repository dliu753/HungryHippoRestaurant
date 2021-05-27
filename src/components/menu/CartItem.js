import './CartItem.css'

const CartItem = ({ item, quantity, remove }) => {

    const handleClick = (item) => {
        remove(item)
    }

    return(
        <div className='item-container'>
            <div className='inner-text-container'>
                <div className='item-name'>{item.name}</div>
                <p className='desc'>{item.desc}</p>
            </div>
            <div className='price'>${item.price}</div>
            <div className='qty'>{quantity}</div>
            <button className='remove-btn' onClick={ ()=> handleClick(item) }>Remove Item</button>
        </div>

    );
}

export default CartItem