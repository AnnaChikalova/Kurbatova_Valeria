import { useState } from 'react'
import otz1 from '../assets/otz1.jpg'
import otz2 from '../assets/otz2.jpg'
import otz3 from '../assets/otz3.png'
import otz4 from '../assets/otz4.png'
import otz5 from '../assets/otz5.png'
import otz6 from '../assets/otz6.jpg'
import otz7 from '../assets/otz7.png'
import otz8 from '../assets/otz8.png'
import otz9 from '../assets/otz9.png'

const testimonials = [otz1, otz2, otz3, otz4, otz5, otz6, otz7, otz8, otz9]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const total = testimonials.length

  const goPrev = () => {
    setIndex((i) => (i === 0 ? total - 1 : i - 1))
  }

  const goNext = () => {
    setIndex((i) => (i === total - 1 ? 0 : i + 1))
  }

  return (
    <section id="testimonials" className="section section--testimonials">
      <div className="section__inner">
        <h2 className="section__title">Отзывы</h2>
        <div className="testimonials__slider">
          <button
            type="button"
            className="testimonials__arrow testimonials__arrow--prev"
            onClick={goPrev}
            aria-label="Предыдущий отзыв"
          >
            ‹
          </button>

          <div className="testimonial-card" key={index}>
            <img
              className="testimonial-card__image"
              src={testimonials[index]}
              alt={`Отзыв ${index + 1}`}
            />
          </div>

          <button
            type="button"
            className="testimonials__arrow testimonials__arrow--next"
            onClick={goNext}
            aria-label="Следующий отзыв"
          >
            ›
          </button>
        </div>
        <div className="testimonials__dots" aria-hidden="true">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`testimonials__dot${i === index ? ' testimonials__dot--active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
