import type { MetaFunction, LoaderFunction, LinksFunction } from "remix";
import { useLoaderData, json, Link } from "remix";

import eventStyles from "~/styles/event-list.css";

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: eventStyles },
  ];
};

type IndexData = {
  resources: Array<{ name: string; url: string }>;
  demos: Array<{ name: string; to: string }>;
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
  let data = useLoaderData<IndexData>();

  return (
    <div className="remix__page">
      <main>
        <h2>Welcome to Remix!</h2>
        <ol className="event-list">
					<li className="event-list__item">
						<time className="event-list__item_date">
							21<span>nov</span>
						</time>
						<img className="event-list__item_img"
							src="https://via.placeholder.com/650x950"
							alt={`Event ${""}`}
						/>
						<div className="event-list__item_content">
							<time>time</time>
							<h2>Event name</h2>
							<p>
								Arrangør -{" "}
								<a href="/" target="_blank">
									Google maps link
								</a>
							</p>
							<a href="/" className="facebook">
								Facebook link
							</a>
							<Link to="/">Event link</Link>
							<ul className="event-list__item-tag_list">
								<li className="event-list__item-tag_list__item">Tag</li>
								<li className="event-list__item-tag_list__item">Tag</li>
                <li className="event-list__item-tag_list__item">Tag</li>
                <li className="event-list__item-tag_list__item">Tag</li>
							</ul>
						</div>
					</li>
				</ol>
      </main>
    </div>
  );
}
