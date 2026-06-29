import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG, SITE_PHONE, SITE_EMAIL, SITE_ADDRESS } from '@utils/constants'
import SectionTitle from '@components/common/SectionTitle'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const InputField = ({ label, name, register, error, type = 'text', placeholder, required }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
    <label style={{
      fontFamily: '"Poppins", sans-serif',
      fontSize: '0.65rem',
      color: 'rgba(255,255,255,0.4)',
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
    }}>
      {label} {required && <span style={{ color: '#C8A96A' }}>*</span>}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name, { required: required ? `${label} is required` : false })}
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: `1px solid ${error ? 'rgba(255,80,80,0.4)' : 'rgba(255,255,255,0.08)'}`,
        color: 'white',
        fontFamily: '"Poppins", sans-serif',
        fontSize: '0.88rem',
        fontWeight: 300,
        padding: '0.875rem 1.25rem',
        outline: 'none',
        borderRadius: 2,
        transition: 'border-color 0.3s',
        width: '100%',
      }}
      onFocus={(e) => { e.target.style.borderColor = '#C8A96A' }}
      onBlur={(e) => { e.target.style.borderColor = error ? 'rgba(255,80,80,0.4)' : 'rgba(255,255,255,0.08)' }}
    />
    {error && (
      <span style={{
        fontFamily: '"Poppins", sans-serif',
        fontSize: '0.7rem',
        color: 'rgba(255,80,80,0.8)',
      }}>{error.message}</span>
    )}
  </div>
)

