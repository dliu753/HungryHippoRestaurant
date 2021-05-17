import PropTypes from 'prop-types'
import './CategoryButton.css'

const CategoryButton = ({icon, name, onClick}) => {
    return (
        <button onClick = {onClick} className = 'CategoryButton'>
            <div className='IconContainer'>
                {icon}
            </div>
            <div className='CategoryLabel'>{name}</div>
        </button>
    );
};

CategoryButton.propTypes = {
    name: PropTypes.string.isRequired
}

export default CategoryButton;