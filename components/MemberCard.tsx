import React from "react";
import dynamic from "next/dynamic";
import { Member } from "@/types/member";
import { getStudyInfo } from "@/lib/serverActions";

const MemberCardClient = dynamic(() => import("./MemberCardClient"), {
	loading: () => <div>Loading...</div>,
	ssr: false,
});

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

export async function MemberCard({ member }: MemberCardProps) {
	const avatarUrl = member.socials.github
		? await getGitHubAvatar(member.socials.github)
		: null;

	const mentorStudies = await Promise.all(
		member.studys.mentor.map(getStudyInfo)
	);
	const menteeStudies = await Promise.all(
		member.studys.mentee.map(getStudyInfo)
	);

	return (
		<MemberCardClient
			member={member}
			avatarUrl={avatarUrl}
			mentorStudies={mentorStudies}
			menteeStudies={menteeStudies}
		/>
	);
}

export default MemberCard;
