import {render, screen, cleanup} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PatientItem from '../../components/PatientItem';

describe('<PatientItem />', () => {
    afterEach(() => cleanup())
    const mockPatient = {
        id: 1,
        name: 'Steve',
        surname: 'Jobs',
        birthdate: '24-02-1955'
    }

    it('render all information correctly and remove function is called', () => {
        const handleRemovePatient = jest.fn();
        render(<PatientItem item={mockPatient} removePatient={handleRemovePatient}/>);

        const id = screen.getByText(mockPatient.id);
        const name = screen.getByText(mockPatient.name);
        const surname = screen.getByText(mockPatient.surname);
        const birthdate = screen.getByText(mockPatient.birthdate);
        const removeButton = screen.getByTestId('remove-btn');

        expect(id).toBeInTheDocument();
        expect(name).toBeInTheDocument();
        expect(surname).toBeInTheDocument();
        expect(birthdate).toBeInTheDocument();
        expect(removeButton).toBeInTheDocument();

        userEvent.click(removeButton);

        expect(handleRemovePatient).toHaveBeenCalled();
    });
});