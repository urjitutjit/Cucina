import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '@components/common/SectionTitle'
import MagneticButton from '@components/common/MagneticButton'
import { PRODUCTS } from '@utils/constants'

const ProductCard = ({ product, index }) => {
  const [hovered, setHovered] = useState(false)

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.9, delay: index * 0.12, ease: [0.76, 0, 0.24, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => scrollTo(product.href)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 4,
        cursor: 'none',
        aspectRatio: index === 0 || index === 3 ? '4/5' : '3/4',
      }}
    >
      {/* Image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        transform: hovered ? 'scale(1.08)' : 'scale(1)',
        transition: 'transform 1.2s cubic-bezier(0.19, 1, 0.22, 1)',
      }}>
        <img
          src={product.image}
          alt={product.label}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Gradient overlays */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(0deg, rgba(29,29,29,0.9) 0%, rgba(29,29,29,0.3) 50%, rgba(29,29,29,0.1) 100%)',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `linear-gradient(0deg, rgba(29,29,29,0.95) 0%, transparent 60%)`,
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.5s ease',
      }} />

      {/* Number */}
      <div style={{
        position: 'absolute',
        top: '1.5rem',
        right: '1.5rem',
        fontFamily: '"Cormorant Garamond", serif',
        fontSize: '0.8rem',
        color: 'rgba(255,255,255,0.3)',
        letterSpacing: '0.1em',
      }}>0{index + 1}</div>

      {/* Content */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 'clamp(1.5rem, 3vw, 2rem)',
      }}>
        <div style={{
          width: 30,
          height: 1,
          background: '#C8A96A',
          marginBottom: '1rem',
          transform: hovered ? 'scaleX(1.5)' : 'scaleX(1)',
          transformOrigin: 'left',
          transition: 'transform 0.4s ease',
        }} />

        <h3 style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
          color: 'white',
          fontWeight: 400,
          marginBottom: '0.75rem',
          lineHeight: 1.2,
        }}>{product.label}</h3>

        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontSize: '0.82rem',
          color: 'rgba(255,255,255,0.6)',
          fontWeight: 300,
          lineHeight: 1.6,
          maxWidth: 240,
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(10px)',
          transition: 'all 0.5s cubic-bezier(0.76, 0, 0.24, 1)',
          marginBottom: '1.5rem',
        }}>{product.description}</p>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(15px)',
          transition: 'all 0.5s cubic-bezier(0.76, 0, 0.24, 1) 0.05s',
        }}>
          <span style={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: '0.65rem',
            color: '#C8A96A',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
          }}>Explore</span>
          <svg width="14" height="10" viewBox="0 0 24 14" fill="none" stroke="#C8A96A" strokeWidth="1.5">
            <path d="M0 7h22M17 1l6 6-6 6" />
          </svg>
        </div>
      </div>
    </motion.div>
  )
}

const Products = () => {
  return (
    <section id="products" style={{ background: '#F8F6F2', padding: '8rem 0' }}>
      <div className="section-padding">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '4rem',
          flexWrap: 'wrap',
          gap: '2rem',
        }}>
          <SectionTitle
            label="What We Create"
            title={<>Our Signature<br /><em style={{ color: '#C8A96A', fontStyle: 'italic' }}>Collections</em></>}
          />
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: '"Poppins", sans-serif',
              color: '#8A8A8A',
              fontSize: '0.85rem',
              lineHeight: 1.7,
              maxWidth: 340,
              fontWeight: 300,
            }}
          >
            Every product we create is a statement of intent — a commitment to living beautifully, crafted for the discerning few.
          </motion.p>
        </div>

        {/* Product Grid — asymmetric luxury layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridTemplateRows: 'auto auto',
          gap: '1.5rem',
        }}>
          {/* Kitchen — tall left */}
          <div style={{ gridColumn: 'span 3' }} className="col-span-12 md:col-span-3">
            <ProductCard product={PRODUCTS[0]} index={0} />
          </div>
          {/* Wardrobes — medium */}
          <div style={{ gridColumn: 'span 3' }} className="col-span-12 md:col-span-3">
            <ProductCard product={PRODUCTS[1]} index={1} />
          </div>
          {/* Doors — medium */}
          <div style={{ gridColumn: 'span 3' }} className="col-span-12 md:col-span-3">
            <ProductCard product={PRODUCTS[2]} index={2} />
          </div>
          {/* Furniture — tall */}
          <div style={{ gridColumn: 'span 3' }} className="col-span-12 md:col-span-3">
            <ProductCard product={PRODUCTS[3]} index={3} />
          </div>
        </div>

        {/* Bottom marquee */}
        <div style={{
          marginTop: '5rem',
          overflow: 'hidden',
          borderTop: '1px solid rgba(200,169,106,0.15)',
          borderBottom: '1px solid rgba(200,169,106,0.15)',
          padding: '1.25rem 0',
        }}>
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            style={{ display: 'flex', gap: '4rem', whiteSpace: 'nowrap' }}
          >
            {Array(8).fill(['High-End Kitchens', 'Luxury Wardrobes', 'Bespoke Doors', 'Custom Furniture', 'Premium Interiors', 'Factory Direct']).flat().map((text, i) => (
              <span key={i} style={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: '0.65rem',
                color: i % 6 === 0 ? '#C8A96A' : 'rgba(29,29,29,0.3)',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
              }}>{text} {i % 6 === 0 ? '✦' : '·'}</span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Products
