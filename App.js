import Main from "./Main";
import { Provider } from "react-redux";
import store from "./redux/store";
import { useEffect } from "react";
export default function App() {
	return (
		<Provider store={store}>
			<Main />
		</Provider>
	);
}
