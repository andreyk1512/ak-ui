import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Password } from '../components';

describe('Input.Password', () => {
  it('should render the input element with type password', () => {
    const { container } = render(<Password aria-label="password" />);

    const input = screen.getByLabelText('password');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'password');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should change type to text when click on icon', () => {
    const { container } = render(<Password aria-label="password" />);

    const visibilityIcon = screen.getByLabelText('visibility-icon');
    fireEvent.click(visibilityIcon);
    const input = screen.getByLabelText('password');
    expect(input).toHaveAttribute('type', 'text');
    expect(container.firstChild).toMatchSnapshot();
  });
});
