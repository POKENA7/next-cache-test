import { cache } from "react";
import { getBaseUrl } from "../../getBaseUrl";
import "server-only";

export default async function getCurrentTime() {
  const res = await fetch(`${getBaseUrl()}/api/currentTime`, {
    next: { revalidate: 5 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  const currentTime = await res.json();

  return currentTime;
}
