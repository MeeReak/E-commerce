"use client";

import React, { useEffect, useState } from "react";

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 2,
    minutes: 18,
    seconds: 46,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = { ...prev };

        if (newTime.seconds > 0) {
          newTime.seconds -= 1;
        } else {
          newTime.seconds = 59;
          if (newTime.minutes > 0) {
            newTime.minutes -= 1;
          } else {
            newTime.minutes = 59;
            if (newTime.hours > 0) {
              newTime.hours -= 1;
            } else {
              newTime.hours = 23;
              newTime.days -= 1;
            }
          }
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => String(time).padStart(2, "0");

  return (
    <div className="flex items-start justify-center space-x-2 px-4 rounded-lg text-white text-xl font-semibold">
      <div className="text-center">
        <div className="text-white text-center text-2xl font-normal leading-[36px]">
          {formatTime(timeLeft.days)}
        </div>
        <div className="text-white text-opacity-80 text-center text-xs font-normal leading-[12px] tracking-[0.36px] uppercase">
          DAYS
        </div>
      </div>
      <span className=" pt-[2px]">:</span>
      <div className="text-center">
        <div className="text-white text-center text-2xl font-normal leading-[36px]">
          {formatTime(timeLeft.hours)}
        </div>
        <div className="text-white text-opacity-80 text-center text-xs font-normal leading-[12px] tracking-[0.36px] uppercase">
          HOURS
        </div>
      </div>
      <span className=" pt-[2px]">:</span>
      <div className="text-center">
        <div className="text-white text-center text-2xl font-normal leading-[36px]">
          {formatTime(timeLeft.minutes)}
        </div>
        <div className="text-white text-opacity-80 text-center text-xs font-normal leading-[12px] tracking-[0.36px] uppercase">
          MINS
        </div>
      </div>
      <span className=" pt-[2px]">:</span>
      <div className="text-center">
        <div className="text-white text-center text-2xl font-normal leading-[36px]">
          {formatTime(timeLeft.seconds)}
        </div>
        <div className="text-white text-opacity-80 text-center text-xs font-normal leading-[12px] tracking-[0.36px] uppercase">
          SECS
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
