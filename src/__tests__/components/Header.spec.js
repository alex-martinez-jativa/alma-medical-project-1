import {render, screen} from '@testing-library/react';
import {CREATE_ICON} from '../../icons';
import Header from '../../components/Header';

describe('<Header />', () => {
    it('render Header component with title and icon', () => {
        const mockTitle = 'Title';
        const mockIcon = CREATE_ICON;
        render(<Header title={mockTitle} icon={mockIcon}/>)

        const title = screen.getByText(mockTitle);
        const createIcon = screen.getByTestId('create-icon');
        const lisIcon = screen.queryByTestId('list-icon');

        expect(title).toBeInTheDocument();
        expect(createIcon).toBeInTheDocument();
        expect(lisIcon).not.toBeInTheDocument();
    });
});