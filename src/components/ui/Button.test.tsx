import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('applies primary variant class by default', () => {
    const { container } = render(<Button>Click me</Button>);
    const btn = container.querySelector('button');
    expect(btn?.className).toMatch(/btn-primary/);
  });

  it('applies outline variant class when specified', () => {
    const { container } = render(<Button variant="outline">Click me</Button>);
    const btn = container.querySelector('button');
    expect(btn?.className).toMatch(/btn-outline/);
  });

  it('is disabled when disabled prop is passed', () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeDisabled();
  });

  it('is disabled when isLoading prop is passed', () => {
    render(<Button isLoading>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeDisabled();
  });

  it('renders as an anchor tag when href is provided', () => {
    render(<Button href="/test">Click me</Button>);
    expect(screen.getByRole('link', { name: /click me/i })).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    await user.click(screen.getByRole('button', { name: /click me/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
