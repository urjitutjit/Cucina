import { useState } from 'react'
import { motion } from 'framer-motion'
import { NAV_LINKS, SITE_EMAIL, SITE_PHONE, SITE_ADDRESS, SITE_INSTAGRAM, SITE_FACEBOOK } from '@utils/constants'
import { Instagram, Facebook, Linkedin, Youtube, ArrowUp } from 'lucide-react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const products = [
    { label: 'High-End Kitchens', href: '#kitchens' },
    { label: 'Luxury Wardrobes', href: '#wardrobes' },
    { label: 'Doors & Wall Panels', href: '#doors' },
    { label: 'Bespoke Furniture', href: '#furniture' },
  ]

  return (
    <footer style={{
      background: '#141414',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Grid background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(200,169,106,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,106,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      {/* Gold accent line at top */}
      <div style={{
        height: 1,
        background: 'linear-gradient(90deg, transparent, #C8A96A, transparent)',
      }} />

      {/* Main footer content */}
      <div className="section-padding" style={{ paddingTop: '5rem', paddingBottom: '3rem', position: 'relative' }}>

        {/* Top section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1.2fr',
          gap: 'clamp(2rem, 4vw, 5rem)',
          marginBottom: '5rem',
          paddingBottom: '4rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand column */}
          <div>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
              <div style={{
                width: 44,
                height: 44,
                border: '1px solid rgba(200,169,106,0.4)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{
                  fontFamily: '"Playfair Display", serif',
                  color: '#C8A96A',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                }}>CK</span>
              </div>
              <div>
                <div style={{
                  fontFamily: '"Playfair Display", serif',
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                }}>Cucina Kraft</div>
                <div style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  color: '#C8A96A',
                  fontSize: '0.65rem',
                  letterSpacing: '0.2em',
                  fontStyle: 'italic',
                }}>Luxury Interiors</div>
              </div>
            </div>

            <p style={{
              fontFamily: '"Poppins", sans-serif',
              color: 'rgba(255,255,255,0.35)',
              fontSize: '0.82rem',
              lineHeight: 1.8,
              fontWeight: 300,
              marginBottom: '2rem',
              maxWidth: 300,
            }}>
              We recreate your imaginations. Premium kitchens, wardrobes, doors, and bespoke furniture crafted for the discerning few.
            </p>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { icon: Instagram, href: SITE_INSTAGRAM },
                { icon: Facebook, href: SITE_FACEBOOK },
                { icon: Linkedin, href: '#' },
                { icon: Youtube, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 36,
                    height: 36,
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#C8A96A'
                    e.currentTarget.style.background = 'rgba(200,169,106,0.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  <Icon size={14} color="#8A8A8A" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: '0.65rem',
              color: 'rgba(255,255,255,0.25)',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: '0.82rem',
                      color: 'rgba(255,255,255,0.4)',
                      cursor: 'none',
                      padding: 0,
                      transition: 'color 0.3s',
                      textAlign: 'left',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#C8A96A' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 style={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: '0.65rem',
              color: 'rgba(255,255,255,0.25)',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}>Products</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {products.map((product) => (
                <li key={product.label}>
                  <button
                    onClick={() => scrollTo(product.href)}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: '0.82rem',
                      color: 'rgba(255,255,255,0.4)',
                      cursor: 'none',
                      padding: 0,
                      transition: 'color 0.3s',
                      textAlign: 'left',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#C8A96A' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}
                  >
                    {product.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Contact */}
          <div>
            <h4 style={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: '0.65rem',
              color: 'rgba(255,255,255,0.25)',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}>Stay Inspired</h4>

            <form onSubmit={handleSubscribe} style={{ marginBottom: '2rem' }}>
              <div style={{ position: 'relative', marginBottom: '0.75rem' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  style={{
                    width: '100%',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'white',
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: '0.8rem',
                    padding: '0.875rem 1rem',
                    outline: 'none',
                    borderRadius: 2,
                  }}
                  onFocus={(e) => { e.target.style.borderColor = '#C8A96A' }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)' }}
                />
              </div>
              <button
                type="submit"
                style={{
                  width: '100%',
                  background: '#C8A96A',
                  border: 'none',
                  color: '#1D1D1D',
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  padding: '0.875rem',
                  cursor: 'none',
                  borderRadius: 2,
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#6B4F3A'; e.currentTarget.style.color = 'white' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#C8A96A'; e.currentTarget.style.color = '#1D1D1D' }}
              >
                {subscribed ? '✓ Subscribed!' : 'Subscribe'}
              </button>
            </form>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href={`tel:${SITE_PHONE}`} style={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: '0.8rem',
                color: 'rgba(255,255,255,0.4)',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#C8A96A' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}
              >{SITE_PHONE}</a>
              <a href={`mailto:${SITE_EMAIL}`} style={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: '0.8rem',
                color: 'rgba(255,255,255,0.4)',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#C8A96A' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}
              >{SITE_EMAIL}</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: '0.72rem',
            color: 'rgba(255,255,255,0.2)',
          }}>
            © {new Date().getFullYear()} Cucina Kraft Pvt. Ltd. All rights reserved. Crafted with precision.
          </p>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <span style={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: '0.65rem',
              color: 'rgba(255,255,255,0.15)',
              letterSpacing: '0.1em',
            }}>Privacy Policy</span>
            <span style={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: '0.65rem',
              color: 'rgba(255,255,255,0.15)',
              letterSpacing: '0.1em',
            }}>Terms of Service</span>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'absolute',
          bottom: '3rem',
          right: '2rem',
          width: 44,
          height: 44,
          border: '1px solid rgba(200,169,106,0.3)',
          background: 'transparent',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'none',
          transition: 'all 0.3s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#C8A96A'
          e.currentTarget.style.borderColor = '#C8A96A'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent'
          e.currentTarget.style.borderColor = 'rgba(200,169,106,0.3)'
        }}
      >
        <ArrowUp size={16} color="#C8A96A" />
      </motion.button>

      {/* Large background text */}
      <div style={{
        position: 'absolute',
        bottom: '-2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        fontFamily: '"Playfair Display", serif',
        fontSize: 'clamp(6rem, 15vw, 12rem)',
        color: 'rgba(255,255,255,0.015)',
        fontWeight: 700,
        letterSpacing: '-0.03em',
        userSelect: 'none',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
      }}>
        CUCINA KRAFT
      </div>
    </footer>
  )
}

export default Footer
