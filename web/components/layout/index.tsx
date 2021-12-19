import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ReactNode, useRef } from 'react';

import styles from './layout.module.css';
import { DownArrow } from '../icons/down-arrrow';

export type LayoutProps = {
  children: ReactNode;
  image?: string | null;
  title?: string | null;
  subTitle?: string | null;
};
export default function Layout({ children, image, title, subTitle }: LayoutProps) {
  const scrollButtonRef = useRef<HTMLButtonElement>(null);

	function scrollToContent() {
		const buttonDistanceFromTop = scrollButtonRef.current?.offsetTop as number;
		const buttonHeight = scrollButtonRef.current?.offsetHeight as number;
		const scrollOffsetFromTop = buttonDistanceFromTop + buttonHeight;

		window.scrollTo({ top: scrollOffsetFromTop, behavior: "smooth" });
	}
  return (
    <>
      <Head>
        <title>Skeivt Kulturår</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <header className={styles.header}>

        {image && 
        <div className={styles.imgContainer}>
        <Image alt="" src={image} layout='fill' />
        </div>
        }
        <div className={styles.container}>
          <h1>{title}</h1>
          <p>{subTitle}</p>
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
        <DownArrow onClick={scrollToContent} ref={scrollButtonRef} />
      </header>
      <main className={styles.main}>{children}</main>
    </>
  );
}
