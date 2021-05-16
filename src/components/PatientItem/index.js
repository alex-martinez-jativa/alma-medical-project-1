import './style.sass';

const PatientItem = ({item, removePatient}) => {
    return (
            <ul className="list">
                <li className="list__value">
                    <div className="list__value--title">
                        <b>Id:</b>
                    </div> 
                    <div>
                        {item.id}
                    </div>
                </li>
                <li className="list__value">
                    <div className="list__value--title">
                        <b>Name:</b>
                    </div> 
                    <div>
                        {item.name}
                    </div>
                </li>
                <li className="list__value">
                    <div className="list__value--title">
                        <b>Surname:</b>
                    </div> 
                    <div>
                        {item.surname}
                    </div>
                </li>
                <li className="list__value">
                    <div className="list__value--title">
                        <b>Birthdate:</b>
                    </div> 
                    <div className="list__value--date">
                        {item.birthdate}
                    </div>
                </li>
                
                <li data-testid="remove-btn" className="list__value list__delete" onClick={() => removePatient(item.id)}>
                    <i className="far fa-trash-alt item__icon"></i>
                </li>
            </ul>
    );
}

export default PatientItem;