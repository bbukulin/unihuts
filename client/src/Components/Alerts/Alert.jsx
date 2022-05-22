import { useAppContext } from "../../Context/AppContext";

export default function Alert() {
	const { alertType, alertText } = useAppContext();

	return (
		<>
			<div
				className={`text-sm text-${alertType}-500 rounded-md bg-white p-2 py-3 shadow-sm`}>
				<p>{alertText}</p>
			</div>
		</>
	);
}
