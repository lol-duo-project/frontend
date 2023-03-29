import { css } from '@emotion/react';
import { gray000 } from '@src/styles';
import { flexAlignCenter } from '@src/styles/display';
import { ChampionThumbnail } from '../../atoms/ChampionThumbnail';
import { PositionImage } from '../../atoms/PositionImage';
import { RuneImage } from '../../atoms/RuneImage';

export const ChampionSelectedWrapper = () => {
  return (
    <div css={wrapper}>
      <div css={selectedWrapper}>
        <div css={runeWrapper}>
          <RuneImage runeType="test" alt="rune" />
        </div>
        <div css={thumbnailWrapper}>
          <ChampionThumbnail url="test" alt="thumbnail" />
        </div>
        <div css={positionWrapper}>
          <PositionImage position="mid" alt="mid" />
        </div>
      </div>
      <p css={championName}>Champion</p>
    </div>
  );
};

const wrapper = css`
  width: 100px;
  height: 90px;
  position: relative;
`;

const selectedWrapper = css`
  ${flexAlignCenter}
`;

const runeWrapper = css`
  width: 24px;
  height: 24px;
`;

const thumbnailWrapper = css`
  width: 72px;
  height: 72px;
  border-radius: 50%;
`;

const positionWrapper = css`
  position: absolute;
  right: 0;
  bottom: 10px;
`;

const championName = css`
  width: 100%;
  height: 14px;
  font-weight: 700;
  font-size: 12px;
  line-height: 120%;
  text-align: center;
  color: ${gray000};
`;
