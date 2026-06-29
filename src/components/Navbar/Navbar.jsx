import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { NAV_LINKS } from '@utils/constants'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const scrollTo = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          transition: 'all 0.5s cubic-bezier(0.76, 0, 0.24, 1)',
          padding: scrolled ? '1rem 0' : '1.75rem 0',
          background: scrolled ? 'rgba(248, 246, 242, 0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(200,169,106,0.15)' : '1px solid transparent',
        }}
      >
        <div className="section-padding flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo('#hero') }}
            className="flex items-center gap-3 group"
          >
            <div style={{
              width: 40,
              height: 40,
              border: '1px solid rgba(200,169,106,0.5)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'border-color 0.3s',
            }}
              className="group-hover:border-gold-primary"
            >
              <span style={{
                fontFamily: '"Playfair Display", serif',
                color: '#C8A96A',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
              }}>CK</span>
            </div>
            <div>
              <div style={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 600,
                fontSize: '1rem',
                color: scrolled ? '#1D1D1D' : 'white',
                letterSpacing: '0.08em',
                transition: 'color 0.3s',
                lineHeight: 1.1,
              }}>
                Cucina Kraft
              </div>
              <div style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '0.65rem',
                color: '#C8A96A',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontStyle: 'italic',
              }}>
                Luxury Interiors
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="nav-link"
                style={{
                  background: 'none',
                  border: 'none',
                  color: scrolled ? '#1D1D1D' : 'rgba(255,255,255,0.85)',
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: '0.7rem',
                  fontWeight: 400,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  cursor: 'none',
                  transition: 'color 0.3s',
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => scrollTo('#contact')}
              style={{
                background: '#C8A96A',
                border: '1px solid #C8A96A',
                color: '#1D1D1D',
                fontFamily: '"Poppins", sans-serif',
                fontSize: '0.65rem',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                padding: '0.75rem 1.75rem',
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
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'none' }}
          >
            <span style={{
              display: 'block',
              width: 24,
              height: 1.5,
              background: scrolled ? '#1D1D1D' : 'white',
              transition: `all 0.3s, transform 0.3s ${menuOpen ? '0.1s' : ''}`,
              transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
            }} />
            <span style={{
              display: 'block',
              width: 18,
              height: 1.5,
              background: scrolled ? '#1D1D1D' : 'white',
              transition: 'all 0.3s',
              opacity: menuOpen ? 0 : 1,
              transform: menuOpen ? 'translateX(10px)' : 'none',
            }} />
            <span style={{
              display: 'block',
              width: 24,
              height: 1.5,
              background: scrolled ? '#1D1D1D' : 'white',
              transition: `all 0.3s, transform 0.3s ${menuOpen ? '0.1s' : ''}`,
              transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
            }} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 48px) 48px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 48px) 48px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 48px) 48px)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              background: '#1D1D1D',
              zIndex: 888,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            {/* Grid background */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'linear-gradient(rgba(200,169,106,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,106,0.03) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }} />

            <div style={{ position: 'relative', textAlign: 'center' }}>
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.07, ease: [0.76, 0, 0.24, 1] }}
                >
                  <button
                    onClick={() => scrollTo(link.href)}
                    style={{
                      display: 'block',
                      fontFamily: '"Playfair Display", serif',
                      fontSize: 'clamp(2rem, 6vw, 4rem)',
                      fontWeight: 400,
                      color: 'rgba(255,255,255,0.6)',
                      background: 'none',
                      border: 'none',
                      cursor: 'none',
                      padding: '0.5rem 2rem',
                      transition: 'color 0.3s',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.2,
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#C8A96A' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
                  >
                    {link.label}
                  </button>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                style={{ marginTop: '3rem' }}
              >
                <button
                  onClick={() => scrollTo('#contact')}
                  style={{
                    background: '#C8A96A',
                    color: '#1D1D1D',
                    border: 'none',
                    padding: '1rem 3rem',
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: '0.7rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    cursor: 'none',
                  }}
                >
                  Book Consultation
                </button>
              </motion.div>
            </div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.8 }}
              style={{
                position: 'absolute',
                bottom: '2rem',
                fontFamily: '"Poppins", sans-serif',
                fontSize: '0.65rem',
                color: 'white',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              info@cucinakraft.com
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
