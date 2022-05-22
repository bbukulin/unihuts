import { HiOutlineChevronDoubleLeft } from "react-icons/hi";

export default function BackButton({ onClick }) {
	return (
		<button
			onClick={onClick}
			type="button"
			className="inline-flex items-center rounded-md border-2 border-neutral-200 bg-transparent px-4 py-2 text-sm font-medium text-neutral-500 transition duration-500 hover:bg-neutral-100 hover:text-neutral-600
            focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2">
			<HiOutlineChevronDoubleLeft
				className="-ml-1 mr-2 h-5 w-5"
				aria-hidden="true"
			/>
			Back
		</button>
	);
}
