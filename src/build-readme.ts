import { RSS, RssItem } from "./types";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import slugify from "slugify";

dayjs.extend(customParseFormat);

export function buildReadme(feed: RSS): string {
    const items = feed.rss.channel.item;
    return `
## Hi, I'm **Axel Leroy**.
 
I’m a developer from Paris passionate about technology as well as a photographer on my free time.

You can find me on <a href="https://toot.community/@axeleroy" rel="me">Mastodon</a> or
[my blog](https://axel.leroy.sh/blog), where I write articles on many subjects including development.

### Here are the **last 5 articles** I published:

${items
    .slice(0, 5)
    .map(rewriteUtm)
    .map(stringify)
    .join("\n")}

### Other links
 - [GitHub profile](https://github.com/axeleroy) 
 - [My personal Forgejo instance](https://git.axeleroy.com)
`;
}

function rewriteUtm(item: RssItem): RssItem {
    return ({
        ...item,
        link: item.link.replace("utm_source=rss", "utm_source=github_profile")
    })
}

function stringify(item: RssItem, index: number): string {
    const {title, link, pubDate, category} = item;
    const dateStr = dayjs(pubDate).format("YYYY-MM-DD");

    return `${index + 1}. [${title}](${link}) on ${dateStr} ${listCategories(category)}`
}

function listCategories(categories: string | string[]): string {
    if (Array.isArray(categories)) {
        return categories
        .map(buildCategoryUrl)
        .join(" ")
    } else {
        return buildCategoryUrl(categories)
    }
}

function buildCategoryUrl(category: string): string {
    const slug = slugify(category, { lower: true });
    return `[#${category}](https://axel.leroy.sh/blog/topic/${slug}?utm_source=github_profile)`;
}
