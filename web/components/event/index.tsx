import Link from 'next/link';
import Image from 'next/image';
import styles from './event.module.css';

export type EventProps = {
  date: string;
  eventName: string;
  imgUrl?: string;
  organizer: string;
  address: string;
  eventLink: string;
  facebookLink?: string;
  tags: Array<string>;
};
export function Event({ date, eventLink, eventName, imgUrl, organizer, address, facebookLink, tags }: EventProps) {
  return (
    <div className={styles.event}>
      <div className={styles.imgContainer}>
      <time className={styles.date}>
        21<span>nov</span>
      </time>
      {imgUrl && (
          <Image className={styles.img} src={imgUrl} alt={`Event ${''}`} layout="fill" />
          )}
          </div>
      <div className={styles.content}>
        <time>time</time>
        <h3>Event name</h3>
        <p>
          Arrangør -{' '}
          <a href="https://google.com" target={`_gm_${eventName || 'blank'}`} rel="noreferrer">
            Google maps link
          </a>
        </p>
        <a href="https://facebook.com" className={styles.facebook} target={`_fb_${eventName || 'blank'}`} rel="noreferrer">
          Facebook link
        </a>
        <Link href="/">Event link</Link>
        <ul className={styles.tagList}>
          <li className={styles.tagList__item}>Tag</li>
          <li className={styles.tagList__item}>Tag</li>
          <li className={styles.tagList__item}>Tag</li>
          <li className={styles.tagList__item}>Tag</li>
        </ul>
      </div>
    </div>
  );
}
