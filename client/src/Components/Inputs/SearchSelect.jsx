const SearchSelect = ({ labelText, name, value, handleChange, list }) => {
	return (
		<div>
			<label
				className="block text-sm font-medium text-neutral-700"
				htmlFor={name}>
				{labelText || name}
			</label>
			<select
				name={name}
				value={value}
				onChange={handleChange}
				className="block w-full rounded-md border-2 border-neutral-200 bg-neutral-50 px-4 py-2 text-neutral-800 shadow-sm transition duration-500 hover:border-primary-400 hover:shadow-md focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm">
				{list.map((itemValue, index) => {
					return (
						<option key={index} value={itemValue}>
							{itemValue}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default SearchSelect;
