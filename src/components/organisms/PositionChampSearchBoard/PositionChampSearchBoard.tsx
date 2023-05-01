import { PositionChampSelector } from '../PositionChampSelector';
import { css } from '@emotion/react';

export function PositionChampSearchBoard() {

  return (
    <div css={container}>
      <PositionChampSelector field={"Position"} />
      <div css={divide} />
      <PositionChampSelector field={"Champion"} />
    </div>
  );
}

const container = css`
  width: 474px;
  padding: 16px 32px;
  display: flex;
  justify-content: flex-start;
  align-items: cneter;
  gap: 16px;
  background-color: #2F2F2F;
  border-radius: 100px;
`;

const divide = css`
  border: 0.8px solid #555555;
  height: 36px;
  margin: auto 0;
`;