import { useState, useEffect } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { IoIosArrowBack } from 'react-icons/io'
import { GrClose } from 'react-icons/gr'
import CartItems from './CartItems'
import './Cart.css'

const Cart = ({MenuData, RemoveItem, addOrder}) => {
    const hideSlideSyle = {
        right: "-600px",
        transition: "0.4s"
    }
    const unhideSlideStyle = {
        right: "0",
        transition: "0.4s"
    }
    const hideStyle = {
        display: "none"
    }
    const unhideStyle = {
         // remove old styling
    }
    
    const [counter, setCounter] = useState(0)
    const [total, setTotal] = useState(0)
    const [showCart, setShowCart] = useState(false)
    const [showCheckout, setShowCheckout] = useState(false)
    const [toggleExpandCart, setToggleExpandCart] = useState(hideStyle)
    const [toggleCheckout, setToggleCheckout] = useState(hideStyle)
    const [toggleCart, setToggleCart] = useState(unhideStyle)
    const [cartTitle, setCartTitle] = useState('Your Cart')
    const [orderName, setOrderName] = useState('')
    const [orderTel, setOrderTel] = useState('')
    const [orderEmail, setOrderEmail] = useState('')
    const [nameError, setNameError] = useState(false)
    const [telError, setTelError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [toggleCheckoutBtn, setToggleCheckoutBtn] = useState({})
    const [togglePulse, setTogglePulse] = useState({})
    const [toggleSubmit, setToggleSubmit] = useState({pointerEvents: "none", backgroundColor: "#dcdcdc"})

    useEffect(() => {
        setTogglePulse({})
        let count = 0
        let bill = 0
        MenuData.forEach( (key, value)=> {
            count = count + key.value
            bill = bill + (key.key.price * key.value)
        })
        setCounter(count)
        setTotal(bill)
        if(count >= 1) {
            setToggleCheckoutBtn({})
            setTogglePulse({
                boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
                animation: "pulse 0.4s"
            })
            setTimeout(()=> {
                setTogglePulse({})
            },400)
        } else {
            setToggleCheckoutBtn({pointerEvents: "none", backgroundColor: "#dcdcdc"})
        }
    }, [MenuData])

    const handleCartClick = () => {
        if(showCart) {
            setToggleExpandCart(hideSlideSyle)
            setShowCart(!showCart)
        } else {
            setToggleExpandCart(unhideSlideStyle)
            setShowCart(!showCart)
        }
    }

    const handleCheckoutClick = () => {
        if(!showCheckout) {
            setShowCheckout(!showCheckout)
            setToggleCheckout(unhideStyle)
            setToggleCart(hideStyle)
            setCartTitle('Checkout')
        } else {
            setShowCheckout(!showCheckout)
            setToggleCheckout(hideStyle)
            setToggleCart(unhideStyle)
            setCartTitle('Your Cart')
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let order = { name: orderName, telephone: orderTel, email: orderEmail, order: MenuData}
        addOrder(order)
    }

    const handleFormChange = (event, form) => {
        let error
        let otherError
        if(event.target.value.length >0) {
            error = true
        } else {
            error = false
        }
        switch(form) {
            case 'Name':
                setOrderName(event.target.value)
                setNameError(error)
                otherError = telError && emailError
                break
            case 'Telephone':
                setOrderTel(event.target.value)
                setTelError(error)
                otherError = nameError && emailError
                break
            case 'email':
                setOrderEmail(event.target.value)
                setEmailError(error)
                otherError = telError && nameError
                break
        }
        if(error && otherError) {
            setToggleSubmit({})
        } else {
            setToggleSubmit({pointerEvents: "none", backgroundColor: "#dcdcdc"})
        }
    }

    return (
        <div className='cart-wrapper'>
            <button onClick={handleCartClick} className='icon-container' style={togglePulse}>
                <AiOutlineShoppingCart color='white' />
                <div className='counter'>
                    {counter}
                </div>
            </button>
            <header className='cart-header-wrapper' style={toggleExpandCart}>
                <div className='cart-header'>{cartTitle}</div>
                <button onClick={handleCartClick} className='close-cart'><GrClose /></button>
                <button onClick={handleCheckoutClick} className='back-btn' style={toggleCheckout}><IoIosArrowBack /></button>
            </header>
            <div className='expand-cart' style={toggleExpandCart}>
                <div className='outer-cart-wrapper'>
                    <div className='cart-wrapper' style={toggleCart}>
                        <CartItems items={MenuData} remove={RemoveItem}/>
                        <hr />
                    </div>
                    <div className='cart-footer'>
                        <div className='cart-total'>Your order total is: <span className='right-side'>${total.toFixed(2)}</span></div>
                        <div className='cart-counter'>Number of Items: <span className='right-side'>{counter}</span></div>
                    </div>
                    <div className='cart-wrapper' style={toggleCart}>
                        <hr />
                        <button onClick={handleCheckoutClick} style={toggleCheckoutBtn} className='checkout-btn'>checkout</button>   
                    </div>
                </div>

                {/* hidden checkout form */}
                <div className='checkout-wrapper' style={toggleCheckout}>
                    <form className='form' onSubmit={handleSubmit}>
                        <label>
                            <input
                            className='text-input'
                            type="text"
                            placeholder="Name"
                            value={orderName}
                            onChange={(e) => handleFormChange(e,'Name')}
                            />
                            {!nameError && <div className='error'>name cannot be blank</div> }                     
                        </label>
                        <hr />
                        <label>
                            <input
                            className='text-input'
                            placeholder="Telephone"
                            type="text" value={orderTel}
                            onChange={(e) => handleFormChange(e,'Telephone')}
                            />
                            {!telError && <div className='error'>telephone cannot be blank</div> }                                 
                        </label>
                        <hr />
                        <label>
                            <input
                            className='text-input'
                            placeholder="email"
                            type="text"
                            value={orderEmail}
                            onChange={(e) => handleFormChange(e,'email')}
                            />
                            {!emailError && <div className='error'>email cannot be blank</div> }                                 
                        </label>
                        <hr />
                        <input className='submit-btn' type="submit" style={toggleSubmit}/>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default Cart;