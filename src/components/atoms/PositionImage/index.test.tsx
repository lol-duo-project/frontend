import { render } from '@testing-library/react';
import { PositionImage } from './PositionImage';

describe('PositionImage', () => {
  it('정상적으로 렌더링된다.', () => {
    const { container } = render(<PositionImage position="mid" alt="mid image" />);

    expect(container).toBeInTheDocument();
  });
});
