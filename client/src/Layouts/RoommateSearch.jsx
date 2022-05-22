import { useState } from "react";
import SearchSelect from "../Components/Inputs/SearchSelect";
import SearchRow from "../Components/Inputs/SearchRow";
import { useAppContext } from "../Context/AppContext";

import { HiOutlineX, HiX, HiOutlineFilter } from "react-icons/hi";

function RoommateSearch() {
	const [showFilters, setShowFilters] = useState(false);

	const {
		isLoading,
		handleChange,
		clearFilters,

		roommateRoomType,
		roomOptions,

		searchRoommateMain,

		sortRoommate,
		sortOptionsRoommate,
	} = useAppContext();

	const handleSearch = (e) => {
		handleChange({ name: e.target.name, value: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		clearFilters();
	};

	return (
		<div>
			{/* filters button md+ screens */}
			<div className="flex justify-end">
				<button
					onClick={() => setShowFilters(!showFilters)}
					className="mb-4 hidden items-center text-sm font-medium text-neutral-500 transition duration-300 hover:text-neutral-900 sm:flex">
					<HiOutlineFilter className="mr-1" />
					Filter
				</button>
			</div>

			{/* filters button sm screen */}
			<div className="flex justify-end">
				<button
					onClick={() => setShowFilters(!showFilters)}
					className="mb-2 block flex items-center justify-center rounded-md py-3 text-sm font-medium text-neutral-500 transition duration-300 hover:text-neutral-900 sm:hidden">
					<HiOutlineFilter className="mr-1" />
					Filters
				</button>
			</div>
			<div
				className={
					"relative my-4 w-full rounded-md bg-white py-6 px-4 shadow-sm md:py-10 md:px-6 lg:px-20 " +
					(showFilters ? "block" : "hidden")
				}>
				<button
					onClick={() => setShowFilters(false)}
					className="absolute right-4 top-4 text-2xl text-zinc-900">
					<HiOutlineX />
				</button>

				<form className="mx-auto max-w-xs space-y-2">
					{/* Main search */}
					<SearchRow
						type="text"
						name="searchRoommateMain"
						labelText="Search"
						value={searchRoommateMain}
						handleChange={handleSearch}
					/>

					{/* Search by room type */}
					<SearchSelect
						labelText="Room type"
						name="roommateRoomType"
						value={roommateRoomType}
						handleChange={handleSearch}
						list={roomOptions}
					/>
					{/* Sort */}
					<SearchSelect
						labelText="Sort"
						name="sortRoommate"
						value={sortRoommate}
						handleChange={handleSearch}
						list={sortOptionsRoommate}
					/>
					<button
						disabled={isLoading}
						onClick={handleSubmit}
						type="button"
						className="inline-flex w-full items-center justify-center rounded-md border border-primary-500 bg-primary-700 px-4 py-2 text-sm font-medium text-primary-50 shadow-sm transition duration-300 hover:border-primary-400 hover:bg-primary-800 hover:text-white hover:shadow-md  focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2">
						<HiX className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
						Reset
					</button>
				</form>
			</div>
		</div>
	);
}

export default RoommateSearch;
