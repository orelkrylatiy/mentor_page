export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-links">
          <div>
            <div className="footer-label">Обо мне</div>
            <ul className="footer-list">
              <li>Максим Сергеевич</li>
              <li>Фронтенд-разработчик в Т-Банке</li>
              <li>Ментор по React / TypeScript</li>
            </ul>
          </div>
          <div>
            <div className="footer-label">Что разбираем</div>
            <ul className="footer-list">
              <li>React и TypeScript</li>
              <li>Портфолио и проекты</li>
              <li>Собеседования и code review</li>
            </ul>
          </div>
          <div>
            <div className="footer-label">Контакт</div>
            <a className="footer-contact" href="https://t.me/agafonwave" target="_blank" rel="noreferrer">
              Telegram →
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <a className="footer-logo" href="#top">
          <span className="footer-logo-copy">
            <span className="footer-logo-text">Максим Сергеевич</span>
            <span className="footer-logo-subtitle">frontend mentor</span>
          </span>
        </a>
        <span className="footer-note">React · TypeScript · Portfolio · Interviews</span>
      </div>
    </footer>
  );
}
