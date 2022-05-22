const BulletSteps = ({ childrenArray, step }) => {
	return (
		<nav className="flex items-center justify-center">
			<p className="text-xs font-medium text-neutral-700 md:font-semibold">
				STEP {step + 1} OF {childrenArray.length}
			</p>
			<ol role="list" className="ml-8 flex items-center space-x-3">
				{childrenArray.map((child, index) => (
					<li key={child.props.label}>
						{step === index ? (
							<div
								className="relative flex items-center justify-center"
								aria-current="child">
								<span
									className="absolute  flex h-5 w-5 p-px"
									aria-hidden="true">
									<span className=" h-full w-full rounded-full bg-primary-100" />
								</span>
								<span
									className="relative  block h-2.5 w-2.5 rounded-full bg-primary-500"
									aria-hidden="true"></span>
							</div>
						) : step > index ? (
							<div className="block h-2.5 w-2.5 rounded-full bg-primary-600"></div>
						) : (
							<div className="block h-2.5 w-2.5 rounded-full bg-primary-200 "></div>
						)}
					</li>
				))}
			</ol>
		</nav>
	);
};

export default BulletSteps;
