import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Typography } from '../Typography';

describe('Typography', () => {
  it('should render the article text', () => {
    const children = 'Lorem ipsum dolor sit amet...';
    const { container } = render(<Typography>{children}</Typography>);
    const article = screen.getByText(children);

    expect(article).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
