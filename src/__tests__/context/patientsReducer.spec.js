import {patientsReducer} from '../../context';
import {GET_PATIENTS, ADD_PATIENT, REMOVE_PATIENT} from '../../context/actionTypes';

describe('patientsReducer', () => {
    const initialState = {
        patients: [
            {
                id: '1',
                name: 'Steve-Test',
                surname: 'Jobs-Test',
                birthdate: '24-02-1955'
            },
            {
                id: '2',
                name: 'Bill-Test',
                surname: 'Gates-Test',
                birthdate: '28-10-1955'
            }
        ]
    }
    it('return list of patients', () => {
        const state = patientsReducer(initialState, {type: GET_PATIENTS });

        expect(state.patients).toHaveLength(2);
        expect(state.patients).not.toHaveLength(5);
        expect(state.patients[0].name).toEqual(initialState.patients[0].name);
        expect(state.patients[0].surname).toEqual(initialState.patients[0].surname);
        expect(state.patients[1].name).toEqual(initialState.patients[1].name);
        expect(state.patients[1].surname).toEqual(initialState.patients[1].surname);
    })

    it('add patient to state', () => {
        const newPatient = {
            id: 5,
            name: 'newName',
            surname: 'newSurname',
            birthdate: '08-03-1988'
        }
        const state = patientsReducer(initialState, {type: ADD_PATIENT, payload: newPatient});
        
        expect(state.patients).toHaveLength(3);
        expect(state.patients).not.toHaveLength(2);
    })

    it('remove patient from state', () => {
        const state = patientsReducer(initialState, {type: REMOVE_PATIENT, payload: '1'});

        expect(state.patients).toHaveLength(1);
        expect(state.patients).not.toHaveLength(2);
    })
})