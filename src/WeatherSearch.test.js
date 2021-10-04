import { render, screen } from '@testing-library/react';
import WeatherSearch from './WeatherSearch';

test('renders learn react link', () => {
  render(<WeatherSearch />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
