import { useEffect, useState } from 'react'

const STORAGE_KEY = 'boomservice-cookie-consent'

export function useCookieConsent() {
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisivel(true)
    } catch {
      /* armazenamento indisponível */
    }
  }, [])

  function decidir(valor) {
    try {
      localStorage.setItem(STORAGE_KEY, valor)
    } catch {
      /* armazenamento indisponível */
    }
    setVisivel(false)
  }

  return { visivel, decidir }
}
