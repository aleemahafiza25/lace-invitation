
import { useState } from "react";
import "./RSVP.css";

export default function RSVP() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("accepts");
  const [plusOne, setPlusOne] = useState(false);
  const [children, setChildren] = useState(0);
  const [dietary, setDietary] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      attendance,
      plusOne,
      children,
      dietary,
      note,
    });
  };

  return (
    <section className="rsvp-section">
      <div className="rsvp-inner">
        <img
          src="/assets/rsvp-heart.png"
          alt=""
          aria-hidden="true"
          className="rsvp-heart"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            console.error(
              "RSVP heart image could not load:",
              e.currentTarget.src
            );
          }}
        />

        <h2 className="rsvp-title">RSVP</h2>

        <p className="rsvp-description">
          Nothing would make us happier than celebrating this day
          surrounded by our favourite people. Please let us know
          whether you'll be able to join us by May 1, 2027.
        </p>

        <form className="rsvp-form" onSubmit={handleSubmit}>
          <label className="rsvp-label" htmlFor="rsvp-name">
            Your Name
          </label>

          <input
            id="rsvp-name"
            className="rsvp-input"
            type="text"
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            required
          />

          <fieldset className="rsvp-attendance">
            <legend>Will you be attending?</legend>

            <label className="rsvp-option">
              <input
                type="radio"
                name="attendance"
                value="accepts"
                checked={attendance === "accepts"}
                onChange={() => setAttendance("accepts")}
              />
              <span>Joyfully accepts</span>
            </label>

            <label className="rsvp-option">
              <input
                type="radio"
                name="attendance"
                value="declines"
                checked={attendance === "declines"}
                onChange={() => setAttendance("declines")}
              />
              <span>Regretfully declines</span>
            </label>
          </fieldset>

          <div className="rsvp-extra">
            <fieldset className="rsvp-plus-one">
              <legend>Will you be bringing a +1?</legend>

              <label className="rsvp-option">
                <input
                  type="radio"
                  name="plusOne"
                  checked={plusOne}
                  onChange={() => setPlusOne(true)}
                />
                <span>Yes, with pleasure</span>
              </label>

              <label className="rsvp-option">
                <input
                  type="radio"
                  name="plusOne"
                  checked={!plusOne}
                  onChange={() => setPlusOne(false)}
                />
                <span>Just me</span>
              </label>
            </fieldset>

            <div className="rsvp-children">
              <h3 className="rsvp-extra-title">Children</h3>

              <div className="rsvp-counter">
                <button
                  type="button"
                  aria-label="Remove a child"
                  disabled={children === 0}
                  onClick={() =>
                    setChildren((count) => Math.max(0, count - 1))
                  }
                >
                  −
                </button>

                <span>
                  {children === 0
                    ? "No children"
                    : `${children} ${
                        children === 1 ? "child" : "children"
                      }`}
                </span>

                <button
                  type="button"
                  aria-label="Add a child"
                  onClick={() =>
                    setChildren((count) => count + 1)
                  }
                >
                  +
                </button>
              </div>
            </div>

            <div className="rsvp-extra-field">
              <h3 className="rsvp-extra-title">
                Dietary Requirements
              </h3>

              <label
                className="rsvp-sub-label"
                htmlFor="rsvp-dietary"
              >
                GUEST 1
              </label>

              <input
                id="rsvp-dietary"
                className="rsvp-input"
                type="text"
                placeholder="Allergies or dietary requirements"
                value={dietary}
                onChange={(e) => setDietary(e.target.value)}
              />
            </div>

            <div className="rsvp-extra-field">
              <label
                className="rsvp-extra-title"
                htmlFor="rsvp-note"
              >
                A Note for the Couple
              </label>

              <textarea
                id="rsvp-note"
                className="rsvp-input rsvp-textarea"
                placeholder="Leave us a little message, if you'd like."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={4}
              />
            </div>
          </div>

          <button className="rsvp-submit" type="submit">
            SEND RSVP
          </button>
        </form>
      </div>
    </section>
  );
}
