import Style, { generateClassNames } from '../../utils/Style';
import Image from 'next/image';
import { ChampionFoundation } from '../ChampionFoundation';

interface Props {
  id?: string;
}

export function ChampionSearchBoard({ id }: Props) {
  const tempChampions = new Array<{ name: string; url: string }>(5).fill({
    name: '가렌',
    url: 'https://lolduo-static-img.s3.ap-northeast-2.amazonaws.com/champion/Aatrox.svg',
  });

  return (
    <Style css={css}>
      <section id={id} className={CLASSNAMES.ChampionSearchBoard}>
        <div className={CLASSNAMES.SearchContainer}>
          <label htmlFor="search"></label>
          <input className={CLASSNAMES.SearchInput} type="string" placeholder="가렌" id="search"></input>

          <button className={CLASSNAMES.SearchButton} type="button">
            <Image src={'/images/svg/SearchButton.svg'} width="14" height="15" alt="Search Button" />
          </button>
        </div>

        <div className={CLASSNAMES.ChampionContainer}>
          {tempChampions.map((champ, index) => {
            return <ChampionFoundation key={index} name={champ.name} url={champ.url} />;
          })}
        </div>
      </section>
    </Style>
  );
}

const CLASSNAMES = generateClassNames({
  ChampionSearchBoard: 'champion-search-board',
  SearchContainer: 'search-container',
  ChampionContainer: 'champion-container',
  SearchInput: 'search-input',
  SearchButton: 'search-button',
});

const css = `
	.${CLASSNAMES.ChampionSearchBoard} {
    display: flex;
    flex-direction: column;
		width: 244px;
    height: 253px;
    padding: 16px;
    background-color: #2F2F2F;
    border-radius: 16px;
	}
  
  .${CLASSNAMES.SearchContainer}{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 33px;
    border-bottom: 1px solid #B5B5B5;
    margin-bottom: 10px;
  }

  .${CLASSNAMES.ChampionContainer}{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 4px;
    width: 100%;
    place-items: center;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .${CLASSNAMES.SearchInput}{
    width: 100%;
    height: 100%;
    background-color: transparent;
    color: white;
    border: none;
  }

  .${CLASSNAMES.SearchInput}:focus{
    outline: none;
  }

  .${CLASSNAMES.SearchButton}{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 100%;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
