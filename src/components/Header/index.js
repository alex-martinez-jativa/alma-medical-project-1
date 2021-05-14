import './style.sass';

const Header = ({title, icon}) => {
    return (
        <div className="header">
            <div className="header__icon">
                {icon}
            </div>
            <h1 className="header__title">{title}</h1>
        </div>
    );
}

export default Header;