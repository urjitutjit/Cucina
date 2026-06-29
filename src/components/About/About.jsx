import { useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import SectionTitle from '@components/common/SectionTitle'
import AnimatedCounter from '@components/common/AnimatedCounter'
import { STATS } from '@utils/constants'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const imageWrapRef = useRef(null)

  useGSAP(() => {
    // Parallax image effect on scroll
    gsap.to(imageRef.current, {
      yPercent: -15,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    // Image clip-path reveal
    gsap.fromTo(
      imageWrapRef.current,
      { clipPath: 'inset(100% 0 0 0)' },
      {
        clipPath: 'inset(0% 0 0 0)',
        duration: 1.4,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: imageWrapRef.current,
          start: 'top 80%',
        },
      }
    )
  }, { scope: sectionRef })

  return (
    <section id="about" ref={sectionRef} style={{ background: '#F8F6F2', padding: '8rem 0' }}>
      <div className="section-padding">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(3rem, 6vw, 8rem)',
          alignItems: 'center',
        }}
          className="grid-cols-1 lg:grid-cols-2"
        >
          {/* Left: Image */}
          <div style={{ position: 'relative' }}>
            {/* Decorative frame */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{
                position: 'absolute',
                top: -20,
                left: -20,
                right: 20,
                bottom: 20,
                border: '1px solid rgba(200,169,106,0.25)',
                borderRadius: 4,
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />

            {/* Image container */}
            <div
              ref={imageWrapRef}
              style={{
                position: 'relative',
                borderRadius: 4,
                overflow: 'hidden',
                aspectRatio: '4/5',
                zIndex: 1,
              }}
            >
              <div ref={imageRef} style={{ position: 'absolute', inset: '-15% 0', height: '130%' }}>
                <img
                  src="https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=900&q=85"
                  alt="Cucina Kraft Workshop"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(0deg, rgba(107,79,58,0.3) 0%, transparent 60%)',
                }} />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                position: 'absolute',
                bottom: '2rem',
                right: '-1rem',
                background: '#1D1D1D',
                padding: '1.5rem 2rem',
                borderRadius: 2,
                zIndex: 2,
                minWidth: 160,
              }}
            >
              <div style={{
                fontFamily: '"Cormorant Garamond", serif',
                color: '#C8A96A',
                fontSize: '3rem',
                fontWeight: 300,
                lineHeight: 1,
              }}>10<span style={{ fontSize: '1.5rem' }}>+</span></div>
              <div style={{
                fontFamily: '"Poppins", sans-serif',
                color: 'rgba(255,255,255,0.6)',
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginTop: '0.25rem',
              }}>Years of Mastery</div>
            </motion.div>
          </div>

          {/* Right: Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <SectionTitle
              label="Our Story"
              title={<>The Art of<br />Crafting <em style={{ color: '#C8A96A', fontStyle: 'italic' }}>Spaces</em></>}
              subtitle="Born from a passion for exceptional craftsmanship, Cucina Kraft has been transforming living spaces into works of art since 2015. We believe that your home should reflect the finest version of yourself."
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              {[
                'Factory-direct manufacturing with zero compromise on quality',
                'In-house design team crafting bespoke 3D concepts for every client',
                'Premium materials sourced from leading European and Indian suppliers',
              ].map((point, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{
                    width: 20,
                    height: 20,
                    border: '1px solid #C8A96A',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: 2,
                  }}>
                    <div style={{ width: 6, height: 6, background: '#C8A96A', borderRadius: '50%' }} />
                  </div>
                  <p style={{
                    fontFamily: '"Poppins", sans-serif',
                    color: '#555555',
                    fontSize: '0.9rem',
                    fontWeight: 300,
                    lineHeight: 1.7,
                  }}>{point}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <button
                onClick={() => document.querySelector('#process')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  background: 'transparent',
                  border: '1px solid #1D1D1D',
                  color: '#1D1D1D',
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
                  e.currentTarget.style.background = '#1D1D1D'
                  e.currentTarget.style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = '#1D1D1D'
                }}
              >
                Our Process
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          style={{
            marginTop: '8rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            background: 'rgba(200,169,106,0.15)',
            border: '1px solid rgba(200,169,106,0.15)',
          }}
          className="grid-cols-2 md:grid-cols-4"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 3vw, 2.5rem)',
                background: '#F8F6F2',
                textAlign: 'center',
                position: 'relative',
              }}
            >
              <div style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                fontWeight: 300,
                color: '#1D1D1D',
                lineHeight: 1,
              }}>
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              </div>
              <div style={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: '0.7rem',
                color: '#8A8A8A',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginTop: '0.75rem',
              }}>{stat.label}</div>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 30,
                height: 2,
                background: '#C8A96A',
                opacity: 0.4,
              }} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
