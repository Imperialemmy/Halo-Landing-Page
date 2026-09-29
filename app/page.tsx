"use client";

import { useState } from "react";

const featureCards = [
  {
    "id": "F-1",
    "className": "feature-card shortcut-card",
    "label": "Safety shortcuts",
    "title": "Close by. Even when Halo isn’t open.",
    "copy": "Use the Action button or a lock-screen widget to reach SOS. Live Activities keep an active check-in visible.",
    "visual": "shortcut"
  },
  {
    "id": "F-2",
    "className": "feature-card checkpoint-card",
    "label": "Journeys & checkpoints",
    "title": "A little reassurance at every stop.",
    "copy": "Plan a journey with checkpoints so your circle can follow progress and receive updates about reached or missed stops.",
    "visual": "checkpoint"
  },
  {
    "id": "F-3",
    "className": "feature-card sos-feature-card",
    "label": "SOS",
    "title": "A clear way to ask your circle for help.",
    "copy": "Start an SOS to alert your trusted circle and share your emergency location. Mark yourself safe to close the alert.",
    "visual": "sos"
  },
  {
    "id": "F-4",
    "className": "feature-card history-card",
    "label": "30-day trail replay",
    "title": "Your day, retraced.",
    "copy": "Replay your own recent journeys with a moving avatar, stops, and movement types. See which stretches were recorded live or in the background.",
    "visual": "history"
  },
  {
    "id": "F-5",
    "className": "feature-card privacy-card",
    "label": "People & privacy",
    "title": "Close doesn’t have to mean always visible.",
    "copy": "Organize your circle into Friends, Family, and Loves. Combine contact permissions with privacy rules for saved places.",
    "visual": "privacy"
  },
  {
    "id": "F-6",
    "className": "feature-card tracking-card",
    "label": "Check-ins",
    "title": "Getting there isn’t the same as being okay.",
    "copy": "Set a timer and an optional destination. Arrival reminds you to confirm “I’m safe.” Running late? Add 15 minutes.",
    "visual": "checkin"
  },
  {
    "id": "F-7",
    "className": "feature-card places-card",
    "label": "Saved places & stays",
    "title": "The familiar places in your day.",
    "copy": "Save home, work, and your favorite spots. See arrivals and time spent there, with a separate sharing preference for each place.",
    "visual": "places"
  },
  {
    "id": "F-8",
    "className": "feature-card recovery-card",
    "label": "First-aid guides",
    "title": "Useful guidance, close at hand.",
    "copy": "Browse first-aid articles with offline-friendly access. Practical information to support your next step—not a replacement for professional help.",
    "visual": "guide"
  }
] as const;

function BrandMark({ small = false }: { small?: boolean }) {
  return <img aria-hidden="true" className={small ? "brand-mark brand-mark-small" : "brand-mark"} src="/halo/app-icon.png" alt="" />;
}

type PlaceKind = "home" | "work" | "cafe";

function PlaceGlyph({ kind }: { kind: PlaceKind }) {
  if (kind === "home") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 11 12 4l8.5 7v8.5h-5.3v-5.6H8.8v5.6H3.5Z" /></svg>;
  }
  if (kind === "work") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6V4h8v2h4a2 2 0 0 1 2 2v10.5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm2 0h4V5.5h-4Zm-6 5v7.5h16V11h-6v2h-4v-2Z" /></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h13v8.2A4.8 4.8 0 0 1 12.2 20H8.8A4.8 4.8 0 0 1 4 15.2Zm13 2v5h1.2a2.5 2.5 0 0 0 0-5ZM7 3.5h2V6H7Zm5 0h2V6h-2Z" /></svg>;
}

function PlaceToken({ kind, anchored = false }: { kind: PlaceKind; anchored?: boolean }) {
  return <span className={`place-token place-${kind}${anchored ? " place-anchored" : ""}`}><PlaceGlyph kind={kind} /></span>;
}

function CurrentPersona({ compact = false }: { compact?: boolean }) {
  return <span className={compact ? "current-persona persona-compact" : "current-persona"} aria-label="Halo’s current standing stickman avatar">
    <span className="persona-ground" />
    <span className="persona-art">
      <img src="/halo/persona-standing.png" alt="" />
      <svg className="persona-face" viewBox="0 0 512 512" aria-hidden="true">
        <circle cx="244.1" cy="269.75" r="6.04" />
        <circle cx="268.25" cy="269.75" r="5.19" />
        <path d="M249.88 289.31 Q257.23 296.2 264.57 289.31" />
      </svg>
    </span>
  </span>;
}

function EarlyAccessForm({ compact = false }: { compact?: boolean }) {
  return <div className={compact ? "launch-actions launch-actions-compact" : "launch-actions"}>
    <a className="primary-button" href="#features">Explore Halo</a>
    <span>Coming to iPhone · Early access isn’t open yet</span>
  </div>;
}

