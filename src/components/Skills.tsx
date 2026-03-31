'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const skillGroups = [
  {
    label: 'Frontend',
    color: 'text-blue-400',
    borderColor: 'border-blue-500/20',
    skills: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Angular', icon: 'angularjs' },
      { name: 'Vue.js', icon: 'vuejs' },
      { name: 'Blazor', icon: 'dotnetcore' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Tailwind', icon: 'tailwindcss' },
      { name: 'HTML/CSS', icon: 'html5' },
    ],
  },
  {
    label: 'Backend',
    color: 'text-purple-400',
    borderColor: 'border-purple-500/20',
    skills: [
      { name: 'C#', icon: 'csharp' },
      { name: 'ASP.NET', icon: 'dotnetcore' },
      { name: 'Java', icon: 'java' },
      { name: 'REST APIs', icon: 'fastapi' },
      { name: 'Dapper', icon: 'dot-net' },
      { name: 'Entity Framework', icon: 'dotnetcore' },
    ],
  },
  {
    label: 'Databases',
    color: 'text-teal-400',
    borderColor: 'border-teal-500/20',
    skills: [
      { name: 'SQL Server', icon: 'microsoftsqlserver' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'MongoDB', icon: 'mongodb' },
    ],
  },
  {
    label: 'Cloud & DevOps',
    color: 'text-amber-400',
    borderColor: 'border-amber-500/20',
    skills: [
      { name: 'AWS', icon: 'amazonwebservices' },
      { name: 'Azure', icon: 'azure' },
      { name: 'Git', icon: 'git' },
      { name: 'CI/CD', icon: 'githubactions' },
    ],
  },
]

const softSkills = [
  'Problem-Solving',
  'Critical Thinking',
  'Collaborative',
  'Adaptability',
  'Self-Motivated',
  'Stakeholder Communication',
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-20 bg-zinc-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Devicons CDN — provides SVG tech logos */}
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-zinc-100 mb-3">Skills & Expertise</h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">
            From polished frontends to optimised database queries — here's the full stack I work with.
          </p>
        </motion.div>

        {/* Technical skill groups */}
        <motion.div
          className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillGroups.map((group) => (
            <motion.div key={group.label} variants={itemVariants}>
              <Card className={`bg-zinc-700 border-zinc-600 h-full`}>
                <CardHeader className="pb-3">
                  <CardTitle className={`text-sm font-semibold uppercase tracking-wider ${group.color}`}>
                    {group.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-600 hover:border-zinc-500 transition-colors duration-150"
                      >
                        <i
                          className={`devicon-${skill.icon}-plain colored`}
                          style={{ fontSize: '14px' }}
                          aria-hidden="true"
                        />
                        <span className="text-xs text-zinc-300">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft skills */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card className="bg-zinc-700 border-zinc-600">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-600 text-xs text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Skills