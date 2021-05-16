import './style.sass';

const Button = ({text, onClick, styleClass}) => {
    return <button onClick={onClick} className="button" /* className={styleClass} */>{text}</button>
}

export default Button;