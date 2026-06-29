export const easing = [0.76, 0, 0.24, 1]
export const easingOut = [0.19, 1, 0.22, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easing, delay },
  }),
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, ease: easing, delay },
  }),
}

export const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: easing, delay },
  }),
}

export const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: easing, delay },
  }),
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: easing, delay },
  }),
}

export const clipReveal = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: (delay = 0) => ({
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 1.2, ease: easing, delay },
  }),
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easing },
  },
}

export const lineReveal = {
  hidden: { scaleX: 0 },
  visible: (delay = 0) => ({
    scaleX: 1,
    transition: { duration: 0.8, ease: easing, delay },
  }),
}

export const slideUp = {
  initial: { y: '100%' },
  animate: (delay = 0) => ({
    y: 0,
    transition: { duration: 1, ease: easing, delay },
  }),
}

export const curtainReveal = {
  initial: { y: 0 },
  animate: {
    y: '-100%',
    transition: { duration: 1.2, ease: easing, delay: 0.2 },
  },
}
