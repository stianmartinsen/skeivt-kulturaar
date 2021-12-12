import { useCallback, useRef, useState } from 'react';
import type { ActionFunction, LinksFunction } from 'remix';
import { Form, json, useActionData, redirect } from 'remix';
import { useDropzone } from 'react-dropzone';

import { Calendar } from '~/icons/calendar';
import { Location } from '~/icons/location';

import eventStyles from '~/styles/submit/form.css';

export let links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: eventStyles }];
};

export function meta() {
  return { title: 'Submit event' };
}

// When your form sends a POST, the action is called on the server.
// - https://remix.run/api/conventions#action
// - https://remix.run/guides/data-updates
export let action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  console.log(formData);
  // Finally, if the data is valid, you'll typically write to a database or send or
  // email or log the user in, etc. It's recommended to redirect after a
  // successful action, even if it's to the same place so that non-JavaScript workflows
  // from the browser doesn't repost the data if the user clicks back.
  return redirect('/thanks');
};

export default function SubmitEvent() {
  // https://remix.run/api/remix#useactiondata
  let actionMessage = useActionData<string>();

  // const [imageFile, setImageFile] = useState<File | null>(null);
  // const onDrop = useCallback((acceptedFiles) => {
  //   setImageFile(acceptedFiles[0]);
  // }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ maxSize: 5000000, accept: '.jpg,.png,.jpeg' });

  return (
    <main>
      <h1>Meld inn ditt arrangement</h1>
      <p>Kort informasjon om kalenderen her</p>
      <Form method="post" className="form">
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
          <div className="layout">
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
              <input name="age-limit" placeholder="Fullt navn" required />
            </div>
            <div>
              <label htmlFor="age-limit-age">Spesifiser alder</label>
              <input name="age-limit-age" placeholder="18" type="number" />
            </div>
            <div>
              <label htmlFor="ticket-price">Billettpris</label>
              <input name="ticket-price" placeholder="kr" />
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
            <div className="dropzone" {...getRootProps()}>
              <input {...getInputProps({ name: 'image' })} />

              <p>Trykk eller drag 'n drop filer her...</p>
            </div>
            <small>
              Krav for at bildet skal bli godkjent: Bildet må eies av arrangør Last opp filformat: .jpg, eller .png Max
              5mb
            </small>
          </div></div>
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
          <div className="layout">
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
            <div className="grid-span">
              <label htmlFor="contact-info">Informasjon til redaktør</label>
              <textarea name="contact-info" placeholder="Informasjon til redaktør" />
            </div>
          </div>
        </fieldset>
        <p>
          <button>Send inn arrangement</button>
        </p>
      </Form>
    </main>
  );
}
