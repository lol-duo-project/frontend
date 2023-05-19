import { css } from '@emotion/react';
import { card, gray000 } from '@src/styles';

type props = {
  headerTitle: string;
};

export const TableHeader = ({ headerTitle }: props) => {
  return <div css={wrapper}>{headerTitle}</div>;
};

const wrapper = css`
  width: 100%;
  height: 32px;
  background-color: ${card};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;
  color: ${gray000};
`;
