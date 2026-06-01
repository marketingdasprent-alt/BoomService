import iconUrl from '../assets/logo-icon.png'
import fullUrl from '../assets/logo-full.png'

// variant: "icon" (só o B + seta) ou "full" (logo completa com texto)
export default function Logo({ size = 44, variant = 'icon', className = '' }) {
  const isFull = variant === 'full'
  return (
    <img
      src={isFull ? fullUrl : iconUrl}
      alt="BoomService"
      className={`logo-img logo-img--${variant} ${className}`}
      style={{ height: `${size}px` }}
      width={isFull ? size * 2 : size}
      height={size}
    />
  )
}
