import {GET_PATIENTS, REMOVE_PATIENT} from '../actionTypes';

export const getPatinetsAction = () => {
    return {
        type: GET_PATIENTS
    }
}

export const removePatientAction = (id) => {
    return {
        type: REMOVE_PATIENT,
        payload: id
    }
}