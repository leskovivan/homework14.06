import React, { useState } from 'react'
import './slider.css'

const Slider = ({ images, text }) => {
  const [index, setIndex] = useState(0)
  const cardsPerPage = 8
  const cardWidth = 219
  const gap = 16

  const handleNext = () => {
    if (index + cardsPerPage >= images.length) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  return (
    <div className="slider-wrapper">
      <h3>{text}</h3>
      <div className="slider-viewport">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${index * (cardWidth + gap)}px)` }}
        >
          {images.map((src, i) => (
            <div className="slider-card" key={i}>
              <img src={src} alt={`img-${i}`} />
            </div>
          ))}
        </div>

        <button className="arrow-btn" onClick={handleNext}>
          ▶
        </button>
      </div>
    </div>
  )
}

export default Slider
