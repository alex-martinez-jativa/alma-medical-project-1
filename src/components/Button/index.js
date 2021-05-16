import './style.sass';

const Button = ({text, onClick, disable}) => {
    return (
        <button 
            disabled={disable} 
            onClick={onClick} 
            className={disable ? 'button button--disabled' : 'button'} 
            data-testid="create-btn"
            >
            {text}
        </button>)
}

export default Button;