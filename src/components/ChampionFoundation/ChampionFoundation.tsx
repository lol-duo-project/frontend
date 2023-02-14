import Image from 'next/image';
import Style, { generateClassNames } from '../../utils/Style';

interface props {
  name: string;
  url: string;
}

export function ChampionFoundation({ name, url }: props) {
  return (
    <Style css={css}>
      <button className={CLASSNAMES.ChampionCard}>
        <Image src={url} width={36} height={36} alt={name} />
      </button>
    </Style>
  );
}

const CLASSNAMES = generateClassNames({
  ChampionCard: 'champion-card',
});

const css = `
  .${CLASSNAMES.ChampionCard} {
    width: 36px;
    height: 36px;
    border: none;
    cursor: pointer;
    padding: 0;
	}
`;
