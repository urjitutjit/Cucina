import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { useLoader } from '@context/LoaderContext'

const Loader = () => {
  const { isLoading, setProgress, finishLoading } = useLoader()
  const progressRef = useRef(null)
  const progressTextRef = useRef(null)
  const loaderRef = useRef(null)
  const curtainRef = useRef(null)

  useEffect(() => {
    if (!isLoading) return

    let prog = 0
    const tl = gsap.timeline()

    // Fill to 100% in one smooth shot — total ~600ms
    if (progressRef.current) {
      gsap.to(progressRef.current, { width: '100%', duration: 0.5, ease: 'power2.inOut' })
    }
    let tick = 0
    const interval = setInterval(() => {
      tick += 20
      if (progressTextRef.current) {
        progressTextRef.current.textContent = `${Math.min(tick, 100)}%`
      }
      if (tick >= 100) {
        clearInterval(interval)
        setTimeout(() => {
          tl.to(curtainRef.current, {
            yPercent: -100,
            duration: 0.8,
            ease: 'power4.inOut',
          }).call(finishLoading)
        }, 100)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [isLoading, setProgress, finishLoading])

  return (
    <AnimatePresence>
      {isLoading && (
        <div
          ref={loaderRef}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#1D1D1D',
            overflow: 'hidden',
          }}
        >
          <div ref={curtainRef} style={{ position: 'absolute', inset: 0, background: '#1D1D1D', zIndex: 1 }}>
            {/* Animated background grid */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'linear-gradient(rgba(200,169,106,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,106,0.04) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }} />

            {/* Center content */}
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '3rem' }}>

              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                style={{ textAlign: 'center' }}
              >
                {/* CK Monogram */}
                <div style={{ position: 'relative', width: 100, height: 100, margin: '0 auto 24px' }}>
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      border: '1px solid rgba(200,169,106,0.3)',
                      borderRadius: '50%',
                    }}
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
                    style={{
                      position: 'absolute',
                      inset: 8,
                      border: '1px solid rgba(200,169,106,0.6)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span style={{
                      fontFamily: '"Playfair Display", serif',
                      color: '#C8A96A',
                      fontSize: '2rem',
                      fontWeight: 500,
                      letterSpacing: '0.05em',
                    }}>CK</span>
                  </motion.div>
                </div>

                <motion.h1
                  initial={{ opacity: 0, letterSpacing: '0.5em' }}
                  animate={{ opacity: 1, letterSpacing: '0.3em' }}
                  transition={{ duration: 0.9, delay: 0.4 }}
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    color: 'white',
                    fontSize: '0.75rem',
                    fontWeight: 300,
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                  }}
                >
                  Cucina Kraft
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    color: '#C8A96A',
                    fontSize: '0.85rem',
                    fontStyle: 'italic',
                    marginTop: '0.25rem',
                    letterSpacing: '0.15em',
                  }}
                >
                  Luxury Interiors
                </motion.p>
              </motion.div>

              {/* Progress */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{ width: 220, textAlign: 'center' }}
              >
                {/* Progress bar track */}
                <div style={{
                  width: '100%',
                  height: 1,
                  background: 'rgba(200,169,106,0.2)',
                  borderRadius: 1,
                  marginBottom: '1rem',
                  overflow: 'hidden',
                }}>
                  <div
                    ref={progressRef}
                    style={{
                      height: '100%',
                      width: '0%',
                      background: 'linear-gradient(90deg, #6B4F3A, #C8A96A)',
                      borderRadius: 1,
                    }}
                  />
                </div>
                <span
                  ref={progressTextRef}
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    color: 'rgba(200,169,106,0.7)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.2em',
                  }}
                >0%</span>
              </motion.div>
            </div>

            {/* Corner decorations */}
            <div style={{ position: 'absolute', top: 32, left: 32, width: 40, height: 40, borderTop: '1px solid rgba(200,169,106,0.3)', borderLeft: '1px solid rgba(200,169,106,0.3)' }} />
            <div style={{ position: 'absolute', top: 32, right: 32, width: 40, height: 40, borderTop: '1px solid rgba(200,169,106,0.3)', borderRight: '1px solid rgba(200,169,106,0.3)' }} />
            <div style={{ position: 'absolute', bottom: 32, left: 32, width: 40, height: 40, borderBottom: '1px solid rgba(200,169,106,0.3)', borderLeft: '1px solid rgba(200,169,106,0.3)' }} />
            <div style={{ position: 'absolute', bottom: 32, right: 32, width: 40, height: 40, borderBottom: '1px solid rgba(200,169,106,0.3)', borderRight: '1px solid rgba(200,169,106,0.3)' }} />
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default Loader
