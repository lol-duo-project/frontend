import { render } from '@testing-library/react';
import { ChampionSelectedWrapper } from './ChampionSelectedWrapper';

describe('ChampionSelectedWrapper', () => {
  it('정상적으로 렌더링이 된다.', () => {
    const { getByText } = render(<ChampionSelectedWrapper />);
    const championName = getByText('Champion');
    expect(championName).toBeInTheDocument();
  });
});
