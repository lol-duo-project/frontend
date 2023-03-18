import { css } from '@emotion/react';
import Image from 'next/image';

interface props {
  name: string;
  url: string;
  onClick: () => void;
}

export function ChampionFoundation({ name, url, onClick }: props) {
  return (
    <button css={championCardContainer} onClick={onClick} data-testid="championCard">
      <Image src={url} width={36} height={36} alt={name} />
    </button>
  );
}

const championCardContainer = css`
  width: 36px;
  height: 36px;
  border: none;
  cursor: pointer;
  padding: 0;
`;