function GuardianStage() {
  return (
    <div className="guardian-stage" aria-label="Illustrative Halo preview showing a saved home, a stickman avatar, a check-in, and your circle">
      <div className="stage-glow" />
      <div className="shield shield-one" />
      <div className="shield shield-two" />

      <div className="phone-wrap">
        <div className="phone-shell">
          <div className="phone-screen">
            <div className="dynamic-island" />
            <div className="phone-topline"><span>9:41</span><span>HALO · PREVIEW</span></div>
            <div className="phone-map">
              <svg className="preview-map" viewBox="0 0 250 290" aria-hidden="true">
                <path className="map-road" d="M-20 65 L280 5 M-10 170 L275 110 M35 -20 L92 310 M162 -20 L218 310 M-10 275 L265 217" />
                <path className="map-trail" d="M54 226 L123 211 L110 144 L180 129" />
                <circle cx="54" cy="226" r="5" /><circle cx="117" cy="178" r="5" />
              </svg>
              <span className="map-place-name">Your neighborhood</span>
              <div className="map-home"><PlaceToken kind="home" anchored /></div>
              <div className="map-person"><CurrentPersona /><strong>You at Home</strong><small>Location hidden</small></div>
              <span className="map-sos">SOS</span>
            </div>
            <div className="phone-checkin"><span><strong>23:58</strong><small>until check-in</small></span><b>+15 min</b><em>I’m safe</em></div>
            <div className="phone-bottom"><strong>Your places</strong><div><span><PlaceToken kind="home" />Home</span><span><PlaceToken kind="work" />Work</span><span><PlaceToken kind="cafe" />Café</span></div><small>Illustrative preview · not live location data</small></div>
          </div>
        </div>
      </div>

      <div className="orbit-card mum-card">
        <div className="person-row">
          <img className="avatar avatar-mum" src="/halo/profile-azure-content.png" alt="" />
          <span><strong>Mum</strong><small>Family · exact location</small></span>
          <span className="safe-dot push-right" />
        </div>
      </div>

      <div className="orbit-card trip-card">
        <div className="orbit-heading"><span>Checkpoint trip</span><strong>In progress</strong></div>
        <div className="mini-route">
          <div className="route-rail"><i /><i /></div>
          <div><strong>Victoria Island</strong><small>Left 18 mins ago</small></div>
          <div><strong>Yaba</strong><small>Next checkpoint</small></div>
        </div>
      </div>

      <div className="orbit-card circle-card">
        <div className="orbit-heading"><span>Trusted circle</span><b>Your people</b></div>
        <div className="circle-row">
          <div className="avatar-stack">
            <span className="avatar avatar-mum">MO</span>
            <span className="avatar avatar-tomi">TA</span>
            <span className="avatar avatar-kemi">KO</span>
            <span className="avatar avatar-more">+2</span>
          </div>
          <span className="circle-state"><strong>5 in your circle</strong><small>You choose access</small></span>
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
    return <div className="shortcut-visual"><span>Action button</span><span>Lock screen</span><span>Live Activity</span></div>;
  }
  if (type === "checkpoint") {
    return <div className="checkpoint-visual"><i /><span className="checkpoint-line" /><i /><span className="checkpoint-line" /><i /></div>;
  }
  if (type === "sos") {
    return <div className="feature-sos-orb">SOS</div>;
  }
  if (type === "history") {
    return <div className="history-visual"><CurrentPersona compact /><div><strong>Your trail</strong><b>Walk. Stop. Replay.</b><small>Explore the last 30 days</small></div></div>;
  }
  if (type === "privacy") {
    return <div className="privacy-visual"><span><b>Family</b><i /></span><span><b>Friends</b><i /></span><span><b>Loves</b><i /></span></div>;
  }
  if (type === "checkin") {
    return <div className="checkin-feature"><strong>23:58<small>until check-in</small></strong><span>+15 min</span><b>I’m safe</b></div>;
  }
  if (type === "places") {
    return <div className="places-visual real-places">{([["home", "Home"], ["work", "Work"], ["cafe", "Café"]] as const).map(([kind, label]) => <span key={kind}><PlaceToken kind={kind} />{label}</span>)}</div>;
  }
  return <div className="guide-visual"><span aria-hidden="true">+</span><div><strong>First aid</strong><small>Clear steps, when you need them</small></div></div>;
}

