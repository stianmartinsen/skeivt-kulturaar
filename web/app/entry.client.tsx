import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";

import WebFont from "webfontloader";

WebFont.load({
	typekit: {
		id: "ygk6hzk"
	}
});

hydrate(<RemixBrowser />, document);
