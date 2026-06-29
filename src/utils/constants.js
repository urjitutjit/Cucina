export const SITE_NAME = 'Cucina Kraft'
export const SITE_TAGLINE = 'We Recreate Your Imaginations'
export const SITE_EMAIL = 'info@cucinakraft.com'
export const SITE_PHONE = '+91 98765 43210'
export const SITE_ADDRESS = 'Plot No. 24, Industrial Area, Sector 5, Noida, Uttar Pradesh - 201301'
export const SITE_INSTAGRAM = 'https://instagram.com/cucinakraft'
export const SITE_FACEBOOK = 'https://facebook.com/cucinakraft'

export const NAV_LINKS = [
  { label: 'Products', href: '#products' },
  { label: 'Projects', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export const STATS = [
  { number: '10', suffix: '+', label: 'Years of Excellence' },
  { number: '750', suffix: '+', label: 'Projects Delivered' },
  { number: '1200', suffix: '+', label: 'Happy Clients' },
  { number: '2', suffix: '', label: 'Manufacturing Units' },
]

export const PRODUCTS = [
  {
    id: 'kitchens',
    label: 'High-End Kitchens',
    description: 'Precision-crafted modular kitchens that blend function with luxury.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80',
    href: '#kitchens',
    accent: '#6B4F3A',
  },
  {
    id: 'wardrobes',
    label: 'Luxury Wardrobes',
    description: 'Custom walk-in and sliding wardrobes engineered for your lifestyle.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
    href: '#wardrobes',
    accent: '#C8A96A',
  },
  {
    id: 'doors',
    label: 'Doors & Wall Panels',
    description: 'Architectural doors and feature walls that define your space.',
    image: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=900&q=80',
    href: '#doors',
    accent: '#4A3427',
  },
  {
    id: 'furniture',
    label: 'Bespoke Furniture',
    description: 'One-of-a-kind furniture designed and built to your exact specifications.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80',
    href: '#furniture',
    accent: '#8B6F5A',
  },
]

export const KITCHEN_TYPES = [
  {
    id: 'island',
    label: 'Island Kitchen',
    description: 'The ultimate statement of luxury. A central island creates a social hub while maximizing workspace, perfect for open-plan living.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
  },
  {
    id: 'l-shape',
    label: 'L-Shape Kitchen',
    description: 'Timeless and versatile, the L-Shape layout maximizes corner space while maintaining an elegant, uncluttered flow.',
    image: 'https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?w=1200&q=80',
  },
  {
    id: 'u-shape',
    label: 'U-Shape Kitchen',
    description: 'Three walls of pure efficiency. The U-Shape wraps you in workspace, with everything within reach for the discerning chef.',
    image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1200&q=80',
  },
  {
    id: 'parallel',
    label: 'Parallel Kitchen',
    description: 'Two facing countertops create a professional galley style that is both efficient and architecturally striking.',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1200&q=80',
  },
  {
    id: 'straight',
    label: 'Straight Kitchen',
    description: 'Clean minimalist lines in a single-wall configuration. Perfect for studio apartments and modern open spaces.',
    image: 'https://images.unsplash.com/photo-1556909085-3498e5eb0e2c?w=1200&q=80',
  },
]

export const WARDROBE_MATERIALS = [
  {
    id: 'pu',
    label: 'PU Finish',
    description: 'High-gloss polyurethane coating delivers a lacquered, mirror-like surface that is both durable and breathtakingly beautiful.',
    icon: '✦',
  },
  {
    id: 'veneer',
    label: 'Wood Veneer',
    description: 'Natural wood grain veneers bring warmth and authenticity, each piece unique as the forest it comes from.',
    icon: '◈',
  },
  {
    id: 'glass',
    label: 'Frosted Glass',
    description: 'Architectural glass panels add lightness and sophistication, with options from clear to frosted and back-painted.',
    icon: '◇',
  },
  {
    id: 'acrylic',
    label: 'Acrylic',
    description: 'Premium acrylic offers depth of color unmatched by other materials, with a luxuriously thick, solid appearance.',
    icon: '◉',
  },
  {
    id: 'cnc',
    label: 'CNC Carved',
    description: 'Computer-precision CNC routing enables intricate patterns and textures that transform your wardrobe into art.',
    icon: '❋',
  },
]

export const WHY_CHOOSE_US = [
  {
    title: 'Master Craftsmanship',
    description: 'Every joint, finish, and fitting is executed with surgical precision by our master craftsmen with decades of experience.',
    icon: 'hammer',
  },
  {
    title: 'Premium Materials',
    description: 'We source only the finest materials—imported hardware, European laminates, solid hardwoods—for lasting beauty.',
    icon: 'gem',
  },
  {
    title: 'Bespoke Design',
    description: 'Nothing is off-the-shelf. Every project is designed from scratch to your exact specifications and lifestyle.',
    icon: 'pencil-ruler',
  },
  {
    title: 'Factory Direct',
    description: 'Our in-house manufacturing means consistent quality control and pricing without middleman markups.',
    icon: 'factory',
  },
  {
    title: 'Expert Team',
    description: 'Architects, interior designers, and project managers work in sync to deliver your vision perfectly.',
    icon: 'users',
  },
  {
    title: 'After-Sales Care',
    description: 'Our relationship does not end at installation. We provide comprehensive after-sales support and warranty.',
    icon: 'shield-check',
  },
]

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We begin with an in-depth discovery session to understand your vision, lifestyle, and budget. Our designers listen deeply before they design.',
    icon: 'message-circle',
  },
  {
    number: '02',
    title: '3D Design',
    description: 'Our designers craft photorealistic 3D renders and virtual walkthroughs so you can experience your space before it is built.',
    icon: 'layers',
  },
  {
    number: '03',
    title: 'Material Selection',
    description: 'Visit our experience center to touch, feel, and approve every material, finish, and hardware element of your project.',
    icon: 'palette',
  },
  {
    number: '04',
    title: 'Manufacturing',
    description: 'Our state-of-the-art factory with CNC machinery and master craftsmen bring your designs to life with precision.',
    icon: 'settings',
  },
  {
    number: '05',
    title: 'Installation',
    description: 'Our specialized installation team fits everything with meticulous attention to detail, on time, every time.',
    icon: 'tool',
  },
  {
    number: '06',
    title: 'Handover',
    description: 'We walk you through every element, ensure your satisfaction, and hand over your transformed space with pride.',
    icon: 'check-circle',
  },
]

