
import "./DressCode.css";

export default function DressCode() {
  return (
    <section className="dress-code">
      <div className="dress-code-frame">
        <p className="dress-code-eyebrow">KINDLY DRESS IN</p>

        <h2 className="dress-code-title">Dress Code</h2>

        <div className="dress-code-divider">
          <span />
          <span className="dress-code-diamond">◆</span>
          <span />
        </div>

        <p className="dress-code-subtitle">Formal Attire</p>

        <img
          src="/assets/dresscode-couple-new-transparent.webp"
          alt="Illustration of a couple dressed in formal wedding attire"
          className="dress-code-couple"
        />

        <p className="dress-code-description">
          We invite you to celebrate with us
          <br />
          in your most elegant formal attire.
        </p>

        <p className="dress-code-note">
          ELEGANCE IN EVERY DETAIL
        </p>
      </div>
    </section>
  );
}
