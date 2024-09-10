import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TextArea } from '../components';

describe('Input.TextArea', () => {
  it('should render the textarea element', () => {
    const { container } = render(<TextArea />);

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
