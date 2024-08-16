import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ReactComponent as EyeSVG } from '../../../assets/icons/eye.svg';
import { Input } from '../Input';

describe('Input', () => {
  const onChange = jest.fn();

  it('should render the input element', () => {
    const textValue = 'This is a text component';
    const { container } = render(<Input value={textValue} onChange={onChange} />);

    const text = screen.getByRole('textbox');
    expect(text).toBeInTheDocument();
    expect(text).toHaveAttribute('value', textValue);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the input element with suffix icon', () => {
    const { container } = render(<Input suffixIcon={<EyeSVG title="eye" />} onChange={onChange} />);

    const text = screen.getByRole('textbox');
    const icon = screen.getByTitle('eye');
    expect(text).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
