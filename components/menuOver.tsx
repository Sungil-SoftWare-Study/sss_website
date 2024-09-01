import React from "react";
import NavLink from "./navlink";

interface Link {
	path: string;
	title: string;
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
			className={`md:hidden bg-background-900 bg-opacity-45 overflow-hidden transition-all duration-300 ease-in-out ${
				isOpen ? "max-h-60" : "max-h-0"
			}`}>
			<ul className="flex flex-col py-4 items-center">
				{links.map((link, index) => (
					<li key={index} className="py-2">
						<NavLink
							href={link.path}
							title={link.title}
							onClick={(e) => onLinkClick(e, link.path)}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MenuOverlay;
