import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import MagneticButton from '@components/common/MagneticButton'

const Hero = () => {
  const containerRef = useRef(null)
  const bgRef = useRef(null)
  const headlineRef = useRef(null)
  const wordsRef = useRef([])

  useEffect(() => {
    const parallax = (e) => {
      const { clientX, clientY } = e
      const xRatio = (clientX / window.innerWidth - 0.5) * 20
      const yRatio = (clientY / window.innerHeight - 0.5) * 12
      gsap.to(bgRef.current, {
        x: xRatio,
        y: yRatio,
        duration: 1.5,
        ease: 'power2.out',
      })
    }

    window.addEventListener('mousemove', parallax)
    return () => window.removeEventListener('mousemove', parallax)
  }, [])

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const heroWords = ['We', 'Recreate', 'Your', 'Imaginations']

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{
        position: 'relative',
        height: '100svh',
        minHeight: 700,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        background: '#1D1D1D',
      }}
    >
      {/* Background Image with Parallax */}
      <div
        ref={bgRef}
        style={{
          position: 'absolute',
          inset: '-5%',
          willChange: 'transform',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=85"
          alt="Luxury Kitchen Interior"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          loading="eager"
        />
        {/* Layered overlays */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(105deg, rgba(29,29,29,0.88) 0%, rgba(29,29,29,0.6) 50%, rgba(29,29,29,0.3) 100%)',
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(0deg, rgba(29,29,29,0.7) 0%, transparent 50%)',
        }} />
      </div>

      {/* Floating Shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          right: '8%',
          top: '20%',
          width: 180,
          height: 180,
          border: '1px solid rgba(200,169,106,0.12)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          right: '10%',
          top: '22%',
          width: 120,
          height: 120,
          border: '1px solid rgba(200,169,106,0.2)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          right: '14%',
          top: '28%',
          width: 6,
          height: 6,
          background: '#C8A96A',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      {/* Geometric line decoration */}
      <div style={{
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: '38%',
        pointerEvents: 'none',
      }}>
        <svg width="100%" height="100%" viewBox="0 0 400 800" preserveAspectRatio="none">
          <line x1="1" y1="0" x2="1" y2="800" stroke="rgba(200,169,106,0.08)" strokeWidth="1" />
          <line x1="200" y1="0" x2="200" y2="800" stroke="rgba(200,169,106,0.05)" strokeWidth="1" />
          <line x1="0" y1="200" x2="400" y2="200" stroke="rgba(200,169,106,0.05)" strokeWidth="1" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="section-padding" style={{ position: 'relative', zIndex: 10, maxWidth: '900px' }}>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}
        >
          <div style={{ width: 40, height: 1, background: '#C8A96A' }} />
          <span style={{
            fontFamily: '"Poppins", sans-serif',
            color: '#C8A96A',
            fontSize: '0.7rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
          }}>Luxury Interior Design</span>
        </motion.div>

        {/* Headline — word by word reveal */}
        <h1 style={{
          fontFamily: '"Playfair Display", serif',
          color: 'white',
          fontSize: 'clamp(3rem, 8vw, 7.5rem)',
          fontWeight: 400,
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          marginBottom: '0.5rem',
        }}>
          {heroWords.map((word, i) => (
            <span
              key={word}
              style={{ display: 'inline-block', overflow: 'hidden', marginRight: word !== 'Imaginations' ? '0.3em' : 0 }}
            >
              <motion.span
                style={{ display: 'inline-block' }}
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.5 + i * 0.12,
                  ease: [0.76, 0, 0.24, 1],
                }}
              >
                {word === 'Imaginations' ? (
                  <em style={{ fontStyle: 'italic', color: '#C8A96A' }}>{word}</em>
                ) : word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.76, 0, 0.24, 1] }}
          style={{
            fontFamily: '"Poppins", sans-serif',
            color: 'rgba(255,255,255,0.55)',
            fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
            fontWeight: 300,
            lineHeight: 1.7,
            maxWidth: 480,
            marginTop: '1.5rem',
            marginBottom: '3rem',
          }}
        >
          Precision-crafted kitchens, wardrobes, doors, and bespoke furniture —
          designed to elevate every space into a masterpiece.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease: [0.76, 0, 0.24, 1] }}
          style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}
        >
          <MagneticButton>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: '#C8A96A',
                border: '1px solid #C8A96A',
                color: '#1D1D1D',
                fontFamily: '"Poppins", sans-serif',
                fontSize: '0.7rem',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                padding: '1.1rem 2.5rem',
                cursor: 'none',
                transition: 'all 0.4s cubic-bezier(0.76, 0, 0.24, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#6B4F3A'
                e.currentTarget.style.borderColor = '#6B4F3A'
                e.currentTarget.style.color = 'white'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#C8A96A'
                e.currentTarget.style.borderColor = '#C8A96A'
                e.currentTarget.style.color = '#1D1D1D'
              }}
            >
              Book Consultation
            </button>
          </MagneticButton>

          <MagneticButton>
            <button
              onClick={() => document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.3)',
                color: 'white',
                fontFamily: '"Poppins", sans-serif',
                fontSize: '0.7rem',
                fontWeight: 400,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                padding: '1.1rem 2.5rem',
                cursor: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.4s cubic-bezier(0.76, 0, 0.24, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#C8A96A'
                e.currentTarget.style.color = '#C8A96A'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
                e.currentTarget.style.color = 'white'
              }}
            >
              View Projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={scrollToAbout}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.75rem',
          cursor: 'none',
          zIndex: 10,
        }}
      >
        <span style={{
          fontFamily: '"Poppins", sans-serif',
          fontSize: '0.6rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.4)',
          writingMode: 'vertical-rl',
        }}>Scroll</span>
        <div style={{ width: 1, height: 60, background: 'rgba(255,255,255,0.15)', position: 'relative', overflow: 'hidden' }}>
          <motion.div
            animate={{ y: ['0%', '100%'] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '50%',
              background: '#C8A96A',
            }}
          />
        </div>
      </motion.div>

      {/* Right side info */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        style={{
          position: 'absolute',
          right: '2rem',
          bottom: '3rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          alignItems: 'flex-end',
          zIndex: 10,
        }}
        className="hidden lg:flex"
      >
        <span style={{
          fontFamily: '"Poppins", sans-serif',
          fontSize: '0.6rem',
          letterSpacing: '0.25em',
          color: 'rgba(255,255,255,0.3)',
          textTransform: 'uppercase',
        }}>Since</span>
        <span style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: '1.5rem',
          color: 'rgba(200,169,106,0.8)',
          fontWeight: 300,
        }}>2015</span>
      </motion.div>
    </section>
  )
}

export default Hero
