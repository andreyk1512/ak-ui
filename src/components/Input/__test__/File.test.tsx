import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { File } from '../components';

describe('Input.File', () => {
  it('should render the file input element', () => {
    const placeholder = 'select';
    const { container } = render(<File placeholder={placeholder} />);

    const input = screen.getByLabelText(placeholder);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'file');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should display name for selected file', () => {
    const file = { name: "TestFileName" } as File;
    const { container } = render(<File value={file} />);

    const input = screen.getByLabelText(file.name);
    expect(input).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should reset value on cross icon click', () => {
    const file = { name: "TestFileName" } as File;
    const onChange = jest.fn();
    render(<File value={file} onChange={onChange} />);

    const crossIcon = screen.getByLabelText('remove-icon');
    fireEvent.click(crossIcon);
    expect(onChange).toHaveBeenCalledWith(null);
  });
});
