import S from "@sanity/desk-tool/structure-builder";
import EditIcon from "part:@sanity/base/edit-icon";
import { MdHome } from "react-icons/md";

export default S.listItem()
	.title("About Page")
	.icon(MdHome)
	.child(
		S.document()
			.title("About Page")
			.id("about")
			.schemaType("about")
			.documentId("global_about")
			.views([
				S.view.form().icon(EditIcon),
			])
	);
