'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { GithubIcon, LinkedinIcon } from 'lucide-react'

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
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-zinc-100"
      >
        Nicholas Wayne Sookdeo
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-xl sm:text-2xl mb-8 text-zinc-400"
      >
        Junior Software Developer
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex justify-center space-x-4 mb-8"
      >
        <Button variant="outline" size="icon" asChild className="text-zinc-300 hover:text-zinc-100 border-zinc-700 hover:border-zinc-600">
          <a href="https://github.com/WayneSookdeo" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild className="text-zinc-300 hover:text-zinc-100 border-zinc-700 hover:border-zinc-600">
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
        <Button asChild className="bg-zinc-700 hover:bg-zinc-600 text-zinc-100">
          <a href="#contact">Contact Me</a>
        </Button>
      </motion.div>
    </motion.section>
  )
}

export default Hero