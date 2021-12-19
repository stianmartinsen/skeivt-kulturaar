import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { Calendar } from '../components/icons/calendar';
import { Location } from '../components/icons/location';
import Layout from '../components/layout';
import sanity, { urlFor } from '../sanity';

import styles from '../styles/form.module.css';

export default function SubmitEvent({ image, title, subTitle }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [ageLimit, setAgelimit] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    maxSize: 5000000,
    accept: '.jpg,.png,.jpeg',
  });

  return (
    <Layout image={image} title={title} subTitle={subTitle}>
      <h1>Meld inn ditt arrangement</h1>
      <p>Kort informasjon om kalenderen her</p>
      <form method="post" action="/api/submit" encType="multipart/form-data" className={styles.form}>
        <fieldset>
          <h2>
            <figure>
              <Calendar />
            </figure>
            Arrangementinformasjon
          </h2>

          <label htmlFor="name" aria-required="true">
            Navn på arrangementet
          </label>
          <input name="name" required placeholder="Navn på arrangementet" />

          <label htmlFor="organizer-name" aria-required="true">
            Arrangørnavn
          </label>
          <input name="organizer-name" required placeholder="Arrangørnavn" />

          <label htmlFor="event-link">Lenke til arrangementet</label>
          <input name="event-link" placeholder="URL" aria-describedby="event-link-help-text" />
          <small id="event-link-help-text">Lenke til Facebook arrangement f.eks.</small>
        </fieldset>
        <fieldset>
          <h2>
            <figure>
              <Calendar />
            </figure>
            Dato og klokkeslett
          </h2>
          <div className={styles.layout}>
            <div>
              <label htmlFor="start-date" aria-required="true">
                Startdato
              </label>
              <input name="start-date" required type="date" />
            </div>
            <div>
              <label htmlFor="end-date" aria-required="true">
                Sluttdato
              </label>
              <input name="end-date" required type="date" />
            </div>
            <div>
              <label htmlFor="start-time" aria-required="true">
                Klokkeslett: starttidspunkt
              </label>
              <input name="start-time" required type="time" />
            </div>
            <div>
              <label htmlFor="end-time" aria-required="true">
                Klokkeslett: sluttidspunkt
              </label>
              <input name="end-time" required type="time" />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <h2>
            <figure>
              <Calendar />
            </figure>
            Tillegsinformasjon
          </h2>
          <p>
            Ved spørsmål så trenger redaktør kontaktinformasjon til arrangement. Dette vil ikke bli synlig i kalenderen.
          </p>
          <div>
            <div>
              <label htmlFor="age-limit">Aldersgrense</label>
              <input
                name="age-limit"
                type="checkbox"
                checked={ageLimit}
                onChange={() => setAgelimit((prev) => !prev)}
              />{' '}
              Ja
            </div>
            {ageLimit && (
              <div>
                <label htmlFor="age-limit-age" aria-required={ageLimit}>
                  Spesifiser alder
                </label>
                <input name="age-limit-age" placeholder="18" type="number" required={ageLimit} />
              </div>
            )}
            <div>
              <label htmlFor="ticket-price">Billettpris</label>
              <input name="ticket-price" placeholder="kr" />
            </div>
            <div>
              <input name="ticket-free" type="checkbox" />
              <label htmlFor="ticket-free">Gratis</label>
            </div>
            <div>
              <label htmlFor="ticket-purchase-link">Eventuell lenke til billettkjøp:</label>
              <input name="ticket-purchase-link" placeholder="URL" />
            </div>
            <div>
              <label htmlFor="event-info">Om arrangementet</label>
              <textarea name="event-info" placeholder="Om arrangementet" />
            </div>
            <label htmlFor="image">Last opp bilde</label>
            <div>
              <div className={styles.dropzone} {...getRootProps()}>
                <input {...getInputProps({ name: 'image' })} />

                <p>Trykk eller drag &apos;n drop filer her...</p>
              </div>
              <div className={styles.dropzone__info}>
                Krav for at bildet skal bli godkjent:
                <ul>
                  <li>Bildet må eies av arrangør</li>
                  <li> Last opp filformat: .jpg, eller .png</li>
                  <li> Max 5mb</li>
                </ul>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <h2>
            <figure>
              <Calendar />
            </figure>
            Kontaktperson
          </h2>
          <p>
            Ved spørsmål så trenger redaktør kontaktinformasjon til arrangement. Dette vil ikke bli synlig i kalenderen.
          </p>
          <div className={styles.layout}>
            <div>
              <label htmlFor="contact-name" aria-required>
                Fullt navn
              </label>
              <input name="contact-name" placeholder="Fullt navn" required />
            </div>
            <div>
              <label htmlFor="pronoun">Pronomen</label>
              <input name="pronoun" placeholder="Pronomen" />
            </div>
            <div>
              <label htmlFor="phone-number" aria-required>
                Telefonnummer
              </label>
              <input name="phone-number" placeholder="Telefonnummer" required />
            </div>
            <div>
              <label htmlFor="contact-email">E-postaddresse</label>
              <input name="contact-email" placeholder="E-postaddresse" />
            </div>
            <div className={styles.gridSpan}>
              <label htmlFor="contact-info">Informasjon til redaktør</label>
              <textarea name="contact-info" placeholder="Informasjon til redaktør" />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <label htmlFor="agree">Jeg samtykker til at min persondata blir lagret</label>
          <input type="checkbox" name="agree" />
        </fieldset>
        <p>
          <button>Send inn arrangement</button>
        </p>
      </form>
    </Layout>
  );
}

export type Data = {
  image?: string | null;
  title?: string | null;
  subTitle?: string | null;
}
export const getStaticProps: GetStaticProps = async (context) => {
  const res = await sanity.fetch(`*[_id in ["global_configuration", "drafts.global_configuration"]] | order(_updatedAt desc) [0]`)
  const image = urlFor(res?.header?.background).auto('format').url().toString();
  return {
    props: {
      image: image || null,
      title: res?.header?.title || null,
      subTitle: res?.header?.subtitle || null,
    },
    revalidate: 3600
  }
}

