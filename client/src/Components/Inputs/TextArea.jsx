import { useField } from "formik";

function TextArea({ label, placeholder, ...props }) {
	const [field, meta] = useField(props);

	return (
		<div className="h-32">
			{meta.touched && meta.error ? (
				<div>
					<label
						htmlFor={props.id || props.name}
						className="block text-sm font-medium text-neutral-700">
						{label}
					</label>
					<div className="mt-1">
						<textarea
							{...field}
							{...props}
							rows={3}
							className="mt-1 block w-full rounded-md border-2 border-error-200 bg-neutral-50 shadow-sm transition duration-500 hover:border-error-400 hover:shadow-md focus:border-error-500 focus:outline-none focus:ring-error-500 sm:text-sm"
							placeholder={placeholder}
						/>
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
						<textarea
							{...field}
							{...props}
							rows={3}
							className="mt-1 block w-full rounded-md border-2 border-neutral-200 bg-neutral-50 shadow-sm transition duration-500 hover:border-primary-400 hover:shadow-md focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
							placeholder={placeholder}
						/>
					</div>
				</div>
			)}
		</div>
	);
}

export default TextArea;
