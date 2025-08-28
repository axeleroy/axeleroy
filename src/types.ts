export type RSS = {
    rss: RssFeed;
};

type RssFeed = {
    channel: Channel;
};

type Channel = {
    item: RssItem[];
};

export type RssItem = {
    title: string;
    description: string;
    link: string;
    pubDate: string;
    category: string[];
};
