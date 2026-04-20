'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun, ChevronRight } from 'lucide-react';
import Button from '../UI/Button';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';
  return document.documentElement.dataset.theme || 'dark';
}

export default function Header() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav>
      <a className="nav-logo" href="#top">
        <span className="nav-logo-mark" aria-hidden="true">
          <img src="/images/brainwave-mark.svg" alt="" />
        </span>
        <span className="nav-logo-text">BrainWave</span>
      </a>
      <div className="nav-links" aria-label="Секции">
        <a href="#about">Обо мне</a>
        <a href="#track">Формат</a>
        <a href="#process">Процесс</a>
        <a href="#cases">Кейсы</a>
        <a href="#trial">Пробное</a>
      </div>
      <div className="nav-actions">
        <button
          className="theme-toggle"
          type="button"
          onClick={() => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))}
          aria-label={theme === 'dark' ? 'Переключить на светлую тему' : 'Переключить на тёмную тему'}
        >
          <span className="theme-toggle-icon">{theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}</span>
        </button>
        <Button href="#trial" className="nav-cta">
          Бесплатный созвон <ChevronRight size={16} />
        </Button>
      </div>
    </nav>
  );
}
