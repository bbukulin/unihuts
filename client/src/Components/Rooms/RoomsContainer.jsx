import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "../../Context/AppContext";

import PrivateRoomCard from "./PrivateRoomCard";
import RoomSearch from "../../Layouts/RoomSearch";
import CardSkeleton from "../Loaders/CardSkeleton";
import EmptyStateRooms from "../../Layouts/EmptyStateRooms";

function RoomsContainer() {
	const {
		getMyRooms,
		rooms,
		totalRooms,
		isLoading,

		searchRoomProperty,
		searchRoomCity,
		searchRoomHood,
		searchRoomType,
		searchRoomMain,
		sortRoom,
	} = useAppContext();

	useEffect(() => {
		getMyRooms();
	}, [
		searchRoomMain,
		searchRoomProperty,
		searchRoomCity,
		searchRoomHood,
		searchRoomType,
		sortRoom,
	]);

	return (
		<div className="container mx-auto">
			<div className="flex items-center justify-between pb-4">
				<h1 className="text-lg font-medium tracking-wide text-neutral-900">
					My room listings
				</h1>
				<h3 className="text-md font-medium text-neutral-700">
					{totalRooms} room{rooms.length > 1 && "s"}
				</h3>
			</div>
			<RoomSearch />
			<div>
				{isLoading ? (
					<CardSkeleton />
				) : (
					<>
						<div className="grid grid-cols-1 justify-items-center gap-x-36 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
							<AnimatePresence>
								{rooms.map((room) => {
									return (
										<motion.div
											key={room._id}
											initial={{ y: "30%", opacity: 0 }}
											animate={{ y: 0, opacity: 1 }}
											transition={{ duration: 0.7, ease: "easeInOut" }}>
											<PrivateRoomCard key={room._id} {...room} />
										</motion.div>
									);
								})}
							</AnimatePresence>
						</div>
						{rooms.length === 0 ? <EmptyStateRooms /> : null}
					</>
				)}
			</div>
		</div>
	);
}

export default RoomsContainer;
