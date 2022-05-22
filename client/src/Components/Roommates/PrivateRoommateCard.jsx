import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import RoommateDropdown from "../Menu/RoommateDropdown";
import { BiBed } from "react-icons/bi";
import { BsGenderAmbiguous } from "react-icons/bs";
import { HiOutlineCake } from "react-icons/hi";

export default function PrivateRoommateCard({
	_id,
	desiredRoomType,
	desiredCountry,
	desiredState,
	desiredCity,
	budget,
	moveInDate,
	description,
	age,
	occupation,
	gender,
	images,
}) {
	let moveInDateDisplay = moment(moveInDate);
	moveInDateDisplay = moveInDateDisplay.format("MMM Do");

	return (
		<div className="w-80 rounded-lg shadow transition duration-300 hover:shadow-md ">
			{/* CARD IMAGE */}
			<div className="relative rounded-t-lg">
				<div className="absolute top-4 right-4">
					<RoommateDropdown id={_id} />
				</div>
				<img
					src={images[0].url}
					className="h-56 w-80 rounded-t-lg object-cover"
					alt="Roommate"
				/>
			</div>

			{/* CARD DETAILS */}
			<div className="space-y-6 rounded-b-lg bg-white p-4">
				{/* Personal occupation & move in date */}
				<div className="flex items-center justify-between">
					<div className="flex">
						<div className="rounded-md border-2 border-neutral-200 px-2 py-1">
							<p className="text-xs font-medium">{occupation}</p>
						</div>
					</div>
					<div className="flex">
						<div className="flex items-center divide-x rounded-md border-2 border-neutral-200 px-2 py-1">
							<p className="pr-2 text-xs font-medium">Move in</p>
							<p className="pl-2 text-xs font-semibold text-primary-700">
								{moveInDateDisplay}
							</p>
						</div>
					</div>
				</div>

				{/* Heading & desc */}
				<div>
					{/* Neighborhood and city */}
					<div>
						<p className="mb-1 w-full text-sm font-semibold tracking-wide text-neutral-900 line-clamp-1">
							{desiredCountry.label}, {desiredState.label}
						</p>
					</div>
					{/* Truncated description */}
					<div>
						<p className="w-full text-xs font-normal tracking-wide text-neutral-500 line-clamp-2">
							{description}
						</p>
					</div>
				</div>

				{/* Icons */}
				<div>
					<div className="flex items-center space-x-6">
						{/* Desired room type */}
						<div className="flex items-center">
							<div>
								<BiBed className="text-lg text-neutral-500" />
							</div>
							<p className="pl-1 text-sm font-medium text-neutral-900">
								{desiredRoomType}
							</p>
						</div>
						{/* Users gender */}
						<div className="flex items-center">
							<div>
								<BsGenderAmbiguous className="text-lg text-neutral-500" />
							</div>
							<p className="pl-1 text-sm font-medium text-neutral-900">
								{gender}
							</p>
						</div>
						{/* Users age  */}
						<div className="flex items-center">
							<div>
								<HiOutlineCake className="text-lg text-neutral-500" />
							</div>
							<p className="pl-1 text-sm font-medium text-neutral-900">{age}</p>
						</div>
					</div>
				</div>

				{/* Monthly budget */}
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-2">
						<div>
							<p className="text-xs font-semibold text-primary-700">{budget}</p>
						</div>
						<p className="pl-1 text-xs font-medium text-neutral-500">
							HRK / budget
						</p>
					</div>
					<div>
						<Link
							to={`/roommate/${_id}`}
							className="text-xs font-medium text-primary-700 hover:text-primary-500">
							More details
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
