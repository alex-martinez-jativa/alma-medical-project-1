import './style.sass';

const PatientItem = ({item}) => {
    return (
        <div className="item">
                <ul className="item__list">
                    <li className="item__value">
                        <div className="item__value--title">
                            <b>Id:</b>
                        </div> 
                        <div>
                            {item.id}
                        </div>
                    </li>
                    <li className="item__value">
                        <div className="item__value--title">
                            <b>Name:</b>
                        </div> 
                        <div>
                            {item.name}
                        </div>
                    </li>
                    <li className="item__value">
                        <div className="item__value--title">
                            <b>Surname:</b>
                        </div> 
                        <div>
                            {item.surname}
                        </div>
                    </li>
                    <li className="item__value">
                        <div className="item__value--title">
                            <b>Birthdate:</b>
                        </div> 
                        <div>
                            {item.birthdate}
                        </div>
                    </li>
                    
                    <li className="item__value item__delete">
                        <i class="far fa-trash-alt item__icon"></i>
                    </li>
                </ul>
        </div>
    );
}

export default PatientItem;