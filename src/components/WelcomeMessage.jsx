
import SwanArtwork from "./SwanArtwork";
import "./WelcomeMessage.css";

export default function WelcomeMessage() {
  return (
    <section className="welcome-message">
      <div className="welcome-inner">
        <div className="welcome-swan">
          <SwanArtwork />
        </div>

        <h2>Together with their families</h2>

        <p>
          Beatriz &amp; Alexander request the pleasure of your
          company as they celebrate their marriage and begin
          this new chapter surrounded by the people they love most.
        </p>
      </div>
    </section>
  );
}
