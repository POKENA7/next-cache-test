import getCurrentTime from "@/app/api/currentTime/getCurrentTime";

const Time = async () => {
  const currentTime = 100; // await getCurrentTime();

  return <div>CurrentTime {currentTime}</div>;
};

export default Time;
