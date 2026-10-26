
import { useEffect, useState } from "react";
import "./CountdownSection.css";

const WEDDING_DATE = new Date(2027, 4, 20, 0, 0, 0).getTime();

function getTimeLeft() {
  const difference = Math.max(0, WEDDING_DATE - Date.now());

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),
    seconds: Math.floor(
      (difference / 1000) % 60
    ),
  };
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <section className="countdown-section">
      <div className="countdown-lace countdown-lace--top" />
      <div className="countdown-lace countdown-lace--bottom" />

      <div className="countdown-frame">
        <img
          className="countdown-frame-art"
          src="/assets/countdown-bows-ivory.png"
          alt=""
        />

        <div className="countdown-text">
          <h2>Countdown</h2>

          <div className="countdown-timer">
            {units.map((unit) => (
              <div key={unit.label}>
                <span>
                  {unit.label === "DAYS"
                    ? unit.value
                    : String(unit.value).padStart(2, "0")}
                </span>
                <small>{unit.label}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