const Consultation = () => {
  const formRef = useRef(null)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          project_type: data.projectType,
          budget: data.budget,
          message: data.message,
          location: data.location,
        },
        EMAILJS_CONFIG.publicKey
      )
      setSubmitStatus('success')
      reset()
    } catch (err) {
      console.error('EmailJS error:', err)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <section
      id="contact"
      style={{
        background: '#1D1D1D',
        padding: '8rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background image with overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=60"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.05 }}
        />
      </div>

      {/* Grid overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(200,169,106,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,106,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        zIndex: 0,
      }} />

      <div className="section-padding" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Get in Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              color: 'white',
              fontWeight: 400,
              lineHeight: 1.1,
              marginTop: '1rem',
            }}
          >
            Book Your Free<br /><em style={{ color: '#C8A96A', fontStyle: 'italic' }}>Consultation</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: '"Poppins", sans-serif',
              color: 'rgba(255,255,255,0.4)',
              fontSize: '0.9rem',
              lineHeight: 1.7,
              maxWidth: 480,
              margin: '1.5rem auto 0',
              fontWeight: 300,
            }}
          >
            Share your vision with us. Our team will connect within 24 hours to discuss your project.
          </motion.p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: 'clamp(2rem, 5vw, 6rem)',
          alignItems: 'start',
        }}
          className="grid-cols-1 lg:grid-cols-2"
        >
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Experience center banner */}
            <div style={{
              padding: '2rem',
              border: '1px solid rgba(200,169,106,0.2)',
              marginBottom: '2.5rem',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '4px',
                height: '100%',
                background: '#C8A96A',
              }} />
              <h3 style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '1.2rem',
                color: 'white',
                fontWeight: 500,
                marginBottom: '0.75rem',
              }}>Visit Our Experience Centre</h3>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: '0.8rem',
                color: 'rgba(255,255,255,0.4)',
                lineHeight: 1.6,
                fontWeight: 300,
              }}>
                Explore our curated showroom and touch, feel and experience our products firsthand. Consultations by appointment.
              </p>
            </div>

            {/* Contact details */}
            {[
              { icon: MapPin, label: 'Address', value: SITE_ADDRESS },
              { icon: Phone, label: 'Phone', value: SITE_PHONE },
              { icon: Mail, label: 'Email', value: SITE_EMAIL },
              { icon: Clock, label: 'Working Hours', value: 'Mon–Sat: 10am – 7pm\nSunday: By Appointment' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} style={{
                display: 'flex',
                gap: '1.25rem',
                marginBottom: '2rem',
                alignItems: 'flex-start',
              }}>
                <div style={{
                  width: 44,
                  height: 44,
                  border: '1px solid rgba(200,169,106,0.2)',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: 2,
                }}>
                  <Icon size={18} color="#C8A96A" strokeWidth={1.2} />
                </div>
                <div>
                  <div style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: '0.6rem',
                    color: 'rgba(255,255,255,0.25)',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    marginBottom: '0.35rem',
                  }}>{label}</div>
                  <div style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.6,
                    fontWeight: 300,
                    whiteSpace: 'pre-line',
                  }}>{value}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              {/* Row 1 */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}
                className="grid-cols-1 md:grid-cols-2"
              >
                <InputField label="Your Name" name="name" register={register} error={errors.name} placeholder="Enter your name" required />
                <InputField label="Phone Number" name="phone" register={register} error={errors.phone} placeholder="+91 99999 00000" type="tel" required />
              </div>

              <InputField label="Email Address" name="email" register={register} error={errors.email} placeholder="your@email.com" type="email" required />

              {/* Project Type */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: '0.65rem',
                  color: 'rgba(255,255,255,0.4)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}>Project Type <span style={{ color: '#C8A96A' }}>*</span></label>
                <select
                  {...register('projectType', { required: 'Please select a project type' })}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: `1px solid ${errors.projectType ? 'rgba(255,80,80,0.4)' : 'rgba(255,255,255,0.08)'}`,
                    color: 'rgba(255,255,255,0.7)',
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: '0.88rem',
                    fontWeight: 300,
                    padding: '0.875rem 1.25rem',
                    outline: 'none',
                    borderRadius: 2,
                    cursor: 'none',
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    width: '100%',
                  }}
                >
                  <option value="" style={{ background: '#1D1D1D' }}>Select project type</option>
                  <option value="kitchen" style={{ background: '#1D1D1D' }}>Kitchen Design</option>
                  <option value="wardrobe" style={{ background: '#1D1D1D' }}>Wardrobe Design</option>
                  <option value="doors" style={{ background: '#1D1D1D' }}>Doors & Wall Panels</option>
                  <option value="furniture" style={{ background: '#1D1D1D' }}>Bespoke Furniture</option>
                  <option value="full-home" style={{ background: '#1D1D1D' }}>Full Home Interior</option>
                  <option value="commercial" style={{ background: '#1D1D1D' }}>Commercial Space</option>
                </select>
                {errors.projectType && (
                  <span style={{ fontFamily: '"Poppins"', fontSize: '0.7rem', color: 'rgba(255,80,80,0.8)' }}>
                    {errors.projectType.message}
                  </span>
                )}
              </div>

              {/* Budget */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: '0.65rem',
                  color: 'rgba(255,255,255,0.4)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}>Budget Range</label>
                <select
                  {...register('budget')}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.7)',
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: '0.88rem',
                    fontWeight: 300,
                    padding: '0.875rem 1.25rem',
                    outline: 'none',
                    borderRadius: 2,
                    cursor: 'none',
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    width: '100%',
                  }}
                >
                  <option value="" style={{ background: '#1D1D1D' }}>Select budget range</option>
                  <option value="5-10L" style={{ background: '#1D1D1D' }}>₹5 – 10 Lakhs</option>
                  <option value="10-25L" style={{ background: '#1D1D1D' }}>₹10 – 25 Lakhs</option>
                  <option value="25-50L" style={{ background: '#1D1D1D' }}>₹25 – 50 Lakhs</option>
                  <option value="50L+" style={{ background: '#1D1D1D' }}>₹50 Lakhs +</option>
                  <option value="1Cr+" style={{ background: '#1D1D1D' }}>₹1 Crore +</option>
                </select>
              </div>

              <InputField label="Location / City" name="location" register={register} error={errors.location} placeholder="Your city or area" />

              {/* Message */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: '0.65rem',
                  color: 'rgba(255,255,255,0.4)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}>Your Vision</label>
                <textarea
                  {...register('message')}
                  placeholder="Tell us about your dream space, timeline, and any specific requirements..."
                  rows={4}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'white',
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: '0.88rem',
                    fontWeight: 300,
                    padding: '0.875rem 1.25rem',
                    outline: 'none',
                    borderRadius: 2,
                    resize: 'vertical',
                    lineHeight: 1.7,
                    width: '100%',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = '#C8A96A' }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)' }}
                />
              </div>

              {/* Status message */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    padding: '1rem 1.25rem',
                    background: submitStatus === 'success' ? 'rgba(100,200,100,0.1)' : 'rgba(255,80,80,0.1)',
                    border: `1px solid ${submitStatus === 'success' ? 'rgba(100,200,100,0.2)' : 'rgba(255,80,80,0.2)'}`,
                    borderRadius: 2,
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: '0.8rem',
                    color: submitStatus === 'success' ? 'rgba(100,200,100,0.9)' : 'rgba(255,100,100,0.9)',
                  }}
                >
                  {submitStatus === 'success'
                    ? 'Thank you! We will contact you within 24 hours.'
                    : 'Something went wrong. Please call us directly at ' + SITE_PHONE}
                </motion.div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  background: isSubmitting ? 'rgba(200,169,106,0.5)' : '#C8A96A',
                  border: 'none',
                  color: '#1D1D1D',
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  padding: '1.1rem 2.5rem',
                  cursor: isSubmitting ? 'wait' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  transition: 'all 0.4s',
                  width: '100%',
                  borderRadius: 2,
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.background = '#6B4F3A'
                    e.currentTarget.style.color = 'white'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.background = '#C8A96A'
                    e.currentTarget.style.color = '#1D1D1D'
                  }
                }}
              >
                {isSubmitting ? (
                  <>
                    <div style={{
                      width: 16, height: 16,
                      border: '2px solid rgba(29,29,29,0.3)',
                      borderTopColor: '#1D1D1D',
                      borderRadius: '50%',
                      animation: 'spin 0.8s linear infinite',
                    }} />
                    Sending...
                  </>
                ) : 'Send Consultation Request'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Consultation
