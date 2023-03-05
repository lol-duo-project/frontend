// Import the component and the useRef hook
import { SearchBar } from './SearchBar';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

// Test the component
describe('SearchBar component', () => {
  const mockOnChange = jest.fn;

  test('input이 원하는대로 작동한다.', () => {
    const inputRef = React.createRef<HTMLInputElement>();

    render(
      <SearchBar
        width={'10'}
        height={'10'}
        placeholder={'test'}
        fontColor={'White'}
        ref={inputRef}
        onChange={mockOnChange}
      />
    );

    const inputElement = screen.getByTestId('input') as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'test' } });

    expect(inputRef.current).toBeDefined();
    expect(inputElement?.value).toBe('test');
  });
});
