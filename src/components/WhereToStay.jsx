
import "./WhereToStay.css";

const hotels = [
  {
    number: "I",
    name: "Grand Hotel del Gianicolo",
    description:
      "Just moments from the venue, offering an elegant and convenient stay surrounded by the greenery of the Gianicolo.",
    mapQuery: "Grand Hotel del Gianicolo Rome",
  },
  {
    number: "II",
    name: "Donna Camilla Savelli",
    description:
      "A charming historic hotel in Trastevere, combining Roman character with a peaceful and refined atmosphere.",
    mapQuery: "Donna Camilla Savelli Rome",
  },
];

function HotelCard({ hotel }) {
  return (
    <article className="stay-card">
      <div className="stay-card-content">
        <h3 className="stay-hotel-name">{hotel.name}</h3>

        <div className="stay-hotel-details">
          <p>
            <span className="stay-label">Recommended stay · </span>
            19 – 21 May 2027
          </p>

          <p>
            <span className="stay-label">Wedding guest rate · </span>
            Code "BEATRIZ &amp; ALEXANDER"
          </p>

          <p>
            <span className="stay-label">Parking · </span>
            Parking available on site
          </p>
        </div>

        <p className="stay-description">{hotel.description}</p>

        <a
          className="stay-book-button"
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            hotel.mapQuery
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          BOOK YOUR STAY
        </a>
      </div>
    </article>
  );
}

export default function WhereToStay() {
  return (
    <section className="where-to-stay">

<div className="stay-intro">
  <img
    src="/assets/balcony-loop.webp"
    alt=""
    aria-hidden="true"
    className="stay-balcony"
  />

  <h2 className="stay-section-title">Where to Stay</h2>
</div>


      <div className="stay-hotels">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.number} hotel={hotel} />
        ))}
      </div>
    </section>
  );
}
