import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Recruitment",
};

export default function Recruitment() {
	return (
		<main className="pt-32 pb-8 px-4 min-h-screen mt-10">
			<div className="container mx-auto">
				<h1 className="text-4xl font-bold mb-16 text-center">
					Member Recruitment
				</h1>
				<div className="flex justify-center items-center">
					<iframe
						src="https://docs.google.com/forms/d/e/1FAIpQLSe4Q_7fHpwgJXMliGyMjMjDpJi-THohasjcxPgZI1dmjdlRWQ/viewform?embedded=true"
						width="1920"
						height="1080"
						className="justify-center"></iframe>
				</div>
			</div>
		</main>
	);
}
