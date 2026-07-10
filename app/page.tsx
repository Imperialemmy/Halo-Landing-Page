"use client";

import { FormEvent, useState } from "react";

const featureCards = [
  {
    id: "F-1",
    className: "feature-card shortcut-card",
    label: "Quiet shortcuts",
    title: "Help, without opening the app.",
    copy: "Set up Back Tap, the Action button, or a lock-screen widget so your safety shortcut stays close.",
    visual: "shortcut",
  },
  {
    id: "F-2",
    className: "feature-card checkpoint-card",
    label: "Checkpoints",
    title: "Every stop tells your circle you’re moving safely.",
    copy: "Add important points to a route. Halo records arrivals, departures, delays, and the time spent at each stop.",
    visual: "checkpoint",
  },
  {
    id: "F-3",
    className: "feature-card sos-feature-card",
    label: "SOS",
    title: "One deliberate hold. The right people know.",
    copy: "Start a distress alert, share your live and last-known location, and keep the event active until you mark yourself safe.",
    visual: "sos",
  },
  {
    id: "F-4",
    className: "feature-card history-card",
    label: "Last location",
    title: "A clear trail when plans change.",
    copy: "See where someone was last seen, when they arrived, when they left, and how long they stayed.",
    visual: "history",
  },
  {
    id: "F-5",
    className: "feature-card privacy-card",
    label: "Privacy levels",
    title: "Different relationships. Different access.",
    copy: "Choose Limited, Trusted, or Emergency Access for every person in your circle—and change it any time.",
    visual: "privacy",
  },
  {
    id: "F-6",
    className: "feature-card tracking-card",
    label: "Live tracking",
    title: "Follow the journey, not their every move.",
    copy: "Share a live route with approved contacts, show when it last updated, and pause or stop sharing whenever you choose.",
    visual: "tracking",
  },
  {
    id: "F-7",
    className: "feature-card places-card",
    label: "Saved places",
    title: "Your everyday destinations, ready when you need them.",
    copy: "Save home, work, school, church, or any important place for faster check-ins and route setup.",
    visual: "places",
  },
  {
    id: "F-8",
    className: "feature-card recovery-card",
    label: "Secure recovery",
    title: "Get back in without giving anything away.",
    copy: "Reset access through a time-limited email link, with privacy-safe confirmation and protection against repeated requests.",
    visual: "recovery",
  },
] as const;

function BrandMark({ small = false }: { small?: boolean }) {
  return <span aria-hidden="true" className={small ? "brand-mark brand-mark-small" : "brand-mark"} />;
}

function EarlyAccessForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setJoined(true);
  }

  return (
    <form className={compact ? "early-form early-form-compact" : "early-form"} onSubmit={handleSubmit}>
      {joined ? (
        <div className="form-success" role="status">
          <span className="success-dot" />
          You’re on the early access list.
        </div>
      ) : (
        <>
          <label className="sr-only" htmlFor={compact ? "footer-email" : "hero-email"}>
            Email address
          </label>
          <input
            id={compact ? "footer-email" : "hero-email"}
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            autoComplete="email"
          />
          <button className="primary-button" type="submit">
            Join early access
            <span aria-hidden="true">↗</span>
          </button>
        </>
      )}
    </form>
  );
}

function GuardianStage() {
  return (
    <div className="guardian-stage" aria-label="Halo app showing a press-and-hold SOS screen, a trusted circle, a checkpoint trip, and privacy controls">
      <div className="stage-glow" />
      <div className="shield shield-one" />
      <div className="shield shield-two" />

      <div className="phone-wrap">
        <div className="phone-shell">
          <div className="phone-screen">
            <div className="dynamic-island" />
            <div className="phone-topline">
              <span>11:48 PM</span>
              <span className="signal-bars" aria-hidden="true"><i /><i /><i /></span>
            </div>
            <div className="phone-message">
              <span>Emergency help</span>
              <strong>We’re right here.</strong>
            </div>
            <div className="hero-sos">
              <div>
                <strong>SOS</strong>
                <span>Press &amp; hold</span>
              </div>
            </div>
            <div className="hold-progress"><span /></div>
            <p className="hold-label">Release to cancel</p>
            <div className="phone-status">
              <span className="safe-dot" />
              Your trusted circle can see your live location
            </div>
          </div>
        </div>
      </div>

      <div className="orbit-card mum-card">
        <div className="person-row">
          <span className="avatar avatar-mum">MO</span>
          <span><strong>Mum</strong><small>Watching your trip</small></span>
          <span className="safe-dot push-right" />
        </div>
      </div>

      <div className="orbit-card trip-card">
        <div className="orbit-heading"><span>Checkpoint trip</span><strong>On time</strong></div>
        <div className="mini-route">
          <div className="route-rail"><i /><i /></div>
          <div><strong>Victoria Island</strong><small>Left 18 mins ago</small></div>
          <div><strong>Yaba</strong><small>12 mins away</small></div>
        </div>
      </div>

      <div className="orbit-card circle-card">
        <div className="orbit-heading"><span>Trusted circle</span><b>Everyone’s safe</b></div>
        <div className="circle-row">
          <div className="avatar-stack">
            <span className="avatar avatar-mum">MO</span>
            <span className="avatar avatar-tomi">TA</span>
            <span className="avatar avatar-kemi">KO</span>
            <span className="avatar avatar-more">+2</span>
          </div>
          <span className="circle-state"><strong>5 online</strong><small>just now</small></span>
        </div>
      </div>

      <div className="orbit-card access-card">
        <span className="access-icon"><BrandMark small /></span>
        <strong>You choose who sees what.</strong>
        <small>Precise for Mum. Area only for friends.</small>
      </div>
    </div>
  );
}

