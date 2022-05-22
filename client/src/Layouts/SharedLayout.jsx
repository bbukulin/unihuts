import Navigation from "./Navigation";

import { Outlet } from "react-router-dom";

function SharedLayout() {
	return (
		<>
			<Navigation />
			<Outlet />
		</>
	);
}

export default SharedLayout;
