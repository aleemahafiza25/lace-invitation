import { useState } from "react";
import "./App.css";
import "./components/OpeningScreen.css";
import OpeningScreen from "./components/OpeningScreen";
import WelcomeMessage from "./components/WelcomeMessage";
import CountdownSection from "./components/CountdownSection";
import LocationSection from "./components/LocationSection";
import WeddingTimeline from "./components/WeddingTimeline";
import DressCode from "./components/DressCode";
import Transportation from "./components/Transportation";
import WhereToStay from "./components/WhereToStay";
import WeddingGift from "./components/WeddingGift";
import RSVP from "./components/RSVP";
import FooterSection from "./components/FooterSection";



function InvitationHero() {
  return (
    <section className="hero-screen">
      <video
        className="hero-screen__video"
        src="/assets/hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      <div className="hero-screen__content">
        <p className="hero-screen__eyebrow">
          Together with their families
        </p>

        <h1 className="hero-screen__names">
          Alessia &amp; Matteo
        </h1>

        <p className="hero-screen__details">
          11 &amp; 12 September 2027
          <br />
          Lake Como, Italy
        </p>
      </div>
    </section>
  );
}

export default function App() {
  const [invitationOpened, setInvitationOpened] = useState(false);

  return (
    <main className="invitation">
      <InvitationHero />
      <WelcomeMessage />
      <CountdownSection />
      <LocationSection />
      <WeddingTimeline />
      <DressCode />
      <Transportation />
      <WhereToStay />
      <WeddingGift />
      <RSVP />
      <FooterSection />

      {!invitationOpened && (
        <OpeningScreen
          onComplete={() => setInvitationOpened(true)}
        />
      )}
    </main>
  );
}
