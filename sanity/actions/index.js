import defaultResolve from "part:@sanity/base/document-actions";
import { approveExternalEventEditRequestAction } from "./workflow/approveeventRequestAction";
import { declineExternalEventEditRequestAction } from "./workflow/declineeventRequestAction";

export default function resolveDocumentActions(props) {
	if (props.type === "eventRequest") {
		return [
			approveExternalEventEditRequestAction,
			declineExternalEventEditRequestAction
		];
	}

	return [...defaultResolve(props)];
}
