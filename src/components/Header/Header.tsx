import Style, { generateClassNames } from '@src/utils/Style';
import { ImageButton } from '../Button/ImageButton';

export const Header = () => {
  return (
    <Style css={css()}>
      <header className={CLASSNAMES.HeaderContainer}>
        <ImageButton
          src={'/images/svg/LogoWhite.svg'}
          buttonClass={CLASSNAMES.ImageButtonWrapper}
          width={165}
          height={32}
          alt={'LOL Duo Logo'}
          buttonType={'button'}
        />
      </header>
    </Style>
  );
};

const CLASSNAMES = generateClassNames({
  HeaderContainer: 'header-container',
  ImageButtonWrapper: 'button-wrapper',
});

const css = () => `
  .${CLASSNAMES.HeaderContainer}{
    display: flex;
    flex-direction: columns;
    align-items: center;
    width: 100%;
    height: 104px;
    background-color: #2F2F2F;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
  }

  .${CLASSNAMES.ImageButtonWrapper}{
    height: 56px;
    padding-left: 60px;

  }
`;
