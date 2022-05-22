import { useField } from "formik";
import { HiExclamationCircle } from "react-icons/hi";

const TextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<div className="h-22">
			{meta.touched && meta.error ? (
				<div>
					<label
						htmlFor={props.id || props.name}
						className="block text-sm font-medium text-neutral-700">
						{label}
					</label>
					<div className="relative mt-1 rounded-md shadow-sm">
						<input
							{...field}
							{...props}
							className="block w-full rounded-md border-2 border-error-200 bg-neutral-50 py-2 px-3 text-neutral-800 shadow-sm transition duration-500 hover:border-error-400 hover:shadow-md focus:border-error-500 focus:outline-none focus:ring-error-500 sm:text-sm"
						/>
						<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
							<HiExclamationCircle
								className="h-5 w-5 text-error-300"
								aria-hidden="true"
							/>
						</div>
					</div>
					<p className="mt-1 text-sm font-medium text-error-600">
						{meta.error}
					</p>
				</div>
			) : (
				<div>
					<label
						htmlFor={props.id || props.name}
						className="block text-sm font-medium text-neutral-700">
						{label}
					</label>
					<div className="mt-1">
						<input
							{...field}
							{...props}
							className="block w-full rounded-md border-2 border-neutral-200 bg-neutral-50 px-3 py-2 text-neutral-800 placeholder-neutral-400 shadow-sm transition duration-500 hover:border-primary-400 hover:shadow-md focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default TextInput;
