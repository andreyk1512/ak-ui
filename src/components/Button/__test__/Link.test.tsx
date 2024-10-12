import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Link } from '../components';

describe('Button.Link', () => {
  const name = 'Link';
  const href = 'https://link.to/';

  it('should render the link', () => {
    const { container } = render(<Link href={href}>{name}</Link>);
    const link = screen.getByRole('link', { name });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', href);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('shouldn\'t be able to click on disabled link', () => {
    render(<Link href={href}>{name}</Link>);
    const link = screen.getByRole('link', { name });

    expect(link).toHaveAttribute('href', undefined);
  });

  it('should be able to click', () => {
    const onClick = jest.fn();
    render(<Link onClick={onClick} href={href}>{name}</Link>);
    const link = screen.getByRole('link', { name });
    fireEvent.click(link);

    expect(onClick).toHaveBeenCalled();
  });

  it('should show the link loader if the loading prop is true', () => {
    render(<Link loading href={href}>{name}</Link>);
    const loader = screen.getByRole('loader');

    expect(loader).toBeInTheDocument();
  });
});
