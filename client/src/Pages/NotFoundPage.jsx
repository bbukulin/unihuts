import { Link } from "react-router-dom";
import binoculars from "../Assets/Illustrations/binoculars.svg";

import HomeButton from "../Components/Buttons/HomeButton";

function NotFoundPage() {
	return (
		<>
			<div className="flex min-h-screen flex-col bg-neutral-50 pt-16 pb-12">
				<main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
					<div className="flex flex-shrink-0 justify-center">
						<img src={binoculars} alt="Illustration" />
					</div>
					<div className="py-16">
						<div className="text-center">
							<p className="text-sm font-semibold uppercase tracking-wide text-primary-500">
								404 error
							</p>
							<h1 className="mt-2 text-xl font-semibold text-neutral-900">
								Page not found
							</h1>
							<p className="mt-1 text-lg text-neutral-600">
								When all the roads lead nowhere, <br /> it's time to come back
								home.
							</p>
							<div className="mt-6">
								<Link to="/">
									<HomeButton />
								</Link>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	);
}

export default NotFoundPage;
