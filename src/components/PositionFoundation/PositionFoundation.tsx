import Image from 'next/image';
import { css } from '@emotion/react';

interface PositionFoundationProps {
  name: string;
  url: string;
}

export function PositionFoundation({ name, url }: PositionFoundationProps) {

  return (
      <div css={optionImage}>
        <Image src={url} width={24} height={24} alt={name} />
      </div>
  );
}

const optionImage = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: #3F3F3F;
`;
