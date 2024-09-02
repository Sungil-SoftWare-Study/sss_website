import fs from "fs/promises";
import path from "path";
import { Generation, Member } from "@/types/member";

async function readJsonFile(filePath: string) {
	const jsonDirectory = path.join(process.cwd(), "public");
	const fileContents = await fs.readFile(
		path.join(jsonDirectory, filePath),
		"utf8"
	);
	return JSON.parse(fileContents);
}

export async function fetchMembers(): Promise<Generation[]> {
	return readJsonFile("study_members.json");
}

export async function getMemberByCode(
	code: string
): Promise<{ member: Member | undefined; generation: Generation | undefined }> {
	const generations = await fetchMembers();
	for (const generation of generations) {
		const member = generation.members.find((m) => m.code === code);
		if (member) return { member, generation };
	}
	return { member: undefined, generation: undefined };
}
