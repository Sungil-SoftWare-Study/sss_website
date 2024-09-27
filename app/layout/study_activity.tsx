export default function Activity() {
	return (
		<section
			// className="min-h-screen bg-background-950 flex items-center justify-center"
			className="min-h-screen flex items-center justify-center"
			id="activity">
			<div className="bg-black bg-opacity-50 rounded-lg ">
				<div className="flex justify-center items-center">
					<h1 className="text-3xl lg:text-4xl p-10 font-extrabold">
						What We Do
					</h1>
				</div>
				<div className="border-t border-primary-100 ml-10 mr-10 "></div>
				{/* <div className="grid grid-cols-1 xl:gird-cols-1 gap-4 mb-8"> */}
				<div className="grid grid-cols-1 xl:grid-cols-2 ">
					<div className="flex flex-col items-center p-10">대회 출전</div>
					<div className="flex flex-col items-start p-10">활동 설명</div>
				</div>
				<div className="grid grid-cols-1 xl:grid-cols-2 ">
					<div className="flex flex-col items-center p-10">정기 모임</div>
					<div className="flex flex-col items-start p-10">활동 설명</div>
				</div>
				<div className="grid grid-cols-1 xl:grid-cols-2 ">
					<div className="flex flex-col items-center p-10">호텔 연수</div>
					<div className="flex flex-col items-start p-10">활동 설명</div>
				</div>
			</div>
		</section>
	);
}
