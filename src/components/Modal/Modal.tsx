import Style, { generateClassNames } from '../../utils/Style';
import { ReactNode } from 'react';

interface Props {
  id?: string;
  children?: ReactNode;
}

export function Modal({ id, children }: Props) {
  return (
    <Style css={css}>
      <div id={id} className={CLASSNAMES.modalContainer}>
        {children}
      </div>
    </Style>
  );
}

const CLASSNAMES = generateClassNames({
  modalContainer: 'modal-container',
});

const css = `
	.${CLASSNAMES.modalContainer} {
 		position: absolute;
 		width: 1px;
 		height: 1px;
 		margin: -1px;
 		padding: 0px;
 		overflow: hidden;
 		border: 0;
 	}
`;
