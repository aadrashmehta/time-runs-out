import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({title, targetTime}) {
  const timer = useRef();
  const dialog = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function startChallenge () {
    timer.current = setInterval(() => {
        setTimerExpired(true);
        // dialog.current.showModal(); // default function for dialog to show modal 
        dialog.current.open();
      }, 10);

    setTimerStarted(true);
  }

  function stopChallenge () {
    clearTimeout(timer.current);
    setTimerExpired(false)
  }
  return (
    <>
      <ResultModal ref={dialog} result="lost" targetTime={targetTime}/>
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You Lost</p>}
        <p className="challenge-time">
          {targetTime} second{ targetTime > 1 ? 's' : '' }
        </p>
        <p>
          <button onClick={timerStarted ? stopChallenge : startChallenge}>
            {timerStarted ? 'Stop' : 'Start' } Challenge
          </button>
        </p>
        <p className={timerStarted ? 'active' : undefined}>
          {timerStarted ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}