import { HiPlusSm } from "react-icons/hi";

export default function NewAdButton() {
	return (
		<button
			type="button"
			className="inline-flex items-center rounded-md border border-primary-50 px-4 py-2 text-sm font-medium text-primary-50 transition duration-300 hover:border-primary-500 hover:bg-primary-900 hover:text-primary-50  focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2">
			<HiPlusSm className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
			New Ad
		</button>
	);
}
