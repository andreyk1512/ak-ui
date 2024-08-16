import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Checkbox } from '../Checkbox';

describe('Checkbox', () => {
  const onChange = jest.fn();

  it('should render the correct snapshot of the unchecked state', () => {
    const { container } = render(<Checkbox label="My Checkbox" onChange={onChange} />);

    expect(container.firstChild).toMatchSnapshot('unchecked');
  });

  it('should render the correct snapshot of the checked state', () => {
    const { container } = render(<Checkbox label="My Checkbox" onChange={onChange} value={true} />);

    expect(container.firstChild).toMatchSnapshot('checked');
  });

  it('should render the correct snapshot of the disabled state', () => {
    const { container } = render(<Checkbox label="My Checkbox" onChange={onChange} disabled />);

    expect(container.firstChild).toMatchSnapshot('disabled');
  });

  it('should render the checkbox label', () => {
    const labelValue = 'My Checkbox';
    render(<Checkbox label={labelValue} onChange={onChange} />);
    const label = screen.getByText(labelValue);

    expect(label).toBeInTheDocument();
  });

  it('should render the checkbox input', () => {
    render(<Checkbox label="My Checkbox" onChange={onChange} />);
    const input = screen.getByRole('checkbox');

    expect(input).toBeInTheDocument();
  });

  it('should render the checkbox as checked if the value is truthy', () => {
    render(<Checkbox label="My Checkbox" onChange={onChange} value={true} />);
    const input = screen.getByRole('checkbox');

    expect(input).toBeChecked();
  });

  it('should render the checkbox as unchecked if the value is falsy', () => {
    render(<Checkbox label="My Checkbox" onChange={onChange} value={false} />);
    const input = screen.getByRole('checkbox');

    expect(input).not.toBeChecked();
  });

  it('should disable the checkbox if the disabled prop is true', () => {
    render(<Checkbox label="My Checkbox" onChange={onChange} disabled={true} />);
    const input = screen.getByRole('checkbox');

    expect(input).toBeDisabled();
  });

  it('should enable the checkbox if the disabled prop is false', () => {
    render(<Checkbox label="My Checkbox" onChange={onChange} disabled={false} />);
    const input = screen.getByRole('checkbox');

    expect(input).not.toBeDisabled();
  });
});
