import { describe, expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App';
import { useState } from 'react';

describe('App Test', () => {
  test('renders', () => {
    render(<App />);
    expect(screen.getByText('북마크')).toBeDefined();
  });
});
