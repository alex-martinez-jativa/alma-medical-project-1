import React, {useContext, useEffect} from 'react';
import {PatientsContext} from '../../context';
import {getPatinetsAction} from '../../context/actions';
import PatientItem from '../../components/PatientItem';
import './style.sass';


const PatientList = () => {
    const [state, patientsDispatch] = useContext(PatientsContext);

    useEffect(() => {
        patientsDispatch(getPatinetsAction())
    },[patientsDispatch])

    return (
        <div className="patients">
            <h1>Patients List</h1>
            {state.patients.map((item) => {
                return <PatientItem item={item}/>
            })}
        </div>
    );
}

export default PatientList;