export const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    location: 'Gurgaon, Delhi NCR',
    rating: 5,
    text: 'Cucina Kraft transformed our kitchen beyond anything we imagined. The craftsmanship is extraordinary — every drawer glides silently, every finish is immaculate. We receive compliments daily from guests.',
    project: 'Island Kitchen + Living Room',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&q=80',
  },
  {
    name: 'Rajesh & Sunita Mehta',
    location: 'South Mumbai',
    rating: 5,
    text: 'Working with the Cucina Kraft team was a pleasure from start to finish. Their 3D designs were spot-on, and the final result exceeded every expectation. Truly a world-class experience.',
    project: 'Full Home Interior + Kitchen',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  },
  {
    name: 'Ananya Kapoor',
    location: 'Bengaluru',
    rating: 5,
    text: 'The wardrobe they designed for my master bedroom is a dream. The CNC carved panels and PU finish look absolutely stunning. The quality is unmatched — completely worth every rupee.',
    project: 'Luxury Wardrobe + Study',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
  },
  {
    name: 'Vikram Nair',
    location: 'Hyderabad',
    rating: 5,
    text: 'Our entire villa interior was handled by Cucina Kraft. The attention to detail is phenomenal. They delivered exactly on time and the quality of work left us speechless.',
    project: 'Villa Complete Interior',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
  },
  {
    name: 'Dr. Meenakshi Iyer',
    location: 'Chennai',
    rating: 5,
    text: 'I approached Cucina Kraft for my clinic interior and they created something truly professional yet warm. The bespoke furniture they built is functional, beautiful, and durable. Highly recommend.',
    project: 'Clinic Interior + Custom Furniture',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
  },
]

export const GALLERY_ITEMS = [
  { id: 1,  src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80', category: 'kitchen',   title: 'Island Kitchen, Gurgaon' },
  { id: 2,  src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', category: 'wardrobe',  title: 'Walk-In Wardrobe, Mumbai' },
  { id: 3,  src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80', category: 'furniture', title: 'Bespoke Living, Delhi' },
  { id: 4,  src: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=800&q=80', category: 'kitchen', title: 'L-Shape Kitchen, Pune' },
  { id: 5,  src: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=800&q=80', category: 'doors',     title: 'Architectural Doors, Hyderabad' },
  { id: 6,  src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80', category: 'furniture', title: 'Bedroom Suite, Bengaluru' },
  { id: 7,  src: 'https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?w=800&q=80', category: 'kitchen', title: 'U-Shape Kitchen, Noida' },
  { id: 8,  src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80', category: 'wardrobe', title: 'Veneer Wardrobe, Chennai' },
  { id: 9,  src: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80', category: 'furniture', title: 'Study Room, Jaipur' },
  { id: 10, src: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80', category: 'kitchen', title: 'Parallel Kitchen, Surat' },
  { id: 11, src: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800&q=80', category: 'doors',   title: 'Wall Panels, Kochi' },
  { id: 12, src: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80', category: 'wardrobe', title: 'Glass Wardrobe, Ahmedabad' },
]

export const GALLERY_FILTERS = ['all', 'kitchen', 'wardrobe', 'doors', 'furniture']

export const EMAILJS_CONFIG = {
  serviceId: 'service_cucina',
  templateId: 'template_consultation',
  publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
}
