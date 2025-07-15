import React, { useState, useEffect } from 'react'
import './ScrollToTopButton.css'

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : 'unvisible'}`}
      onClick={scrollToTop}
    >
      <img src='up.png'/>
    </button>
  )
}

export default ScrollToTopButton
