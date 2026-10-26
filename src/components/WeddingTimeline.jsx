
import "./WeddingTimeline.css";

const events = [
  {
    time: "4:30 PM",
    title: "WELCOME",
    description:
      "Arrival of guests at the villa gardens, with drinks and hugs to greet us.",
    image: "/assets/welcome-still.png",
    alt: "Welcome fountain illustration",
  },
  {
    time: "5:00 PM",
    title: "CEREMONY",
    description:
      'We say "I do" in the gardens, overlooking the lake at sunset.',
    image: "/assets/event-ceremony.png",
    alt: "Wedding ceremony illustration",
  },
  {
    time: "6:00 PM",
    title: "COCKTAIL HOUR",
    description:
      "Aperitivo on the terrace while the photographers capture the moment.",
    image: "/assets/cocktail-glass-left.png",
    alt: "Cocktail glasses illustration",
  },
  {
    time: "8:00 PM",
    title: "DINNER",
    description:
      "A long, joyful dinner under the stars, filled with toasts and laughter.",
    image: "/assets/event-dinner.png",
    alt: "Wedding dinner illustration",
  },
  {
    time: "10:30 PM",
    title: "DANCING",
    description:
      "The party begins, music, dancing and celebration until late.",
    image: "/assets/dancing-still.png",
    alt: "Dancing celebration illustration",
  },
];

export default function WeddingTimeline() {
  return (
    <section className="wedding-timeline">
      {/* Pearl garland */}
      <div className="timeline-garland" aria-hidden="true">
        <svg
          viewBox="0 0 1774 887"
          className="timeline-garland-art"
          xmlns="http://www.w3.org/2000/svg"
        >
          <image
            href="/assets/pearl-garland-2-base.png"
            x="0"
            y="0"
            width="1774"
            height="887"
            preserveAspectRatio="none"
          />

          <g transform="translate(127 239)">
            <image
              href="/assets/pearl-garland-2-strand-0.png"
              x="-114"
              y="0"
              width="228"
              height="630"
            />
          </g>

          <g transform="translate(543 239)">
            <image
              href="/assets/pearl-garland-2-strand-1.png"
              x="-103"
              y="0"
              width="206"
              height="473"
            />
          </g>

          <g transform="translate(887 239)">
            <image
              href="/assets/pearl-garland-2-strand-2.png"
              x="-93"
              y="0"
              width="186"
              height="318"
            />
          </g>

          <g transform="translate(1231 239)">
            <image
              href="/assets/pearl-garland-2-strand-3.png"
              x="-103"
              y="0"
              width="206"
              height="472"
            />
          </g>

          <g transform="translate(1647.5 239)">
            <image
              href="/assets/pearl-garland-2-strand-4.png"
              x="-113.5"
              y="0"
              width="227"
              height="630"
            />
          </g>
        </svg>
      </div>

      {/* Heading */}
      <div className="timeline-inner">
        <div className="timeline-heading">
          <p className="timeline-eyebrow">THE CELEBRATION</p>
          <h2>The Day</h2>
          <p className="timeline-intro">
            A day to celebrate,
            <br />
            from the first hello to the last dance.
          </p>
        </div>

        {/* Event schedule */}
        <div className="timeline-events">
          <div className="timeline-center-line" aria-hidden="true" />

          {events.map((event) => (
            <article className="timeline-event" key={event.title}>
              <div className="timeline-event-left">
                <div className="timeline-event-image">
                  <img src={event.image} alt={event.alt} />
                </div>

                <span className="timeline-time">{event.time}</span>
              </div>

              <div className="timeline-marker" aria-hidden="true">
                <span>♡</span>
              </div>

              <div className="timeline-details">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Banquet illustration */}
        <div className="timeline-banquet">
          <img
            src="/assets/banquet-table.png"
            alt="Wedding banquet table"
          />
        </div>
      </div>
    </section>
  );
}
