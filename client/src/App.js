import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SharedLayout from "./Layouts/SharedLayout";
import ProtectedRoute from "./Pages/ProtectedRoute";

import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import NotFoundPage from "./Pages/NotFoundPage";
import NewListing from "./Pages/NewListing";
import RoomListingPage from "./Pages/RoomListingPage";
import RoommateListingPage from "./Pages/RoommateListingPage";
import AboutPage from "./Pages/AboutPage";

import MyRoomsPage from "./Pages/User/MyRoomsPage";
import MyRoommatesPage from "./Pages/User/MyRoommatesPage";
import SettingsPage from "./Pages/User/SettingsPage";

import RoomUpdatePage from "./Pages/RoomUpdatePage";
import RoommateUpdatePage from "./Pages/RoommateUpdatePage";

import RoomsListings from "./Pages/RoomsListings";
import RoommatesListings from "./Pages/RoommatesListings";

import RoomDetails from "./Pages/RoomDetails";
import RoommateDetails from "./Pages/RoommateDetails";
import HomePage from "./Pages/HomePage";
import AttributionsPage from "./Pages/AttributionsPage";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<SharedLayout />}>
						<Route path="" element={<HomePage />} />
						<Route path="rooms" element={<RoomsListings />} />
						<Route path="room/:roomId" element={<RoomDetails />} />

						<Route path="roommates" element={<RoommatesListings />} />
						<Route path="roommate/:roommateId" element={<RoommateDetails />} />
						<Route path="about" element={<AboutPage />} />
						<Route path="attributions" element={<AttributionsPage />} />
					</Route>

					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />

					<Route path="*" element={<NotFoundPage />} />

					<Route
						path="/"
						element={
							<ProtectedRoute>
								<SharedLayout />
							</ProtectedRoute>
						}>
						<Route path="new-listing" element={<NewListing />} />
						<Route path="room" element={<RoomListingPage />} />
						<Route path="update-room" element={<RoomUpdatePage />} />
						<Route path="roommate" element={<RoommateListingPage />} />
						<Route path="update-roommate" element={<RoommateUpdatePage />} />
					</Route>

					<Route
						path="/"
						element={
							<ProtectedRoute>
								<SharedLayout />
							</ProtectedRoute>
						}>
						<Route path="my-rooms" element={<MyRoomsPage />} />
						<Route path="my-roommates" element={<MyRoommatesPage />} />
						<Route path="settings" element={<SettingsPage />} />
					</Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
