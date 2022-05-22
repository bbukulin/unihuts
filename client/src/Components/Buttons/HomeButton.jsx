import { HiOutlineArrowLeft } from "react-icons/hi";

export default function HomeButton() {
	return (
		<button
			type="button"
			className="inline-flex items-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-neutral-900 hover:text-neutral-600 focus:text-neutral-800
            focus:outline-none">
			<HiOutlineArrowLeft className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
			Home
		</button>
	);
}
