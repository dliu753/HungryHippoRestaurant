import Button from './Button'
import './Item.css'

const Item = ({ item }) => {
    return (
        <div className='card-container'>
            <h1>{item.name}</h1>
            <p>{item.desc}</p>
            <div className='price-wrapper'>$ {item.price}</div>
            <div className="btn-wrapper"><Button text="ADD"></Button></div>
        </div>

    );
};

export default Item