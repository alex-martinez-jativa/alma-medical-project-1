import {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {PatientsContext} from '../../context';
import {createPatientAction} from '../../context/actions';
import Button from '../../components/Button';
import Header from '../../components/Header';
import {CREATE_ICON} from '../../icons';
import {PATIENT_LIST_PATH} from '../../constants';
import './style.sass';


const CreatePatient = () => {
    const [state, patientsDispatch] = useContext(PatientsContext);
    const history = useHistory();

    const handleCreatePatient = () => {
        const patientValues = {
            id,
            name,
            surname,
            birthdate
        }
        patientsDispatch(createPatientAction(patientValues))
        history.push(PATIENT_LIST_PATH);
    };

    const [id, setId] = useState();
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [birthdate, setBirthdate] = useState();

    const handleEmptyValue = (value) => value ? true : false;

    const handleDisableButton = () => id && name && surname && birthdate;

    const handleSetId = (e) => {
        const matchIdValue = state.patients.filter((patient) => patient.id === e.target.value.trim());
        if(matchIdValue.length < 1) {
            setId(e.target.value.trim());
        }
    }

    return (
        <main className="create">
            <Header title="Create Patient" icon={CREATE_ICON} />
            <section className="form">
                <input onChange={(e) => handleSetId(e)} className="form__input" type="text" name="id" placeholder="id..." data-testid="id-input"/>
                <input onChange={(e) => setName(e.target.value.trim())} className="form__input" type="text" name="name" placeholder="name..." data-testid="name-input"/>
                <input onChange={(e) => setSurname(e.target.value.trim())} className="form__input" type="text" name="surname" placeholder="surname..." data-testid="surname-input" />
                <input onChange={(e) => setBirthdate(e.target.value.trim())} className="form__input" type="date" name="birthday" data-testid="birth-input"/>
            </section>
            
            <Button 
                text="Create" 
                onClick={handleCreatePatient} 
                disable={!handleDisableButton()}
            />
            <div className="requirements">
                <ul className="requirements__list">
                    <li className={handleEmptyValue(id) ? "requirements__list--filled" : undefined}>id cannot be empty</li>
                    <li className={handleEmptyValue(id) ? "requirements__list--filled" : undefined}>id cannot be exist</li>
                    <li className={handleEmptyValue(name) ? "requirements__list--filled" : undefined}>name cannot be empty</li>
                    <li className={handleEmptyValue(surname) ? "requirements__list--filled" : undefined}>surname cannot be empty</li>
                    <li className={handleEmptyValue(birthdate) ? "requirements__list--filled" : undefined}>birth date cannot be empty</li>
                </ul>
            </div>
        </main>
    );

    
}

export default CreatePatient;