'use client'

import { motion } from 'framer-motion'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
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
      className="py-20 bg-zinc-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center text-zinc-100"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>
        
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#1c1c1e', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #1c1c1e' }}
              date={exp.period}
              iconStyle={{ background: '#4a5568', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title text-xl font-semibold text-white">
                {exp.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-sm text-gray-400">
                {exp.company}
              </h4>
              <ul className="list-disc list-inside mt-4 space-y-2 text-sm text-zinc-300">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </motion.section>
  )
}

export default Experience
