import Image from 'next/image';
import { useState } from 'react';
import { PositionFoundation } from '../PositionFoundation';
import { ChampionSearchBoard } from '../ChampionSearchBoard';
import { PositionSearchBoard } from '../PositionSearchBoard';

import { Lane } from '../PositionSearchBoard';
import { css } from '@emotion/react';
import { ChampionFoundation } from '../ChampionFoundation';

interface PositionChampSelectorProps {
  field: string;
}

export function PositionChampSelector({ field }: PositionChampSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLaneField, setSelectedLaneField] = useState<Lane>(Lane.All);

  const handleLaneSelect = (lane: Lane) => {
    setSelectedLaneField(lane);
    setIsOpen(false);
  };

  return (
    <div css={container}>
      <div css={imageBox}>
        {field === "Position" ?
          <PositionFoundation name={field} url={`images/svg/${field}${selectedLaneField}.svg`} />
        :
          // <ChampionFoundation name={} url={} onClick={}/>
          <></>
        }
      </div>
      <div css={selectBox}>
        <button css={select} onClick={() => setIsOpen(!isOpen)}>
          <div css={fieldText}>{field}</div>
          <div css={arrowIcon}>
            {isOpen ? 
              <Image src={'images/svg/arrowUp.svg'} width={6.84} height={4.43} alt={'arrowUp'} /> : 
              <Image src={'images/svg/arrowDown.svg'} width={6.84} height={4.43} alt={'arrowDown'} />}
          </div>
        </button>
        <div css={subFieldText}>
          { field === "Position" ? selectedLaneField : <></> }
        </div>
        {isOpen &&
          (
            field === 'Position' ? (
              <div css={dropdown}>
                <PositionSearchBoard selectedLane={selectedLaneField} onSelect={handleLaneSelect} />
              </div>
            ) : (
              <div css={dropdown}>
                <ChampionSearchBoard />
              </div>
            )
          )
        }
      </div>
    </div>
  );
}

const container = css`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background-color: #2F2F2F;
  position: relative;
`;

const imageBox = css`
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: #3F3F3F;
`;

const selectBox = css`
  width: 70px;
  height: 44px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  padding: 2px 0 0 0;
`;

const select = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 9px;
  background-color: inherit;
  cursor: pointer;
`;

const fieldText = css`
  height: 17px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #B5B5B5;
`;

const arrowIcon = css`
  display: flex;
`;

const subFieldText = css`
  height: 100%;
  postion: relative;
  display: flex;
  justify-content: flex-start;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #F9F9F9;
`;

const dropdown = css`
  position: absolute;
  top: 150%;
  left: 0;
  border-radius: 4px;
  z-index: 9999;
`;
