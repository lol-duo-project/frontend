import React from 'react';
import { render } from '@testing-library/react';
import { ChampionSearchBoard } from '.';

describe('ChampionSearchBoard', () => {
  it('id값을 전달 후 렌더링이 정상적으로 된다', () => {
    render(<ChampionSearchBoard id="test"></ChampionSearchBoard>);

    const board = document.getElementById('test');
    expect(board).toBeInTheDocument();
  });
});
