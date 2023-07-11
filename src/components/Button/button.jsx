import './button.css';

function Button({onClick}) {
    return (  
        <div className="button">
            <button type='button'  onClick={onClick}>
                Add To Cart
            </button>
        </div>
    );
}

export default Button;