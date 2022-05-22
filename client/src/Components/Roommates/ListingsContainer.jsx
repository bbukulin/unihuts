import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "../../Context/AppContext";

import CardSkeleton from "../Loaders/CardSkeleton";
import PublicRoommateCard from "./PublicRoommateCard";
import RoommateSearch from "../../Layouts/RoommateSearch";
import EmptyStateSearch from "../../Layouts/EmptyStateSearch";
import PaginationRoommates from "../../Layouts/PaginationRoommates";

function ListingsContainer() {
	const {
		getAllRoommates,
		listingsRoommates,
		totalRoommateListings,
		totalRoommatePages,
		currentPageRoommate,

		isLoading,
		searchRoommateCity,
		searchRoommateHood,
		roommateRoomType,
		searchRoommateMain,
		sortRoommate,
	} = useAppContext();

	useEffect(() => {
		getAllRoommates();
		// eslint-disable-next-line
	}, [
		searchRoommateMain,
		searchRoommateCity,
		searchRoommateHood,
		roommateRoomType,
		sortRoommate,
		currentPageRoommate,
	]);

	return (
		<div className="container mx-auto pt-6">
			<div className="flex items-center justify-between pb-4">
				<h1 className="text-lg font-medium tracking-wide text-neutral-900">
					Roommate listings
				</h1>
				<h3 className="text-md font-medium text-neutral-700">
					{totalRoommateListings} roommate{listingsRoommates.length > 1 && "s"}
				</h3>
			</div>
			<div>
				<RoommateSearch />
				<div>
					{isLoading ? (
						<CardSkeleton />
					) : (
						<>
							<div className="grid grid-cols-1 justify-items-center gap-x-36 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
								<AnimatePresence>
									{listingsRoommates.map((roommate) => {
										return (
											<motion.div
												key={roommate._id}
												initial={{ y: "30%", opacity: 0 }}
												animate={{ y: 0, opacity: 1 }}
												transition={{ duration: 0.7, ease: "easeInOut" }}>
												<PublicRoommateCard key={roommate._id} {...roommate} />
											</motion.div>
										);
									})}
								</AnimatePresence>
							</div>
							<div className="mt-4">
								{totalRoommatePages > 1 && <PaginationRoommates />}
							</div>
							{listingsRoommates.length === 0 ? <EmptyStateSearch /> : null}
						</>
					)}
				</div>
			</div>
		</div>
	);
}

export default ListingsContainer;
