import { render, screen } from '@testing-library/react';
import RepositoryList from './RepositoryList';

test('renders repository list', () => {
  render(<RepositoryList />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});
