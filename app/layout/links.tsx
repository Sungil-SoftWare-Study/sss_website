import React from "react";
import {
	GithubIcon,
	Github,
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
	Youtube,
	LucideIcon,
} from "lucide-react";

interface SocialMediaButtonProps {
	platform: string;
	url: string;
}

interface SocialLink {
	platform: string;
	url: string;
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
	platform,
	url,
}) => {
	const getIcon = (platform: string): LucideIcon => {
		switch (platform.toLowerCase()) {
			case "github":
				return GithubIcon;
			case "facebook":
				return Facebook;
			case "twitter":
				return Twitter;
			case "instagram":
				return Instagram;
			case "linkedin":
				return Linkedin;
			case "youtube":
				return Youtube;
			default:
				return Github; // Default icon, you can change this
		}
	};

	const Icon = getIcon(platform);

	const handleClick = () => {
		window.open(url, "_blank", "noopener,noreferrer");
	};

	return (
		<button
			onClick={handleClick}
			className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center"
			aria-label={`Visit our ${platform} page`}>
			<Icon size={24} />
		</button>
	);
};

const SocialMediaLinks: React.FC = () => {
	const socialLinks: SocialLink[] = [
		{
			platform: "Instagram",
			url: "https://www.instagram.com/sungil_sss/",
		},
		{
			platform: "Youtube",
			url: "https://www.youtube.com/@SungilSoftwareStudy",
		},
		{
			platform: "Github",
			url: "https://github.com/Sungil-SoftWare-Study",
		},
	];

	return (
		<div className="flex space-x-4">
			{socialLinks.map((link, index) => (
				<SocialMediaButton
					key={index}
					platform={link.platform}
					url={link.url}
				/>
			))}
		</div>
	);
};

export default SocialMediaLinks;
