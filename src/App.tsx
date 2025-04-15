import { queryParams } from "./utils";
import SuccessPage from "./pages/SuccessPage";
import NotFoundPage from "./pages/NotFoundPage";
import FailPage from "./pages/FailPage";

function App() {
	const { code, error } = queryParams();

	if (error != undefined) {
		return <FailPage />;
	}

	if (code != undefined) {
		return <SuccessPage />;
	}

	return <NotFoundPage />;
}
export default App;
