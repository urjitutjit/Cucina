import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import SectionTitle from '@components/common/SectionTitle'
import { KITCHEN_TYPES } from '@utils/constants'

const Kitchens = () => {
  const [active, setActive] = useState(0)
  const swiperRef = useRef(null)

  const handleTabClick = (i) => {
    setActive(i)
    swiperRef.current?.swiper?.slideTo(i)
  }

  return (
    <section
      id="kitchens"
      style={{
        background: '#1D1D1D',
        padding: '8rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-10%',
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(200,169,106,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-padding">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
          <SectionTitle
            label="01 — Kitchens"
            title={<>High-End<br /><em style={{ color: '#C8A96A', fontStyle: 'italic' }}>Kitchen Design</em></>}
            light
            subtitle="From intimate straight kitchens to grand islands, each design is a bespoke expression of culinary elegance."
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(5rem, 10vw, 9rem)',
              color: 'rgba(255,255,255,0.03)',
              fontWeight: 300,
              lineHeight: 1,
              userSelect: 'none',
            }}
          >01</motion.div>
        </div>

        {/* Main layout: tabs + slider */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '260px 1fr',
          gap: '3rem',
          alignItems: 'start',
        }}
          className="block lg:grid"
        >
          {/* Kitchen Type Tabs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', overflowX: 'auto' }}
            className="flex lg:flex-col flex-row mb-8 lg:mb-0"
          >
            {KITCHEN_TYPES.map((type, i) => (
              <button
                key={type.id}
                onClick={() => handleTabClick(i)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.25rem 1.5rem',
                  background: active === i ? 'rgba(200,169,106,0.1)' : 'transparent',
                  border: 'none',
                  borderLeft: `2px solid ${active === i ? '#C8A96A' : 'rgba(255,255,255,0.1)'}`,
                  cursor: 'none',
                  transition: 'all 0.4s cubic-bezier(0.76, 0, 0.24, 1)',
                  textAlign: 'left',
                  whiteSpace: 'nowrap',
                }}
              >
                <span style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '0.8rem',
                  color: active === i ? '#C8A96A' : 'rgba(255,255,255,0.3)',
                  transition: 'color 0.3s',
                  minWidth: 20,
                }}>0{i + 1}</span>
                <span style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: '0.8rem',
                  fontWeight: active === i ? 500 : 300,
                  color: active === i ? 'white' : 'rgba(255,255,255,0.45)',
                  letterSpacing: '0.05em',
                  transition: 'all 0.3s',
                }}>{type.label}</span>
              </button>
            ))}

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                style={{
                  marginTop: '2.5rem',
                  padding: '0 0.5rem 0 1.5rem',
                }}
                className="hidden lg:block"
              >
                <p style={{
                  fontFamily: '"Poppins", sans-serif',
                  color: 'rgba(255,255,255,0.45)',
                  fontSize: '0.82rem',
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}>{KITCHEN_TYPES[active].description}</p>

                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginTop: '1.5rem',
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: '0.65rem',
                    color: '#C8A96A',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    background: 'none',
                    border: 'none',
                    cursor: 'none',
                    transition: 'gap 0.3s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.gap = '1rem' }}
                  onMouseLeave={(e) => { e.currentTarget.style.gap = '0.5rem' }}
                >
                  Get a Quote
                  <svg width="12" height="10" viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M0 7h22M17 1l6 6-6 6" />
                  </svg>
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image Slider */}
          <div style={{ position: 'relative', borderRadius: 4, overflow: 'hidden' }}>
            <Swiper
              ref={swiperRef}
              modules={[EffectFade, Autoplay, Navigation, Pagination]}
              effect="fade"
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              onSlideChange={(swiper) => setActive(swiper.activeIndex)}
              style={{ aspectRatio: '16/10', borderRadius: 4, overflow: 'hidden' }}
            >
              {KITCHEN_TYPES.map((type, i) => (
                <SwiperSlide key={type.id}>
                  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <img
                      src={type.image}
                      alt={type.label}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(0deg, rgba(29,29,29,0.6) 0%, transparent 50%)',
                    }} />
                    <div style={{
                      position: 'absolute',
                      bottom: '2rem',
                      left: '2rem',
                      right: '2rem',
                    }}>
                      <div style={{ width: 30, height: 1, background: '#C8A96A', marginBottom: '0.75rem' }} />
                      <h3 style={{
                        fontFamily: '"Playfair Display", serif',
                        color: 'white',
                        fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                        fontWeight: 400,
                      }}>{type.label}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom slide counter */}
            <div style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              zIndex: 10,
              fontFamily: '"Cormorant Garamond", serif',
              color: 'rgba(255,255,255,0.5)',
              fontSize: '0.85rem',
              letterSpacing: '0.1em',
            }}>
              <span style={{ color: '#C8A96A', fontSize: '1.2rem' }}>{String(active + 1).padStart(2, '0')}</span>
              {' / '}
              {String(KITCHEN_TYPES.length).padStart(2, '0')}
            </div>
          </div>
        </div>

        {/* Features strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            marginTop: '5rem',
            display: 'flex',
            gap: '1px',
            background: 'rgba(255,255,255,0.05)',
            flexWrap: 'wrap',
          }}
        >
          {['Imported Hardware', 'Anti-Scratch Laminate', 'Soft-Close Mechanisms', 'Waterproof Finish', 'Custom Lighting', '10-Year Warranty'].map((feat, i) => (
            <div key={feat} style={{
              flex: '1 1 150px',
              padding: '1.5rem',
              background: '#1D1D1D',
              textAlign: 'center',
              borderBottom: '2px solid transparent',
              transition: 'border-color 0.3s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#C8A96A' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'transparent' }}
            >
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: '0.7rem',
                color: 'rgba(255,255,255,0.4)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>{feat}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Kitchens
