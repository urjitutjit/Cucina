import { useEffect, useRef, useState } from 'react'
import { useInView } from '@hooks/useInView'

const AnimatedCounter = ({ target, suffix = '', duration = 2200, className = '' }) => {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ threshold: 0.5 })
  const hasRun = useRef(false)

  useEffect(() => {
    if (!inView || hasRun.current) return
    hasRun.current = true

    const start = 0
    const end = parseInt(target)
    const stepTime = duration / end
    let current = start

    const timer = setInterval(() => {
      current += Math.max(1, Math.floor(end / 60))
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, stepTime > 16 ? stepTime : 16)

    return () => clearInterval(timer)
  }, [inView, target, duration])

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default AnimatedCounter
