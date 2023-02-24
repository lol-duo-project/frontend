import React from 'react';
import { render } from '@testing-library/react';
import { ChampionSearchBoard } from '.';

describe('ChampionSearchBoard', () => {
  it('렌더링이 잘 되는지', () => {
    const { container } = render(<ChampionSearchBoard />);

    expect(container).toBeInTheDocument();
  });
});
