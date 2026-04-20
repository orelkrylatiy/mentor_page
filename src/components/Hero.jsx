import { ArrowRight } from 'lucide-react';

const marqueeItems = ['React', 'TypeScript', 'Frontend', 'Code review', 'Портфолио', 'Собеседования', 'Архитектура'];

export default function Hero() {
  return (
    <>
      <div className="hero" id="top">
        <div className="hero-left">
          <div className="hero-bg-text" aria-hidden="true">DEV</div>
          <div className="hero-content">
            <div className="hero-tag">Менторство по frontend</div>
            <h1 className="hero-title">
              React и TypeScript
              <br />
              без хаоса —
              <br />
              <em>с понятным планом.</em>
            </h1>
            <p className="hero-sub">
              Помогаю собрать первый сильный проект, разобраться в логике React и выйти на уровень, где уже можно уверенно проходить собеседования.
            </p>
            <div className="hero-stats">
              <div>
                <div className="hero-stat-num">
                  <span>1</span>:<span>1</span>
                </div>
                <div className="hero-stat-label">формат менторства</div>
              </div>
              <div>
                <div className="hero-stat-num">
                  <span>3</span>+ года
                </div>
                <div className="hero-stat-label">в продакшне</div>
              </div>
              <div>
                <div className="hero-stat-num">
                  <span>40</span>+
                </div>
                <div className="hero-stat-label">разборов и созвонов</div>
              </div>
            </div>
          </div>
        </div>

        <aside className="hero-photo mentor-photo">
          <img src="/images/photo_2026-04-18_14-56-14.jpg" alt="Максим Сергеевич" />
          <div className="hero-photo-grad" />
          <div className="hero-badge mentor-badge mentor-plaque">
            <div className="hero-badge-name">Максим Сергеевич</div>
            <div className="hero-badge-role">Frontend mentor · Т-Банк</div>
          </div>
        </aside>
      </div>

      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee-track">
          {marqueeItems.concat(marqueeItems).map((item, index) => (
            <span className="marquee-item" key={`${item}-${index}`}>
              <span className="marquee-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
