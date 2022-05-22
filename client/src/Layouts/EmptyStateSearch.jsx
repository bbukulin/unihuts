import globe from "../Assets/Illustrations/globe.svg";

function EmptyStateSearch() {
	return (
		<div className="flex h-64 flex-col bg-neutral-50 py-6">
			<main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
				<div className="flex flex-shrink-0 justify-center">
					<img src={globe} alt="Illustration" className="h-60 w-60" />
				</div>
				<div className="py-12">
					<div className="text-center">
						<h3 className="text-lg font-medium tracking-tight text-primary-700">
							Looks like there are no listings <br /> matching your filters at
							the moment
						</h3>
						<p className="text-md mt-1 text-neutral-600">
							Come back later or try another search!
						</p>
					</div>
				</div>
			</main>
		</div>
	);
}

export default EmptyStateSearch;
