import { useState, useEffect } from "react";

const SECOND = 1_000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

// @ts-ignore
export default function useTimer(deadline, interval = SECOND) {
  // @ts-ignore
  const [timespan, setTimespan] = useState(new Date(deadline) - Date.now(), 0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimespan((_timespan) => Math.max(_timespan - interval, 0));
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [interval]);

  /* If the initial deadline value changes */
  useEffect(() => {
    // @ts-ignore
    setTimespan(new Date(deadline) - Date.now());
  }, [deadline]);

  return {
    days: Math.floor(timespan / DAY),
    hours: Math.floor((timespan / HOUR) % 24),
    minutes: Math.floor((timespan / MINUTE) % 60),
    seconds: Math.floor((timespan / SECOND) % 60),
  };
}
