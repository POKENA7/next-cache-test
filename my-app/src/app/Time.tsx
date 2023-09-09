import getCurrentTime from "@/app/api/currentTime/getCurrentTime";

const Time = async () => {
  const currentTime = await getCurrentTime();

  return <div>CurrentTime {currentTime}</div>;
};

export default Time;
