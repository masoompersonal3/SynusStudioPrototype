import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './AnimatedLink.css';

const AnimatedLink = ({ href, label, ease = 'power3.easeOut' }) => {
  const circleRef = useRef(null);
  const pillRef = useRef(null);
  const tlRef = useRef(null);
  const activeTweenRef = useRef(null);

  useEffect(() => {
    const layout = () => {
      const circle = circleRef.current;
      const pill = pillRef.current;
      if (!circle || !pill) return;

      const rect = pill.getBoundingClientRect();
      const { width: w, height: h } = rect;
      
      // Math for the expanding circle radius based on provided component
      const R = ((w * w) / 4 + h * h) / (2 * h);
      const D = Math.ceil(2 * R) + 2;
      const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
      const originY = D - delta;

      circle.style.width = `${D}px`;
      circle.style.height = `${D}px`;
      circle.style.bottom = `-${delta}px`;

      gsap.set(circle, {
        xPercent: -50,
        scale: 0,
        transformOrigin: `50% ${originY}px`
      });

      const labelEl = pill.querySelector('.pill-label');
      const whiteEl = pill.querySelector('.pill-label-hover');

      if (labelEl) gsap.set(labelEl, { y: 0 });
      if (whiteEl) gsap.set(whiteEl, { y: h + 12, opacity: 0 });

      tlRef.current?.kill();
      const tl = gsap.timeline({ paused: true });

      tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: 'auto' }, 0);

      if (labelEl) {
        tl.to(labelEl, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0);
      }

      if (whiteEl) {
        gsap.set(whiteEl, { y: Math.ceil(h + 100), opacity: 0 });
        tl.to(whiteEl, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0);
      }

      tlRef.current = tl;
    };

    layout();
    window.addEventListener('resize', layout);
    if (document.fonts?.ready) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    return () => window.removeEventListener('resize', layout);
  }, [ease]);

  const handleEnter = () => {
    const tl = tlRef.current;
    if (!tl) return;
    activeTweenRef.current?.kill();
    activeTweenRef.current = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLeave = () => {
    const tl = tlRef.current;
    if (!tl) return;
    activeTweenRef.current?.kill();
    activeTweenRef.current = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: 'auto'
    });
  };

  return (
    <a
      href={href}
      className="pill-link"
      ref={pillRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <span className="hover-circle" ref={circleRef} />
      <span className="label-stack">
        <span className="pill-label">{label}</span>
        <span className="pill-label-hover" aria-hidden="true">
          {label}
        </span>
      </span>
    </a>
  );
};

export default AnimatedLink;
