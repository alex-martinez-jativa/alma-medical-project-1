import {useHistory} from 'react-router-dom';
import Button from '../../components/Button';
import Header from '../../components/Header';
import {CREATE_ICON} from '../../icons';
import './style.sass';

const CreatePatient = () => {
    const history = useHistory();
    const handleCreatePatient = () => {
        history.push('/patient-list');
    };

    return (
        <div className="create">
            <Header title="Create new Patient" icon={CREATE_ICON} />
            <div className="form">
                <input className="form__input" type="text" name="id" placeholder="id..." />
                <input className="form__input" type="text" name="name" placeholder="name..." />
                <input className="form__input" type="text" name="surname" placeholder="surname..." />
                <input className="form__input" type="date" name="birthday" placeholder="dd/mm/aaaa" />
            </div>
            <Button text="Create" styleClass="create__button" onClick={handleCreatePatient} />
            <div className="requirements">
                <ul className="requirements__list">
                    <li className="requirements__list--filled">id cannot be empty</li>
                    <li>name cannot be empty</li>
                    <li>surname cannot be empty</li>
                    <li>date cannot be empty</li>
                </ul>
            </div>
        </div>
    );
}

export default CreatePatient;