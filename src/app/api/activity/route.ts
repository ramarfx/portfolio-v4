import { NextResponse } from "next/server";

function formatEvent(event: any) {
  const repo = event.repo.name;
  const date = new Date(event.created_at).toLocaleString();

  switch (event.type) {
    case "PushEvent": {
      const branch = event.payload.ref.replace("refs/heads/", "");
      const commits = event.payload.commits || [];

      const commitMessages = commits
        .slice(0, 2)
        .map((c: any) => `- ${c.message}`)
        .join("\n");

      return `[${date}] PUSH to ${repo} (${branch})
${commitMessages}`;
    }

    case "CreateEvent":
      return `[${date}] CREATE ${event.payload.ref_type} "${event.payload.ref}" at ${repo}`;

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

    const data = await res.json();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const logs = data.map((event: any) => {
      const date = new Date(event.created_at).toLocaleString();

      return formatEvent(event);
    });


    return NextResponse.json(logs);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching activity" },
      { status: 500 },
    );
  }
}
