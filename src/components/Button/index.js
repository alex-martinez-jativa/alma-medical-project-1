const Button = ({text, onClick, styleClass}) => {
    return <button onClick={onClick} className={styleClass}>{text}</button>
}

export default Button;