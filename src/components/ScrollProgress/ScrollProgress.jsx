import { useEffect, useRef } from 'react'
import { useScrollProgress } from '@hooks/useScrollProgress'

const ScrollProgress = () => {
  const progress = useScrollProgress()
  const barRef = useRef(null)

  useEffect(() => {
    if (barRef.current) {
      barRef.current.style.width = `${progress}%`
    }
  }, [progress])

  return (
    <div
      id="scroll-progress"
      ref={barRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '2px',
        background: 'linear-gradient(90deg, #C8A96A, #6B4F3A)',
        zIndex: 9990,
        width: 0,
        transition: 'width 0.1s linear',
      }}
    />
  )
}

export default ScrollProgress
