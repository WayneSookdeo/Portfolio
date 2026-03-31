'use client'

import { motion } from 'framer-motion'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { Badge } from '@/components/ui/badge'
import { Briefcase, GraduationCap } from 'lucide-react'

const experiences = [
  {
    title: 'Junior Software Developer',
    company: 'Isibani Digital',
    period: 'May 2025 – Present',
    type: 'work',
    current: true,
    responsibilities: [
      'Solely responsible for reviewing and approving all pull requests across the team, ensuring consistent code quality, maintainability, and adherence to best practices.',
      'Built complex admin systems and SaaS application pages from scratch using Blazor and Razor, delivering clean, performant interfaces aligned to business requirements.',
      'Implemented and integrated API endpoints into the frontend, enabling reliable data exchange across system modules.',
      'Optimised SQL queries to improve data retrieval speed and overall application performance.',
      'Partnered with stakeholders to refine and clarify requirements, ensuring delivered solutions addressed real business needs.',
    ],
    skills: ['Blazor', 'Razor', 'C#', 'ASP.NET', 'SQL Server', 'REST APIs'],
    iconBg: '#2563eb',
  },
  {
    title: 'Graduate Developer',
    company: 'EasyGames',
    period: 'December 2023 – May 2025',
    type: 'work',
    current: false,
    responsibilities: [
      'Led end-to-end development of the Goldrush website sign-up, withdrawal, and deposit flows — architecting the full stack from React frontend through to RESTful APIs, stored procedures, and database design.',
      'Integrated a third-party WebSocket provider to enable real-time transaction and balance updates, delivering a seamless live betting experience.',
      'Built new features and systems from the ground up across a live betting platform, collaborating closely with designers to translate UI/UX designs into production-ready code.',
      'Designed and optimised SQL stored procedures to support complex betting platform operations, improving data reliability and performance.',
      'Worked directly with stakeholders to gather requirements and deliver technical solutions within Agile sprint cycles.',
    ],
    skills: ['React', 'Vue.js', 'WebSocket', 'REST APIs', 'SQL', 'Agile'],
    iconBg: '#7c3aed',
  },
  {
    title: 'Student Tutor',
    company: 'Varsity College',
    period: 'January 2023 – November 2023',
    type: 'education',
    current: false,
    responsibilities: [
      'Assisted students with challenging coursework across programming and computer science modules.',
      'Hosted workshops to teach concepts needed for completing assignments, improving overall student performance.',
    ],
    skills: ['Teaching', 'Communication', 'Java', 'Data Structures'],
    iconBg: '#059669',
  },
]

const Experience = () => {
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
        <motion.div
          className="text-center mb-12"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-zinc-100 mb-3">
            Professional Experience
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">
            Two years of commercial full-stack development across live betting platforms,
            SaaS products, and enterprise admin systems.
          </p>
        </motion.div>

        <VerticalTimeline lineColor="rgba(63,63,70,0.8)">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: '#27272a',
                color: '#fff',
                border: exp.current
                  ? '1px solid rgba(37,99,235,0.4)'
                  : '1px solid rgba(63,63,70,0.6)',
                boxShadow: 'none',
                borderRadius: '12px',
              }}
              contentArrowStyle={{
                borderRight: `7px solid ${exp.current ? 'rgba(37,99,235,0.4)' : '#27272a'}`,
              }}
              date={
                <span className="text-zinc-400 text-sm font-medium">
                  {exp.period}
                </span>
              }
              iconStyle={{
                background: exp.iconBg,
                color: '#fff',
                boxShadow: `0 0 0 4px ${exp.iconBg}33`,
              }}
              icon={
                exp.type === 'work' ? (
                  <Briefcase className="w-4 h-4" />
                ) : (
                  <GraduationCap className="w-4 h-4" />
                )
              }
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-2 mb-1">
                <div>
                  <h3 className="text-base font-semibold text-zinc-100 leading-snug">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-zinc-400">{exp.company}</p>
                </div>
                {exp.current && (
                  <span className="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 bg-blue-600/20 text-blue-400 border border-blue-600/30 rounded-full">
                    Current
                  </span>
                )}
              </div>

              {/* Responsibilities */}
              <ul className="mt-3 space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2 text-sm text-zinc-300 leading-relaxed"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-500 flex-shrink-0" />
                    {resp}
                  </li>
                ))}
              </ul>

              {/* Skill tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {exp.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-[11px] bg-zinc-700 text-zinc-300 hover:bg-zinc-600 border-0"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </motion.section>
  )
}

export default Experience