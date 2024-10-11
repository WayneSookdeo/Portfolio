'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const About = () => {
  return (
    <motion.section 
      id="about" 
      className="py-20 bg-secondary"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center text-secondary-foreground"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-center">My Journey</CardTitle>
          </CardHeader>
          <CardContent className="text-secondary-foreground">
            <motion.p 
              className="mb-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I am an analytical, determined, and passionate graduate with a Degree in Computer and Information Sciences, specializing in Application Development. With a strong foundation in multiple coding languages and the ability to apply data structures and algorithms effectively, I am eager to apply my technical skills in a dynamic environment.
            </motion.p>
            <motion.p 
              className="mb-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Having graduated with distinction, I am now seeking a position that not only allows me to utilize my coding abilities but also offers opportunities for professional growth. My collaborative spirit enables me to engage with teams and share knowledge, contributing positively to collective goals.
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              I am open to relocation and excited about the prospect of joining a team where I can further enhance my capabilities and make meaningful contributions to innovative projects.
            </motion.p>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  )
}

export default About