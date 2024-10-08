import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Title } from '../components';

describe('Typography.Title', () => {
  it('should render the title content as h1 for type 1 by default', () => {
    const children = 'This is a title';
    const { container } = render(<Title type={1}>{children}</Title>);
    const title = screen.getByText(children);

    expect(title.tagName).toBe('H1');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the title content as h2 for type 2', () => {
    const children = 'This is a title';
    const { container } = render(<Title type={2}>{children}</Title>);
    const title = screen.getByText(children);

    expect(title.tagName).toBe('H2');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the title content as h3 for type 3', () => {
    const children = 'This is a title';
    const { container } = render(<Title type={3}>{children}</Title>);
    const title = screen.getByText(children);

    expect(title.tagName).toBe('H3');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the title content as h4 for type 4', () => {
    const children = 'This is a title';
    const { container } = render(<Title type={4}>{children}</Title>);
    const title = screen.getByText(children);

    expect(title.tagName).toBe('H4');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the title content as h5 for type 5', () => {
    const children = 'This is a title';
    const { container } = render(<Title type={5}>{children}</Title>);
    const title = screen.getByText(children);

    expect(title.tagName).toBe('H5');
    expect(container.firstChild).toMatchSnapshot();
  });
});
