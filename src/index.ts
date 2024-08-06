import { fetchAndParse } from "./parse";
import { buildReadme } from "./build-readme";
import { writeToFile } from "./write-to-file";

const create = async () => {
    const rssFeed = await fetchAndParse();
    const content = buildReadme(rssFeed);
    return await writeToFile(content);
};

create().then(() => console.log("Successfully written file"));
