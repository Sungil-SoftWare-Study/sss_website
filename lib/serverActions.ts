"use server";

import fs from "fs/promises";
import path from "path";

async function readJsonFile(filePath: string) {
    const jsonDirectory = path.join(process.cwd(), "public");
    const fileContents = await fs.readFile(
        path.join(jsonDirectory, filePath),
        "utf8"
    );
    return JSON.parse(fileContents);
}

export async function getStudyInfo(studyCode: string): Promise<string> {
    const studyData = await readJsonFile("study_code.json");
    for (const generation of studyData) {
        const study = generation["study-code"].find((s: any) => s.code === studyCode);
        if (study) {
            return `${generation.date} ${study.name}`;
        }
    }
    return studyCode; // 매칭되는 정보가 없을 경우 원래 코드 반환
}