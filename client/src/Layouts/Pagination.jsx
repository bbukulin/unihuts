import { useAppContext } from "../Context/AppContext";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

function Pagination() {
	const { totalRoomPages, currentPageRoom, changePage, totalRoomListings } =
		useAppContext();

	const pages = Array.from({ length: totalRoomPages }, (_, index) => {
		return index + 1;
	});

	const previousPage = () => {
		let newPage = currentPageRoom - 1;
		if (newPage < 1) {
			// newPage = 1
			newPage = totalRoomPages;
		}
		changePage(newPage);
	};

	const nextPage = () => {
		let newPage = currentPageRoom + 1;
		if (newPage > totalRoomPages) {
			// newPage = 1
			newPage = totalRoomPages;
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
					<span className="font-medium">{totalRoomListings} listings</span>
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
									pageNumber === currentPageRoom
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

export default Pagination;
