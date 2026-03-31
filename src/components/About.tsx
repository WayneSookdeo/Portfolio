'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '10+', label: 'Technologies' },
  { value: 'AWS', label: 'Certified' },
  { value: '88–92%', label: 'Degree Average' },
]

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 bg-zinc-800"
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
          <h2 className="text-3xl font-bold text-zinc-100 mb-3">About Me</h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">
            A bit about who I am, what I build, and what drives me.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Stat counters */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-700 border-zinc-600 text-center py-5">
                  <CardContent className="p-0">
                    <p className="text-2xl font-bold text-blue-400">{stat.value}</p>
                    <p className="text-xs text-zinc-400 mt-1">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Bio card */}
          <Card className="bg-zinc-700 border-zinc-600">
            <CardContent className="p-6 sm:p-8 space-y-4 text-zinc-300 text-sm leading-relaxed">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                I'm a full-stack software developer with two years of commercial experience
                delivering end-to-end solutions — from complex SQL databases and RESTful APIs
                to polished, responsive frontends. I've worked across React, Vue.js, Angular,
                and Blazor on the frontend, and C# / ASP.NET on the backend, with a strong
                foundation in SQL Server, MySQL, and MongoDB.
              </motion.p>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                viewport={{ once: true }}
              >
                At EasyGames, I led the full-stack build of the Goldrush sign-up, deposit,
                and withdrawal flows — integrating WebSocket providers for real-time updates
                and designing the SQL stored procedures that powered the platform. At Isibani
                Digital, I own code quality across the team as the sole reviewer of all pull
                requests, while continuing to ship Blazor and Razor-based admin systems.
              </motion.p>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                I'm AWS certified in both Cloud Practitioner and Data Engineering Foundations,
                and I'm always expanding my cloud and DevOps capabilities. I graduated with
                distinction — achieving 7 distinctions in both first and second year — and
                I bring that same standard of care and precision to everything I build
                professionally.
              </motion.p>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  )
}

export default About