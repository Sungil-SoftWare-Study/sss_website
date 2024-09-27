import React from "react";
import NavLink from "./navlink";
import Link from "next/link";

interface Link {
	path: string;
	label: string;
}

interface MenuOverlayProps {
	links: Link[];
	isOpen: boolean;
	onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, path: string) => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({
	links,
	isOpen,
	onLinkClick,
}) => {
	return (
		<div
			className={`md:hidden bg-background-900 bg-opacity-75 overflow-hidden transition-all duration-300 ease-in-out ${
				isOpen ? "max-h-screen" : "max-h-0"
			}`}>
			<ul className="flex flex-col py-4 items-center">
				{links.map((link, index) => (
					<li key={index} className="py-2 text-white hover:text-primary-400">
						<NavLink
							href={link.path}
							label={link.label}
							onClick={(e) => onLinkClick(e, link.path)}
						/>
					</li>
				))}
				<li className="py-2">
					<Link
						href="/apply"
						className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded"
						onClick={(e) => onLinkClick(e, "/apply")}>
						신청하기
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default MenuOverlay;
