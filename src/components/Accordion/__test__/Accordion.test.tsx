import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Accordion } from '../Accordion';

describe('Accordion', () => {
  it('should render the correct snapshot of the collapsed state', () => {
    const { container } = render(<Accordion title="My Accordion">Children</Accordion>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the correct snapshot of the expanded state', () => {
    const { container } = render(<Accordion title="My Accordion">Children</Accordion>);
    fireEvent.click(screen.getByText('My Accordion'));

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with expanded state if defaultExpanded prop is true', () => {
    render(<Accordion title="My Accordion" defaultExpanded>Children</Accordion>);
    const body = screen.getByText('Children');

    expect(body).toBeVisible();
  });

  it('should render the title', () => {
    const title = 'My Accordion';
    render(<Accordion title={title}>Children</Accordion>);
    const titleElement = screen.getByText(title);

    expect(titleElement).toBeInTheDocument();
  });

  it('should render the arrow icon', () => {
    render(<Accordion title="My Accordion">Children</Accordion>);
    const icon = screen.getByTitle('expand');

    expect(icon).toBeInTheDocument();
  });

  it('should collapse the body by default', () => {
    render(<Accordion title="My Accordion">Children</Accordion>);
    const body = screen.getByText('Children');

    expect(body).not.toBeVisible();
  });

  it('should expand the body when clicked', () => {
    render(<Accordion title="My Accordion">Children</Accordion>);
    const header = screen.getByText('My Accordion');
    fireEvent.click(header);
    const body = screen.getByText('Children');

    expect(body).toBeVisible();
  });

  it('should collapse the body when clicked again', () => {
    render(<Accordion title="My Accordion">Children</Accordion>);
    const header = screen.getByText('My Accordion');
    fireEvent.click(header);
    fireEvent.click(header);
    const body = screen.getByText('Children');

    expect(body).not.toBeVisible();
  });
});
