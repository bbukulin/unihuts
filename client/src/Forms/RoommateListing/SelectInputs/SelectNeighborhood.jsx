import React from "react";
import SelectInput from "../../../Components/Inputs/SelectInput";

const options = [
	{ value: "Bosutsko naselje", label: "Bosutsko naselje" },
	{ value: "Cvjetno naselje", label: "Cvjetno naselje" },
	{ value: "Donji grad", label: "Donji grad" },
	{ value: "Gornji grad", label: "Gornji grad / Centar" },
	{ value: "Industrijska četvrt", label: "Industrijska četvrt" },
	{ value: "Jug I", label: "Jug I" },
	{ value: "Jug II", label: "Jug II" },
	{ value: "Novi grad", label: "Novi Grad" },
	{ value: "Retfala", label: "Retfala" },
	{ value: "Sjenjak", label: "Sjenjak" },
	{ value: "Tvrđa", label: "Tvrđa" },
	{ value: "Uske njive", label: "Uske Njive" },
	{ value: "Vatrogasno naselje", label: "Vatrogasno Naselje" },
	{ value: "VIM", label: "Vij. Ivana Meštrovića" },
	{ value: "Zeleno polje", label: "Zeleno Polje" },
];

function Neighborhood() {
	return (
		<SelectInput name="desiredHood" label="Desired neighborhood">
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</SelectInput>
	);
}

export default Neighborhood;
