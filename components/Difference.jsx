
export default function Difference() {
  return (
    <section className="container grid md:grid-cols-2 md:px-8">
			<header className="w-4/5 mx-auto md:w-auto text-center md:text-left">
				<br />
				<h2 className="text-3xl xl:text-4xl">
					<strong>What’s different about Manage?</strong>
				</h2>
				<p className="lightGray py-3 md:pr-12">
					Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
				</p>
			</header>
			<main>
				<br />
				<div className="pl-4">
					<div className="flex flex-wrap items-center bg-lightPaleRed md:justify-end">
						<div className="red-btn w-16 md:w-20 py-2 mr-2 md:mr-3">01</div>
						<h4 className="md:w-9/12">
							<strong>Track company-wide progress</strong>
						</h4>
					</div>
					<div className="text-sm leading-relaxed lightGray py-4 md:w-9/12 mr-0 ml-auto md:py-2">
						See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.
					</div>
				</div>
				<br />
				<div className="pl-4">
					<div className="flex flex-wrap items-center bg-lightPaleRed md:justify-end">
						<div className="red-btn w-16 md:w-20 py-2 mr-2 md:mr-3">02</div>
						<h4 className="md:w-9/12">
							<strong>Advanced built-in reports</strong>
						</h4>
					</div>
					<div className="text-sm leading-relaxed lightGray py-4 md:w-9/12 mr-0 ml-auto md:py-2">
						Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.
					</div>
				</div>
				<br />
				<div className="pl-4">
					<div className="flex flex-wrap items-center bg-lightPaleRed md:justify-end">
						<div className="red-btn w-16 md:w-20 py-2 mr-2 md:mr-3">03</div>
						<h4 className="md:w-9/12">
							<strong>Everything you need in one place</strong>
						</h4>
					</div>
					<div className="text-sm leading-relaxed lightGray py-4 md:w-9/12 mr-0 ml-auto md:py-2">
						Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.
					</div>
				</div>
				<br />
			</main>
		</section>
  );
}