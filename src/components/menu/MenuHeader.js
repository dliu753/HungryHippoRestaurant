import CategoryButton from './CategoryButton'
import './MenuHeader.css'
import { FiPercent} from 'react-icons/fi'
import { GiMeal, GiThreeLeaves, GiFrenchFries, GiIceCreamCone, GiDrinkMe } from 'react-icons/gi'


const MenuHeader = () => {

    return (
        <header className='MenuHeader'>
            <CategoryButton
                name='Deals'
                icon= {<FiPercent />}
            />
            <CategoryButton
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
                name='Drinks'
                icon= {<GiDrinkMe />}
            />
        </header>
    );
};

export default MenuHeader;