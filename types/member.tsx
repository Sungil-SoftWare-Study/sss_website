export interface Social {
	github?: string;
	ig?: string;
	lnkin?: string;
}

export interface StudyInfo {
	mentor: string[];
	mentee: string[];
}

export interface MemberRole {
	leader: boolean;
	mentor: boolean;
	mentee: boolean;
}

export interface Member {
	code: string;
	name: string;
	role: MemberRole;
	graduation: number;
	isRunning: boolean;
	description: string;
	studys: StudyInfo;
	socials: Social;
	records: string[];
}

export interface Generation {
	generation: string;
	year: number;	
	description: string;
	members: Member[];
}
