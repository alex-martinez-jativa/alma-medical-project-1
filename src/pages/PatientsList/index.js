import React, {useContext, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {PatientsContext} from '../../context';
import {getPatinetsAction, removePatientAction} from '../../context/actions';
import PatientItem from '../../components/PatientItem';
import Button from '../../components/Button';
import './style.sass';


const PatientList = () => {
    const [state, patientsDispatch] = useContext(PatientsContext);
    const history = useHistory();

    useEffect(() => {
        patientsDispatch(getPatinetsAction())
    },[patientsDispatch])

    const handleRemovePatient = (patientId) => {
        patientsDispatch(removePatientAction(patientId))
    }

    const handleGoToCreatePatient = () => {
        history.push('/create-patient');
    }   

    return (
        <div className="patients">
            <h1 className="patients__title">Patient List</h1>
            <div className="patients__box">
                {state.patients.map((item) => {
                    return <PatientItem key={item.id} item={item} removePatient={handleRemovePatient}/>
                })}
            </div>
            <div className="add">
                <Button styleClass="add__button" text="Create new patient" onClick={handleGoToCreatePatient}/>
            </div>
        </div>
    );
}

export default PatientList;