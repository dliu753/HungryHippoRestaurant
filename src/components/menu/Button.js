const Button = ({text, onClick}) => {
    const btnStyle = {
        backgroundColor: "red",
        color: "white",
        fontSize: "15px",
        paddingTop: "15px",
        paddingBottom: "15px",
        paddingRight: "25px",
        paddingLeft: "25px",
        borderRadius: "10%"
    }
    
    return (
        <button
            style={btnStyle}
            className='btn'
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button