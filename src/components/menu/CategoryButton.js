import PropTypes from 'prop-types'
import './CategoryButton.css'

const CategoryButton = ({icon, name, onHover}) => {
    return (
        <div className = 'CategoryButton'>
            <div 
                className='IconContainer'
            >
                {icon}
            </div>
            <div className='CategoryLabel'>{name}</div>
        </div>
    );
};

CategoryButton.propTypes = {
    name: PropTypes.string.isRequired
}

export default CategoryButton;