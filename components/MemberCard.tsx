"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
	Card,
	CardContent,
	CardHeader,
	CardFooter,
} from "@/components/ui/card";
import { Github, Instagram, Linkedin } from "lucide-react";
import { Member } from "@/types/member";
import { getStudyInfo } from "@/lib/serverActions";

interface MemberCardProps {
	member: Member;
}

async function getGitHubAvatar(
	githubUrl: string | undefined
): Promise<string | null> {
	if (!githubUrl) return null;
	const username = githubUrl.split("/").pop();
	const token = process.env.GITHUB_TOKEN;

	try {
		const response = await fetch(`https://api.github.com/users/${username}`, {
			headers: {
				Authorization: `token ${token}`,
			},
		});
		if (!response.ok) throw new Error("Failed to fetch GitHub avatar");
		const data = await response.json();
		return data.avatar_url;
	} catch (error) {
		console.error("Error fetching GitHub avatar:", error);
		return null;
	}
}

export function MemberCard({ member }: MemberCardProps) {
	const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
	const [mentorStudies, setMentorStudies] = useState<string[]>(
		member.studys.mentor
	);
	const [menteeStudies, setMenteeStudies] = useState<string[]>(
		member.studys.mentee
	);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			// Fetch avatar
			if (member.socials.github) {
				const avatarUrl = await getGitHubAvatar(member.socials.github);
				setAvatarUrl(avatarUrl);
			}

			// Fetch study info
			const mentorPromises = member.studys.mentor.map(getStudyInfo);
			const menteePromises = member.studys.mentee.map(getStudyInfo);
			const [mentorResults, menteeResults] = await Promise.all([
				Promise.all(mentorPromises),
				Promise.all(menteePromises),
			]);
			setMentorStudies(mentorResults);
			setMenteeStudies(menteeResults);

			setIsLoaded(true);
		};

		fetchData();
	}, [member]);

	if (!isLoaded) {
		return (
			<Card className="h-full hover:shadow-lg transition-shadow duration-200">
				<CardHeader className="flex flex-row items-center space-x-4">
					<div className="w-16 h-16 bg-gray-200 rounded-full"></div>
					<div>
						<h3 className="text-lg font-semibold">{member.name}</h3>
					</div>
				</CardHeader>
				<CardContent>
					<p className="text-center mb-4">Loading...</p>
				</CardContent>
			</Card>
		);
	}

	return (
		<Link href={`/members/${member.code}`}>
			<Card className="relative overflow-hidden h-full hover:shadow-lg transition-shadow duration-200">
				{member.role.leader && (
					<div className="absolute top-6 -right-16 w-52 h-10 rotate-45 bg-gradient-to-r from-orange-500 to-red-400 flex items-center justify-center border border-yellow-400">
						<span className="font-extrabold">Leader</span>
					</div>
				)}
				<CardHeader className="flex flex-row items-center space-x-4">
					<Image
						src={avatarUrl || "https://via.placeholder.com/64"}
						alt={member.name}
						width={64}
						height={64}
						className="rounded-full"
					/>
					<div>
						<h3 className="text-lg font-semibold">{member.name}</h3>
						<div className="flex space-x-2">
							{(["leader", "mentor", "mentee"] as const).map((role) => (
								<span
									key={role}
									className={`text-xs px-2 py-1 rounded ${
										member.role[role]
											? "bg-primary-500 text-white"
											: "bg-gray-200 text-gray-600"
									}`}>
									{role}
								</span>
							))}
						</div>
					</div>
				</CardHeader>
				<CardContent>
					<p className="text-center mb-4 line-clamp-4">
						&quot;&nbsp;{member.description}&nbsp;&quot;
					</p>
					<div className="grid grid-cols-2 gap-4">
						<div>
							<h4 className="font-semibold">Mentor</h4>
							<ul className="list-disc list-inside">
								{mentorStudies.slice(0, 2).map((study, index) => (
									<li key={index} className="truncate">
										{study}
									</li>
								))}
								{mentorStudies.length > 2 && <li>...</li>}
							</ul>
						</div>
						<div>
							<h4 className="font-semibold">Mentee</h4>
							<ul className="list-disc list-inside">
								{menteeStudies.slice(0, 2).map((study, index) => (
									<li key={index} className="truncate">
										{study}
									</li>
								))}
								{menteeStudies.length > 2 && <li>...</li>}
							</ul>
						</div>
					</div>
				</CardContent>
				<CardFooter className="grid grid-cols-2 gap-4">
					<div className="flex space-x-4">
						{member.socials.github && (
							<a
								href={member.socials.github}
								target="_blank"
								rel="noopener noreferrer">
								<Github size={20} />
							</a>
						)}
						{member.socials.ig && (
							<a
								href={member.socials.ig}
								target="_blank"
								rel="noopener noreferrer">
								<Instagram size={20} />
							</a>
						)}
						{member.socials.lnkin && (
							<a
								href={member.socials.lnkin}
								target="_blank"
								rel="noopener noreferrer">
								<Linkedin size={20} />
							</a>
						)}
					</div>
				</CardFooter>
			</Card>
		</Link>
	);
}

export default MemberCard;
