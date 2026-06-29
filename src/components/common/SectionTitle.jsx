import { motion } from 'framer-motion'
import { fadeUp } from '@animations/variants'

const SectionTitle = ({
  label,
  title,
  subtitle,
  align = 'left',
  light = false,
  className = '',
}) => {
  const alignClass = {
    left: 'text-left',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align]

  return (
    <div className={`flex flex-col gap-4 ${alignClass} ${className}`}>
      {label && (
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className={`section-label ${light ? 'text-gold-light' : 'text-gold-primary'}`}
        >
          {label}
        </motion.span>
      )}

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={0.1}
        viewport={{ once: true, margin: '-50px' }}
        className={`section-title ${light ? 'text-white' : 'text-dark'}`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
          viewport={{ once: true, margin: '-50px' }}
          className={`section-subtitle max-w-xl ${light ? 'text-white/60' : 'text-gray-text'} ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}

      {align !== 'center' && (
        <motion.span
          variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.8, delay: 0.3 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ transformOrigin: align === 'right' ? 'right' : 'left' }}
          className={`luxury-line ${light ? 'bg-gold-light' : 'bg-gold-primary'}`}
        />
      )}
    </div>
  )
}

export default SectionTitle
