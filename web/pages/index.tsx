import Link from 'next/link'
import type { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next'
import sanity, { urlFor } from '../sanity'

import styles from "../styles/event-list.module.css";

import {
  Event
} from "../components/event";
import Layout from '../components/layout';


export default function EventList({ image, title, subTitle }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(image)

  return (
    <Layout image={image} title={title} subTitle={subTitle}>
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

export type Data = {
  image?: string | null;
  title?: string | null;
  subTitle?: string | null;
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const res = await sanity.fetch(`*[_id in ["global_configuration", "drafts.global_configuration"]] | order(_updatedAt desc) [0]`)
  console.log(JSON.stringify(res, null, 2))
  const image = urlFor(res?.header?.background).auto('format').url().toString();
  return {
    props: {
      image: image || null,
      title: res?.header?.title || null,
      subTitle: res?.header?.subtitle || null,
    },
  }
}
