import {useHistory} from 'react-router-dom';
import Button from '../../components/Button';
import './style.sass';

const CreatePatient = () => {
    const history = useHistory();
    const handleCreatePatient = () => {};
    const handleGoToList = () => {
        history.push('/patient-list')
    };
    return (
        <div className="create">
            <h1 className="create__title">Create new Patient</h1>
            <div className="form">
                <input className="form__input" type="text" name="id" placeholder="id..." />
                <input className="form__input" type="text" name="name" placeholder="name..." />
                <input className="form__input" type="text" name="surname" placeholder="surname..." />
                <input className="form__input" type="date" name="birthday" placeholder="dd/mm/aaaa" />
            </div>
            <a href="/#" className="link" onClick={handleGoToList}>Go to List</a>
            <Button text="Create" styleClass="create__button" onClick={handleCreatePatient} />
        </div>
    );
}

export default CreatePatient;