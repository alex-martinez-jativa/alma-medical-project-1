import {GET_PATIENTS, REMOVE_PATIENT, ADD_PATIENT} from '../actionTypes';

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

export const createPatientAction = ({id, name, surname, birthdate}) => {
    return {
        type: ADD_PATIENT,
        payload: {
            id: id,
            name: name,
            surname: surname,
            birthdate: birthdate
        }
    }
}