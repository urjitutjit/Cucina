import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import SectionTitle from '@components/common/SectionTitle'
import { TESTIMONIALS } from '@utils/constants'

const StarRating = ({ rating }) => (
  <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem' }}>
    {Array.from({ length: rating }, (_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#C8A96A">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
      </svg>
    ))}
  </div>
)

const TestimonialCard = ({ testimonial }) => (
  <div style={{
    background: 'rgba(255,255,255,0.04)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 4,
    padding: 'clamp(2rem, 3vw, 2.5rem)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
  }}>
    {/* Quote mark */}
    <div style={{
      position: 'absolute',
      top: '1.5rem',
      right: '1.5rem',
      fontFamily: '"Playfair Display", serif',
      fontSize: '5rem',
      color: 'rgba(200,169,106,0.1)',
      lineHeight: 1,
      fontWeight: 700,
    }}>"</div>

    <StarRating rating={testimonial.rating} />

    <p style={{
      fontFamily: '"Poppins", sans-serif',
      fontSize: '0.88rem',
      color: 'rgba(255,255,255,0.7)',
      lineHeight: 1.8,
      fontWeight: 300,
      fontStyle: 'italic',
      flex: 1,
      marginBottom: '2rem',
    }}>
      "{testimonial.text}"
    </p>

    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      paddingTop: '1.5rem',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{
        width: 48,
        height: 48,
        borderRadius: '50%',
        overflow: 'hidden',
        border: '2px solid rgba(200,169,106,0.3)',
        flexShrink: 0,
      }}>
        <img
          src={testimonial.image}
          alt={testimonial.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div>
        <div style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: '0.95rem',
          color: 'white',
          fontWeight: 500,
        }}>{testimonial.name}</div>
        <div style={{
          fontFamily: '"Poppins", sans-serif',
          fontSize: '0.65rem',
          color: 'rgba(255,255,255,0.35)',
          letterSpacing: '0.08em',
          marginTop: '0.15rem',
        }}>{testimonial.location}</div>
        <div style={{
          fontFamily: '"Poppins", sans-serif',
          fontSize: '0.6rem',
          color: '#C8A96A',
          letterSpacing: '0.1em',
          marginTop: '0.15rem',
          textTransform: 'uppercase',
        }}>{testimonial.project}</div>
      </div>
    </div>
  </div>
)

const Testimonials = () => {
  return (
    <section style={{
      background: '#1D1D1D',
      padding: '8rem 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Large background text */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: '"Playfair Display", serif',
        fontSize: 'clamp(10rem, 20vw, 18rem)',
        color: 'rgba(255,255,255,0.015)',
        fontWeight: 700,
        userSelect: 'none',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        letterSpacing: '-0.05em',
      }}>LOVE</div>

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
            label="Client Love"
            title={<>What Our Clients<br /><em style={{ color: '#C8A96A', fontStyle: 'italic' }}>Say About Us</em></>}
            light
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
          >
            <div style={{ textAlign: 'right' }}>
              <div style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '3rem',
                color: '#C8A96A',
                fontWeight: 300,
                lineHeight: 1,
              }}>4.9</div>
              <div style={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: '0.6rem',
                color: 'rgba(255,255,255,0.3)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}>Average Rating</div>
            </div>
            <div style={{
              width: 1,
              height: 40,
              background: 'rgba(255,255,255,0.1)',
            }} />
            <div style={{ textAlign: 'right' }}>
              <div style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '3rem',
                color: '#C8A96A',
                fontWeight: 300,
                lineHeight: 1,
              }}>1200+</div>
              <div style={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: '0.6rem',
                color: 'rgba(255,255,255,0.3)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}>Happy Clients</div>
            </div>
          </motion.div>
        </div>

        {/* Testimonial slider */}
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: '.test-prev',
            nextEl: '.test-next',
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          style={{ paddingBottom: '3.5rem' }}
        >
          {TESTIMONIALS.map((testimonial) => (
            <SwiperSlide key={testimonial.name} style={{ height: 'auto' }}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom nav */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
          {['test-prev', 'test-next'].map((cls, i) => (
            <button
              key={cls}
              className={cls}
              style={{
                width: 44,
                height: 44,
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'transparent',
                color: 'rgba(255,255,255,0.5)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'none',
                transition: 'all 0.3s',
                fontSize: '1rem',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#C8A96A'
                e.currentTarget.style.color = '#1D1D1D'
                e.currentTarget.style.borderColor = '#C8A96A'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
              }}
            >
              {i === 0 ? '←' : '→'}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