function FeatureVisual({ type }: { type: typeof featureCards[number]["visual"] }) {
  if (type === "shortcut") {
    return <div className="shortcut-visual"><span>Back Tap</span><span>Action</span><span>Lock screen</span></div>;
  }
  if (type === "checkpoint") {
    return <div className="checkpoint-visual"><i /><span className="checkpoint-line" /><i /><span className="checkpoint-line" /><i /></div>;
  }
  if (type === "sos") {
    return <div className="feature-sos-orb">SOS</div>;
  }
  if (type === "history") {
    return <div className="history-visual"><span className="history-pin" /><div><strong>Last seen at</strong><b>Lekki Phase 1</b><small>8:42 PM · 36 mins</small></div></div>;
  }
  if (type === "privacy") {
    return <div className="privacy-visual"><span><b>Trusted</b><i /></span><span><b>Friends</b><i /></span><span><b>Emergency</b><i /></span></div>;
  }
  if (type === "tracking") {
    return <div className="tracking-visual"><span className="tracking-path" /><i className="tracking-start" /><i className="tracking-end" /><b>Live · updated now</b></div>;
  }
  if (type === "places") {
    return <div className="places-visual"><span>Home</span><span>School</span><span>Office</span><span>+ Custom</span></div>;
  }
  return <div className="recovery-visual"><span>••••••••••••</span><i>Secure link · 30 min</i></div>;
}

