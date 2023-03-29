import { render } from '@testing-library/react';
import { RuneImage } from './RuneImage';

describe('RuneImage', () => {
  it('정상적으로 렌더링된다.', () => {
    const { container } = render(<RuneImage runeType="test" alt="rune test image" />);

    expect(container).toBeInTheDocument();
  });
});
