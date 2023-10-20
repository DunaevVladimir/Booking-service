import { memo, type ReactNode } from "react";
import './pageLayout.scss';

type Props = {
  head?: ReactNode
  footer?: ReactNode
  children?: ReactNode
}

function PageLayout({head, footer, children}: Props) {

  return (
    <div className='pageLayout'>
      <header className='pageLayout-head'>
        {head}
      </header>
      <main className='pageLayout-main'>
        {children}
      </main>
      <footer className='pageLayout-footer'>
        {footer}
      </footer>
    </div>
  );
}

export default memo(PageLayout);