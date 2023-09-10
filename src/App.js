import { useState, useMemo, useEffect, useCallback } from "react";
import Pomodoro from "./components/pomodoro";
import { TIMER_STATUS } from "./components/pomodoro/pomodoro.constant";
import "./App.css";

function App() {
  const [isPaused, setIsPaused] = useState(true);
  const [status, setStatus] = useState(TIMER_STATUS.PAUSE);

  const changeStatus = useCallback((type) => setStatus(type), []);

  return (
    <div className="App">
      <header className="App-header">
        <Pomodoro status={status} />
        <button
          onClick={() => {
            setIsPaused((s) => {
              const _status = !s;
              changeStatus(_status ? TIMER_STATUS.PAUSE : TIMER_STATUS.START);
              return _status;
            });
          }}
        >
          {isPaused ? "Start" : "Pause"}
        </button>
        <button
          onClick={() => {
            setStatus(TIMER_STATUS.RESET);
            setIsPaused(true);
          }}
        >
          Reset
        </button>
      </header>
    </div>
  );
}

export default App;
