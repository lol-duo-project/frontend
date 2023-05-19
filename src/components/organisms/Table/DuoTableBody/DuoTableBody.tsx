import { css } from '@emotion/react';

type props = {
  order: number;
};

export const DuoTableBody = ({}: props) => {
  return <div css={wrapper}></div>;
};

const wrapper = css`
  width: 100%;
  height: 210px;
`;
