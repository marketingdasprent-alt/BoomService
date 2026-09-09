import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

const WHATSAPP_NUMBER = '351900000000'
const WHATSAPP_MESSAGE = 'Olá! Quero saber mais sobre os serviços da BoomService.'

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.34.664 4.523 1.816 6.377L4 29l7.803-1.789A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.7c-1.94 0-3.75-.53-5.31-1.45l-.38-.22-4.63 1.06 1.08-4.51-.25-.4A9.63 9.63 0 0 1 5.3 15c0-5.9 4.8-10.7 10.7-10.7S26.7 9.1 26.7 15 21.9 24.7 16.004 24.7Zm5.86-8.02c-.32-.16-1.9-.94-2.2-1.05-.29-.11-.5-.16-.72.16-.21.32-.82 1.05-1.01 1.26-.18.21-.37.24-.69.08-.32-.16-1.34-.5-2.55-1.6-.94-.85-1.58-1.9-1.76-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.11-.21.05-.4-.02-.55-.08-.16-.72-1.76-.99-2.41-.26-.63-.53-.54-.72-.55h-.62c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.44 5.4 4.68.75.32 1.34.52 1.8.67.76.24 1.44.21 1.99.13.61-.09 1.9-.78 2.16-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  )
}

export default function FloatingActions({ cookieBannerVisivel }) {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (cookieBannerVisivel) return null

  return (
    <div className="floating-actions" aria-hidden={false}>
      <a
        className="floating-actions__btn floating-actions__btn--whatsapp"
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
      >
        <WhatsAppIcon />
      </a>
      <button
        type="button"
        className={`floating-actions__btn floating-actions__btn--top ${showTop ? 'is-visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Voltar ao início"
        aria-hidden={!showTop}
        tabIndex={showTop ? 0 : -1}
      >
        <ArrowUp aria-hidden="true" />
      </button>
    </div>
  )
}
