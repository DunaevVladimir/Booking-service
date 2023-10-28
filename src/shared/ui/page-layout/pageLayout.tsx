import { memo, type ReactNode } from "react";
import styles from './pageLayout.module.scss';

type Props = {
  head?: ReactNode
  footer?: ReactNode
  children?: ReactNode
}

function PageLayout({head, footer, children}: Props) {

  return (
    <div className={styles.body}>
      <header className={styles.head}>
        {head}
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        {footer}
      </footer>
    </div>
  );
}

export default memo(PageLayout);