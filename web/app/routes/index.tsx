import type { MetaFunction, LoaderFunction, LinksFunction } from "remix";
import { useLoaderData, json, Link } from "remix";

import eventStyles from "~/styles/event-list.css";

import {
  Event,
  links as eventLinks
} from "~/components/event";


export let links: LinksFunction = () => {
  return [
    ...eventLinks(),
    { rel: "stylesheet", href: eventStyles },
  ];
};


// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = () => {
  // get sanity events here

  // https://remix.run/api/remix#json
  return json({});
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!"
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData<any>();

  return (
      <main>   
        <ol className="event-list">
					<li>
						<Event date="" address="" eventLink="" eventName="" organizer="" tags={[]} facebookLink="" imgUrl="" />
					</li>
				</ol>

        <section className="event__footer">
          <h2>Legg til arrangement i kalenderen</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non amet ac velit velit eget. Risus est, risus ac vitae eu. Amet, morbi semper eu, amet sed sit in. Maecenas imperdiet enim dignissim amet fermentum, velit at.</p>
        <Link to="/submit">Meld inn arrangement</Link>
        </section>
      </main>
  );
}
