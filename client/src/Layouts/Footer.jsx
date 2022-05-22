import { Link } from "react-router-dom";

import github from "../Assets/Icons/Socials/github.svg";
import linkedin from "../Assets/Icons/Socials/linkedin.svg";

const navigation = [
	{ name: "About", link: "/about" },
	{ name: "Attributions", link: "/attributions" },
];

function Footer() {
	return (
		<footer className="bg-zinc-900">
			<div className="mx-auto max-w-7xl overflow-hidden py-6 px-4">
				<div className="flex flex-col items-center justify-between space-y-6 lg:flex-row lg:space-y-0">
					<nav className="flex flex-wrap justify-center space-x-4">
						{navigation.map((item) => (
							<div key={item.name} className="py-1">
								<Link
									to={item.link}
									className=":text-xs text-sm text-zinc-200 hover:text-zinc-50">
									{item.name}
								</Link>
							</div>
						))}
					</nav>
					<div className="mt-4 flex justify-center space-x-14">
						<a
							href="https://github.com/bbukulin"
							target="_blank"
							rel="noreferrer">
							<img src={github} alt="Github" className="h-5 w-5" />
						</a>
						<a
							href="https://www.linkedin.com/in/bbukulin/"
							target="_blank"
							rel="noreferrer">
							<img src={linkedin} alt="LinkedIn" className="h-5 w-5" />
						</a>
					</div>
					<p className="text-center text-sm text-zinc-300 lg:text-xs">
						&copy; 2022 unihuts.com, All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
