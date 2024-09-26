import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "./layout/footer";

const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: "SSS | %s",
		default: "Loading",
	},
	description: "Sungil Software Study",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={jetbrains.className}>
				<Navigation />
				{children}
				<Footer />
			</body>
		</html>
	);
}
