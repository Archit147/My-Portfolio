"use server";

import { cacheLife } from "next/cache";
import { config } from "@/data/config";

// unauthenticated github api = 60 req/hr per ip; 5min cache -> ~12 req/hr
// throws on failure: errors aren't cached, so bad fetch retries next request
export async function getGithubStars(): Promise<number> {
  "use cache";
  cacheLife({ stale: 300, revalidate: 300 });

  const username = config.githubUsername?.trim();
  const repo = config.githubRepo?.trim();

  if (!username || !repo) {
    return 0;
  }

  const res = await fetch(
    `https://api.github.com/repos/${username}/${repo}`,
    { headers: { Accept: "application/vnd.github+json" } },
  );

  if (res.status === 404) {
    return 0;
  }

  if (!res.ok) {
    throw new Error(`GitHub API responded with ${res.status}`);
  }

  const data = await res.json();
  if (typeof data.stargazers_count !== "number") {
    throw new Error("Unexpected GitHub API response shape");
  }
  return data.stargazers_count;
}
