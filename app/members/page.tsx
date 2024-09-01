import React from "react";
import { fetchMembers } from "@/lib/api/api";
import { Generation, Member } from "@/types/member";
import { Metadata } from "next";
import MemberCard from "@/components/MemberCard";

export const metadata: Metadata = {
	title: "역대 멤버",
};

export default async function Members(): Promise<JSX.Element> {
	const generations: Generation[] = await fetchMembers();

	return (
		<main className="pt-32 pb-16 px-4 min-h-screen mt-20">
			<div className="container mx-auto">
				<h1 className="text-4xl font-bold mb-8 text-center">역대 멤버</h1>
				{generations.map((generation: Generation) => (
					<section key={generation.generation} className="mb-12">
						<h2 className="text-2xl font-bold mb-4">
							Generation {generation.generation}: {generation.description}
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
							{generation.members.map((member: Member) => (
								<MemberCard key={member.code} member={member} />
							))}
						</div>
					</section>
				))}
			</div>
		</main>
	);
}
