import Link from "next/link";

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
			{ label: "About Us", link: "/About Us" },
			{ label: "Contact Us", link: "/Contact US" },
		],
	},
];

const FooterMenu: React.FC = () => {
	return (
		<div className="flex">
			{footerMenuData.map((menuItem, index) => (
				<div key={index} className="flex flex-col lg:mr-40 mr-10">
					<p className="lg:text-2xl font-bold mb-2">{menuItem.menu}</p>
					<ul>
						{menuItem["sub-menu"].map((subItem, subIndex) => (
							<li key={subIndex} className="mb-1">
								<Link
									href={subItem.link}
									className="text-gray-300 hover:text-gray-500">
									{subItem.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

export default FooterMenu;
