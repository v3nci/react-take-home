import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app', () => {
  render(<App />);
  const rootElement = screen.getByTestId('app');
  expect(rootElement).toBeInTheDocument();
});
