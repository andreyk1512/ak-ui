import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Loader } from '../Loader';

describe('Loader', () => {
  it('should render loader component', () => {
    const { container } = render(<Loader />);
    const loader = screen.getByLabelText('loader');

    expect(loader).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render loader component with label', () => {
    const label = 'Loading...';
    const { container } = render(<Loader label={label} />);
    const loader = screen.getByLabelText('loader');
    const labelComponent = screen.getByText(label);

    expect(loader).toBeInTheDocument();
    expect(labelComponent).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
