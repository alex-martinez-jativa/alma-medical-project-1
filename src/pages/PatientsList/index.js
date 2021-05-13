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
            <h1>Patients List</h1>
            {state.patients.map((item) => {
                return <PatientItem item={item} removePatient={handleRemovePatient}/>
            })}
        </div>
    );
}

export default PatientList;