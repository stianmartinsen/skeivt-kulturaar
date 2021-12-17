import Link from 'next/link'
import Image from 'next/image'
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
}
export function Event({ date, eventLink, eventName, imgUrl, organizer, address, facebookLink, tags}: EventProps) {
  return (
    <div className={styles.event}>
      <time className={styles.date}>
        21<span>nov</span>
      </time>
      <Image className={styles.img} src="https://via.placeholder.com/650x950" alt={`Event ${''}`} layout='fill' />
      <div className={styles.content}>
        <time>time</time>
        <h3>Event name</h3>
        <p>
          Arrangør -{' '}
          <a href="/" target="_blank">
            Google maps link
          </a>
        </p>
        <a href="/" className={styles.facebook}>
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
