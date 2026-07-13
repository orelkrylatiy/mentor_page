'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Button from '../UI/Button';

const reviews = [
  {
    name: 'Игорь, junior',
    meta: 'React с нуля',
    imageSrc: '/images/ben-den-engelsen-eNyXK17so6A-unsplash.jpg',
    text: 'После менторства у меня наконец сложилась картинка по React. Перестал прыгать между уроками и собрал первый нормальный проект.',
  },
  {
    name: 'Алина, студентка',
    meta: 'TypeScript и портфолио',
    imageSrc: '/images/aiony-haust-3TLl_97HNJo-unsplash.jpg',
    text: 'Очень помог код-ревью: стало понятно, что именно улучшать в архитектуре и как писать аккуратнее.',
  },
  {
    name: 'Даниил, 2 курс',
    meta: 'Подготовка к собеседованиям',
    imageSrc: '/images/photo_2026-04-18_14-56-14.jpg',
    text: 'Разобрали типовые вопросы и слабые места. На интервью стал отвечать спокойнее и увереннее.',
  },
  {
    name: 'Ксения, junior',
    meta: 'Первые проекты',
    imageSrc: '/images/icons8-team-FcLyt7lW5wg-unsplash.jpg',
    text: 'Собрали план без лишней воды, и я наконец перестала метаться между темами. Появился внятный путь и чувство контроля.',
  },
  {
    name: 'Сергей, студент',
    meta: 'Архитектура и структура',
    imageSrc: '/images/noah-blaine-clark-woODqesB-Eo-unsplash.jpg',
    text: 'Стало понятно, как раскладывать проект по компонентам и не тонуть в хаосе. Очень сильное впечатление от ревью.',
  },
  {
    name: 'Марина, junior',
    meta: 'Code review',
    imageSrc: '/images/pargat-dhillon-DmGzwwuLPG8-unsplash.jpg',
    text: 'После нескольких ревью стала писать увереннее и чище. Особенно помогло увидеть, как мыслит человек из продакшна.',
  },
];

export default function Pricing() {
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    function update() {
      let nextVisible = 3;
      if (window.innerWidth <= 720) nextVisible = 1;
      else if (window.innerWidth <= 1120) nextVisible = 2;

      const track = trackRef.current;

      setVisible(nextVisible);

      if (!track) return;

      const gap = 16;
      const width = (track.parentElement.offsetWidth - gap * (nextVisible - 1)) / nextVisible;
      setCardWidth(width);
      setCurrent(prev => Math.min(prev, Math.max(0, reviews.length - nextVisible)));
    }

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !cardWidth) return;
    const gap = 16;
    track.style.transform = `translateX(-${current * (cardWidth + gap)}px)`;
  }, [current, cardWidth]);

  const max = useMemo(() => Math.max(0, reviews.length - visible), [visible]);
  const totalPages = max + 1;
  const currentPage = Math.min(current + 1, totalPages);
  const canSlide = reviews.length > visible;

  return (
    <>
      <section id="cases">
        <h2 className="section-label">Отзывы</h2>
        <div className="reviews-shell fade-up">
          <div className="reviews-outer">
            <div className="reviews-track" ref={trackRef}>
              {reviews.map(review => (
                <div
                  className="review-card mentor-review"
                  key={review.name}
                  style={{ width: cardWidth || 'auto', minWidth: cardWidth || 'auto' }}
                >
                  <div className="rav">
                    <img src={review.imageSrc} alt={review.name} />
                  </div>
                  <div className="rname">{review.name}</div>
                  <div className="rmeta">{review.meta}</div>
                  <div className="rstars" aria-label="5 out of 5">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={13} fill="currentColor" strokeWidth={1.8} />
                    ))}
                  </div>
                  <p className="rtext">{review.text}</p>
                </div>
              ))}
            </div>
            <div className="reviews-fade reviews-fade-left" aria-hidden="true" />
            <div className="reviews-fade reviews-fade-right" aria-hidden="true" />
          </div>
          <div className="reviews-controls">
            <button
              className="rev-btn rev-btn-left"
              onClick={() => setCurrent(prev => (prev > 0 ? prev - 1 : max))}
              type="button"
              aria-label="Предыдущие отзывы"
              disabled={!canSlide}
            >
              <ChevronLeft size={18} />
            </button>
            <div className="reviews-status" aria-live="polite">
              {currentPage} / {totalPages}
            </div>
            <button
              className="rev-btn rev-btn-right"
              onClick={() => setCurrent(prev => (prev < max ? prev + 1 : 0))}
              type="button"
              aria-label="Следующие отзывы"
              disabled={!canSlide}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <div className="cta-section" id="trial">
        <div className="cta-inner fade-up">
          <h2 className="cta-title">Первый созвон — бесплатно.</h2>
          <div className="cta-right">
            <p className="cta-sub">Поймём твой уровень, цель и что нужно делать дальше без лишней воды.</p>
            <Button href="https://t.me/agafonwave" className="cta-btn" target="_blank" rel="noreferrer">
              Написать в Telegram <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
