// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NftRough title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NftRough/i);
    expect(titleElement).toBeInTheDocument();
});
