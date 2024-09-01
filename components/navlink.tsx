import React from "react";

interface NavLinkProps {
	href: string;
	title: string;
	onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title, onClick }) => {
	return (
		<a
			href={href}
			onClick={onClick}
			className="block py-2 pl-3 pr-4 rounded md:p-0 sm:text-xl">
			{title}
		</a>
	);
};

export default NavLink;