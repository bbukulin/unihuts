function ImageHeader({ file, onDelete }) {
	return (
		<div className="flex items-center justify-between space-y-2">
			<p className="text-sm font-medium text-neutral-900 ">{file.name}</p>
			<button
				type="button"
				onClick={() => onDelete(file)}
				className="text-sm text-neutral-300">
				Delete
			</button>
		</div>
	);
}

export default ImageHeader;
