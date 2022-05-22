import { useField } from "formik";

const CheckBoxIcon = ({ label, icon, ...props }) => {
	const [field, meta] = useField({ ...props, type: "checkbox" });

	return (
		<div className="flex flex-col items-center">
			<input
				{...field}
				{...props}
				type="checkbox"
				className="absolute h-14 w-14 cursor-pointer opacity-0"
			/>
			<div className="flex h-14 w-14 flex-col items-center justify-center rounded-md border-2 border-neutral-200 bg-neutral-50 shadow-sm transition duration-300">
				<img src={icon} className="block h-9 w-9" />
			</div>
			<label
				htmlFor={props.id || props.name}
				className="mt-1 text-xs text-neutral-700">
				{label}
			</label>
		</div>
	);
};
export default CheckBoxIcon;
