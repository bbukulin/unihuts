import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";

import {
	HiOutlineCollection,
	HiOutlineHeart,
	HiOutlineLogout,
	HiOutlineCubeTransparent,
	HiOutlineUserCircle,
	HiOutlineCog,
	HiOutlineHome,
	HiOutlineUsers,
	HiOutlineUserGroup,
} from "react-icons/hi";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

function DropdownMenu({ user, logoutUser }) {
	return (
		<>
			<Menu as="div" className="relative z-10">
				<div>
					<Menu.Button className="flex rounded-md bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-100">
						<p className="font-medium text-neutral-900">{user.firstName}</p>
					</Menu.Button>
				</div>
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95">
					<Menu.Items className="absolute right-0 mt-2 w-52 origin-top-right divide-y divide-gray-100 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						<Menu.Item>
							{({ active }) => (
								<Link
									to="/my-rooms"
									className={classNames(
										active
											? "bg-neutral-100 text-neutral-900"
											: "text-neutral-700",
										"group flex items-center px-4 py-2 text-sm"
									)}>
									<HiOutlineCubeTransparent
										className="mr-3 h-5 w-5 text-neutral-300 group-hover:text-neutral-500"
										aria-hidden="true"
									/>
									Room ads
								</Link>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<Link
									to="/my-roommates"
									className={classNames(
										active
											? "bg-neutral-100 text-neutral-900"
											: "text-neutral-700",
										"group flex items-center px-4 py-2 text-sm"
									)}>
									<HiOutlineUsers
										className="mr-3 h-5 w-5 text-neutral-300 group-hover:text-neutral-500"
										aria-hidden="true"
									/>
									Roommate ads
								</Link>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<Link
									to="/settings"
									className={classNames(
										active
											? "bg-neutral-100 text-neutral-900"
											: "text-neutral-700",
										"group flex items-center px-4 py-2 text-sm"
									)}>
									<HiOutlineCog
										className="mr-3 h-5 w-5 text-neutral-300 group-hover:text-neutral-500"
										aria-hidden="true"
									/>
									Settings
								</Link>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<button
									onClick={logoutUser}
									className={classNames(
										active
											? "bg-neutral-100 text-neutral-900"
											: "text-neutral-700",
										"group flex w-full items-center px-4 py-2 text-sm"
									)}>
									<HiOutlineLogout
										className="mr-3 h-5 w-5 text-neutral-300 group-hover:text-neutral-500"
										aria-hidden="true"
									/>
									Logout
								</button>
							)}
						</Menu.Item>
					</Menu.Items>
				</Transition>
			</Menu>
		</>
	);
}

export default DropdownMenu;
