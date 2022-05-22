import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "../../Context/AppContext";

import CardSkeleton from "../Loaders/CardSkeleton";
import PrivateRoommateCard from "./PrivateRoommateCard";
import RoommateSearch from "../../Layouts/RoommateSearch";
import EmptyStateRoommates from "../../Layouts/EmptyStateRoommates";

function RoommatesContainer() {
	const {
		getMyRoommates,
		roommates,
		totalRoommates,
		isLoading,

		searchRoommateCity,
		searchRoommateHood,
		roommateRoomType,
		searchRoommateMain,
		sortRoommate,
	} = useAppContext();

	useEffect(() => {
		getMyRoommates();
		// eslint-disable-next-line
	}, [
		searchRoommateCity,
		searchRoommateHood,
		roommateRoomType,
		searchRoommateMain,
		sortRoommate,
	]);

	return (
		<div className="container mx-auto">
			<div className="flex items-center justify-between pb-4">
				<h1 className="text-lg font-medium tracking-wide text-neutral-900">
					My roommate listings
				</h1>
				<h3 className="text-md font-medium text-neutral-700">
					{totalRoommates} roommate{roommates.length > 1 && "s"}
				</h3>
			</div>
			<RoommateSearch />
			<div>
				{isLoading ? (
					<CardSkeleton />
				) : (
					<>
						<div className="grid grid-cols-1 justify-items-center gap-x-36 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
							<AnimatePresence>
								{roommates.map((roommate) => {
									return (
										<motion.div
											key={roommate._id}
											initial={{ y: "30%", opacity: 0 }}
											animate={{ y: 0, opacity: 1 }}
											transition={{ duration: 0.7, ease: "easeInOut" }}>
											<PrivateRoommateCard key={roommate._id} {...roommate} />
										</motion.div>
									);
								})}
							</AnimatePresence>
						</div>
						{roommates.length === 0 ? <EmptyStateRoommates /> : null}
					</>
				)}
			</div>
		</div>
	);
}

export default RoommatesContainer;
