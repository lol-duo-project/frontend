import { css } from '@emotion/react';
import { ImageButton } from '../../atoms/Button';

export enum Lane {
  All = "All",
  Top = "Top",
  Jungle = "Jungle",
  Mid = "Mid",
  ADC = "Adc",
  Support = "Support"
}

interface PositionSearchBoardProps {
  selectedLane: Lane;
  onSelect: (lane: Lane) => void;
}

export function PositionSearchBoard({ selectedLane, onSelect }: PositionSearchBoardProps) {
  const handleLaneSelect = (lane: Lane) => {
    onSelect(lane);
  };
  
  return (
    <div css={laneSearchBar}>
      {
        Object.values(Lane).map((lane) => (
          <ImageButton key={lane} 
            src={`/images/svg/Position${lane}.svg`}
            buttonClass={selectedLane === lane ? activeLaneButton : laneButton} 
            width={24} 
            height={24} 
            alt={`${lane}`} 
            buttonType={'button'} 
            onClick={() => handleLaneSelect(lane)} 
          />
        ))
      }
    </div>
  );
}

const laneSearchBar = css`
  width: 336px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #2F2F2F;
  box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.32);
  border-radius: 100px;
`;

const laneButton = css`
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #555555;
  border-radius: 100%;
  cursor: pointer;
  background: #3F3F3F;
  &:hover {
    background: rgba(200, 170, 110, 0.2);
  }
`;

const activeLaneButton = css`
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #555555;
  border-radius: 100%;
  background: rgba(200, 170, 110, 0.2);
`;
