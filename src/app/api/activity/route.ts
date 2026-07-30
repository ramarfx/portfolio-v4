import { NextResponse } from "next/server";

type GitHubEvent = Record<string, unknown>;

function formatEvent(event: GitHubEvent) {
  const repo = (event.repo as Record<string, string>)?.name ?? "-";
  const date = new Date(event.created_at as string).toLocaleString();

  switch (event.type) {
    case "PushEvent": {
      const payload = event.payload as Record<string, unknown>;
      const branch = (payload.ref as string).replace("refs/heads/", "");
      const commits = (payload.commits as { message: string }[]) || [];

      const commitMessages = commits
        .slice(0, 2)
        .map((c) => `- ${c.message}`)
        .join("\n");

      return `[${date}] PUSH to ${repo} (${branch})
${commitMessages}`;
    }

    case "CreateEvent": {
      const payload = event.payload as Record<string, unknown>;
      return `[${date}] CREATE ${payload.ref_type} "${payload.ref}" at ${repo}`;
    }

    default:
      return `[${date}] ${event.type} at ${repo}`;
  }
}

export async function GET() {
  try {
    const res = await fetch("https://api.github.com/users/ramarfx/events", {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch activity");
    }

    const data = (await res.json()) as GitHubEvent[];

    const logs = data.map((event) => formatEvent(event));

    return NextResponse.json(logs);
  } catch {
    return NextResponse.json({ message: "Error fetching activity" }, { status: 500 });
  }
}
