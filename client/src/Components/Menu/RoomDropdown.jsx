import React, { Fragment, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, Dialog, Transition } from "@headlessui/react";
import { HiOutlineExclamation } from "react-icons/hi";
import { useAppContext } from "../../Context/AppContext";
import {
	HiOutlineTrash,
	HiChevronDown,
	HiOutlinePencilAlt,
} from "react-icons/hi";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

function RoomDropdown({ id }) {
	const { setEditRoom, deleteRoom } = useAppContext();

	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	const cancelButton = useRef(null);

	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 z-10 overflow-y-auto"
					initialFocus={cancelButton}
					onClose={closeModal}>
					<div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0">
							<Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
						</Transition.Child>

						<span
							className="hidden sm:inline-block sm:h-screen sm:align-middle"
							aria-hidden="true">
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
							<div className="relative inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
								<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
									<div className="sm:flex sm:items-start">
										<div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
											<HiOutlineExclamation
												className="h-6 w-6 text-red-600"
												aria-hidden="true"
											/>
										</div>
										<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
											<Dialog.Title
												as="h3"
												className="text-lg font-medium leading-6 text-gray-900">
												Delete listing
											</Dialog.Title>
											<div className="mt-2">
												<p className="text-sm text-gray-500">
													Are you sure you want to delete this listing? This
													action cannot be undone.
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
									<button
										type="button"
										className="inline-flex w-full justify-center rounded-md border border-transparent bg-error-600 px-4 py-2 text-base font-medium text-white shadow-sm transition duration-300 hover:bg-error-700 focus:outline-none focus:ring-2 focus:ring-error-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
										onClick={() => deleteRoom(id)}>
										Delete
									</button>
									<button
										type="button"
										className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
										onClick={() => closeModal()}>
										Cancel
									</button>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
			<Menu as="div" className="relative inline-block text-left">
				<div>
					<Menu.Button className="bg-white border-2 inline-flex w-full justify-center rounded-md  border-neutral-200 px-2 py-1 text-xs font-medium text-gray-700 transition duration-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-100">
						<div className="flex items-center">
							Options
							<HiChevronDown
								className="-mr-1 ml-2 h-4 w-4"
								aria-hidden="true"
							/>
						</div>
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
					<Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						<Menu.Item>
							{({ active }) => (
								<Link
									to="/update-room"
									onClick={() => setEditRoom(id)}
									className={classNames(
										active
											? "bg-neutral-100 text-neutral-900"
											: "text-neutral-700",
										"group flex items-center px-4 py-2 text-xs"
									)}>
									<HiOutlinePencilAlt
										className="mr-2 h-4 w-4 text-neutral-300 group-hover:text-neutral-500"
										aria-hidden="true"
									/>
									Edit listing
								</Link>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<button
									// onClick={() => deleteRoom(_id)}
									onClick={openModal}
									className={classNames(
										active
											? "bg-neutral-100 text-neutral-900"
											: "text-neutral-700",
										"group flex w-full items-center px-4 py-2 text-xs"
									)}>
									<HiOutlineTrash
										className="mr-2 h-4 w-4 text-neutral-300 group-hover:text-neutral-500"
										aria-hidden="true"
									/>
									Delete listing
								</button>
							)}
						</Menu.Item>
					</Menu.Items>
				</Transition>
			</Menu>
		</>
	);
}

export default RoomDropdown;
