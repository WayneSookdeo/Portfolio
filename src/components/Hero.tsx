'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { GithubIcon, LinkedinIcon } from 'lucide-react'
import Typed, { ReactTyped } from 'react-typed';

const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center px-4 bg-zinc-900"
    >
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
      >
        Nicholas Wayne Sookdeo
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8"
      >
        <ReactTyped
          strings={['Junior Developer', 'Passionate Coder', 'Tech Enthusiast']}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex justify-center space-x-4 mb-8"
      >
        <Button variant="outline" size="icon" asChild className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600">
          <a href="https://github.com/WayneSookdeo" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600">
          <a href="https://www.linkedin.com/in/nicholas-wayne-sookdeo/" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white">
          <a href="#contact">Contact Me</a>
        </Button>
      </motion.div>
    </motion.section>
  )
}

export default Hero