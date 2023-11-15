import { fireEvent, render } from '@testing-library/react';
import { Checkbox } from '../Checkbox';

describe('Checkbox', () => {
  it('should correctly render checkbox element with content', () => {
    const label = 'CheckBox';
    const { container } = render(<Checkbox label={label} />);

    expect(container.querySelector('label>span')?.textContent).toBe(label);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be able to change checked value', () => {
    const ON_CHANGE = jest.fn();
    const { container, rerender } = render(<Checkbox label="CheckBox" onChange={ON_CHANGE} value={false} />);

    expect(container.querySelector('input')?.checked).toEqual(false);

    rerender(<Checkbox label="CheckBox" onChange={ON_CHANGE} value={true} />);

    expect(container.querySelector('input')?.checked).toEqual(true);
  });

  it('should be able to render a disabled checkbox', () => {
    const ON_CHANGE = jest.fn();
    const { container } = render(<Checkbox label="CheckBox" disabled onChange={ON_CHANGE} />);

    fireEvent.click(container.querySelector('label')!);

    expect(ON_CHANGE).not.toHaveBeenCalled();
  });
});
