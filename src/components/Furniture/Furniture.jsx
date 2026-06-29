import { useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import SectionTitle from '@components/common/SectionTitle'

gsap.registerPlugin(ScrollTrigger)

const FURNITURE_ITEMS = [
  {
    title: 'Living Room Suites',
    description: 'Sofas, accent chairs, and entertainment units crafted with the finest upholstery and joinery.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=85',
    tag: 'Living',
  },
  {
    title: 'Bedroom Collections',
    description: 'Beds, side tables, dressing tables, and full bedroom suites designed as cohesive works of art.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=85',
    tag: 'Bedroom',
  },
  {
    title: 'Study & Office',
    description: 'Bespoke desks, bookshelves, and home office furniture that inspires productivity and elegance.',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=700&q=85',
    tag: 'Study',
  },
  {
    title: 'Dining Statements',
    description: 'Handcrafted dining tables and chairs that make every meal an occasion worth remembering.',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=700&q=85',
    tag: 'Dining',
  },
]

const Furniture = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)

  useGSAP(() => {
    // Horizontal text scroll
    gsap.to(textRef.current, {
      x: '-30%',
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    })
  }, { scope: sectionRef })

  return (
    <section
      id="furniture"
      ref={sectionRef}
      style={{ background: '#F8F6F2', padding: '8rem 0', overflow: 'hidden', position: 'relative' }}
    >
      {/* Moving text */}
      <div style={{ overflow: 'hidden', marginBottom: '5rem', borderTop: '1px solid rgba(29,29,29,0.08)', borderBottom: '1px solid rgba(29,29,29,0.08)', padding: '1.5rem 0' }}>
        <div
          ref={textRef}
          style={{
            display: 'flex',
            gap: '4rem',
            whiteSpace: 'nowrap',
            willChange: 'transform',
          }}
        >
          {Array(6).fill(['Bespoke Furniture', '·', 'Custom Made', '·', 'Built to Last', '·', 'Designed for You']).flat().map((text, i) => (
            <span key={i} style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: text === '·' ? '#C8A96A' : 'rgba(29,29,29,0.06)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              fontStyle: text !== '·' ? 'italic' : 'normal',
            }}>{text}</span>
          ))}
        </div>
      </div>

      <div className="section-padding">
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '4rem',
          flexWrap: 'wrap',
          gap: '2rem',
        }}>
          <SectionTitle
            label="04 — Bespoke Furniture"
            title={<>Furniture That<br />Tells Your <em style={{ color: '#C8A96A', fontStyle: 'italic' }}>Story</em></>}
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              fontFamily: '"Poppins", sans-serif',
              color: '#8A8A8A',
              fontSize: '0.85rem',
              lineHeight: 1.8,
              maxWidth: 320,
              fontWeight: 300,
            }}
          >
            Nothing off a shelf. Every piece conceived, designed, and handcrafted for your unique space.
          </motion.p>
        </div>

        {/* Asymmetric editorial grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gridTemplateRows: 'auto auto',
          gap: '1.5rem',
        }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {/* Large feature - spans 2 rows on left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            style={{ gridRow: 'span 2', position: 'relative', overflow: 'hidden', borderRadius: 4, cursor: 'none', minHeight: 500 }}
          >
            <img
              src={FURNITURE_ITEMS[0].image}
              alt={FURNITURE_ITEMS[0].title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1s ease' }}
              onMouseEnter={(e) => { e.target.style.transform = 'scale(1.04)' }}
              onMouseLeave={(e) => { e.target.style.transform = 'scale(1)' }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(0deg, rgba(29,29,29,0.8) 0%, transparent 60%)',
            }} />
            <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem' }}>
              <span style={{
                display: 'inline-block',
                padding: '0.3rem 0.8rem',
                background: 'rgba(200,169,106,0.2)',
                border: '1px solid rgba(200,169,106,0.3)',
                color: '#C8A96A',
                fontFamily: '"Poppins", sans-serif',
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}>{FURNITURE_ITEMS[0].tag}</span>
              <h3 style={{
                fontFamily: '"Playfair Display", serif',
                color: 'white',
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                fontWeight: 400,
                marginBottom: '0.5rem',
              }}>{FURNITURE_ITEMS[0].title}</h3>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.8rem',
                lineHeight: 1.6,
                fontWeight: 300,
              }}>{FURNITURE_ITEMS[0].description}</p>
            </div>
          </motion.div>

          {/* Right column - 2 items stacked */}
          {FURNITURE_ITEMS.slice(1, 3).map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 * (i + 1) }}
              style={{ position: 'relative', overflow: 'hidden', borderRadius: 4, cursor: 'none', aspectRatio: '4/3' }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1s ease' }}
                onMouseEnter={(e) => { e.target.style.transform = 'scale(1.06)' }}
                onMouseLeave={(e) => { e.target.style.transform = 'scale(1)' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(0deg, rgba(29,29,29,0.75) 0%, transparent 50%)',
              }} />
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem' }}>
                <span style={{
                  display: 'inline-block',
                  padding: '0.25rem 0.7rem',
                  background: 'rgba(200,169,106,0.15)',
                  border: '1px solid rgba(200,169,106,0.3)',
                  color: '#C8A96A',
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                }}>{item.tag}</span>
                <h3 style={{
                  fontFamily: '"Playfair Display", serif',
                  color: 'white',
                  fontSize: 'clamp(1rem, 2vw, 1.4rem)',
                  fontWeight: 400,
                }}>{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom row - full width */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            marginTop: '1.5rem',
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            alignItems: 'center',
            gap: '3rem',
            padding: '3rem',
            background: '#1D1D1D',
            borderRadius: 4,
          }}
          className="block lg:grid"
        >
          <div>
            <p style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
              color: 'white',
              fontWeight: 400,
              fontStyle: 'italic',
              marginBottom: '0.75rem',
            }}>
              "From a single chair to a complete home — we build what exists only in your imagination."
            </p>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: '0.75rem',
              color: 'rgba(255,255,255,0.35)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}>— Cucina Kraft Design Studio</p>
          </div>
          <div style={{ flexShrink: 0 }}>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: '#C8A96A',
                border: 'none',
                color: '#1D1D1D',
                fontFamily: '"Poppins", sans-serif',
                fontSize: '0.7rem',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                padding: '1.1rem 2.5rem',
                cursor: 'none',
                whiteSpace: 'nowrap',
                transition: 'all 0.4s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#6B4F3A'; e.currentTarget.style.color = 'white' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#C8A96A'; e.currentTarget.style.color = '#1D1D1D' }}
            >
              Start a Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Furniture
