import { NextRequest, NextResponse } from "next/server";

let requestedCount = 0;

const getCurrentTime = async () => {
  let d = new Date();

  let hour = d.getHours().toString().padStart(2, "0");
  let minute = d.getMinutes().toString().padStart(2, "0");
  let seconds = d.getSeconds().toString().padStart(2, "0");
  const currentTime = hour + ":" + minute + ":" + seconds;
  console.log(currentTime);

  requestedCount++;

  return { currentTime, requestedCount };
};

export async function GET(_req: NextRequest) {
  const data = await getCurrentTime();

  return NextResponse.json(data);
}

export const dynamic = "force-static";
// export const dynamic = "force-dynamic";
// export const revalidate = 10;
