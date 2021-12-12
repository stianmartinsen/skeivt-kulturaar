import { Link, LinksFunction } from "remix";

import styles from './event.styles.css';

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles }
];

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
    <div className="event">
      <time className="event__date">
        21<span>nov</span>
      </time>
      <img className="event__img" src="https://via.placeholder.com/650x950" alt={`Event ${''}`} />
      <div className="event__content">
        <time>time</time>
        <h3>Event name</h3>
        <p>
          Arrangør -{' '}
          <a href="/" target="_blank">
            Google maps link
          </a>
        </p>
        <a href="/" className="facebook">
          Facebook link
        </a>
        <Link to="/">Event link</Link>
        <ul className="event__tag-list">
          <li className="event__tag-list__item">Tag</li>
          <li className="event__tag-list__item">Tag</li>
          <li className="event__tag-list__item">Tag</li>
          <li className="event__tag-list__item">Tag</li>
        </ul>
      </div>
    </div>
  );
}
