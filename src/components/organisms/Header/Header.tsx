import { css } from '@emotion/react';
import { ImageButton } from '../../atoms/Button/ImageButton';
import { TabBar } from '../../atoms/TabBar';

export const Header = () => {
  return (
    <header css={headerContainer}>
      <ImageButton
        src={'/images/svg/LogoWhite.svg'}
        buttonClass={imageButtonWrapper}
        width={165}
        height={32}
        alt={'LOL Duo Logo'}
        buttonType={'button'}
      />
      <TabBar />
    </header>
  );
};

const headerContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 104px;
  background-color: #2f2f2f;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;

const imageButtonWrapper = css`
  height: 56px;
  padding-left: 60px;
`;
