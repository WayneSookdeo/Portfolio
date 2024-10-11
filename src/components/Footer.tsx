'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer 
      className="bg-secondary text-secondary-foreground py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          &copy; {new Date().getFullYear()} Nicholas Wayne Sookdeo. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  )
}

export default Footer