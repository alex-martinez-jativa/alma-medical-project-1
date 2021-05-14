import {createContext, useReducer} from 'react';
import {GET_PATIENTS, ADD_PATIENT, REMOVE_PATIENT} from './actionTypes';

const initialState = {
    patients: [
        {
            id: '1',
            name: 'Steve',
            surname: 'Jobs',
            birthdate: '24-02-1955'
        },
        {
            id: '2',
            name: 'Bill',
            surname: 'Gates',
            birthdate: '28-10-1955'
        }
    ]
}

const patientsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_PATIENTS:
            return state;
        case ADD_PATIENT:
            return {
                ...state,
                patients: state.patients.concat(action.payload)
            }
        case REMOVE_PATIENT:
            return {
                ...state,
                patients: state.patients.filter((patient) => patient.id !== action.payload)
            }
        default:
            return state;
    }
}

export const PatientsContext = createContext();

const PatientsProvider = ({children}) => {
    const [state, patientsDispatch] = useReducer(patientsReducer, initialState);

    return <PatientsContext.Provider value={[state, patientsDispatch]}>
        {children}
    </PatientsContext.Provider>
}

export default PatientsProvider;