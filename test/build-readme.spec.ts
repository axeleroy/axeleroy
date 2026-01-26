import { parseXml } from "../src/parse";
import { testData } from "./test-data";
import { buildReadme } from "../src/build-readme";

describe("BuildReadme", () => {
    it("should generate markdown from XML", () => {
        // GIVEN
        const rss = parseXml(testData);

        // WHEN
        const result = buildReadme(rss);

        // THEN
        expect(result).toEqual(`
## Hi, I'm **Axel Leroy**.
 
I’m a developer from Paris passionate about technology as well as a photographer on my free time.

You can find me on <a href="https://toot.community/@axeleroy" rel="me">Mastodon</a> or
[my blog](https://axel.leroy.sh/blog), where I write articles on many subjects including development.

### Here are the **last 5 articles** I published:

1. [How to set Firefox’s language in Cypress](https://axel.leroy.sh/blog/how-to-set-firefox-language-cypress?utm_source=github_profile) on 2024-08-01 [#Tips and tricks](https://axel.leroy.sh/blog/topic/tips-and-tricks?utm_source=github_profile) [#Web development](https://axel.leroy.sh/blog/topic/web-development?utm_source=github_profile)
2. [Creating the /feeds page to share the RSS feeds I follow](https://axel.leroy.sh/blog/creating-the-feeds-page?utm_source=github_profile) on 2024-07-19 [#Web development](https://axel.leroy.sh/blog/topic/web-development?utm_source=github_profile) [#Blog](https://axel.leroy.sh/blog/topic/blog?utm_source=github_profile)
3. [An ESLint rule to require the sizes attribute for Next.js’s <Image>](https://axel.leroy.sh/blog/eslint-rule-require-image-sizes-nextjs?utm_source=github_profile) on 2024-07-18 [#Web development](https://axel.leroy.sh/blog/topic/web-development?utm_source=github_profile) [#Next.js](https://axel.leroy.sh/blog/topic/next.js?utm_source=github_profile) [#React](https://axel.leroy.sh/blog/topic/react?utm_source=github_profile) [#Tips and Tricks](https://axel.leroy.sh/blog/topic/tips-and-tricks?utm_source=github_profile)
4. [I rewrote my website… again, but with Next.js this time!](https://axel.leroy.sh/blog/website-rewrite-nextjs?utm_source=github_profile) on 2024-07-15 [#Blog](https://axel.leroy.sh/blog/topic/blog?utm_source=github_profile) [#Personal projects](https://axel.leroy.sh/blog/topic/personal-projects?utm_source=github_profile) [#Web development](https://axel.leroy.sh/blog/topic/web-development?utm_source=github_profile) [#Next.js](https://axel.leroy.sh/blog/topic/next.js?utm_source=github_profile) [#React](https://axel.leroy.sh/blog/topic/react?utm_source=github_profile)
5. [Shaving every kilobytes possible off your website](https://axel.leroy.sh/blog/shaving-kilobytes-off-website?utm_source=github_profile) on 2020-05-30 [#Tips and tricks](https://axel.leroy.sh/blog/topic/tips-and-tricks?utm_source=github_profile) [#Web development](https://axel.leroy.sh/blog/topic/web-development?utm_source=github_profile) [#CSS](https://axel.leroy.sh/blog/topic/css?utm_source=github_profile)

### Other links
 - [GitHub profile](https://github.com/axeleroy) 
 - [my personal Forgejo instance](https://git.axeleroy.com)
`);
    });
});
