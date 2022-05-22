import { Link } from "react-router-dom";

import HomeButton from "../Components/Buttons/HomeButton";
import RegisterForm from "../Forms/Registration/RegisterForm";

function RegisterPage() {
	return (
		<>
			<div className="flex min-h-screen">
				<div className="static flex max-w-xl flex-1 flex-col justify-evenly bg-white py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
					<div className="absolute top-8 left-8">
						<Link to="/">
							<HomeButton />
						</Link>
					</div>
					<div>
						<h2 className="text-center text-xl font-semibold text-neutral-900">
							Let's get started!
						</h2>
						<p className="text-md mt-1 text-center text-neutral-600 ">
							Already have an account?{" "}
							<Link
								to="/login"
								className="font-medium text-primary-700 hover:text-primary-500">
								Login instead
							</Link>
							.
						</p>
					</div>
					<div className="mx-auto w-full max-w-sm lg:w-96">
						<div>
							<RegisterForm />
						</div>
					</div>
				</div>
				<div className="bg-pattern relative hidden w-0 flex-1 opacity-90 md:block"></div>
			</div>
		</>
	);
}

export default RegisterPage;
