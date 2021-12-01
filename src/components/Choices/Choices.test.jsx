import { render, screen } from '@testing-library/react';
import Choices from './Choices';

it('should display the choices on the screen', () => {
  const { container } = render(<Choices />);

  const heads = screen.getByLabelText('Heads:');
  const middles = screen.getByLabelText('Middles:');
  const legs = screen.getByLabelText('Legs:');
  const catchphrase = screen.getByLabelText('Catch Phrase:');

  expect(heads).toBeInTheDocument();
  expect(middles).toBeInTheDocument();
  expect(legs).toBeInTheDocument();
  expect(catchphrase).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
