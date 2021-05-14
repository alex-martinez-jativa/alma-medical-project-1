import {render, screen} from '@testing-library/react';
import EmptyState from '../../components/EmptyState';

describe('<EmptyState />', () => {
    it('render with text', () => {
        const mockText = 'mockText';
        render(<EmptyState text={mockText} />)

        const text = screen.getByText(mockText);

        expect(text).toBeInTheDocument();
        expect(text.textContent).toEqual(mockText);
        
    })
});