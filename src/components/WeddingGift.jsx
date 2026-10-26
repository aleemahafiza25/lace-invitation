
import "./WeddingGift.css";

export default function WeddingGift() {
  return (
    <section className="wedding-gift">
      <h2 className="wedding-gift-title">Wedding Gift</h2>

      <div className="wedding-gift-frame">
        <div className="wedding-gift-content">
          <h3>
            Your presence is our
            <br />
            greatest gift.
          </h3>

          <p className="wedding-gift-message">
            Should you wish to give a gift, you may
            <br className="gift-desktop-break" />
            do so in cash or by bank transfer.
          </p>

          <p className="wedding-gift-iban">
            IBAN IT60 X054 2811 1010 0000 0123 456
          </p>
        </div>
      </div>
    </section>
  );
}
