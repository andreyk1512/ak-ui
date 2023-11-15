import { fireEvent, render } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
  it('should correctly render button element with content', () => {
    const children = 'CLICK';
    const { container } = render(<Button>{children}</Button>);

    expect(container.querySelector('button')?.textContent).toBe(children);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be able to render a disabled button', () => {
    const ON_CLICK = jest.fn();
    const { container } = render(
      <Button disabled onClick={ON_CLICK}>
        CLICK
      </Button>,
    );

    fireEvent.click(container.querySelector('button')!);

    expect(ON_CLICK).not.toHaveBeenCalled();
  });

  it('should be able to pass button an extra classname', () => {
    const extraClass = 'foobar';
    const { container } = render(<Button extraClass={extraClass}>CLICK</Button>);

    expect(container.querySelector('button')?.className).toContain(extraClass);
  });

  it('should be able to set a button loading', () => {
    const { container } = render(<Button loading>CLICK</Button>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
