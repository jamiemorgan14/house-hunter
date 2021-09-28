import { render, screen } from '@testing-library/react';
import App from './main-page/index';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Providing houses all over the world/i);
  expect(linkElement).toBeInTheDocument();
});
