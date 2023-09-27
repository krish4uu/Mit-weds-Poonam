"use client";
// components/CountdownTimer.tsx
import React, { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDateTime: string | undefined;
  event: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDateTime,
  event,
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [hydrated, setHydrated] = useState(false);

  function calculateTimeLeft(): TimeLeft {
    const now = new Date().getTime();
    const targetTime = targetDateTime
      ? new Date(targetDateTime).getTime()
      : now;

    const difference = targetTime - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    setHydrated(true);
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }
  const { days, hours, minutes, seconds } = timeLeft;

  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    return (
      <div className="flex flex-col">
        <div className="flex pb-1 mb-1 ">
          {days}d {hours}h {minutes}m {seconds}s Remaining
        </div>
        <div className="flex pb-1 mb-1 ">{event}'s Happening now</div>
      </div>
    );
  }

  return (
    <div className="flex-col">
      <div className="flex pb-1 mb-1 ">
        {days}d {hours}h {minutes}m {seconds}s Remaining
      </div>
      <div className="flex pb-1 mb-1 "> Until the {event}...</div>
    </div>
  );
};

export default CountdownTimer;
