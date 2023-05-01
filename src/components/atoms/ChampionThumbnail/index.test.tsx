import { render } from '@testing-library/react';
import { ChampionThumbnail } from './ChampionThumbnail';

describe('ChampionThumbnail', () => {
  it('정상적으로 렌더링 된다.', () => {
    const { container } = render(<ChampionThumbnail url="test" alt="test" />);

    expect(container).toBeInTheDocument();
  });
});
