import { render } from '@testing-library/react';
import { Tag } from '../Tag';

describe('Tag', () => {
  it('should correctly render span element with content', () => {
    const children = 'ONLINE';
    const { container } = render(<Tag color="green">{children}</Tag>);

    expect(container.querySelector('span')?.textContent).toBe(children);
    expect(container.firstChild).toMatchSnapshot();
  });
});
