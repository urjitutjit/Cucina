import { motion } from 'framer-motion'
import { MapPin, Navigation } from 'lucide-react'

const Map = () => {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: '#1D1D1D' }}>
      {/* Map embed with dark filter */}
      <div style={{ position: 'relative', height: 460 }}>
        <iframe
          title="Cucina Kraft Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0583636875534!2d77.31481457552793!3d28.627264475666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4f4d8eb9f3f%3A0x6d789e7d48f10e32!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            filter: 'invert(92%) hue-rotate(180deg) brightness(0.8) contrast(0.85) saturate(0.5)',
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Overlay for dark effect */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(29,29,29,0.2)',
          pointerEvents: 'none',
        }} />

        {/* Location pin card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '2rem',
            background: 'rgba(29,29,29,0.9)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(200,169,106,0.2)',
            padding: '1.5rem 2rem',
            minWidth: 240,
            borderRadius: 4,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{
              width: 36,
              height: 36,
              background: 'rgba(200,169,106,0.15)',
              border: '1px solid rgba(200,169,106,0.3)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <MapPin size={16} color="#C8A96A" />
            </div>
            <div>
              <div style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '0.9rem',
                color: 'white',
                fontWeight: 500,
              }}>Cucina Kraft</div>
              <div style={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: '0.6rem',
                color: 'rgba(255,255,255,0.3)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>Experience Centre</div>
            </div>
          </div>

          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.4)',
            lineHeight: 1.6,
            fontWeight: 300,
            marginBottom: '1rem',
          }}>
            Plot No. 24, Industrial Area,<br />Sector 5, Noida, UP – 201301
          </p>

          <a
            href="https://maps.google.com/?q=Noida+Industrial+Area+Sector+5"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: '"Poppins", sans-serif',
              fontSize: '0.65rem',
              color: '#C8A96A',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'gap 0.3s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.gap = '0.75rem' }}
            onMouseLeave={(e) => { e.currentTarget.style.gap = '0.5rem' }}
          >
            <Navigation size={12} />
            Get Directions
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Map
