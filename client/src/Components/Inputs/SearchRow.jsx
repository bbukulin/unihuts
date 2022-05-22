const SearchRow = ({ type, name, value, handleChange, labelText }) => {
	return (
		<div>
			<label
				className="block text-sm font-medium text-neutral-700"
				htmlFor={name}>
				{labelText || name}
			</label>
			<input
				type={type}
				value={value}
				name={name}
				onChange={handleChange}
				className="block w-full rounded-md border-2 border-neutral-200 bg-neutral-50 py-2 px-3 text-neutral-800 placeholder-neutral-400 shadow-sm transition duration-500 hover:border-primary-400 hover:shadow-md focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm "
			/>
		</div>
	);
};

export default SearchRow;
