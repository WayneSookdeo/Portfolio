'use client'

import { motion } from 'framer-motion'
import { GithubIcon, LinkedinIcon } from 'lucide-react'

const Footer = () => {
  return (
    <motion.footer 
      className="bg-zinc-800 text-zinc-300 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 md:mb-0"
          >
            &copy; {new Date().getFullYear()} Nicholas Wayne Sookdeo. All rights reserved.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex space-x-4"
          >
            <a href="https://github.com/WayneSookdeo" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-100 transition-colors">
              <GithubIcon className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/nicholas-wayne-sookdeo/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-100 transition-colors">
              <LinkedinIcon className="h-6 w-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer