import { useState } from 'react'
import './Item.css'

const Item = ({ item, addToCart }) => {
    const [quantity, setQuantity] = useState(1)

    const handleClick = (item,quantity) => {
        addToCart(item,quantity)
    }
    const decrement = () => {
        if (quantity <= 1){
            return
        } else {
            setQuantity(quantity-1)
        }
    }
    const increment = () => {
        if (quantity >= 99) {
            return
        } else {
            setQuantity(quantity+1)
        }
    }
    const handleChangeQuantity = e => {
        if(e.target.value === ''){
            e.target.value = 1
        }
        if(e.target.validity.valid) {
            setQuantity(Number(e.target.value))
        }
    }

    return (
        <div className='card-container'>
            <h1>{item.name}</h1>
            <p>{item.desc}</p>
            <div className='price-wrapper'>$ {item.price}</div>
            <div className='card-footer'>
                <div className='btn-wrapper'><button className='add-btn' onClick={ () => handleClick(item,quantity) }>Add to Cart</button></div>
                <div className='quantity-btn-wrapper'>
                    <button className='dec-btn' onClick={decrement}>-</button>
                    <input
                        className='quantity-input'
                        type='text'
                        pattern="[1-9]|[1-9][0-9]?"
                        value={quantity}
                        onChange={handleChangeQuantity}>
                    </input>
                    <button className='inc-btn' onClick={increment}>+</button> 
                </div>
            </div>
        </div>

    );
};

export default Item