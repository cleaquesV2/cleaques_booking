"use client";
import { useEffect, useState } from "react";
import moment from 'moment-timezone';

function pad(n: number) {
  return String(n).padStart(2, "0");
}

interface CountdownTimerProps {
  start_date: string; // "2025-08-06"
  start_time: string; // "18:00" or "06:00 PM"
  // user_local_start_time: string; // "2025-08-06 06:00 PM"
  timezone: string; // "America/New_York"
}

export const CountdownTimer = ({ start_date, start_time, timezone }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
   if (!start_date || !start_time || !timezone) return;

    // Parse event start time in the event's native timezone
    const targetDate = moment.tz(`${start_date} ${start_time}`, 'YYYY-MM-DD hh:mm a', timezone);
    // Convert to user's local timezone
    const localTimezone = moment.tz.guess(true);
    const localTargetDate = targetDate.clone().tz(localTimezone);

     if (!localTargetDate.isValid()) {
      console.error("Invalid date/time:", start_date, start_time, timezone);
      return;
    }

    const interval = setInterval(() => {
      const now = moment();
      const diff = localTargetDate.diff(now);

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const duration = moment.duration(diff);
      const days = Math.floor(duration.asDays());
      const hours = Math.floor(duration.asHours()) % 24;
      const minutes = Math.floor(duration.asMinutes()) % 60;
      const seconds = Math.floor(duration.asSeconds()) % 60;

      setTimeLeft({
        days: pad(days),
        hours: pad(hours),
        minutes: pad(minutes),
        seconds: pad(seconds),
      });
    }, 1000);

    return () => clearInterval(interval);
  },  [start_date, start_time, timezone]);

  return (
    <div className="w-full mt-6 bg-orange-500 rounded-lg px-5 py-4 flex flex-wrap items-center text-white">
      <span className="font-normal md:font-medium text-xs md:text-2xl mr-2 md:mr-4">Event Countdown</span>
      <div className="flex space-x-4">
        {["days", "hours", "minutes", "seconds"].map((unit, idx) => (
          <div className="flex items-center" key={unit}>
            <div className="text-center">
              <div className="text-base md:text-xl font-semibold">{timeLeft[unit as keyof typeof timeLeft]}</div>
              <div className="text-xs capitalize">{unit}</div>
            </div>
            {idx < 3 && <span className="self-end mx-1">:</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

// "use client";
// import { isValid } from "date-fns";
// import { parse } from "date-fns";
// import { useEffect, useState } from "react";

// function pad(n: number) {
//   return String(n).padStart(2, "0");
// }

// interface CountdownTimerProps {
//   start_date: string; // "2025-08-06"
//   start_time: string; // "18:00" or "06:00 PM"
//   user_local_start_time: string; // "2025-08-06 06:00 PM"
// }

// export const CountdownTimer = ({ start_date, start_time, user_local_start_time }: CountdownTimerProps) => {
//   const [timeLeft, setTimeLeft] = useState({
//     days: "00",
//     hours: "00",
//     minutes: "00",
//     seconds: "00",
//   });

//   useEffect(() => {
//     if (!start_date || !start_time || !user_local_start_time) return;

//     // Convert to a valid Date object
//     // const combinedDateTimeStr = `${start_date} ${start_time}`;
//     // const targetDate = new Date(combinedDateTimeStr);
//     const targetDate = parse(user_local_start_time, "yyyy-MM-dd hh:mm a", new Date());

//     // If invalid, stop here
//     // if (isNaN(targetDate.getTime())) {
//     //   console.error("Invalid date/time:", combinedDateTimeStr);
//     //   return;
//     // }
//     if (!isValid(targetDate)) {
//       console.error("Invalid date/time:", user_local_start_time);
//       return;
//     }

//     const interval = setInterval(() => {
//       const now = new Date().getTime();
//       const diff = targetDate.getTime() - now;

//       if (diff <= 0) {
//         clearInterval(interval);
//         setTimeLeft({
//           days: "00",
//           hours: "00",
//           minutes: "00",
//           seconds: "00",
//         });
//         return;
//       }

//       const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//       const minutes = Math.floor((diff / (1000 * 60)) % 60);
//       const seconds = Math.floor((diff / 1000) % 60);

//       setTimeLeft({
//         days: pad(days),
//         hours: pad(hours),
//         minutes: pad(minutes),
//         seconds: pad(seconds),
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [start_date, start_time, user_local_start_time]);

//   return (
//     <div className="w-full mt-6 bg-orange-500 rounded-lg px-5 py-4 flex flex-wrap items-center text-white">
//       <span className="font-normal md:font-medium text-xs md:text-2xl mr-2 md:mr-4">Event Countdown</span>
//       <div className="flex space-x-4">
//         {["days", "hours", "minutes", "seconds"].map((unit, idx) => (
//           <div className="flex items-center" key={unit}>
//             <div className="text-center">
//               <div className="text-base md:text-xl font-semibold">{timeLeft[unit as keyof typeof timeLeft]}</div>
//               <div className="text-xs capitalize">{unit}</div>
//             </div>
//             {idx < 3 && <span className="self-end mx-1">:</span>}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };