import * as fs from "node:fs/promises";

export async function writeToFile(content: string) {
    await fs.writeFile("./README.md", content);
}
