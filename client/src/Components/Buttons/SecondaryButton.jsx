export default function SecondaryButton({ type, label }) {
	return (
		<button
			type={type}
			className="items-center rounded-md border-2 border-primary-500 bg-transparent px-4 py-2 text-sm font-medium text-primary-500 transition duration-300 hover:bg-primary-100
            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
			{label}
		</button>
	);
}
