import { MouseEventHandler } from 'react';
import Style, { generateClassNames } from "@src/utils/Style"

interface Props {
  clickEnableWidth: number | string;
  clickEnableHeight: number | string;
  isActive: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  text: string;
}

export const TextButton = ({ clickEnableWidth, clickEnableHeight, isActive, onClick, text}: Props) => {
  return (
    <Style css={css({clickEnableWidth, clickEnableHeight, isActive})}>
      <button
        className={`${CLASSNAMES.TextButton} ${isActive ? CLASSNAMES.Active : ""}`}
        type="button"
        alt="Text Button"
        onClick={onClick ? onClick : () => { }}
      >{text}</button>
    </Style>
  )
}

const CLASSNAMES = generateClassNames({
  TextButton: "text_button",
  
})

const css = ({clickEnableWidth, clickEnableHeight}:Props) => (`
  .${CLASSNAMES.TextButton}{
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${clickEnableWidth}
    height: ${clickEnableHeight}

    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 120%;
    cursor: pointer;
    color: #676767;

    &:hover{
      color: #E5E5E5;
      border-bottom: 2px solid #E5E5E5;
    }
  }
`)