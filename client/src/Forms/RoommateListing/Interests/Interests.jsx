import CheckBoxPill from "../../../Components/Buttons/CheckBoxPill";

function Interests() {
	return (
		<div>
			<label
				htmlFor="interests"
				className="text-sm font-medium text-neutral-700">
				Choose your interests
			</label>
			<div className="mt-2 grid grid-cols-4 gap-x-4 gap-y-2">
				<CheckBoxPill label="Music" name="interests" value="music" />
				<CheckBoxPill label="Sport" name="interests" value="sport" />
				<CheckBoxPill label="Cooking" name="interests" value="cooking" />
				<CheckBoxPill label="Gym" name="interests" value="gym" />
				<CheckBoxPill label="Coding" name="interests" value="coding" />
				<CheckBoxPill label="Movies" name="interests" value="movies" />
				<CheckBoxPill label="Gaming" name="interests" value="gaming" />
				<CheckBoxPill label="Fashion" name="interests" value="fashion" />
			</div>
		</div>
	);
}

export default Interests;
