import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "../../Context/AppContext";

import PublicRoomCard from "./PublicRoomCard";
import Pagination from "../../Layouts/Pagination";
import RoomSearch from "../../Layouts/RoomSearch";
import CardSkeleton from "../Loaders/CardSkeleton";
import EmptyStateSearch from "../../Layouts/EmptyStateSearch";

function ListingsContainer() {
	const {
		getAllRooms,
		listingsRooms,
		totalRoomListings,
		totalRoomPages,
		currentPageRoom,

		isLoading,
		searchRoomProperty,
		searchRoomCity,
		searchRoomHood,
		searchRoomType,
		searchRoomMain,
		sortRoom,
	} = useAppContext();

	useEffect(() => {
		getAllRooms();
		// eslint-disable-next-line
	}, [
		searchRoomMain,
		searchRoomProperty,
		searchRoomCity,
		searchRoomHood,
		searchRoomType,
		sortRoom,
		currentPageRoom,
	]);

	return (
		<div className="container mx-auto pt-6">
			<div className="flex items-center justify-between pb-4">
				<h1 className="text-lg font-medium tracking-wide text-neutral-900">
					Room listings
				</h1>
				<h3 className="text-md font-medium text-neutral-700">
					{totalRoomListings} room{listingsRooms.length > 1 && "s"}
				</h3>
			</div>
			<div>
				<RoomSearch />
				<div>
					{isLoading ? (
						<CardSkeleton />
					) : (
						<>
							<div className="grid grid-cols-1 justify-items-center gap-x-36 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
								<AnimatePresence>
									{listingsRooms.map((room) => {
										return (
											<motion.div
												key={room._id}
												initial={{ y: "30%", opacity: 0 }}
												animate={{ y: 0, opacity: 1 }}
												transition={{ duration: 0.7, ease: "easeInOut" }}>
												<PublicRoomCard key={room._id} {...room} />
											</motion.div>
										);
									})}
								</AnimatePresence>
							</div>
							<div className="mt-4">{totalRoomPages > 1 && <Pagination />}</div>
							{listingsRooms.length === 0 ? <EmptyStateSearch /> : null}
						</>
					)}
				</div>
			</div>
		</div>
	);
}

export default ListingsContainer;
