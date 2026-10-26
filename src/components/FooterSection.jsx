
import "./FooterSection.css";

export default function FooterSection() {
  return (
    <section className="footer-section">
      <div className="footer-content">
        <img
          src="/assets/wedding-rings.png"
          alt=""
          className="footer-rings"
        />

        <p className="footer-message">
          We can't wait to celebrate with you.
        </p>

        <p className="footer-with-love">With love,</p>

        <h2 className="footer-names">
          Alessia <span>&amp;</span> Matteo
        </h2>

        <p className="footer-date">
          11 &amp; 12 September 2027
        </p>

        <p className="footer-location">
          Lake Como, Italy
        </p>

        <p className="footer-credit">
          Made with love by{" "}
          <span>Vows Invitation</span>
        </p>
      </div>
    </section>
  );
}
