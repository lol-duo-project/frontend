import Style, { generateClassNames } from '../../utils/Style';
import { ChampionFoundation } from '../ChampionFoundation';
import { SearchBar } from '../SearchBar';

export function ChampionSearchBoard() {
  const tempChampions = new Array<{ name: string; url: string }>(30).fill({
    name: 'Aatrox',
    url: 'https://lolduo-static-img.s3.ap-northeast-2.amazonaws.com/champion/Aatrox.svg',
  });

  return (
    <Style css={css}>
      <section className={CLASSNAMES.ChampionSearchBoard}>
        <SearchBar width="100%" height="33px" placeholder="챔피언 이름을 입력하세요." fontColor="White" />

        <div className={CLASSNAMES.ChampionContainer}>
          {tempChampions.map((champ, index) => {
            return <ChampionFoundation key={index} name={champ.name} url={champ.url} onClick={() => () => {}} />;
          })}
        </div>
      </section>
    </Style>
  );
}

const CLASSNAMES = generateClassNames({
  ChampionSearchBoard: 'champion-search-board',
  ChampionContainer: 'champion-container',
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
`;
