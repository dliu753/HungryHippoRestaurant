import Button from './Button'
import './Item.css'

const Item = ({ item, addToCart }) => {
    const handleClick = (item,quantity) => {
        addToCart(item,quantity)
        // console.log(item)
    }

    // useEffect(() => {
    //     console.log('Hello from Item')
    // })

    return (
        <div className='card-container'>
            <h1>{item.name}</h1>
            <p>{item.desc}</p>
            <div className='price-wrapper'>$ {item.price}</div>
            <div className="btn-wrapper"><Button text="ADD" onClick={ () => handleClick(item,1) }></Button></div>
        </div>

    );
};

export default Item