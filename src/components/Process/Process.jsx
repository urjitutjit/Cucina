import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '@components/common/SectionTitle'
import { PROCESS_STEPS } from '@utils/constants'
import {
  MessageCircle, Layers, Palette, Settings, Wrench, CheckCircle,
} from 'lucide-react'

const iconMap = {
  'message-circle': MessageCircle,
  layers: Layers,
  palette: Palette,
  settings: Settings,
  tool: Wrench,
  'check-circle': CheckCircle,
}

const Process = () => {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="process" style={{ background: '#F8F6F2', padding: '8rem 0', overflow: 'hidden' }}>
      <div className="section-padding">

        {/* Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(2rem, 5vw, 8rem)',
          marginBottom: '5rem',
          alignItems: 'flex-end',
        }}
          className="grid-cols-1 lg:grid-cols-2"
        >
          <SectionTitle
            label="How We Work"
            title={<>Our Proven<br /><em style={{ color: '#C8A96A', fontStyle: 'italic' }}>Process</em></>}
            subtitle="From your first vision to your last walkthrough, every step is crafted for perfection."
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(5rem, 12vw, 9rem)',
              color: 'rgba(29,29,29,0.04)',
              fontWeight: 300,
              lineHeight: 1,
              userSelect: 'none',
              textAlign: 'right',
            }}
          >
            {String(activeStep + 1).padStart(2, '0')}
          </motion.div>
        </div>

        {/* Process - horizontal timeline with detail panel */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}
          className="grid-cols-1 lg:grid-cols-2"
        >
          {/* Left: Steps list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {PROCESS_STEPS.map((step, i) => {
              const Icon = iconMap[step.icon] || CheckCircle
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  onClick={() => setActiveStep(i)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    padding: '1.5rem',
                    borderLeft: `2px solid ${activeStep === i ? '#C8A96A' : 'rgba(29,29,29,0.08)'}`,
                    background: activeStep === i ? 'rgba(200,169,106,0.05)' : 'transparent',
                    cursor: 'none',
                    transition: 'all 0.4s cubic-bezier(0.76, 0, 0.24, 1)',
                    marginBottom: i < PROCESS_STEPS.length - 1 ? '0.25rem' : 0,
                  }}
                >
                  {/* Step number / icon */}
                  <div style={{
                    width: 44,
                    height: 44,
                    border: '1px solid',
                    borderColor: activeStep === i ? '#C8A96A' : 'rgba(29,29,29,0.12)',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.3s',
                    background: activeStep === i ? 'rgba(200,169,106,0.1)' : 'transparent',
                  }}>
                    <Icon
                      size={18}
                      color={activeStep === i ? '#C8A96A' : '#8A8A8A'}
                      strokeWidth={1.5}
                    />
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{
                        fontFamily: '"Cormorant Garamond", serif',
                        fontSize: '0.75rem',
                        color: activeStep === i ? '#C8A96A' : 'rgba(29,29,29,0.3)',
                        transition: 'color 0.3s',
                      }}>{step.number}</span>
                      <h4 style={{
                        fontFamily: '"Playfair Display", serif',
                        fontSize: '1rem',
                        color: activeStep === i ? '#1D1D1D' : '#8A8A8A',
                        fontWeight: activeStep === i ? 600 : 400,
                        transition: 'all 0.3s',
                      }}>{step.title}</h4>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div style={{
                    opacity: activeStep === i ? 1 : 0,
                    transform: activeStep === i ? 'translateX(0)' : 'translateX(-8px)',
                    transition: 'all 0.3s',
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8A96A" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Right: Detail panel */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: 'relative',
              padding: '3rem',
              background: '#1D1D1D',
              borderRadius: 4,
            }}
          >
            {/* Large background number */}
            <div style={{
              position: 'absolute',
              top: '1rem',
              right: '2rem',
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '8rem',
              color: 'rgba(255,255,255,0.03)',
              fontWeight: 300,
              lineHeight: 1,
              userSelect: 'none',
            }}>
              {PROCESS_STEPS[activeStep].number}
            </div>

            {/* Step content */}
            <div style={{
              width: 56,
              height: 56,
              border: '1px solid rgba(200,169,106,0.3)',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '2rem',
            }}>
              {(() => {
                const Icon = iconMap[PROCESS_STEPS[activeStep].icon] || CheckCircle
                return <Icon size={24} color="#C8A96A" strokeWidth={1.2} />
              })()}
            </div>

            <div style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '0.8rem',
              color: '#C8A96A',
              letterSpacing: '0.2em',
              marginBottom: '1rem',
            }}>
              Step {PROCESS_STEPS[activeStep].number}
            </div>

            <h3 style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: 'white',
              fontWeight: 400,
              marginBottom: '1.25rem',
              lineHeight: 1.2,
            }}>
              {PROCESS_STEPS[activeStep].title}
            </h3>

            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: '0.88rem',
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.8,
              fontWeight: 300,
              marginBottom: '2.5rem',
            }}>
              {PROCESS_STEPS[activeStep].description}
            </p>

            {/* Progress dots */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {PROCESS_STEPS.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setActiveStep(i)}
                  style={{
                    width: i === activeStep ? 24 : 6,
                    height: 6,
                    borderRadius: 3,
                    background: i === activeStep ? '#C8A96A' : 'rgba(255,255,255,0.1)',
                    cursor: 'none',
                    transition: 'all 0.4s',
                  }}
                />
              ))}
            </div>

            {/* Navigation */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '2rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255,255,255,0.06)',
            }}>
              <button
                onClick={() => setActiveStep((p) => Math.max(0, p - 1))}
                disabled={activeStep === 0}
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: activeStep === 0 ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.5)',
                  padding: '0.5rem 1rem',
                  cursor: activeStep === 0 ? 'default' : 'none',
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                  transition: 'all 0.3s',
                }}
              >
                ← Prev
              </button>
              <button
                onClick={() => setActiveStep((p) => Math.min(PROCESS_STEPS.length - 1, p + 1))}
                disabled={activeStep === PROCESS_STEPS.length - 1}
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: activeStep === PROCESS_STEPS.length - 1 ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.5)',
                  padding: '0.5rem 1rem',
                  cursor: activeStep === PROCESS_STEPS.length - 1 ? 'default' : 'none',
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                  transition: 'all 0.3s',
                }}
              >
                Next →
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            marginTop: '5rem',
            textAlign: 'center',
            padding: '4rem',
            background: 'linear-gradient(135deg, #1D1D1D 0%, #2D2020 100%)',
            borderRadius: 4,
          }}
        >
          <p style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            color: 'white',
            fontWeight: 300,
            fontStyle: 'italic',
            marginBottom: '2rem',
          }}>Ready to begin your transformation?</p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: '#C8A96A',
              border: 'none',
              color: '#1D1D1D',
              fontFamily: '"Poppins", sans-serif',
              fontSize: '0.7rem',
              fontWeight: 500,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              padding: '1.1rem 3rem',
              cursor: 'none',
              transition: 'all 0.4s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#6B4F3A'; e.currentTarget.style.color = 'white' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#C8A96A'; e.currentTarget.style.color = '#1D1D1D' }}
          >
            Book Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Process
