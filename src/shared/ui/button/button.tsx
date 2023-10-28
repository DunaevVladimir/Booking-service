import { memo, type ReactNode } from "react";
import styles from './button.module.scss';

type Props = {
  children?: ReactNode,
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
  disabled?: boolean
}

function Button({children, onClick, disabled = false, ...attrs}: Props) {

  const onClickAction = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      e.preventDefault();
    } else {
      return onClick(e);
    }
  };

  return (
    <button
      className={styles.btn}
      disabled={disabled}
      onClick={onClickAction}
      {...attrs}
    >
      {children}
    </button>
  );
}

export default memo(Button);