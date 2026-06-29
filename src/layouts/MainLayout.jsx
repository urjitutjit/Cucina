import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'
import CustomCursor from '@components/CustomCursor/CustomCursor'
import ScrollProgress from '@components/ScrollProgress/ScrollProgress'
import Loader from '@components/Loader/Loader'
import { useLoader } from '@context/LoaderContext'
import { useLenis } from '@hooks/useLenis'
import { motion, AnimatePresence } from 'framer-motion'

const MainLayout = ({ children }) => {
  const { isLoading } = useLoader()
  useLenis()

  return (
    <>
      <Loader />
      <CustomCursor />
      <ScrollProgress />

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Navbar />
            <div style={{ background: '#F8F6F2' }}>
              {children}
            </div>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MainLayout
