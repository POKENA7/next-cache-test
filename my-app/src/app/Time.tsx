"use client";

import getCurrentTime from "@/app/api/currentTime/getCurrentTime";
import { use, useEffect, useState } from "react";

const Time = () => {
  const [currentTime, setCurrentTime] = useState("");

  const fetchTime = async () => {
    const { currentTime, requestedCount } = await getCurrentTime();
    setCurrentTime(currentTime);
  };

  useEffect(() => {
    fetchTime();
  }, []);

  return <div>CurrentTime {currentTime}</div>;
};

export default Time;
