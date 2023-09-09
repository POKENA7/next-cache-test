import getCurrentTime from "@/app/api/currentTime/getCurrentTime";

const Time = async () => {
  const { currentTime, requestedCount } = await getCurrentTime();

  return (
    <div>
      CurrentTime {currentTime} RequestedCount {requestedCount}
    </div>
  );
};

export default Time;
