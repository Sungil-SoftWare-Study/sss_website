import Image from "next/image";

export default function Sintroduction() {
	return (
		<section
			// className="min-h-screen bg-background-950 flex items-center justify-center"
			className="flex-2 flex flex-col items-center justify-around"
			id="about">
			{/* <div className="text-primary-50 text-2xl">스터디 소개</div> */}
			<div className="mt-40">
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
							<span className="text-2xl lg:text-4xl">
								Sung-il Software Study
							</span>
							&nbsp;는
							<br />
							선후배간의 <span className="text-2xl lg:text-4xl">멘토</span>,
							<span className="text-2xl lg:text-4xl"> 멘티</span>
							로 이루어지며 서로 자유롭게 의견을 나누고 <br />
							대회 준비, 프로젝트 개발 등 활동을 진행하며 실력과 경험을 늘리고
							있습니다.
						</p>
						<p className="text-slate-300 text-sx lg:text-sx mb-8">
							Sung-il Software Study는 2021년 초기 단장 &apos;김태한&apos;에
							의해 설립되어
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
