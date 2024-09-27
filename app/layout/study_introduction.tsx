import Image from "next/image";

export default function Sintroduction() {
	return (
		<section
			// className="min-h-screen bg-background-950 flex items-center justify-center"
			className="flex-2 flex flex-col items-center justify-around"
			id="about">
			{/* <div className="text-primary-50 text-2xl">스터디 소개</div> */}
			<div className="mt-40 bg-black bg-opacity-50 rounded-lg ">
				<div className="flex justify-center items-center">
					<h1 className="text-3xl lg:text-4xl p-10 font-extrabold">
						What is Sung-il Software Study?
					</h1>
				</div>
				<div className="border-t border-primary-100 ml-10 mr-10 "></div>
				{/* <div className="grid grid-cols-1 xl:gird-cols-1 gap-4 mb-8"> */}
				<div className="grid grid-cols-1 xl:grid-cols-2 ">
					<div className="flex flex-col items-center p-10">
						<Image
							src={"/imgs/banner-bg.png"}
							width={700}
							height={0}
							alt="study"
							className="rounded-xl"
						/>
					</div>
					<div className="flex flex-col items-start p-10">
						<p className="text-sm lg:text-xl mb-8">
							<span className="text-2xl font-bold lg:text-4xl">
								Sung-il Software Study
							</span>
							&nbsp;는
							<br />
							선후배간의{" "}
							<span className="text-2xl font-bold lg:text-4xl">멘토</span>,
							<span className="text-2xl font-bold lg:text-4xl">
								&nbsp;멘티&nbsp;
							</span>
							로 이루어지며 서로 자유롭게 의견을 나누고 <br />
							대회 준비, 프로젝트 개발 등 활동을 진행하며 실력과 경험을 늘리고
							있습니다.
						</p>
						<p className="text-slate-300 text-sx lg:text-sx mb-8">
							Sung-il Software Study는 2021년 작은 스터디에서 시작하여 현재는
							수많은 스터디원들과 함께하고 있습니다.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-1 xl:grid-cols-2"></div>
			</div>
		</section>
	);
}
