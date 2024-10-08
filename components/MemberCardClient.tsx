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

interface MemberCardClientProps {
	member: Member;
	avatarUrl: string | null;
	mentorStudies: string[];
	menteeStudies: string[];
}

export function MemberCardClient({
	member,
	avatarUrl,
	mentorStudies,
	menteeStudies,
}: MemberCardClientProps) {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	if (!isLoaded) {
		return <div>Loading...</div>; // 또는 스켈레톤 로더
	}

	return (
		<Link href={`/members/${member.code}`}>
			<Card className="relative overflow-hidden h-full hover:shadow-lg transition-shadow duration-200">
				{member.role.leader && (
					<div className="absolute top-6 -right-16 w-52 h-10 rotate-45 bg-gradient-to-r from-orange-400 to-red-400 flex items-center justify-center border border-yellow-400">
						<span className="font-extrabold">Leader</span>
					</div>
				)}
				<CardHeader className="flex flex-row items-center space-x-4">
					<Image
						src={avatarUrl || "/default-avatar.png"}
						alt={member.name}
						width={64}
						height={64}
						className="rounded-full"
					/>
					<div>
						<h3 className="text-lg mb-1 font-semibold">{member.name}</h3>
						<div className="flex space-x-2">
							{(["leader", "mentor", "mentee"] as const).map((role) => (
								<span
									key={role}
									className={`text-xs px-2 py-1 rounded ${
										member.role[role]
											? "bg-primary-400 text-white"
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

export default MemberCardClient;
