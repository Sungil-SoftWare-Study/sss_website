import Introduction from "../layout/introduction";
import BlankPage from "../layout/blank";
import Sintroduction from "../layout/study_introduction";
import Activity from "../layout/study_activity";

export const metadata = {
	title: "Home",
};

export default function Home() {
	return (
		// <main className="bg-background-950">
		<main>
			<div className="min-h-screen flex items-center justify-center" id="home">
				<Introduction />
			</div>
			{/* <BlankPage /> */}
			<Sintroduction />
			<Activity />
		</main>
	);
}
