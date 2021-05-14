import React, {useContext, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {PatientsContext} from '../../context';
import {getPatinetsAction, removePatientAction} from '../../context/actions';
import PatientItem from '../../components/PatientItem';
import Button from '../../components/Button';
import Header from '../../components/Header';
import EmptyState from '../../components/EmptyState';
import {LIST_ICON} from '../../icons';
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
            <Header title="Patient List" icon={LIST_ICON}/>
            <div className="patients__box">
                {state.patients.map((item) => {
                    return <PatientItem key={item.id} item={item} removePatient={handleRemovePatient}/>
                })}
                {!state.patients.length && <EmptyState text="No Patients" />}
            </div>
            <div className="add">
                <Button styleClass="add__button" text="Create new patient" onClick={handleGoToCreatePatient}/>
            </div>
        </div>
    );
}

export default PatientList;