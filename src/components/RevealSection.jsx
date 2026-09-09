import { useEffect, useRef } from 'react'

export default function RevealSection({ children, className = '', id, ariaLabelledby }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion || !('IntersectionObserver' in window)) {
      section.classList.add('reveal--visible')
      return
    }

    section.classList.add('reveal')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        section.classList.add('reveal--visible')
        observer.unobserve(section)
      },
      { threshold: 0.12 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id={id} aria-labelledby={ariaLabelledby} className={className}>
      {children}
    </section>
  )
}
