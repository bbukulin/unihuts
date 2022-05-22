import React from "react";
import DatePicker from "react-datepicker";
import { useField, useFormikContext } from "formik";
import "react-datepicker/dist/react-datepicker.css";

function CustomDatePicker({ label, optional, ...props }) {
	const { setFieldValue, setFieldTouched, validateField, handleBlur } =
		useFormikContext();
	const [field, meta] = useField(props);

	return (
		<div className="h-22">
			<div className="flex items-center justify-between">
				<label
					htmlFor={props.id || props.name}
					className="block text-sm font-medium text-neutral-700">
					{label}
				</label>
				<p className="text-xs font-medium tracking-wide text-neutral-500">
					{optional}
				</p>
			</div>
			<DatePicker
				{...field}
				{...props}
				closeOnScroll={true}
				wrapperClassName="w-full"
				dateFormat="dd/MM/yyyy"
				className="w-full rounded-md border-2 border-neutral-200 bg-neutral-50 shadow-sm transition duration-500 hover:border-primary-400 hover:shadow-md focus:border-primary-500 focus:outline-none focus:ring-primary-500"
				selected={(field.value && new Date(field.value)) || null}
				onChange={(val) => {
					setFieldValue(field.name, val);
				}}
				onChangeRaw={(e) => {
					setFieldTouched(field.name, true, true);
				}}
				onCalendarClose={(val) => {
					validateField(props.name);
				}}
				onBlur={(e) => {
					handleBlur(e);
				}}
			/>
			<div>
				{meta.touched && meta.error ? (
					<p className="mt-1 text-sm font-medium text-error-600">
						{meta.error}
					</p>
				) : null}
			</div>
		</div>
	);
}

export default CustomDatePicker;
