import { RSS } from "./types";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export function buildReadme(feed: RSS): string {
    const items = feed.rss.channel.item;
    return `
## Hi, I'm **Axel Leroy**.
 
I’m a developer from Paris passionate about technology as well as a photographer on my free time.

You can find me on Mastodon or my blog, where I write articles on many subjects including development.

### Here are the **last 5 articles** I published:

${items
    .slice(0, 5)
    .map((item) => ({ ...item, link: item.link.replace("utm_source=rss", "utm_source=github_profile") }))
    .map((item, index) => `${index + 1}. [${item.title}](${item.link}) on ${dayjs(item.pubDate).format("YYYY-MM-DD")}`)
    .join("\n")}
`;
}
