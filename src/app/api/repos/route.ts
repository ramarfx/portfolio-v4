/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";


export async function GET() {
  try {
    const res = await fetch(
      "https://api.github.com/users/ramarfx/repos?sort=updated",
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
        next: { revalidate: 60 }, // cache 60 detik
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch repos");
    }

    const data = await res.json();

    const repos = data.map((repo: any) => ({
      name: repo.name,
      updated: new Date(repo.updated_at).toLocaleDateString(),
      url: repo.html_url,
      description: repo.description ?? '-',
      size: formatSize(repo.size)
    }));

    return NextResponse.json(repos);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching repositories", errors: error },
      { status: 500 }
    );
  }
}

function formatSize(sizeInKB: number) {
  const sizeInBytes = sizeInKB * 1024;

  if (sizeInBytes < 1024) {
    return `${sizeInBytes} B`;
  } else {
    return `${(sizeInBytes / 1024).toFixed()} KB`;
  }
}