export default function Home() {
  return (
    <div id="top" className="site-shell">
      <header className="nav page-width">
        <a className="brand" href="#top" aria-label="Halo home">
          <BrandMark />
          <span>halo</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#how-it-works">How it works</a>
          <a href="#features">Features</a>
          <a href="#privacy">Privacy</a>
          <a className="nav-cta" href="#early-access">Get early access</a>
        </nav>
      </header>

      <main>
        <section className="hero page-width">
          <div className="hero-copy">
            <p className="eyebrow"><span />Built for moving through Nigeria</p>
            <h1>Someone’s always <em>looking out</em> for you.</h1>
            <p className="hero-lede">
              Halo keeps parents, close friends, and late-night commuters quietly connected—from the moment you set out until you’re safely home.
            </p>
            <div id="early-access">
              <EarlyAccessForm />
            </div>
            <p className="form-note">Launching first in Nigeria · No noise, no spam.</p>
          </div>
          <GuardianStage />
        </section>

        <div className="trust-strip page-width" aria-label="Halo principles">
          <strong>Quiet reassurance</strong><i /><span>Private by default</span><i /><span>Designed for real journeys</span>
        </div>

        <section id="how-it-works" className="journey-section page-width section-pad">
          <div className="section-heading split-heading">
            <div>
              <p className="kicker">A safer way through</p>
              <h2>Set out with a plan.<br />Arrive with peace of mind.</h2>
            </div>
            <p>Halo stays quiet when everything is fine and makes the next step clear when a journey changes.</p>
          </div>
          <div className="journey-steps">
            <article>
              <span className="step-index">Before you leave</span>
              <div className="step-icon people-icon"><i /><i /><i /></div>
              <h3>Choose your people.</h3>
              <p>Add the people you trust and decide what each person can see.</p>
            </article>
            <span className="step-connector" />
            <article>
              <span className="step-index">On the way</span>
              <div className="step-icon route-icon"><i /><b /><i /></div>
              <h3>Mark the journey.</h3>
              <p>Set checkpoints, share your live route, and let Halo keep the timeline.</p>
            </article>
            <span className="step-connector" />
            <article>
              <span className="step-index">When you arrive</span>
              <div className="step-icon arrive-icon">✓</div>
              <h3>Close the loop.</h3>
              <p>Your circle sees that you arrived safely without another “I’m home” call.</p>
            </article>
          </div>
        </section>

        <section id="features" className="features-section page-width section-pad">
          <div className="section-heading feature-heading">
            <p className="kicker">The Halo safety system</p>
            <h2>Protection that stays human.</h2>
            <p>Eight connected tools, designed around one idea: the people who care about you should have the right information when it matters.</p>
          </div>
          <div className="feature-grid">
            {featureCards.map((feature) => (
              <article className={feature.className} key={feature.id}>
                <div className="feature-topline"><span>{feature.label}</span><b>{feature.id}</b></div>
                <h3>{feature.title}</h3>
                <p>{feature.copy}</p>
                <FeatureVisual type={feature.visual} />
              </article>
            ))}
          </div>
        </section>

        <section id="privacy" className="privacy-section page-width section-pad">
          <div className="privacy-copy">
            <p className="kicker">Your location is personal</p>
            <h2>Share enough to feel safe. Never more than you choose.</h2>
            <p>Halo makes access visible and adjustable. Give one person precise trip access, show another only a checkpoint, and stop sharing whenever you want.</p>
            <ul>
              <li><span>01</span><div><strong>Limited</strong><p>Checkpoints and safe-arrival updates only.</p></div></li>
              <li><span>02</span><div><strong>Trusted</strong><p>Live trip status and the level of location detail you approve.</p></div></li>
              <li><span>03</span><div><strong>Emergency access</strong><p>Expanded safety information while an SOS is active.</p></div></li>
            </ul>
          </div>
          <div className="privacy-demo" aria-label="Preview of Halo privacy controls">
            <div className="privacy-orbit orbit-back" />
            <div className="privacy-orbit orbit-front" />
            <div className="privacy-panel">
              <div className="privacy-panel-head"><span>Sharing with</span><b>3 people</b></div>
              <div className="sharing-person"><span className="avatar avatar-mum">MO</span><div><strong>Mum</strong><small>Precise location</small></div><i className="access-level level-full" /></div>
              <div className="sharing-person"><span className="avatar avatar-tomi">TA</span><div><strong>Tobi</strong><small>Checkpoints only</small></div><i className="access-level level-medium" /></div>
              <div className="sharing-person"><span className="avatar avatar-kemi">KO</span><div><strong>Kemi</strong><small>Safe-arrival update</small></div><i className="access-level level-low" /></div>
              <div className="sharing-note"><BrandMark small /><span>You stay in control—even during a trip.</span></div>
            </div>
          </div>
        </section>

        <section className="people-section page-width section-pad">
          <div className="section-heading centered-heading">
            <p className="kicker">Made for real life</p>
            <h2>For the people who already look out for each other.</h2>
          </div>
          <div className="people-grid">
            <article><span className="people-label">Parents</span><p>See the route, the last location, and every important checkpoint—without another round of phone calls.</p><small>Victor &amp; Deborah</small></article>
            <article><span className="people-label">Friend groups</span><p>Plan the night together, share only what feels right, and know when everyone has made it home.</p><small>Ada &amp; friends</small></article>
            <article><span className="people-label">Late-night commuters</span><p>Share a trip in seconds and give trusted people a clear signal if something changes.</p><small>Tunde</small></article>
          </div>
        </section>

        <section className="reliability-band page-width">
          <div><span className="reliability-icon">↻</span><strong>Built for imperfect connections</strong></div>
          <p>When the network drops, Halo preserves your last known location, queues critical updates, and syncs again when your connection returns.</p>
          <span className="network-state"><i /> Connection restored</span>
        </section>

        <section className="closing-section page-width">
          <div>
            <p className="kicker light-kicker">Early access</p>
            <h2>Move freely.<br />Keep your people close.</h2>
            <p>Join the first group shaping a calmer, more private way to look out for the people you love.</p>
          </div>
          <EarlyAccessForm compact />
        </section>
      </main>

      <footer className="footer page-width">
        <a className="brand" href="#top"><BrandMark /><span>halo</span></a>
        <p>Someone’s always looking out for you.</p>
        <p className="footer-note">Halo supports trusted-circle safety. It is not a replacement for emergency services.</p>
        <span>© 2026 Halo</span>
      </footer>
    </div>
  );
}
