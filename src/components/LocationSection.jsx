
import "./LocationSection.css";

export default function LocationSection() {
  return (
    <section className="location-section">
      <div className="location-content">
        <p className="location-label">Location</p>
        <p className="location-eyebrow">CELEBRATE WITH US</p>

        <h2>Villa Aurelia</h2>

        <p className="location-city">ROME, ITALY</p>

        <div className="location-description">
          <p>
            A timeless celebration in a place filled with
            beauty, romance, and unforgettable views.
          </p>

          <p>
            We look forward to sharing this special day
            with you in the heart of Rome.
          </p>
        </div>

        <div className="location-illustration">
          <img
            src="/assets/villa-illustration-thick.svg"
            alt="Illustration of the wedding venue"
          />
        </div>

        <a
          className="location-button"
          href="https://www.google.com/maps/search/?api=1&query=Villa+Aurelia+Rome+Italy"
          target="_blank"
          rel="noreferrer"
        >
          GET DIRECTIONS
        </a>
      </div>
    </section>
  );
}