function CheckInPreview() {
  const [minutes, setMinutes] = useState(24);
  const [safe, setSafe] = useState(false);
  return <section className="checkin-story page-width" aria-labelledby="checkin-title">
    <div><p className="kicker">Check in, on your terms</p><h2 id="checkin-title">A reminder.<br />Not an assumption.</h2><p>Choose a timer and, if you like, a destination. Halo can remind you when you arrive, but only you can confirm you’re okay.</p><p className="checkin-detail">If you don’t respond, the check-in can escalate to SOS after a two-minute grace period. If iOS has closed Halo, escalation waits until the app runs again.</p></div>
    <div className="checkin-demo"><span className="demo-caption">TRY A CHECK-IN · DEMO ONLY</span><div className="demo-time" role="status">{safe ? "All checked in." : `${minutes}:00`}</div><p>{safe ? "You confirmed you’re safe." : "Time remaining to confirm you’re safe"}</p><div className="demo-actions">{safe ? <button onClick={() => { setSafe(false); setMinutes(24); }}>Try again</button> : <><button onClick={() => setMinutes(m => m + 15)}>Add 15 minutes</button><button className="confirm-safe" onClick={() => setSafe(true)}>I’m safe</button></>}</div><small>No contacts are notified. This is an interactive illustration.</small></div>
  </section>;
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
          <a className="nav-cta" href="#early-access">Discover Halo</a>
        </nav>
      </header>

      <main>
        <section className="hero page-width">
          <div className="hero-copy">
            <p className="eyebrow"><span />Your people. Your places. Your Halo.</p>
            <h1>Keep your people <em>close.</em><br />Your location, yours.</h1>
            <p className="hero-lede">
              A familiar face on the map. A check-in on the way home. A clear signal when you need help. Halo connects your circle—with you in control of what they see.
            </p>
            <div id="early-access">
              <EarlyAccessForm />
            </div>
            <p className="form-note">Built for everyday connection. Ready for the moments that matter.</p>
          </div>
          <GuardianStage />
        </section>

        <div className="trust-strip page-width" aria-label="Halo principles">
          <strong>Quiet reassurance</strong><i /><span>Sharing on your terms</span><i /><span>Designed for real journeys</span>
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
              <p>Arriving prompts a reminder. You tap “I’m safe” to confirm—not just because your phone reached a place.</p>
            </article>
          </div>
        </section>

        <CheckInPreview />

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
            <p>Choose what each person can see, then set boundaries around your saved places. For everyday sharing, the more restrictive setting wins.</p>
            <ul>
              <li><span>01</span><div><strong>Friends</strong><p>Approximate location at most, with emergency alerts.</p></div></li>
              <li><span>02</span><div><strong>Family</strong><p>Exact location and check-in status, subject to your place privacy.</p></div></li>
              <li><span>03</span><div><strong>Loves</strong><p>Access to tier-protected places. Your saved-place privacy still applies.</p></div></li>
            </ul>
            <p className="privacy-caveat">SOS is different: your emergency location is shared with your circle, even when everyday sharing is restricted.</p>
          </div>
          <div className="privacy-demo" aria-label="Preview of Halo privacy controls">
            <div className="privacy-orbit orbit-back" />
            <div className="privacy-orbit orbit-front" />
            <div className="privacy-panel">
              <div className="privacy-panel-head"><span>Sharing with</span><b>3 people</b></div>
              <div className="sharing-person"><span className="avatar avatar-mum">MO</span><div><strong>Mum</strong><small>Precise location</small></div><i className="access-level level-full" /></div>
              <div className="sharing-person"><span className="avatar avatar-tomi">TA</span><div><strong>Tobi</strong><small>Approximate area</small></div><i className="access-level level-medium" /></div>
              <div className="sharing-person"><span className="avatar avatar-kemi">KO</span><div><strong>Kemi</strong><small>Hidden at Home</small></div><i className="access-level level-low" /></div>
              <div className="sharing-note"><BrandMark small /><span>Exact · Approximate · Hidden · Emergency-only</span></div>
            </div>
          </div>
        </section>

        <section className="people-section page-width section-pad">
          <div className="section-heading centered-heading">
            <p className="kicker">Made for real life</p>
            <h2>For the people who already look out for each other.</h2>
          </div>
          <div className="people-grid">
            <article><span className="people-label">Parents</span><p>See the route, the last location, and every important checkpoint—without another round of phone calls.</p><small>Stay connected, without constant calls</small></article>
            <article><span className="people-label">Friend groups</span><p>Share only what feels right and stay connected as plans change, with familiar avatars on your map.</p><small>Closeness with boundaries</small></article>
            <article><span className="people-label">Late-night commuters</span><p>Share a trip in seconds and give trusted people a clear signal if something changes.</p><small>Reassurance along the way</small></article>
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
            <p>Halo is in development for iPhone. Explore the experience today; early-access details will be shared here when registration opens.</p>
          </div>
          <EarlyAccessForm compact />
        </section>
      </main>

      <footer className="footer page-width">
        <a className="brand" href="#top"><BrandMark /><span>halo</span></a>
        <p>Your people. Your places. Your Halo.</p>
        <p className="footer-note">Halo supports trusted-circle safety, not emergency-service dispatch. Location and alert delivery depend on permissions, connectivity, and iOS background behavior.</p>
        <span>© 2026 Halo</span>
      </footer>
    </div>
  );
}
