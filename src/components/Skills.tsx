const Skills = () => {
  const technicalSkills = ['Angular', 'React', 'Vue', 'Java', 'Delphi', 'C#', 'HTML', 'CSS', 'MySQL', 'C++', 'Data Structures', 'Object-Oriented Programming', 'Algorithms']
  const softSkills = ['Problem-Solving', 'Critical Thinking', 'Collaborative', 'Adaptability', 'Intrapersonal skills', 'Self-Motivated']

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill, index) => (
                <span key={index} className="bg-accent text-white px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <span key={index} className="bg-secondary dark:bg-primary text-white px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills