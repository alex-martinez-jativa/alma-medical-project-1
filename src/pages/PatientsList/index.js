import React, {useContext, useEffect} from 'react';
import {PatientsContext} from '../../context';
import {getPatinetsAction, removePatientAction} from '../../context/actions';
import PatientItem from '../../components/PatientItem';
import './style.sass';


const PatientList = () => {
    const [state, patientsDispatch] = useContext(PatientsContext);

    useEffect(() => {
        patientsDispatch(getPatinetsAction())
    },[patientsDispatch])

    const handleRemovePatient = (patientId) => {
        patientsDispatch(removePatientAction(patientId))
    }

    return (
        <div className="patients">
            <h1 className="patients__title">Patients List</h1>
            <div className="patients__box">
                {state.patients.map((item) => {
                    return <PatientItem key={item.id} item={item} removePatient={handleRemovePatient}/>
                })}
            </div>
            <div className="create">
                <button className="create__button">Create new patient</button>
            </div>
        </div>
    );
}

export default PatientList;