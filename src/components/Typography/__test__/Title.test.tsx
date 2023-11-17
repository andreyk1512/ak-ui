import { render } from '@testing-library/react';
import { Typography } from '../Typography';

const checkTitleElement = (container: HTMLElement, htmlElementSelector: string, children: string) => {
  expect(container.querySelector(htmlElementSelector)?.textContent).toBe(children);
  expect(container.firstChild).toMatchSnapshot();
};

describe('Typography.Title', () => {
  it('should correctly render h1 element by default with content', () => {
    const children = 'Lorem ipsum dolor sit amet...';
    const { container } = render(<Typography.Title>{children}</Typography.Title>);

    checkTitleElement(container, 'h1', children);
  });

  it('should correctly render h2 element by default with content', () => {
    const children = 'Lorem ipsum dolor sit amet...';
    const { container } = render(<Typography.Title type={2}>{children}</Typography.Title>);

    checkTitleElement(container, 'h2', children);
  });

  it('should correctly render h3 element by default with content', () => {
    const children = 'Lorem ipsum dolor sit amet...';
    const { container } = render(<Typography.Title type={3}>{children}</Typography.Title>);

    checkTitleElement(container, 'h3', children);
  });

  it('should correctly render h4 element by default with content', () => {
    const children = 'Lorem ipsum dolor sit amet...';
    const { container } = render(<Typography.Title type={4}>{children}</Typography.Title>);

    checkTitleElement(container, 'h4', children);
  });

  it('should correctly render h5 element by default with content', () => {
    const children = 'Lorem ipsum dolor sit amet...';
    const { container } = render(<Typography.Title type={5}>{children}</Typography.Title>);

    checkTitleElement(container, 'h5', children);
  });
});
