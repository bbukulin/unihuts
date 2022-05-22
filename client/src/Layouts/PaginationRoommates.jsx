import { useAppContext } from "../Context/AppContext";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

function PaginationRoommates() {
	const {
		totalRoommatePages,
		currentPageRoommate,
		changePage,
		totalRoommateListings,
	} = useAppContext();

	const pages = Array.from({ length: totalRoommatePages }, (_, index) => {
		return index + 1;
	});

	const previousPage = () => {
		let newPage = currentPageRoommate - 1;
		if (newPage < 1) {
			// newPage = 1
			newPage = totalRoommatePages;
		}
		changePage(newPage);
	};

	const nextPage = () => {
		let newPage = currentPageRoommate + 1;
		if (newPage > totalRoommatePages) {
			// newPage = 1
			newPage = totalRoommatePages;
		}
		changePage(newPage);
	};

	return (
		<nav
			className="flex items-center justify-between bg-neutral-50 py-3"
			aria-label="Pagination">
			<div className="hidden sm:block">
				<p className="text-sm text-neutral-700">
					Showing{" "}
					<span className="font-medium">{totalRoommateListings} listings</span>
				</p>
			</div>
			<div className="flex flex-1 justify-between space-x-4 sm:justify-end">
				<button
					onClick={previousPage}
					className="relative inline-flex items-center rounded-md border-2 border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:shadow-sm">
					Previous
				</button>
				<div className="space-x-1">
					{pages.map((pageNumber) => {
						return (
							<button
								type="button"
								key={pageNumber}
								onClick={() => changePage(pageNumber)}
								className={classNames(
									pageNumber === currentPageRoommate
										? "border-primary-500"
										: "border-neutral-200",
									"rounded-md border-2 bg-white py-2 px-3 text-sm font-medium text-neutral-900 hover:shadow-sm"
								)}>
								{pageNumber}
							</button>
						);
					})}
				</div>
				<button
					onClick={nextPage}
					className="relative inline-flex items-center rounded-md border-2 border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:shadow-sm">
					Next
				</button>
			</div>
		</nav>
	);
}

export default PaginationRoommates;
