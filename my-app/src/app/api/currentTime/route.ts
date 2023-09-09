import { NextRequest, NextResponse } from "next/server";

const getCurrentTime = async () => {
  let d = new Date();

  let hour = d.getHours().toString().padStart(2, "0");
  let minute = d.getMinutes().toString().padStart(2, "0");
  let seconds = d.getSeconds().toString().padStart(2, "0");
  const currentTime = hour + ":" + minute + ":" + seconds;
  console.log(currentTime);

  return currentTime;
};

export async function GET(_req: NextRequest) {
  const data = await getCurrentTime();

  return NextResponse.json(data);
}

export const revalidate = 10;
