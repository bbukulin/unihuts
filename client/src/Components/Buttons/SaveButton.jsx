import { BiHeart } from "react-icons/bi";

function SaveButton() {
	return (
		<button className="rounded-md bg-gray-100 p-1 text-gray-400 hover:text-gray-600">
			<BiHeart className="text-xl" />
		</button>
	);
}

export default SaveButton;
