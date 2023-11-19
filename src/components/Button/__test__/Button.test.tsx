import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
  it('should render the button text', () => {
    const { container } = render(<Button>Click Me</Button>);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should disable the button if the disabled prop is true', () => {
    const onClickHandler = jest.fn();
    render(<Button disabled onClick={onClickHandler}>Click Me</Button>);
    const button = screen.getByRole('button');
    button.click();

    expect(button).toBeDisabled();
    expect(onClickHandler).not.toHaveBeenCalled();
  });

  it('should show the button loader if the loading prop is true', () => {
    render(<Button loading>Click Me</Button>);
    const loader = screen.getByRole('button');

    expect(loader).toBeInTheDocument();
  });

  it('should fire the onClick event when the button is clicked', () => {
    const onClickHandler = jest.fn();
    render(<Button onClick={onClickHandler}>Click Me</Button>);
    const button = screen.getByRole('button');
    button.click();

    expect(onClickHandler).toBeCalled();
  });
});
