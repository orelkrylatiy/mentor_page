import { ArrowRight, Code2, LayoutGrid, Sparkles, Target, Workflow, LaptopMinimal, CalendarDays, Clock3, FileText, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Диагностика',
    text: 'Смотрю код, уровень и цель: первый проект, собеседование, рост до уверенности в React.',
  },
  {
    num: '02',
    title: 'План и практика',
    text: 'Делаем дорожную карту, разбираем темы по порядку и сразу закрепляем их в коде.',
  },
  {
    num: '03',
    title: 'Ревью и сопровождение',
    text: 'Проверяю код, указываю на слабые места, помогаю исправить архитектуру и довести до результата.',
  },
];

const focusCards = [
  {
    icon: Code2,
    title: 'React / TypeScript',
    text: 'Хуки, состояние, типы, структура компонентов и понимание, зачем всё это нужно.',
  },
  {
    icon: LayoutGrid,
    title: 'Проекты и портфолио',
    text: 'Собираем не учебные, а живые проекты, которые не стыдно показать работодателю.',
  },
  {
    icon: Target,
    title: 'Собеседования',
    text: 'Разбираем типовые вопросы, ошибки новичков и как уверенно отвечать на интервью.',
  },
  {
    icon: Workflow,
    title: 'Архитектура',
    text: 'Учимся не только писать код, но и держать его в порядке, когда проект растёт.',
  },
];

const formats = [
  [LaptopMinimal, 'Онлайн', 'Zoom / Google Meet / Discord'],
  [CalendarDays, 'Длительность', '60 или 90 минут'],
  [Clock3, 'Частота', '1–2 раза в неделю'],
  [FileText, 'Материалы', 'Домашка, шаблоны, ссылки и код-ревью'],
];

const inside = [
  'Разбираем твой текущий уровень',
  'Строим дорожную карту',
  'Делаем код-ревью и исправляем ошибки',
  'Собираем портфолио и готовим к собесу',
];

export default function Benefits() {
  return (
    <>
      <section>
        <h2 className="section-label">Результат</h2>
        <div className="case-grid fade-up">
          <div className="case-card">
            <div className="case-nums">
              <span className="case-num">0</span>
              <span className="case-arrow"><ArrowRight size={22} strokeWidth={2.25} /></span>
              <span className="case-num after">1</span>
            </div>
            <p className="case-desc">
              Из состояния “не понимаю, с чего начать” выходим к первому собранному проекту, понятной базе и нормальному плану роста.
            </p>
          </div>
          <div className="case-green">
            <div className="big">Помогаю убрать хаос из обучения</div>
            <div className="small">Чтобы React, TypeScript и работа с проектами перестали казаться набором случайных тем.</div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-label">Что внутри менторства</h2>
        <div className="inside-card fade-up">
          <div className="inside-head">
            <div className="inside-title">Делаем не “курс”, а рабочий путь до проекта и понимания кода.</div>
            <p className="inside-text">Без лишней теории: только то, что реально нужно, чтобы перейти от “смотрю туториалы” к своим проектам.</p>
          </div>
          <div className="inside-list">
            {inside.map(item => (
              <div className="inside-item" key={item}>
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-label">Обо мне</h2>
        <div className="about-grid fade-up" id="about">
          <div>
            <h3 className="about-title">
              Максим Сергеевич —
              <br />
              фронтенд
              <br />
              <em>ментор.</em>
            </h3>
            <div className="pills">
              {['React', 'TypeScript', 'T-Банк', 'ITMO CS'].map(pill => (
                <span className="pill" key={pill}>{pill}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="about-text">
              Работаю фронтенд-разработчиком в Т-Банке и помогаю тем, кто хочет не просто “пройти курс”, а реально разобраться и собрать сильные проекты.
            </p>
            <p className="about-text">
              Объясняю спокойно, по шагам: от основ HTML/CSS и JavaScript до React, TypeScript и структуры рабочего проекта.
            </p>
            <p className="about-text">
              Мой фокус — чтобы у тебя было понимание, уверенность и готовый результат, а не только просмотренные уроки.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-label">На что делаем упор</h2>
        <div className="dev-cases fade-up" id="track">
          {focusCards.map(card => {
            const Icon = card.icon;
            return (
              <div className="dev-case" key={card.title}>
                <div className="dev-tag"><Sparkles size={12} /> Фокус</div>
                <div className="dev-case-title">
                  <Icon size={18} strokeWidth={2} /> {card.title}
                </div>
                <p className="dev-case-text">{card.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="process">
        <h2 className="section-label">Как проходит менторство</h2>
        <div className="steps fade-up">
          {steps.map(step => (
            <div className="step" key={step.num}>
              <div className="step-num">{step.num}</div>
              <div className="step-title">{step.title}</div>
              <p className="step-text">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="format">
        <h2 className="section-label">Формат</h2>
        <div className="format-grid fade-up">
          {formats.map(([Icon, label, value]) => (
            <div className="format-item" key={label}>
              <div className="ficon"><Icon size={18} strokeWidth={2} /></div>
              <div>
                <div className="flabel">{label}</div>
                <div className="fval">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
