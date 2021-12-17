import Link from 'next/link'
import styles from "../styles/event-list.module.css";

import {
  Event
} from "../components/event";
import Layout from '../components/layout';

export default function EventList() {

  return (
    <Layout>
        <ol className={styles.eventList}>
					<li>
						<Event date="" address="" eventLink="" eventName="" organizer="" tags={[]} facebookLink="" imgUrl="" />
					</li>
				</ol>

        <section className={styles.footer}>
          <h2>Legg til arrangement i kalenderen</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non amet ac velit velit eget. Risus est, risus ac vitae eu. Amet, morbi semper eu, amet sed sit in. Maecenas imperdiet enim dignissim amet fermentum, velit at.</p>
        <Link href="/submit">Meld inn arrangement</Link>
        </section>
    </Layout>
  );
}
