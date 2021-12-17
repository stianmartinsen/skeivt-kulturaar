import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './layout.module.css';

export type LayoutProps = {
  children: ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Skeivt Kulturår</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1>Skeivtkulturår Kalender</h1>
          <p>Delta, engasjer deg og bli med på feiringen</p>
          <nav aria-label="Main navigation" className={styles.headerNav}>
            <ul>
              <li>
                <Link href="/">Arrangementer</Link>
              </li>
              <li>
                <Link href="/submit">Meld inn arrangement</Link>
              </li>
              <li>
                <Link href="/about">Om Skeivt Kulturår</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>Footer content</p>
        </div>
      </footer>
    </>
  );
}
