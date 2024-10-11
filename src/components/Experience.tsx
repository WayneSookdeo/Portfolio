'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const Experience = () => {
  const experiences = [
    {
      title: 'Graduate Developer',
      company: 'EasyGames',
      period: 'December 2023 - Current',
      responsibilities: [
        'Designed and implemented responsive, user-friendly web applications using Vue.js and Angular, enhancing user experience and engagement.',
        'Collaborated with UX/UI designers to translate visual concepts into functional web components, ensuring cross-browser compatibility and adherence to design specifications.',
        'Implemented RESTful APIs for secure communication between the front-end and back-end, following best practices in API security and documentation.',
        'Designed and managed SQL databases, optimizing data storage, retrieval, and manipulation for web applications, resulting in enhanced application performance and scalability.',
        'Worked within a cross-functional team following Agile methodologies to deliver high-quality web applications and websites on time and within budget.'
      ]
    },
    {
      title: 'Student Tutor',
      company: 'Varsity College',
      period: 'January 2023 - November 2023',
      responsibilities: [
        'Assisted students with challenging coursework.',
        'Hosted workshops to teach students concepts necessary for completing assignments.'
      ]
    }
  ]

  return (
    <motion.section 
      id="experience" 
      className="py-20 bg-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{exp.title}</CardTitle>
                  <Badge variant="secondary" className="mt-1">
                    {exp.company} | {exp.period}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">{resp}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Experience