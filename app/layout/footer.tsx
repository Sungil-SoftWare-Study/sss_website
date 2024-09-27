"use client";
import FooterMenu from "../../components/footer_menu";
import SocialMediaLinks from "./links";

export default function Footer() {
	return (
		<footer className="flex flex-col justify-between m-20">
			<div className="flex flex-col justify-center items-center">
				<p className="text-primary-50 mb-1 text-xl font-extrabold">
					<span className="text-primary-500">S</span>ung-il{" "}
					<span className="text-primary-500">S</span>oftware{" "}
					<span className="text-primary-500">S</span>tudy
				</p>
				<div className="text-primary-50 text-sm">
					Developing, Studying, Dreaming, Growing, and Advancing as a group of
					students.
				</div>
			</div>
			<div className="border-t border-gray-600 mt-4 mb-4"></div>
			{/* <div className="flex justify-start">
			</div> */}
			<FooterMenu />
			<div className="mt-10 mb-10 flex justify-between items-center">
				{/* links */}
				<p className="mr-10 text-sm">
					COPYRIGHT ⓒ 2024 SUNG-IL SOFTWARE STUDY RIGHTS RESERVED.
				</p>
				<SocialMediaLinks />
			</div>
		</footer>
	);
}
