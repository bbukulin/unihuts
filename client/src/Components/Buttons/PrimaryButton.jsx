export default function PrimaryButton({ type, label, disabled }) {
	return (
		<button
			type={type}
			disabled={disabled}
			className="inline-flex items-center rounded-md border-2 border-primary-500 bg-primary-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition duration-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-800 focus:ring-offset-2">
			{label}
		</button>
	);
}
