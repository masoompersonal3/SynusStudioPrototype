import React from 'react';
import './ContactMap.css';

const ContactMap = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-head">
        <div className="contact-head-num">[05] / Contact</div>
        <h2>Let's Make Something <em className="contact-em">Specific</em>.</h2>
        <p>Currently booking projects starting Q3 2026. Reach out with a brief, a budget range, and a timeline. Replies within 48 hours.</p>
      </div>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row form-row-split">
            <div>
              <label className="form-label" htmlFor="f-name">[01] Name</label>
              <input className="form-field" id="f-name" name="name" type="text" required autoComplete="name" />
              <span className="form-hint">Required</span>
            </div>
            <div>
              <label className="form-label" htmlFor="f-email">[02] Email</label>
              <input className="form-field" id="f-email" name="email" type="email" required autoComplete="email" />
              <span className="form-hint">Required</span>
            </div>
          </div>

          <div className="form-row form-row-split">
            <div>
              <label className="form-label" htmlFor="f-type">[03] Project Type</label>
              <select className="form-field" id="f-type" name="project_type" required defaultValue="">
                <option value="" disabled>— Choose —</option>
                <option>Identity</option>
                <option>Editorial</option>
                <option>Web</option>
                <option>Direction</option>
                <option>Other</option>
              </select>
              <span className="form-hint">Select</span>
            </div>
            <div>
              <label className="form-label" htmlFor="f-budget">[04] Budget</label>
              <select className="form-field" id="f-budget" name="budget" required defaultValue="">
                <option value="" disabled>— Choose —</option>
                <option>Under €5k</option>
                <option>€5—15k</option>
                <option>€15—50k</option>
                <option>€50k+</option>
              </select>
              <span className="form-hint">Range</span>
            </div>
          </div>

          <div className="form-row">
            <label className="form-label" htmlFor="f-msg">[05] Brief</label>
            <textarea className="form-field form-field-area" id="f-msg" name="message" required placeholder="What are you working on?"></textarea>
            <span className="form-hint">Required</span>
          </div>

          <button className="form-submit" type="submit">Send Message</button>
        </form>

        <aside className="map-aside">
          <svg className="map-svg" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid meet" aria-label="Studio location map">
            {/* Background */}
            <rect width="600" height="600" fill="#0b0f19" />

            {/* Faint grid */}
            <g stroke="#ffffff" strokeWidth="1" strokeOpacity="0.08">
              <path d="M0,60 H600 M0,120 H600 M0,180 H600 M0,240 H600 M0,300 H600 M0,360 H600 M0,420 H600 M0,480 H600 M0,540 H600" />
              <path d="M60,0 V600 M120,0 V600 M180,0 V600 M240,0 V600 M300,0 V600 M360,0 V600 M420,0 V600 M480,0 V600 M540,0 V600" />
            </g>

            {/* River */}
            <path d="M-20,380 C 100,340 200,420 300,360 S 480,300 620,340" stroke="#1e293b" strokeWidth="34" fill="none" strokeLinecap="square" />
            <path d="M-20,380 C 100,340 200,420 300,360 S 480,300 620,340" stroke="#0b0f19" strokeWidth="24" fill="none" />
            <text x="80" y="395" className="map-txt" fontSize="9" opacity="0.65">▸ La Garonne</text>

            {/* Major streets */}
            <g stroke="#374151" strokeWidth="3" fill="none">
              <path d="M0,150 L600,180" />
              <path d="M150,0 L180,600" />
              <path d="M0,500 L600,470" />
              <path d="M450,0 L500,600" />
              <path d="M0,0 L350,300" />
              <path d="M280,80 L600,500" />
            </g>

            {/* Minor streets */}
            <g stroke="#374151" strokeWidth="1.5" fill="none" opacity="0.55">
              <path d="M0,80 L600,95" />
              <path d="M0,250 L600,260" />
              <path d="M0,560 L600,540" />
              <path d="M80,0 L95,600" />
              <path d="M250,0 L260,600" />
              <path d="M380,0 L390,600" />
              <path d="M50,200 L350,450" />
            </g>

            {/* Building blocks with numbers */}
            <g>
              <rect x="80" y="200" width="60" height="40" fill="#ffffff" opacity="0.88" />
              <text x="110" y="225" className="map-txt map-txt-inv" fontSize="9" textAnchor="middle">A·01</text>

              <rect x="200" y="100" width="44" height="44" fill="#ffffff" opacity="0.88" />
              <text x="222" y="127" className="map-txt map-txt-inv" fontSize="9" textAnchor="middle">B·02</text>

              <rect x="380" y="220" width="60" height="22" fill="#ffffff" opacity="0.88" />
              <text x="410" y="236" className="map-txt map-txt-inv" fontSize="9" textAnchor="middle">C·03</text>

              <rect x="100" y="500" width="44" height="44" fill="#ffffff" opacity="0.88" />
              <text x="122" y="527" className="map-txt map-txt-inv" fontSize="9" textAnchor="middle">D·04</text>

              <rect x="490" y="100" width="34" height="64" fill="#ffffff" opacity="0.88" />
              <text x="507" y="135" className="map-txt map-txt-inv" fontSize="9" textAnchor="middle">E·05</text>

              <rect x="500" y="500" width="64" height="64" fill="#ffffff" opacity="0.88" />
              <text x="532" y="536" className="map-txt map-txt-inv" fontSize="9" textAnchor="middle">F·06</text>
            </g>

            {/* Marker — STUDIO BDX */}
            <g transform="translate(300,260)">
              {/* Full-width crosshairs */}
              <line x1="-300" y1="0" x2="300" y2="0" stroke="#ffffff" strokeWidth="1" strokeDasharray="2 4" opacity="0.4" />
              <line x1="0" y1="-260" x2="0" y2="340" stroke="#ffffff" strokeWidth="1" strokeDasharray="2 4" opacity="0.4" />

              {/* Marker stack */}
              <rect x="-32" y="-32" width="64" height="64" fill="#0b0f19" stroke="#ffffff" strokeWidth="2" />
              <rect x="-22" y="-22" width="44" height="44" fill="#ffffff" />
              <rect x="-14" y="-14" width="28" height="28" fill="#ff3300" />
              {/* Center cross */}
              <line x1="-7" y1="0" x2="7" y2="0" stroke="#000000" strokeWidth="2" />
              <line x1="0" y1="-7" x2="0" y2="7" stroke="#000000" strokeWidth="2" />

              {/* Callout line + label */}
              <line x1="32" y1="-32" x2="80" y2="-72" stroke="#ffffff" strokeWidth="2" />
              <circle cx="80" cy="-72" r="3" fill="#ffffff" />
              <g transform="translate(80,-72)">
                <rect x="0" y="-12" width="138" height="22" fill="#ffffff" />
                <text x="8" y="3" className="map-txt map-txt-inv" fontSize="11" fontWeight="500" strokeWidth="0">▪ KLECET CHIKODI</text>
                <rect x="0" y="10" width="138" height="18" fill="#ff3300" />
                <text x="8" y="23" className="map-txt" fontSize="9" strokeWidth="0">16.43° N · 74.59° E</text>
              </g>
            </g>

            {/* Compass */}
            <g transform="translate(540,60)">
              <circle r="26" fill="#0b0f19" stroke="#ffffff" strokeWidth="2" />
              <line x1="0" y1="-18" x2="0" y2="18" stroke="#ffffff" strokeWidth="1" />
              <line x1="-18" y1="0" x2="18" y2="0" stroke="#ffffff" strokeWidth="1" opacity="0.4" />
              <polygon points="0,-18 -6,-4 0,0 6,-4" fill="#ffffff" />
              <polygon points="0,18 -6,4 0,0 6,4" fill="#ffffff" opacity="0.3" />
              <text x="0" y="-30" className="map-txt" fontSize="11" fontWeight="700" textAnchor="middle" strokeWidth="0">N</text>
            </g>

            {/* Scale bar */}
            <g transform="translate(20,560)">
              <text x="0" y="-6" className="map-txt" fontSize="9" opacity="0.7">Scale 1:5000</text>
              <g>
                <rect x="0" y="0" width="30" height="6" fill="#ffffff" />
                <rect x="30" y="0" width="30" height="6" fill="#0b0f19" stroke="#ffffff" strokeWidth="1" />
                <rect x="60" y="0" width="30" height="6" fill="#ffffff" />
                <rect x="90" y="0" width="30" height="6" fill="#0b0f19" stroke="#ffffff" strokeWidth="1" />
              </g>
              <text x="0" y="20" className="map-txt" fontSize="8" opacity="0.5">0</text>
              <text x="60" y="20" className="map-txt" fontSize="8" textAnchor="middle" opacity="0.5">100M</text>
              <text x="120" y="20" className="map-txt" fontSize="8" textAnchor="middle" opacity="0.5">200M</text>
            </g>

            {/* Sheet info top-left */}
            <g transform="translate(20,30)">
              <text x="0" y="0" className="map-txt" fontSize="9" opacity="0.5">Sheet 01/01 · BDX·CTR</text>
              <text x="0" y="14" className="map-txt" fontSize="9" opacity="0.5">Rev. 2026.05</text>
            </g>
          </svg>

          <dl className="map-legend">
            <div>
              <dt>KLECET</dt>
              <dd>Chikodi, Karnataka, 591201</dd>
            </div>
            <div>
              <dt>By Appointment</dt>
              <dd>Mon—Fri, 09:00—18:00</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
};

export default ContactMap;
