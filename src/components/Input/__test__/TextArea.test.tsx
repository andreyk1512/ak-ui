import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Input } from '../Input';

describe('TextArea', () => {
  it('should render the textarea element', () => {
    const { container } = render(<Input.TextArea />);

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
