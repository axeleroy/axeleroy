import { XMLParser } from "fast-xml-parser";
import { RSS } from "./types";

const FEED_URL = "https://axel.leroy.sh/rss";

async function fetchFeedXml(): Promise<string> {
    const response = await fetch(FEED_URL, {
        headers: {
            "User-Agent": "GitHub README RSS",
        },
    });
    if (response.ok) {
        return await response.text();
    } else {
        return Promise.reject(await response.text());
    }
}

const parser = new XMLParser();

function parseXml(xmlString: string): RSS {
    return parser.parse(xmlString);
}

export async function fetchAndParse(): Promise<RSS> {
    const xmlString = await fetchFeedXml();
    return parseXml(xmlString);
}
