import { useRef } from 'react'
import gsap from 'gsap'

const MagneticButton = ({ children, className = '', strength = 0.35, onClick }) => {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) * strength
    const dy = (e.clientY - cy) * strength
    gsap.to(el, { x: dx, y: dy, duration: 0.4, ease: 'power2.out' })
  }

  const onLeave = () => {
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' })
  }

  return (
    <div
      ref={ref}
      className={`inline-block ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default MagneticButton
