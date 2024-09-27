import React from "react";

interface NavLinkProps {
	href: string;
	label: string;
	onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const FooterLink: React.FC<NavLinkProps> = ({ href, label, onClick }) => {
	return (
		<a href={href} onClick={onClick} className="block rounded text-sm">
			{label}
		</a>
	);
};

export default FooterLink;
