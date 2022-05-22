import { useField } from "formik";

const CheckBoxPill = ({ label, ...props }) => {
	const [field, meta] = useField({ ...props, type: "checkbox" });

	return (
		<div>
			<div>
				<input
					{...field}
					{...props}
					type="checkbox"
					className="absolute h-8 w-20 cursor-pointer rounded-3xl opacity-0"
				/>
				<div className="flex h-8 w-20 items-center justify-center rounded-3xl border-2 border-neutral-200 bg-neutral-50 shadow-sm transition duration-300">
					<label
						htmlFor={props.id || props.name}
						className="text-sm font-medium  text-neutral-700">
						{label}
					</label>
				</div>
			</div>
		</div>
	);
};
export default CheckBoxPill;
