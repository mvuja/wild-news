import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './components/Home/Home'

test('renders learn react link', () => {
  render(<Home />)
  const linkElement = screen.getByTestId('not-empty')
  expect(linkElement).not.toBeEmptyDOMElement()
})