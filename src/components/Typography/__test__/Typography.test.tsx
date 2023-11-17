import { render } from '@testing-library/react';
import { Typography } from '../Typography';

describe('Typography', () => {
  it('should correctly render article element with content', () => {
    const children = 'Lorem ipsum dolor sit amet...';
    const { container } = render(<Typography>{children}</Typography>);

    expect(container.querySelector('article')?.textContent).toBe(children);
    expect(container.firstChild).toMatchSnapshot();
  });
});
