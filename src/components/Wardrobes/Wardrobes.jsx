import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '@components/common/SectionTitle'
import { WARDROBE_MATERIALS } from '@utils/constants'

const WARDROBE_IMAGES = [
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85',
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=85',
  'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=900&q=85',
  'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=900&q=85',
  'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=900&q=85',
]

const Wardrobes = () => {
  const [activeMaterial, setActiveMaterial] = useState(0)

  return (
    <section id="wardrobes" style={{ background: '#F8F6F2', padding: '8rem 0', overflow: 'hidden' }}>
      <div className="section-padding">

        {/* Section header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(2rem, 4vw, 6rem)',
          alignItems: 'flex-end',
          marginBottom: '5rem',
        }}
          className="grid-cols-1 lg:grid-cols-2"
        >
          <SectionTitle
            label="02 — Wardrobes"
            title={<>Luxury<br /><em style={{ color: '#C8A96A', fontStyle: 'italic' }}>Wardrobe</em> Design</>}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              color: '#8A8A8A',
              fontSize: '0.9rem',
              lineHeight: 1.8,
              fontWeight: 300,
            }}>
              From walk-in dressing rooms to elegant sliding wardrobes, we engineer storage solutions that are as beautiful as the clothes they house. Every wardrobe is built to your exact measurements and finished to perfection.
            </p>
          </motion.div>
        </div>

        {/* Main layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: 'clamp(2rem, 4vw, 5rem)',
          alignItems: 'start',
        }}
          className="grid-cols-1 lg:grid-cols-2"
        >
          {/* Left: Materials */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: '0.65rem',
                color: '#8A8A8A',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                marginBottom: '2rem',
              }}
            >
              Select Finish
            </motion.h3>

            {WARDROBE_MATERIALS.map((mat, i) => (
              <motion.div
                key={mat.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                onClick={() => setActiveMaterial(i)}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.5rem',
                  padding: '1.5rem 0',
                  borderBottom: '1px solid rgba(29,29,29,0.08)',
                  cursor: 'none',
                  transition: 'all 0.3s',
                }}
              >
                <span style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '1.5rem',
                  color: activeMaterial === i ? '#C8A96A' : 'rgba(29,29,29,0.2)',
                  transition: 'color 0.3s',
                  marginTop: 2,
                  lineHeight: 1,
                }}>{mat.icon}</span>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h4 style={{
                      fontFamily: '"Playfair Display", serif',
                      fontSize: '1.1rem',
                      color: activeMaterial === i ? '#1D1D1D' : '#8A8A8A',
                      fontWeight: activeMaterial === i ? 600 : 400,
                      transition: 'all 0.3s',
                    }}>{mat.label}</h4>
                    <div style={{
                      width: 24,
                      height: 24,
                      border: '1px solid',
                      borderColor: activeMaterial === i ? '#C8A96A' : 'rgba(29,29,29,0.15)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s',
                    }}>
                      {activeMaterial === i && (
                        <div style={{ width: 8, height: 8, background: '#C8A96A', borderRadius: '50%' }} />
                      )}
                    </div>
                  </div>

                  <AnimatePresence>
                    {activeMaterial === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        style={{
                          fontFamily: '"Poppins", sans-serif',
                          fontSize: '0.82rem',
                          color: '#8A8A8A',
                          lineHeight: 1.7,
                          fontWeight: 300,
                          marginTop: '0.75rem',
                          overflow: 'hidden',
                        }}
                      >
                        {mat.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ marginTop: '2.5rem' }}
            >
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  background: '#1D1D1D',
                  border: '1px solid #1D1D1D',
                  color: 'white',
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  padding: '1rem 2rem',
                  cursor: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  transition: 'all 0.4s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#C8A96A'
                  e.currentTarget.style.borderColor = '#C8A96A'
                  e.currentTarget.style.color = '#1D1D1D'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#1D1D1D'
                  e.currentTarget.style.borderColor = '#1D1D1D'
                  e.currentTarget.style.color = 'white'
                }}
              >
                Design Your Wardrobe
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          </div>

          {/* Right: Image gallery */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {/* Large image top */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              style={{
                gridColumn: 'span 2',
                borderRadius: 4,
                overflow: 'hidden',
                aspectRatio: '16/9',
                position: 'relative',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeMaterial}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  src={WARDROBE_IMAGES[activeMaterial]}
                  alt="Luxury Wardrobe"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </AnimatePresence>
              <div style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                background: 'rgba(29,29,29,0.7)',
                backdropFilter: 'blur(10px)',
                padding: '0.5rem 1rem',
                borderRadius: 2,
              }}>
                <span style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: '0.65rem',
                  color: '#C8A96A',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}>
                  {WARDROBE_MATERIALS[activeMaterial].label}
                </span>
              </div>
            </motion.div>

            {/* Small images */}
            {WARDROBE_IMAGES.slice(1, 3).map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 + 0.2 }}
                style={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  aspectRatio: '1/1',
                  cursor: 'none',
                }}
                onClick={() => setActiveMaterial(i + 1)}
              >
                <img
                  src={img}
                  alt="Wardrobe"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.8s cubic-bezier(0.19, 1, 0.22, 1)',
                  }}
                  onMouseEnter={(e) => { e.target.style.transform = 'scale(1.07)' }}
                  onMouseLeave={(e) => { e.target.style.transform = 'scale(1)' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Wardrobes
