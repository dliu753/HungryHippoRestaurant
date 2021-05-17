import { useState, useEffect } from 'react'
import { FiPercent} from 'react-icons/fi'
import { GiMeal, GiThreeLeaves, GiFrenchFries, GiIceCreamCone, GiDrinkMe } from 'react-icons/gi'
import CategoryButton from './CategoryButton'
import Items from './Items'
import './Menu.css'

const Menu = ({menuData}) => {
    if(menuData.length === 0) {
        // TODO: ERROR show 404 page
    }

    const Mains = menuData.filter((item)=>{return item.Category === "Mains"})
    const Drinks = menuData.filter((item)=>{return item.Category === "Drinks"})

    // isVisible keeps track which category of items are showing in an Arr of bools
    const [isVisible, setVisible] = useState([true,false])

    useEffect(() => {
        document.title = "Hungry Hippo | Menu"
    })

    // handleClick(index) changes the visibility of a type of menu item. Index determines if a category is already showing.
    const handleClick = (index) => {
        if(isVisible[index] === true) {
            return
        }

        setVisible(isVisible.map(element => !element))
        console.log('click')
    }
    
    return (
        <div>
            <header className='MenuHeader'>
                <CategoryButton
                    onClick={ e=>handleClick(0) }
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
                    onClick={ e => handleClick(1) }
                    name='Drinks'
                    icon= {<GiDrinkMe />}
                />
            </header>
            <div className='menu-wrapper'>
                <div className='menu-container'>
                    {isVisible[0] && <Items items={Mains} />}
                    {isVisible[1] && <Items items={Drinks} />}
                </div>
            </div>
        </div>
    );
};

export default Menu;