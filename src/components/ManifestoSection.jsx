'use client';

import { useEffect, useRef } from 'react';

const lines = [
  'Не просто объясняю React.',
  'Помогаю собрать сильный проект.',
  'Учу видеть логику, а не хаос.',
  'Довожу до уровня, где собеседования уже не пугают.',
];

export default function ManifestoSection() {
  const sectionRef = useRef(null);
  const lineRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      lineRefs.current.forEach(line => {
        if (!line) return;
        line.style.opacity = '1';
        line.style.transform = 'translate3d(0, 0, 0)';
      });

      return undefined;
    }

    let frameId = 0;
    let ticking = false;

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    const render = () => {
      const rect = section.getBoundingClientRect();
      const total = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = clamp((-rect.top) / total, 0, 1);
      const segment = 1 / lines.length;

      section.style.setProperty('--manifesto-progress', progress.toFixed(4));

      lineRefs.current.forEach((line, index) => {
        if (!line) return;

        const start = segment * index;
        const localProgress = clamp((progress - start) / segment, 0, 1);
        const opacity = 0.18 + localProgress * 0.82;
        const translateY = 28 - localProgress * 28;

        line.style.opacity = opacity.toFixed(3);
        line.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0)`;
      });

      ticking = false;
    };

    const requestRender = () => {
      if (ticking) return;

      ticking = true;
      frameId = window.requestAnimationFrame(render);
    };

    render();
    window.addEventListener('scroll', requestRender, { passive: true });
    window.addEventListener('resize', requestRender);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', requestRender);
      window.removeEventListener('resize', requestRender);
    };
  }, []);

  return (
    <section className="manifesto-section" ref={sectionRef}>
      <div className="manifesto-sticky">
        <div className="manifesto-shell fade-up">
          <h2 className="section-label">Подход</h2>
          <div className="manifesto-kicker">Scroll-driven message</div>
          <div className="manifesto-copy" aria-label="Ключевая идея менторства">
            {lines.map((line, index) => (
              <span
                className="manifesto-line"
                key={line}
                ref={node => {
                  lineRefs.current[index] = node;
                }}
              >
                {line}
              </span>
            ))}
          </div>
          <p className="manifesto-note">
            Идем от базовой уверенности в коде к портфолио, ревью и нормальной подготовке к найму.
          </p>
        </div>
      </div>
    </section>
  );
}
