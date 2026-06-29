import { useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import SectionTitle from '@components/common/SectionTitle'
import { WHY_CHOOSE_US } from '@utils/constants'
import {
  Hammer, Gem, PencilRuler, Factory, Users, ShieldCheck,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const iconMap = {
  hammer: Hammer,
  gem: Gem,
  'pencil-ruler': PencilRuler,
  factory: Factory,
  users: Users,
  'shield-check': ShieldCheck,
}

const FeatureCard = ({ item, index }) => {
  const Icon = iconMap[item.icon] || Gem

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
      style={{
        padding: 'clamp(2rem, 3vw, 2.5rem)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        borderRight: index % 3 !== 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background 0.4s',
        cursor: 'default',
      }}
      whileHover={{ backgroundColor: 'rgba(200,169,106,0.05)' }}
    >
      {/* Hover glow */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: 'radial-gradient(circle at center, rgba(200,169,106,0.06) 0%, transparent 60%)',
        opacity: 0,
        transition: 'opacity 0.5s',
        pointerEvents: 'none',
      }} />

      {/* Icon */}
      <div style={{
        width: 52,
        height: 52,
        border: '1px solid rgba(200,169,106,0.3)',
        borderRadius: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.75rem',
        transition: 'border-color 0.3s, background 0.3s',
      }}>
        <Icon size={22} color="#C8A96A" strokeWidth={1.2} />
      </div>

      {/* Content */}
      <h3 style={{
        fontFamily: '"Playfair Display", serif',
        fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
        color: 'white',
        fontWeight: 400,
        marginBottom: '0.75rem',
        lineHeight: 1.3,
      }}>{item.title}</h3>

      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontSize: '0.82rem',
        color: 'rgba(255,255,255,0.4)',
        lineHeight: 1.8,
        fontWeight: 300,
      }}>{item.description}</p>

      {/* Corner accent */}
      <div style={{
        position: 'absolute',
        bottom: '1.5rem',
        right: '1.5rem',
        fontFamily: '"Cormorant Garamond", serif',
        fontSize: '3rem',
        color: 'rgba(200,169,106,0.06)',
        fontWeight: 300,
        lineHeight: 1,
        userSelect: 'none',
      }}>
        {String(index + 1).padStart(2, '0')}
      </div>
    </motion.div>
  )
}

const WhyChooseUs = () => {
  const sectionRef = useRef(null)

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#1D1D1D',
        padding: '8rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(200,169,106,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,106,0.02) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        pointerEvents: 'none',
      }} />

      <div className="section-padding">
        {/* Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(2rem, 5vw, 8rem)',
          alignItems: 'flex-end',
          marginBottom: '5rem',
        }}
          className="grid-cols-1 lg:grid-cols-2"
        >
          <SectionTitle
            label="Why Cucina Kraft"
            title={<>Built on<br /><em style={{ color: '#C8A96A', fontStyle: 'italic' }}>Uncompromising</em><br />Excellence</>}
            light
          />

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontFamily: '"Poppins", sans-serif',
                color: 'rgba(255,255,255,0.4)',
                fontSize: '0.9rem',
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: '2rem',
              }}
            >
              When you choose Cucina Kraft, you choose a partner who invests as deeply in your vision as you do. From first consultation to final polish, we hold ourselves to one standard: perfection.
            </motion.p>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'transparent',
                border: '1px solid rgba(200,169,106,0.4)',
                color: '#C8A96A',
                fontFamily: '"Poppins", sans-serif',
                fontSize: '0.65rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                padding: '0.9rem 2rem',
                cursor: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                transition: 'all 0.4s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#C8A96A'
                e.currentTarget.style.color = '#1D1D1D'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = '#C8A96A'
              }}
            >
              Start Your Project
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* 6-card grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {WHY_CHOOSE_US.map((item, i) => (
            <FeatureCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Bottom stat banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            marginTop: '4rem',
            padding: '3rem',
            background: 'linear-gradient(135deg, rgba(200,169,106,0.1) 0%, rgba(107,79,58,0.1) 100%)',
            border: '1px solid rgba(200,169,106,0.15)',
            borderRadius: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4rem',
            flexWrap: 'wrap',
          }}
        >
          {[
            { value: 'ISO Certified', label: 'Quality Standard' },
            { value: '100%', label: 'Client Satisfaction' },
            { value: '48hr', label: 'Design Delivery' },
            { value: 'Zero', label: 'Compromise' },
          ].map((item) => (
            <div key={item.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                color: '#C8A96A',
                fontWeight: 300,
                lineHeight: 1,
              }}>{item.value}</div>
              <div style={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: '0.65rem',
                color: 'rgba(255,255,255,0.3)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginTop: '0.5rem',
              }}>{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
