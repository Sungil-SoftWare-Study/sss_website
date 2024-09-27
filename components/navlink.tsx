import React from "react";

interface NavLinkProps {
	href: string;
	label: string;
	onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, onClick }) => {
	return (
		<a
			href={href}
			onClick={onClick}
			className="block py-2 pl-3 pr-4 rounded md:p-0 sm:text-xl">
			{label}
		</a>
	);
};

export default NavLink;
