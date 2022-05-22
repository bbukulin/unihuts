/* eslint-disable react/prop-types */
import React from "react";
import { useField } from "formik";
import Select from "react-select";

function SelectInput({ label, ...props }) {
	const [field, meta, { setValue, setTouched }] = useField(props);

	const options = props.children.map((option) => ({
		value: option.props.value,
		label: option.props.children,
	}));

	const onChange = ({ value }) => {
		setValue(value);
	};

	const customStyles = {
		control: (base, state) => ({
			...base,
			background: "#F5F7FA",
			// match with the menu
			borderRadius: state.isFocused ? "6px 6px 6px 6px" : 6,
			// Overwrittes the different states of border
			borderColor: state.isFocused ? "#2BB0ED" : "#CBD2D9",
			// border width
			borderWidth: 2,
			// Removes weird border around container
			boxShadow: state.isFocused ? null : null,
			"&:hover": {
				// Overwrittes the different states of border
				borderColor: state.isFocused ? "#2BB0ED" : "#40C3F7",
			},
		}),
		menu: (base) => ({
			...base,
			// override border radius to match the box
			borderRadius: 6,
			// beautify the word cut by adding a dash see https://caniuse.com/#search=hyphens for the compatibility
			hyphens: "auto",
			// prevent menu to scroll y
			wordWrap: "break-word",
		}),
		menuList: (base) => ({
			...base,
		}),
		singleValue: (provided, state) => {
			const opacity = state.isDisabled ? 0.5 : 1;
			const transition = "opacity 300ms";

			return { ...provided, opacity, transition };
		},
	};

	return (
		<div className="h-22">
			<label
				htmlFor={props.id || props.name}
				className="
				text-sm
				font-medium text-neutral-700">
				{label}
			</label>
			<Select
				menuPortalTarget={document.querySelector("body")}
				defaultValue={options.find((option) => option.value === field.value)}
				options={options}
				onChange={onChange}
				onBlur={setTouched}
				styles={customStyles}
				isSearchable={false}
				placeholder="----- Select -----"
				className="mt-1"
			/>
			{meta.touched && meta.error ? (
				<p className="mt-1 text-sm font-medium text-error-600">{meta.error}</p>
			) : null}
		</div>
	);
}

export default SelectInput;
