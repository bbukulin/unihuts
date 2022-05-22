import { Link } from "react-router-dom";
import videogame from "../Assets/Illustrations/videogame.svg";

import { HiPlusSm } from "react-icons/hi";

function EmptyStateRoommates() {
	return (
		<div className="flex h-80 flex-col bg-neutral-50 py-16">
			<main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
				<div className="flex flex-shrink-0 justify-center">
					<img src={videogame} alt="Illustration" className="h-60 w-60" />
				</div>
				<div className="py-16">
					<div className="text-center">
						<h3 className="text-lg font-medium tracking-tight text-primary-700">
							Looks like you don't have any listings yet
						</h3>
						<p className="text-md mt-1 text-neutral-600">
							Start by listing your first roommate ad!
						</p>
						<div className="mt-6">
							<Link to="/roommate">
								<button
									type="button"
									className="inline-flex items-center rounded-md border border-primary-500 bg-primary-700 px-4 py-2 text-sm font-medium text-primary-50 shadow-sm transition duration-300 hover:border-primary-400 hover:bg-primary-800 hover:text-white hover:shadow-md  focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2">
									<HiPlusSm className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
									Roommate
								</button>
							</Link>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default EmptyStateRoommates;
