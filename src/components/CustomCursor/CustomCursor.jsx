import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const CustomCursor = () => {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const posRef = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.08,
        ease: 'none',
      })
      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: 'power2.out',
      })
    }

    const onEnterLink = () => {
      ring.classList.add('hovering')
      gsap.to(dot, { scale: 0, duration: 0.3 })
    }

    const onLeaveLink = () => {
      ring.classList.remove('hovering')
      gsap.to(dot, { scale: 1, duration: 0.3 })
    }

    const onMouseDown = () => ring.classList.add('clicking')
    const onMouseUp = () => ring.classList.remove('clicking')

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)

    const addHoverListeners = () => {
      document.querySelectorAll('a, button, [data-cursor="hover"], input, textarea, select').forEach((el) => {
        el.addEventListener('mouseenter', onEnterLink)
        el.addEventListener('mouseleave', onLeaveLink)
      })
    }

    addHoverListeners()
    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        id="cursor-dot"
        style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 99999 }}
      />
      <div
        ref={ringRef}
        id="cursor-ring"
        style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 99998 }}
      />
    </>
  )
}

export default CustomCursor
