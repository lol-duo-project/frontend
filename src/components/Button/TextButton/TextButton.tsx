import { MouseEventHandler } from 'react';
import Style, { generateClassNames } from '@src/utils/Style';

interface Props {
  clickEnableWidth: number | string;
  clickEnableHeight: number | string;
  fontColor: string;
  isActive: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  text: string;
}

export const TextButton = (props: Props) => {
  const { isActive, onClick, text } = props;

  return (
    <Style css={css(props)}>
      <button
        className={`${CLASSNAMES.TextButton} ${isActive ? CLASSNAMES.Active : ''}`}
        type="button"
        onClick={onClick ? onClick : () => {}}
      >
        {text}
      </button>
    </Style>
  );
};

const CLASSNAMES = generateClassNames({
  TextButton: 'text_button',
  Active: 'activated',
});

const css = ({ clickEnableWidth, clickEnableHeight, fontColor }: Props) => `
  .${CLASSNAMES.TextButton}{
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${typeof clickEnableWidth === 'string' ? clickEnableWidth : clickEnableWidth + 'px'};
    height: ${typeof clickEnableHeight === 'string' ? clickEnableHeight : clickEnableHeight + 'px'};
    border: none;

    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 120%;
    cursor: pointer;
    color: ${fontColor};
    background-color: inherit;

    &:hover{
     color: #E5E5E5;
    }
  }

  .${CLASSNAMES.Active}{
    color: #E5E5E5;
    border-bottom: 2px solid #E5E5E5;
  }
`;
