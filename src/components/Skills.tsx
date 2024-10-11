'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const Skills = () => {
  const technicalSkills = ['Angular', 'React', 'Vue', 'Java', 'Delphi', 'C#', 'HTML', 'CSS', 'MySQL', 'C++', 'Data Structures', 'Object-Oriented Programming', 'Algorithms']
  const softSkills = ['Problem-Solving', 'Critical Thinking', 'Collaborative', 'Adaptability', 'Intrapersonal skills', 'Self-Motivated']

  return (
    <motion.section 
      id="skills" 
      className="py-20 bg-zinc-800"
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
          Skills & Expertise
        </motion.h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-zinc-700 border-zinc-600 h-full">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-zinc-100">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <Badge variant="secondary" className="bg-zinc-600 text-zinc-200">{skill}</Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-zinc-700 border-zinc-600 h-full">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-zinc-100">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <Badge className="bg-zinc-600 text-zinc-200">{skill}</Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Skills