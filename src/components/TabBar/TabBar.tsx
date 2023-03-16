import Style, { generateClassNames } from '@src/utils/Style';
import { useRouter } from 'next/router';
import { TextButton } from '../Button';

export const TabBar = () => {
  const { pathname, query, push } = useRouter();

  const handleChangeToType = (type: 'duo' | 'solo') => {
    push({ pathname, query: { type } });
  };

  return (
    <Style css={css}>
      <div className={CLASSNAMES.TabContainer}>
        <TextButton
          clickEnableWidth={70}
          clickEnableHeight={48}
          isActive={query?.type === 'duo'}
          fontColor="#676767"
          text={'Duo'}
          onClick={() => handleChangeToType('duo')}
        />
        <TextButton
          clickEnableWidth={70}
          clickEnableHeight={48}
          isActive={query?.type === 'solo'}
          fontColor="#676767"
          text={'Solo'}
          onClick={() => handleChangeToType('solo')}
        />
      </div>
    </Style>
  );
};

const CLASSNAMES = generateClassNames({
  TabContainer: 'tab-container',
});

const css = `
  .${CLASSNAMES.TabContainer}{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 48px;
    padding-left: 60px;
  }
`;
