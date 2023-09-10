import { useState, useEffect } from "react";

const useTimer = (
  timerStarted,
  startingPointInSeconds = 0,
  onTimerComplete
) => {
  const [seconds, setSeconds] = useState(startingPointInSeconds);
  const reset = () => {
    setSeconds(startingPointInSeconds);
  };

  useEffect(() => {
    let timer;

    if (timerStarted) {
      if (seconds === 0) {
        onTimerComplete();
      } else if (seconds > 0) {
        timer = setInterval(() => {
          setSeconds((s) => s - 1);
        }, 1000);
      }
    }

    return () => timer && clearInterval(timer);
  }, [timerStarted, startingPointInSeconds, onTimerComplete]);

  return {
    seconds,
    reset,
  };
};

export default useTimer;
