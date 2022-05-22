import CheckBoxPill from "../../../Components/Buttons/CheckBoxPill";

function NewRoommate() {
	return (
		<div>
			<label
				htmlFor="newRoommate"
				className="text-sm font-medium text-neutral-700">
				Your preferences for future roommate
			</label>
			<div className="mt-2 grid grid-cols-4 gap-x-4 gap-y-2">
				<CheckBoxPill label="Male" name="newRoommate" value="male" />
				<CheckBoxPill label="Female" name="newRoommate" value="female" />
				<CheckBoxPill label="Couple" name="newRoommate" value="couple" />
				<CheckBoxPill label="Smoker" name="newRoommate" value="smoker" />
				<CheckBoxPill label="Pet owner" name="newRoommate" value="pet owner" />
				<CheckBoxPill label="Student" name="newRoommate" value="student" />
				<CheckBoxPill label="Employed" name="newRoommate" value="employed" />
				<CheckBoxPill label="Anyone" name="newRoommate" value="anyone" />
			</div>
		</div>
	);
}

export default NewRoommate;
