import React, { memo, ReactNode} from "react";
import './sideLayout.scss';

type Props = {
  side?: 'start' | 'end' | 'between'
  children?: ReactNode
}

function SideLayout({children, side}: Props) {

  return (
    <div className={`sideLayout sideLayout-${side}`}>
      {children}
    </div>
  );
}

export default memo(SideLayout);