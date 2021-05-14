import {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {PatientsContext} from '../../context';
import Button from '../../components/Button';
import Header from '../../components/Header';
import {CREATE_ICON} from '../../icons';
import './style.sass';


const CreatePatient = () => {
    const [state, patientsDispatch] = useContext(PatientsContext);
    const history = useHistory();

    const handleCreatePatient = () => {
        history.push('/patient-list');
    };

    const [idValue, setIdValue] = useState();
    const [nameValue, setNameValue] = useState();
    const [surnameValue, setSurnameValue] = useState();
    const [birthValue, setBirthValue] = useState();

    const handleEmptyValue = (value) => value ? true : false;

    const handleDisableButton = () => !idValue || !nameValue || !surnameValue || !birthValue;

    return (
        <div className="create">
            <Header title="Create new Patient" icon={CREATE_ICON} />
            <div className="form">
                <input onChange={(e) => setIdValue(e.target.value.trim())} className="form__input" type="text" name="id" placeholder="id..." />
                <input onChange={(e) => setNameValue(e.target.value.trim())} className="form__input" type="text" name="name" placeholder="name..." />
                <input onChange={(e) => setSurnameValue(e.target.value.trim())} className="form__input" type="text" name="surname" placeholder="surname..." />
                <input onChange={(e) => setBirthValue(e.target.value.trim())} className="form__input" type="date" name="birthday" placeholder="dd/mm/aaaa" />
            </div>
            {!handleDisableButton() && <Button 
                text="Create" 
                styleClass="create__button"
                onClick={handleCreatePatient} 
            />}
            <div className="requirements">
                <ul className="requirements__list">
                    <li className={handleEmptyValue(idValue) && "requirements__list--filled"}>id cannot be empty</li>
                    <li className={handleEmptyValue(nameValue) && "requirements__list--filled"}>name cannot be empty</li>
                    <li className={handleEmptyValue(surnameValue) && "requirements__list--filled"}>surname cannot be empty</li>
                    <li className={handleEmptyValue(birthValue) && "requirements__list--filled"}>birth date cannot be empty</li>
                </ul>
            </div>
        </div>
    );
}

export default CreatePatient;