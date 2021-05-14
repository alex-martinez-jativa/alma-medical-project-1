import './style.sass';

const EmptyState = ({text}) => {
    return (
        <div className="empty">
            <h2 className="empty__text">{text}</h2>
        </div>
    );
}

export default EmptyState;