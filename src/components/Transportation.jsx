
import "./Transportation.css";

export default function Transportation() {
  return (
    <section className="transportation">
      {/* Separate burgundy texture image */}
      <div className="transportation-bg-image" />

      {/* Lace decorations */}
      <div className="transportation-lace transportation-lace-top" />

      <div className="transportation-content">
       <img
  src="/assets/transportation-bus.png"
  alt="Vintage bus on a country road"
  className="transportation-bus"
/>

        <h2 className="transportation-title">
          Transportation
        </h2>

        <p className="transportation-intro">
          We want getting to and from the celebration to
          <br className="transportation-desktop-break" />
          be as easy as possible.
        </p>

        <p className="transportation-details">
          A private bus will depart at 4:00 PM from
          Piazza della Repubblica, taking guests directly
          to Villa Aurelia with plenty of time to settle in
          before the ceremony.
        </p>

        <p className="transportation-return">
          At the end of the evening, return
          transportation to central Rome will
          also be provided.
        </p>

        <a
          className="transportation-button"
          href="https://www.google.com/maps/search/?api=1&query=Piazza+della+Repubblica+Rome+Italy"
          target="_blank"
          rel="noreferrer"
        >
          VIEW PICK-UP POINT
        </a>
      </div>

      <div className="transportation-lace transportation-lace-bottom" />
    </section>
  );
}
