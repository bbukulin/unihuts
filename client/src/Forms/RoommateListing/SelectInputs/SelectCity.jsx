import React from "react";
import SelectInput from "../../../Components/Inputs/SelectInput";

const options = [{ value: "Osijek", label: "Osijek" }];

function SelectCity() {
	return (
		<SelectInput name="desiredCity" label="Desired city">
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</SelectInput>
	);
}

export default SelectCity;
