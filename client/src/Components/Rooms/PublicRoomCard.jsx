import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { BiBed, BiBath, BiShapeSquare } from "react-icons/bi";

function PublicRoomCard({
	_id,
	propertyType,
	totalRooms,
	totalBathrooms,
	totalArea,
	propertyCountry,
	propertyState,
	priceMonth,
	availableFrom,
	listingDescription,
	listingImages,
}) {
	let availableFromDate = moment(availableFrom);
	availableFromDate = availableFromDate.format("MMM Do");

	return (
		<div className="w-80 rounded-lg shadow transition duration-300 hover:shadow-md ">
			{/* CARD IMAGE */}
			<div>
				<img
					src={listingImages[0].url}
					className="h-56 w-80 rounded-t-lg object-cover"
					alt="Listings cover"
				/>
			</div>

			{/* CARD DETAILS */}
			<div className="space-y-6 rounded-b-lg bg-white p-4">
				{/* Property type & available from */}
				<div className="flex items-center justify-between">
					<div className="flex">
						<div className="rounded-md border-2 border-neutral-200 px-2 py-1">
							<p className="text-xs font-medium">{propertyType}</p>
						</div>
					</div>
					<div className="flex">
						<div className="flex items-center divide-x rounded-md border-2 border-neutral-200 px-2 py-1">
							<p className="pr-2 text-xs font-medium">Available</p>
							<p className="pl-2 text-xs font-semibold text-primary-700">
								{availableFromDate}
							</p>
						</div>
					</div>
				</div>

				{/* Heading & desc */}
				<div>
					{/* Neighborhood and city */}
					<div>
						<p className="mb-1 w-full text-sm font-semibold tracking-wide text-neutral-900 line-clamp-1">
							{propertyCountry.label}, {propertyState.label}
						</p>
					</div>
					{/* Truncated description */}
					<div>
						<p className="w-full text-xs font-normal tracking-wide text-neutral-500 line-clamp-2">
							{listingDescription}
						</p>
					</div>
				</div>

				{/* Icons */}
				<div>
					<div className="flex items-center space-x-4">
						{/* Number of bedrooms */}
						<div className="flex items-center">
							<div>
								<BiBed className="text-lg text-neutral-500" />
							</div>
							<p className="pl-1 text-sm font-medium text-neutral-900">
								{totalRooms}
							</p>
						</div>
						{/* Number of bathrooms */}
						<div className="flex items-center">
							<div>
								<BiBath className="text-lg text-neutral-500" />
							</div>
							<p className="pl-1 text-sm font-medium text-neutral-900">
								{totalBathrooms}
							</p>
						</div>
						{/* Area  */}
						<div className="flex items-center">
							<div>
								<BiShapeSquare className="text-lg text-neutral-500" />
							</div>
							<p className="pl-1 text-sm font-medium text-neutral-900">
								{totalArea} m&#178;
							</p>
						</div>
					</div>
				</div>

				{/* Monthly price */}
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-2">
						<div>
							<p className="text-xs font-semibold text-primary-700">
								{priceMonth}
							</p>
						</div>
						<p className="pl-1 text-xs font-medium text-neutral-500">
							HRK / per month
						</p>
					</div>
					<div>
						<Link
							to={`/room/${_id}`}
							className="text-xs font-medium text-primary-700 hover:text-primary-500">
							More details
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PublicRoomCard;
