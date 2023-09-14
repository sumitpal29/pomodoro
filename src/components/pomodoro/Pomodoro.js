import { useState, useMemo, useCallback, useEffect } from "react";
import { Button } from "antd";
import { CircularProgressbar } from "react-circular-progressbar";
import useTimer from "./useTimer";
import { minsToSec, secondsToTimeString } from "./pomodoro.utils";
import "react-circular-progressbar/dist/styles.css";
import {
  WORK_TIME,
  BREAK_TIME,
  LONG_BREAK_TIME,
  TIMER_STATUS,
} from "./pomodoro.constant.js";

function Pomodoro(props) {
  // start and reset button - toggle
  // restart entire session
  // add progress bar

  // required Methods

  // onTimeEnd
  // onReset
  // onResetSession
  // onStart
  // countDown

  const {
    status = TIMER_STATUS.PAUSE,
    styles = {},
    onComplete = () => {},
  } = props;
  const [isTimerStarted, setTimerStartedValue] = useState(false);

  const { seconds, reset } = useTimer(
    isTimerStarted,
    minsToSec(WORK_TIME),
    onComplete
  );

  const onReset = useCallback(() => {
    reset();
  }, [reset]);

  useEffect(() => {
    if (status === TIMER_STATUS.PAUSE) setTimerStartedValue(false);
    else if (status === TIMER_STATUS.START) setTimerStartedValue(true);
    else if (status === TIMER_STATUS.RESET) {
      setTimerStartedValue(false);
      onReset();
    }
  }, [status]);

  return (
    <>
      <div style={{ width: "300px" }}>
        {
          <CircularProgressbar
            value={(seconds * 100) / minsToSec(WORK_TIME)}
            text={secondsToTimeString(seconds)}
            styles={styles}
          />
        }
      </div>
    </>
  );
}

export default Pomodoro;
