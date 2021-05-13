import {createContext, useReducer} from 'react';
import {GET_PATIENTS, ADD_PATIENT, REMOVE_PATIENT} from './actionTypes';

const initialState = {
    patients: []
}

const patientsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_PATIENTS:
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