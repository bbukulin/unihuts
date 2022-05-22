import { useField } from "formik";

const CheckBox = ({ children, ...props }) => {
	const [field, meta] = useField({ ...props, type: "checkbox" });

	return (
		<div className="h-10">
			<div className="flex items-center">
				<input
					type="checkbox"
					{...field}
					{...props}
					className="h-5 w-5 cursor-pointer rounded border-2 border-neutral-200 bg-neutral-50 text-primary-500 shadow transition duration-500 focus:border-none focus:ring-primary-500"
				/>
				<label
					htmlFor={props.id || props.name}
					className="ml-2 block text-sm  text-neutral-700">
					{children}
				</label>
			</div>
			<div>
				{meta.touched && meta.error ? (
					<p className="ml-7 text-sm font-medium text-error-600">
						{meta.error}
					</p>
				) : null}
			</div>
		</div>
	);
};

export default CheckBox;
