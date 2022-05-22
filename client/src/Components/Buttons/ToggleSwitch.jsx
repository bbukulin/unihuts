import React from "react";
import { useField } from "formik";
import { Switch } from "@headlessui/react";

function ToggleSwitch({ label, ...props }) {
	const [field, meta, helpers] = useField(props);

	const handleChange = (newValue) => {
		helpers.setValue(newValue);
	};

	return (
		<div className="flex items-center">
			<div className="w-full">
				<Switch.Group as="div" className="flex items-center justify-between">
					<Switch.Label className="text-md font-medium text-neutral-700">
						{label}
					</Switch.Label>
					<Switch
						as="button"
						checked={field.value}
						onChange={handleChange}
						name={props.name}
						className={`${
							field.value ? "bg-primary-500" : "bg-neutral-200"
						} focus:shadow-outline relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none`}>
						{({ checked }) => (
							<span
								className={`${
									checked ? "translate-x-5" : "translate-x-0"
								} inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out`}
							/>
						)}
					</Switch>
				</Switch.Group>
			</div>
		</div>
	);
}

export default ToggleSwitch;
