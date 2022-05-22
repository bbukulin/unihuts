function CardSkeleton() {
	return (
		<div className="grid grid-cols-1 justify-items-center gap-x-36 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
			<div className="w-80 animate-pulse rounded-lg">
				<div className="h-56 w-80 rounded-t-lg bg-gray-200"></div>
				<div className="space-y-6 rounded-b-lg bg-white p-4">
					<div className="flex items-center justify-between">
						<div className="h-7 w-14 rounded-md bg-gray-200"></div>
						<div className="h-7 w-24 rounded-md  bg-gray-200"></div>
					</div>
					<div>
						<div className="mb-1 h-7 w-full rounded-md bg-gray-200"></div>
					</div>
					<div>
						<div className="mb-1 h-7 w-32 rounded-md bg-gray-200"></div>
					</div>
					<div className="flex items-center justify-between">
						<div className="mb-1 h-7 w-32 rounded-md bg-gray-200"></div>
						<div className="mb-1 h-7 w-32 rounded-md bg-gray-200"></div>
					</div>
				</div>
			</div>

			<div
				className="w-80 animate-pulse rounded-lg"
				style={{ animationDelay: "150ms" }}>
				<div className="h-56 w-80 rounded-t-lg bg-gray-200"></div>
				<div className="space-y-6 rounded-b-lg bg-white p-4">
					<div className="flex items-center justify-between">
						<div className="h-7 w-14 rounded-md bg-gray-200"></div>
						<div className="h-7 w-24 rounded-md  bg-gray-200"></div>
					</div>
					<div>
						<div className="mb-1 h-7 w-full rounded-md bg-gray-200"></div>
					</div>
					<div>
						<div className="mb-1 h-7 w-32 rounded-md bg-gray-200"></div>
					</div>
					<div className="flex items-center justify-between">
						<div className="mb-1 h-7 w-32 rounded-md bg-gray-200"></div>
						<div className="mb-1 h-7 w-32 rounded-md bg-gray-200"></div>
					</div>
				</div>
			</div>

			<div
				className="w-80 animate-pulse rounded-lg"
				style={{ animationDelay: "300ms" }}>
				<div className="h-56 w-80 rounded-t-lg bg-gray-200"></div>
				<div className="space-y-6 rounded-b-lg bg-white p-4">
					<div className="flex items-center justify-between">
						<div className="h-7 w-14 rounded-md bg-gray-200"></div>
						<div className="h-7 w-24 rounded-md  bg-gray-200"></div>
					</div>
					<div>
						<div className="mb-1 h-7 w-full rounded-md bg-gray-200"></div>
					</div>
					<div>
						<div className="mb-1 h-7 w-32 rounded-md bg-gray-200"></div>
					</div>
					<div className="flex items-center justify-between">
						<div className="mb-1 h-7 w-32 rounded-md bg-gray-200"></div>
						<div className="mb-1 h-7 w-32 rounded-md bg-gray-200"></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CardSkeleton;
