import { useField } from "formik";

const PriceInput = ({ label, optional, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<div className="h-22">
			{meta.touched && meta.error ? (
				<div>
					<div className="flex items-center justify-between">
						<label
							htmlFor={props.id || props.name}
							className="block text-sm font-medium text-neutral-700">
							{label}
						</label>
						<p className="text-xs font-medium text-neutral-400">{optional}</p>
					</div>
					<div className="relative mt-1 rounded-md shadow-sm">
						<input
							{...field}
							{...props}
							className="block w-full rounded-md border-2 border-error-200 bg-neutral-50 py-2 px-3 text-neutral-800 shadow-sm transition duration-500 hover:border-error-400 hover:shadow-md focus:border-error-500 focus:outline-none focus:ring-error-500 sm:text-sm"
						/>
						<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
							<span className="text-neutral-500 sm:text-sm">HRK</span>
						</div>
					</div>
					<p className="mt-1 text-sm font-medium text-error-600">
						{meta.error}
					</p>
				</div>
			) : (
				<div>
					<div className="flex items-center justify-between">
						<label
							htmlFor={props.id || props.name}
							className="block text-sm font-medium text-neutral-700">
							{label}
						</label>
						<p className="text-xs font-medium text-neutral-400">{optional}</p>
					</div>
					<div className="relative mt-1">
						<input
							{...field}
							{...props}
							className="block w-full rounded-md border-2 border-neutral-200 bg-neutral-50 px-3 py-2 pr-12 text-neutral-800 placeholder-neutral-400 shadow-sm transition duration-500 hover:border-primary-400 hover:shadow-md focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
						/>
						<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
							<span className="text-neutral-500 sm:text-sm">HRK</span>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default PriceInput;
