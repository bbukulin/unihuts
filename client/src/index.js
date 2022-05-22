import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";

import { AppProvider } from "./Context/AppContext";

import "../src/Assets/Styles/index.css";
import "../src/Assets/Styles/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<AppProvider>
			<App />
		</AppProvider>
	</React.StrictMode>
);
