"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import NavLink from "./navlink";
import FooterLink from "./footerlink";

interface SubMenuItem {
	label: string;
	link: string;
}

interface MenuItem {
	menu: string;
	"sub-menu": SubMenuItem[];
}

const footerMenuData: MenuItem[] = [
	{
		menu: "About Us",
		"sub-menu": [
			{ label: "About Us", link: "/#about" },
			{ label: "Contact Us", link: "/Contact-us" },
		],
	},
	// Add more menu items as needed
];

const FooterMenu: React.FC = () => {
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		const hash = window.location.hash;
		if (hash) {
			setTimeout(() => {
				const element = document.querySelector(hash);
				if (element) {
					element.scrollIntoView({ behavior: "smooth" });
				}
			}, 100);
		}
	}, [pathname]);

	const handleLinkClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		path: string
	) => {
		e.preventDefault();
		if (path.startsWith("/#")) {
			const hash = path.substring(1);
			if (pathname !== "/") {
				router.push("/");
				setTimeout(() => {
					const element = document.querySelector(hash);
					if (element) {
						element.scrollIntoView({ behavior: "smooth" });
					}
				}, 100);
			} else {
				const element = document.querySelector(hash);
				if (element) {
					element.scrollIntoView({ behavior: "smooth" });
				}
			}
		} else if (path.startsWith("#")) {
			const element = document.querySelector(path);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		} else {
			router.push(path);
		}
	};

	return (
		<div className="flex flex-wrap justify-between">
			{footerMenuData.map((menuItem, index) => (
				<div key={index} className="flex flex-col mb-8 lg:mb-0 lg:mr-12">
					<p className="text-lg font-bold mb-4">{menuItem.menu}</p>
					<div className="space-y-1">
						{menuItem["sub-menu"].map((subItem, subIndex) => (
							<div key={subIndex}>
								<FooterLink
									href={subItem.link}
									label={subItem.label}
									onClick={(e) => handleLinkClick(e, subItem.link)}
								/>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default FooterMenu;
