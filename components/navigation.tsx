"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import NavLink from "@/components/navlink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./menuOver";

const navLinks = [
	{
		label: "홈으로",
		path: "/#home",
	},
	{
		label: "스터디 소개",
		path: "/#about",
	},
	{
		label: "스터디 활동",
		path: "/#activity",
	},
	{
		label: "역대 멤버",
		path: "/members",
	},
];

export default function Navigation() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

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
		setNavbarOpen(false);
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
		<nav className="fixed top-0 left-0 right-0 z-10 bg-opacity-100 transition-all duration-300 ease-in-out">
			<div
				className={`flex flex-wrap items-center justify-between mx-auto px-8 bg-background-900 bg-opacity-75 overflow-hidden transition-all duration-300 ease-in-out ${
					isScrolled ? "h-16" : "h-32"
				}`}>
				<Link href={"/"} className="font-semibold text-xl lg:text-xl">
					Sung-il Software Study
				</Link>
				<div className="mobile-menu block md:hidden">
					<button
						onClick={() => setNavbarOpen(!navbarOpen)}
						className="flex items-center px-3 py-2 border rounded border-slate-200 text-primary-50 hover:border-white hover:text-white">
						{navbarOpen ? (
							<XMarkIcon className="h-5 w-5" />
						) : (
							<Bars3Icon className="h-5 w-5" />
						)}
					</button>
				</div>
				<div className="hidden md:flex md:items-center md:w-auto" id="navbar">
					<ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 items-center">
						{navLinks.map((link, index) => (
							<li
								key={index}
								className="text-primary-50 hover:text-primary-400">
								<NavLink
									href={link.path}
									label={link.label}
									onClick={(e) => handleLinkClick(e, link.path)}
								/>
							</li>
						))}
						<li>
							<Link
								href="/apply"
								className={`bg-primary-500 hover:bg-primary-600 text-white font-bold rounded transition-all duration-300 ${
									isScrolled ? "text-sm py-2 px-4" : "text-xl py-4 px-8"
								}`}>
								신청하기
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<MenuOverlay
				links={navLinks}
				isOpen={navbarOpen}
				onLinkClick={handleLinkClick}
			/>
		</nav>
	);
}
