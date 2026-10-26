
import { useRef, useState } from "react";
import "./OpeningScreen.css";

export default function OpeningScreen({ onComplete }) {
  const videoRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [closing, setClosing] = useState(false);

  async function handleOpen() {
    if (started || closing) return;

    setStarted(true);

    try {
      await videoRef.current?.play();
    } catch (error) {
      console.error("The opening video could not play:", error);
      setStarted(false);
    }
  }

  return (
    <div
      className={`opening-screen ${
        closing ? "opening-screen--closing" : ""
      }`}
      onClick={handleOpen}
      onAnimationEnd={(event) => {
        if (event.target === event.currentTarget && closing) {
          onComplete();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label="Tap to open the wedding invitation"
      onKeyDown={(event) => {
        if (
          (event.key === "Enter" || event.key === " ") &&
          !started &&
          !closing
        ) {
          event.preventDefault();
          handleOpen();
        }
      }}
    >
      <video
        ref={videoRef}
        className="opening-screen__video"
        src="/assets/opening-envelope.mp4"
        playsInline
        muted
        preload="auto"
        onEnded={() => setClosing(true)}
      />

      {!started && (
        <p className="opening-screen__hint">Tap to open</p>
      )}
    </div>
  );
}
