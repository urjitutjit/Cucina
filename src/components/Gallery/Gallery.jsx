import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '@components/common/SectionTitle'
import { GALLERY_ITEMS, GALLERY_FILTERS } from '@utils/constants'

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter)

  const openLightbox = (index) => {
    setLightboxIndex(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
    document.body.style.overflow = ''
  }

  const nextImage = () => setLightboxIndex((prev) => (prev + 1) % filtered.length)
  const prevImage = () => setLightboxIndex((prev) => (prev - 1 + filtered.length) % filtered.length)

  useEffect(() => {
    const onKey = (e) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex, filtered.length])

  return (
    <section id="gallery" style={{ background: '#F8F6F2', padding: '8rem 0' }}>
      <div className="section-padding">

        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '3rem',
          flexWrap: 'wrap',
          gap: '2rem',
        }}>
          <SectionTitle
            label="Our Portfolio"
            title={<>Every Project<br />a <em style={{ color: '#C8A96A', fontStyle: 'italic' }}>Masterpiece</em></>}
          />

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}
          >
            {GALLERY_FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  padding: '0.5rem 1.25rem',
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  background: activeFilter === filter ? '#1D1D1D' : 'transparent',
                  color: activeFilter === filter ? 'white' : '#8A8A8A',
                  border: activeFilter === filter ? '1px solid #1D1D1D' : '1px solid rgba(29,29,29,0.15)',
                  cursor: 'none',
                  transition: 'all 0.3s',
                  borderRadius: 2,
                }}
              >
                {filter === 'all' ? 'All Projects' : filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="masonry-grid"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="masonry-item"
                onClick={() => openLightbox(i)}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 4,
                  cursor: 'none',
                  background: '#E5E0D8',
                }}
              >
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={item.src}
                    alt={item.title}
                    style={{
                      width: '100%',
                      display: 'block',
                      transition: 'transform 0.9s cubic-bezier(0.19, 1, 0.22, 1)',
                    }}
                    onMouseEnter={(e) => { e.target.style.transform = 'scale(1.06)' }}
                    onMouseLeave={(e) => { e.target.style.transform = 'scale(1)' }}
                    loading="lazy"
                  />

                  {/* Hover overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(29,29,29,0)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      padding: '1.25rem',
                      transition: 'background 0.4s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(29,29,29,0.6)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(29,29,29,0)' }}
                  >
                    <div style={{
                      transform: 'translateY(10px)',
                      opacity: 0,
                      transition: 'all 0.4s',
                    }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)'
                        e.currentTarget.style.opacity = 1
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(10px)'
                        e.currentTarget.style.opacity = 0
                      }}
                    >
                      <span style={{
                        display: 'inline-block',
                        padding: '0.2rem 0.6rem',
                        background: 'rgba(200,169,106,0.2)',
                        border: '1px solid rgba(200,169,106,0.4)',
                        color: '#C8A96A',
                        fontFamily: '"Poppins", sans-serif',
                        fontSize: '0.55rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        marginBottom: '0.5rem',
                      }}>
                        {item.category}
                      </span>
                      <p style={{
                        fontFamily: '"Playfair Display", serif',
                        color: 'white',
                        fontSize: '0.9rem',
                        fontWeight: 400,
                      }}>{item.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load more button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '4rem' }}
        >
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'transparent',
              border: '1px solid rgba(29,29,29,0.2)',
              color: '#1D1D1D',
              fontFamily: '"Poppins", sans-serif',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              padding: '1rem 3rem',
              cursor: 'none',
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
            View All Projects
          </button>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.96)',
              zIndex: 9000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'white',
                width: 44,
                height: 44,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'none',
                fontSize: '1.2rem',
                zIndex: 1,
              }}
            >
              ×
            </button>

            {/* Prev/Next */}
            {['prev', 'next'].map((dir) => (
              <button
                key={dir}
                onClick={(e) => { e.stopPropagation(); dir === 'prev' ? prevImage() : nextImage() }}
                style={{
                  position: 'absolute',
                  [dir === 'prev' ? 'left' : 'right']: '2rem',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: 'white',
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'none',
                  fontSize: '1.2rem',
                  zIndex: 1,
                }}
              >
                {dir === 'prev' ? '←' : '→'}
              </button>
            ))}

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              style={{ maxWidth: '85vw', maxHeight: '85vh' }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '80vh',
                  objectFit: 'contain',
                  display: 'block',
                  margin: '0 auto',
                }}
              />
              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <p style={{
                  fontFamily: '"Playfair Display", serif',
                  color: 'white',
                  fontSize: '1rem',
                  fontStyle: 'italic',
                }}>{filtered[lightboxIndex].title}</p>
                <p style={{
                  fontFamily: '"Poppins", sans-serif',
                  color: 'rgba(255,255,255,0.3)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  marginTop: '0.25rem',
                }}>
                  {lightboxIndex + 1} / {filtered.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
