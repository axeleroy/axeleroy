export type RSS = {
    rss: RssFeed;
};

type RssFeed = {
    channel: Channel;
};

type Channel = {
    item: RssItem[];
};

type RssItem = {
    title: string;
    description: string;
    link: string;
    pubDate: string;
    category: string[];
};
// Sun, 04 Aug 2024 14:01:46
