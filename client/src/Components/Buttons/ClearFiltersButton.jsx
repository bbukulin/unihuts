import { HiX } from "react-icons/hi";

export default function ClearFiltersButton({ click, disabled }) {
	return (
		<button
			disabled={disabled}
			onClick={click}
			type="button"
			className="inline-flex items-center rounded-md border border-primary-500 bg-primary-700 px-4 py-2 text-sm font-medium text-primary-50 shadow-sm transition duration-300 hover:border-primary-400 hover:bg-primary-800 hover:text-white hover:shadow-md  focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2">
			<HiX className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
			Reset
		</button>
	);
}
