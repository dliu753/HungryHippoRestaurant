import { useState, useEffect } from 'react'
import { GiMeal, GiThreeLeaves, GiFrenchFries, GiIceCreamCone, GiDrinkMe } from 'react-icons/gi'
import CategoryButton from './CategoryButton'
import Items from './Items'
import Cart from './Cart'
import './Menu.css'

const Menu = ({menuData, addOrder}) => {
    const Mains = menuData.filter((item)=>{return item.Category === "Mains"})
    const Drinks = menuData.filter((item)=>{return item.Category === "Drinks"})
    // isVisible keeps track which category of items are showing in an Arr of bools
    const [isVisible, setVisible] = useState([true,false])
    const [CartMap, setCartMap] = useState(new Map())
    const [toggleNav, setToggleNav] = useState('70px')
    const [scrollPos, setScrollPos] = useState(0)
    const [headerTitle, setHeaderTitle] = useState('Mains')

    useEffect(() => {
        document.title = "Hungry Hippo | Menu"

        // Hides MenuHeader while scrolling down and reappear on scroll up
        window.onscroll = () => {scrollFunction()};
        function scrollFunction() {
            if (document.documentElement.scrollTop > 70 && document.documentElement.scrollTop > scrollPos) {
                setToggleNav('-90px')
                setScrollPos(document.documentElement.scrollTop)
            } else if (document.documentElement.scrollTop <= scrollPos){
                setScrollPos(document.documentElement.scrollTop)
                setToggleNav('70px')
            }
        } 
    })

    const[CartArr, setCartArr] = useState([])    

    const addToCart = (key,value) => {
        if (CartMap.get(key) === undefined) {
            CartMap.set(key,value)
            setCartMap(new Map(CartMap))
        } else {
            let prevValue = CartMap.get(key)
            setCartMap(new Map(CartMap.set(key, value + prevValue)))
        }
        let cartArray = Array.from(CartMap, ([key, value]) => ({ key, value }))
        setCartArr(cartArray)
    }
    const removeFromCart = (key) => {
        CartMap.delete(key)
        setCartMap(new Map(CartMap))
        let cartArray = Array.from(CartMap, ([key, value]) => ({ key, value }))
        setCartArr(cartArray)
    }

    // handleClick(index) changes the visibility of a type of menu item. Index determines if a category is already showing.
    const handleClick = (index, title) => {
        if(isVisible[index] === true) {
            return
        }
        setVisible(isVisible.map(element => !element))
        setHeaderTitle(title)
    }
    
    return (
        <div>
            <header className='MenuHeader' style={{top:toggleNav}} >
                <CategoryButton
                    onClick={ ()=>handleClick(0,'Mains') }
                    name='Mains'
                    icon= {<GiMeal />}
                />
                <CategoryButton
                    name='Salads'
                    icon= {<GiThreeLeaves />}
                />
                <CategoryButton
                    name='Sides'
                    icon= {<GiFrenchFries />}
                />
                <CategoryButton
                    name='Dessert'
                    icon= {<GiIceCreamCone />}
                />
                <CategoryButton
                    onClick={ () => handleClick(1, 'Drinks') }
                    name='Drinks'
                    icon= {<GiDrinkMe />}
                />
            </header>
            <div className='menu-wrapper'>
                <div className='header-wrapper'>
                    <header className='category-header'>{headerTitle}</header>
                </div>
                <div className='menu-container'>
                    {isVisible[0] && <Items items={Mains}  addToCart={addToCart} />}
                    {isVisible[1] && <Items items={Drinks} addToCart={addToCart} />}
                    <Cart MenuData={CartArr} RemoveItem={removeFromCart} addOrder={addOrder}/>
                </div>
            </div>
        </div>
    );
};

export default Menu;