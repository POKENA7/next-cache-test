import { getBaseUrl } from "../../getBaseUrl";

export default async function getCurrentTime() {
  const res = await fetch(`${getBaseUrl()}/api/currentTime`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  const currentTime = await res.json();

  return currentTime;
}
