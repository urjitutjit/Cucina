import { useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import SectionTitle from '@components/common/SectionTitle'

gsap.registerPlugin(ScrollTrigger)

const DOOR_FEATURES = [
  {
    number: '01',
    title: 'Architectural Doors',
    description: 'Floor-to-ceiling doors crafted up to 12 feet in height, creating dramatic entrances that leave a lasting impression. Factory-finished for consistent, flawless quality.',
    image: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=600&q=85',
  },
  {
    number: '02',
    title: 'Decorative Wall Panels',
    description: 'Transform your walls into canvases of texture and beauty. From geometric CNC-carved patterns to warm wood veneers, our wall panels define rooms with character.',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=600&q=85',
  },
  {
    number: '03',
    title: 'Factory-Direct Finish',
    description: 'Every door and panel leaves our factory with a perfect finish. No on-site painting, no touch-ups — just pure, consistent luxury delivered to your space.',
    image: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=600&q=85',
  },
]

const Doors = () => {
  const sectionRef = useRef(null)

  useGSAP(() => {
    // Stagger cards in
    gsap.fromTo(
      '.door-feature-card',
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      }
    )
  }, { scope: sectionRef })

  return (
    <section
      id="doors"
      ref={sectionRef}
      style={{
        background: '#1D1D1D',
        padding: '8rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Large decorative number */}
      <div style={{
        position: 'absolute',
        left: '-2rem',
        top: '50%',
        transform: 'translateY(-50%)',
        fontFamily: '"Cormorant Garamond", serif',
        fontSize: 'clamp(12rem, 25vw, 22rem)',
        color: 'rgba(255,255,255,0.02)',
        fontWeight: 300,
        userSelect: 'none',
        lineHeight: 1,
        pointerEvents: 'none',
      }}>03</div>

      <div className="section-padding">
        {/* Header */}
        <div style={{ marginBottom: '5rem' }}>
          <SectionTitle
            label="03 — Doors & Panels"
            title={<>Doors That<br />Make an <em style={{ color: '#C8A96A', fontStyle: 'italic' }}>Entrance</em></>}
            light
            subtitle="Every door is a statement, every wall panel a conversation. We craft architectural elements that define the character of your entire space."
          />
        </div>

        {/* Feature timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {DOOR_FEATURES.map((feat, i) => (
            <div
              key={feat.number}
              className="door-feature-card block lg:grid"
              style={{
                gridTemplateColumns: '1fr 60px 1fr',
                alignItems: 'center',
                borderBottom: i < DOOR_FEATURES.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                padding: '4rem 0',
                gap: '2rem',
              }}
            >
              {/* Left content or image (alternating) */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                textAlign: i % 2 === 0 ? 'left' : 'right',
                order: i % 2 === 0 ? 0 : 2,
              }}>
                {i % 2 === 0 ? (
                  <>
                    <div style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '0.8rem',
                      color: '#C8A96A',
                      letterSpacing: '0.2em',
                    }}>{feat.number}</div>
                    <h3 style={{
                      fontFamily: '"Playfair Display", serif',
                      fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                      color: 'white',
                      fontWeight: 400,
                      lineHeight: 1.2,
                    }}>{feat.title}</h3>
                    <p style={{
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: '0.85rem',
                      color: 'rgba(255,255,255,0.45)',
                      lineHeight: 1.8,
                      fontWeight: 300,
                      maxWidth: 380,
                    }}>{feat.description}</p>
                  </>
                ) : (
                  <div style={{ borderRadius: 4, overflow: 'hidden', aspectRatio: '16/10' }}>
                    <img src={feat.image} alt={feat.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                )}
              </div>

              {/* Center line */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                alignSelf: 'stretch',
              }}
                className="hidden lg:flex"
              >
                <div style={{ flex: 1, width: 1, background: 'rgba(200,169,106,0.2)' }} />
                <div style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  border: '2px solid #C8A96A',
                  background: '#1D1D1D',
                  flexShrink: 0,
                }} />
                <div style={{ flex: 1, width: 1, background: 'rgba(200,169,106,0.2)' }} />
              </div>

              {/* Right content or image */}
              <div style={{ order: i % 2 === 0 ? 2 : 0 }}>
                {i % 2 === 0 ? (
                  <div style={{ borderRadius: 4, overflow: 'hidden', aspectRatio: '16/10' }}>
                    <img src={feat.image} alt={feat.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ) : (
                  <>
                    <div style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '0.8rem',
                      color: '#C8A96A',
                      letterSpacing: '0.2em',
                      textAlign: 'right',
                    }}>{feat.number}</div>
                    <h3 style={{
                      fontFamily: '"Playfair Display", serif',
                      fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                      color: 'white',
                      fontWeight: 400,
                      lineHeight: 1.2,
                      textAlign: 'right',
                      marginTop: '1rem',
                    }}>{feat.title}</h3>
                    <p style={{
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: '0.85rem',
                      color: 'rgba(255,255,255,0.45)',
                      lineHeight: 1.8,
                      fontWeight: 300,
                      maxWidth: 380,
                      marginLeft: 'auto',
                      textAlign: 'right',
                      marginTop: '1rem',
                    }}>{feat.description}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Specs strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            marginTop: '4rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2px',
            background: 'rgba(255,255,255,0.05)',
          }}
          className="grid-cols-2 md:grid-cols-4"
        >
          {[
            { label: 'Door Height', value: 'Up to 12 ft' },
            { label: 'Finish Type', value: 'Factory Direct' },
            { label: 'Closure', value: 'Soft-Close' },
            { label: 'Warranty', value: '5 Years' },
          ].map((spec) => (
            <div key={spec.label} style={{
              padding: '2rem',
              background: '#1D1D1D',
              textAlign: 'center',
            }}>
              <div style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.5rem',
                color: '#C8A96A',
                fontWeight: 300,
                marginBottom: '0.5rem',
              }}>{spec.value}</div>
              <div style={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: '0.65rem',
                color: 'rgba(255,255,255,0.3)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}>{spec.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Doors
