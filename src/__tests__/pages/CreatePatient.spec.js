import {render, screen} from '@testing-library/react';
import CreatePatient from '../../pages/CreatePatient';
import {PatientsContext} from '../../context';
import userEvent from '@testing-library/user-event';

const initialState = {
    patients: [
        {
            id: 1,
            name: 'Steve',
            surname: 'Jobs',
            birthdate: '24-02-1955'
        },
        {
            id: 2,
            name: 'Bill',
            surname: 'Gates',
            birthdate: '28-10-1955'
        }
    ]
}

describe('<CreatePatient />' , () => {
    
    it('success on render all elements in create patient page', () => {
        render(
            <PatientsContext.Provider value={[initialState]}>
                <CreatePatient />
            </PatientsContext.Provider>
        );

        const title = screen.getByText('Create Patient');
        const createButton = screen.getByTestId('create-btn');
        const idEmptyMessage = screen.getByText('id cannot be empty');
        const idErrorMessage = screen.getByText('id cannot be exist');
        const nameEmptyMessage = screen.getByText('name cannot be empty');
        const surnameEmptyMessage = screen.getByText('surname cannot be empty');
        const birthEmptyMessage = screen.getByText('birth date cannot be empty');
        const idInput = screen.getByTestId('id-input');
        const nameInput = screen.getByTestId('name-input');
        const surnameInput = screen.getByTestId('surname-input');
        const birthInput = screen.getByTestId('birth-input');

        expect(title).toBeInTheDocument();
        expect(idEmptyMessage).toBeInTheDocument();
        expect(idErrorMessage).toBeInTheDocument();
        expect(nameEmptyMessage).toBeInTheDocument();
        expect(surnameEmptyMessage).toBeInTheDocument();
        expect(birthEmptyMessage).toBeInTheDocument();
        expect(createButton).toBeInTheDocument();
        expect(idInput).toBeInTheDocument();
        expect(nameInput).toBeInTheDocument();
        expect(surnameInput).toBeInTheDocument();
        expect(birthInput).toBeInTheDocument();

    });
});