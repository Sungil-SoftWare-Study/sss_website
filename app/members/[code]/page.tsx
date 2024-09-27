import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
	Card,
	CardContent,
	CardHeader,
	CardFooter,
} from "@/components/ui/card";
import { Github, Instagram, Linkedin, ArrowLeft } from "lucide-react";
import { getMemberByCode } from "@/lib/api/api";
import { getStudyInfo } from "@/lib/serverActions";
import { Member, Generation } from "@/types/member";

interface MemberDetailProps {
	params: { code: string };
}

export const metadata = {
	title: "Member Detail",
};

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

export default async function MemberDetail({
	params,
}: MemberDetailProps): Promise<JSX.Element> {
	const { member, generation } = await getMemberByCode(params.code);

	if (!member || !generation) {
		notFound();
	}

	const avatarUrl = await getGitHubAvatar(member.socials.github);
	const mentorStudies = await Promise.all(
		member.studys.mentor.map(getStudyInfo)
	);
	const menteeStudies = await Promise.all(
		member.studys.mentee.map(getStudyInfo)
	);

	return (
		<main className="pt-32 pb-16 px-4 min-h-screen mt-20">
			<div className="container mx-auto max-w-2xl">
				<Link
					href="/members"
					className="flex items-center mb-6 text-primary-400 hover:text-primary-500 hover:animate-pulse">
					<ArrowLeft className="mr-2 hoer " size={20} />
					돌아가기
				</Link>
				<Card className="relative overflow-hidden">
					{member.role.leader && (
						<div className="absolute top-4 -right-16 w-52 h-14 rotate-45 bg-gradient-to-r from-orange-500 to-red-400 flex items-center justify-center border border-yellow-400">
							<span className="font-extrabold">Leader</span>
						</div>
					)}
					<CardHeader className="flex flex-col items-center space-y-4">
						<Image
							src={avatarUrl || "https://via.placeholder.com/128"}
							alt={member.name}
							width={128}
							height={128}
							className="rounded-full"
						/>
						<div className="text-center">
							<h1 className="text-2xl font-bold">{member.name}</h1>
							<div className="flex justify-center space-x-2 mt-2">
								{(["leader", "mentor", "mentee"] as const).map((role) => (
									<span
										key={role}
										className={`text-sm px-2 py-1 rounded ${
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
						<p className="text-center mb-4">
							&quot;&nbsp;{member.description}&nbsp;&quot;
						</p>
						<div className="text-center mb-2">
							{/* <h2 className="text-xl font-semibold">Information</h2> */}
							<p className="text-center mb-4">졸업 연도: {member.graduation}</p>
							<p className="text-center mb-4">
								활동 기간: {generation.year}({generation.generation}
								기)
								{member.isRunning ? (
									<span>&nbsp;&#126;&nbsp;현재</span>
								) : (
									<span>&nbsp;&#126;&nbsp;{member.graduation}&nbsp;졸업</span>
								)}
							</p>
						</div>
						<div className="grid grid-cols-2 gap-6">
							<div className="flex flex-col items-center">
								<h2 className="text-xl font-semibold mb-2">멘토링 스터디</h2>
								<ul className="list-disc list-inside">
									{mentorStudies.map((study: string, index: number) => (
										<li key={index}>{study}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-col items-center">
								<h2 className="text-xl font-semibold mb-2">멘티 스터디</h2>
								<ul className="list-disc list-inside">
									{menteeStudies.map((study: string, index: number) => (
										<li key={index}>{study}</li>
									))}
								</ul>
							</div>
						</div>
						<div className="mt-6 flex items-center flex-col justify-center">
							<h2 className="text-xl font-semibold mb-2">활동 내역</h2>
							<ul className="list-disc list-inside">
								{member.records.map((record: string, index: number) => (
									<li key={index}>{record}</li>
								))}
							</ul>
						</div>
					</CardContent>
					<CardFooter className="flex justify-center space-x-8">
						{member.socials.github && (
							<a
								href={member.socials.github}
								target="_blank"
								rel="noopener noreferrer">
								<Github size={48} />
							</a>
						)}
						{member.socials.ig && (
							<a
								href={member.socials.ig}
								target="_blank"
								rel="noopener noreferrer">
								<Instagram size={48} />
							</a>
						)}
						{member.socials.lnkin && (
							<a
								href={member.socials.lnkin}
								target="_blank"
								rel="noopener noreferrer">
								<Linkedin size={48} />
							</a>
						)}
					</CardFooter>
				</Card>
			</div>
		</main>
	);
}
