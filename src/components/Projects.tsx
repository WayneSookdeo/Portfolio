'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: 'market-dashboard',
    title: 'Market Portfolio Dashboard',
    description:
      'A real-time market dashboard tracking 8 crypto assets and 4 stocks. Backed by an automated hourly data pipeline storing historical price snapshots in PostgreSQL.',
    features: [
      'Live prices with 24h & 7d % changes',
      'Fear & Greed sentiment gauge',
      'Global market cap, volume & BTC dominance',
      'Best & worst performers of the day',
      'Hourly pipeline via Supabase Edge Functions',
    ],
    stack: ['Next.js 14', 'Supabase', 'PostgreSQL', 'TypeScript', 'Tailwind CSS', 'CoinGecko API', 'Alpha Vantage'],
    liveUrl: 'https://nicholas-marketdashboard.netlify.app/',
    githubUrl: 'https://github.com/WayneSookdeo/stockportfolio-tracker',
    status: 'Live',
    statusColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    hoverBorder: 'hover:border-emerald-500/30',
    topLine: 'rgba(52,211,153,0.5)',
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio Website',
    description:
      'This site. A responsive portfolio showcasing my projects, experience, and certifications — built with React, Framer Motion, and deployed on Netlify.',
    features: [
      'Particle constellation hero with mouse interaction',
      'Animated vertical experience timeline',
      'In-browser PDF certificate & CV viewer',
      'Netlify Forms contact with honeypot spam protection',
    ],
    stack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Netlify'],
    liveUrl: 'https://nicholaswaynesookdeo.netlify.app',
    githubUrl: 'https://github.com/WayneSookdeo/Portfolio',
    status: 'Live',
    statusColor: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    hoverBorder: 'hover:border-blue-500/30',
    topLine: 'rgba(96,165,250,0.5)',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-20 bg-zinc-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-zinc-100 mb-3">Projects</h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">
            A selection of things I've built outside of work.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className={`group relative flex flex-col rounded-2xl border border-zinc-700 bg-zinc-900 p-6 transition-all duration-300 ${project.hoverBorder}`}
            >
              {/* Coloured top line on hover */}
              <div
                className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                style={{ background: `linear-gradient(to right, ${project.topLine}, transparent)` }}
              />

              {/* Header row */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1 min-w-0 mr-3">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="text-base font-bold text-zinc-100">{project.title}</h3>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border flex-shrink-0 ${project.statusColor}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Icons */}
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="w-8 h-8 flex items-center justify-center rounded-lg border border-zinc-700 text-zinc-500 hover:text-zinc-200 hover:border-zinc-500 transition-all duration-200"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                  
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Feature list */}
              <ul className="space-y-1.5 mb-6">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-xs text-zinc-500">
                    <span className="mt-[5px] w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5 mt-auto mb-5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-2.5 py-1 rounded-full border border-zinc-700 bg-zinc-800 text-zinc-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View link */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center gap-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-200 transition-colors duration-200 w-fit"
              >
                View project
                <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}