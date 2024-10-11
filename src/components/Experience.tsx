const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Graduate Developer</h3>
            <p className="text-accent mb-2">EasyGames | December 2023 - Current</p>
            <ul className="list-disc list-inside">
              <li>Designed and implemented responsive, user-friendly web applications using Vue.js and Angular, enhancing user experience and engagement.</li>
              <li>Collaborated with UX/UI designers to translate visual concepts into functional web components, ensuring cross-browser compatibility and adherence to design specifications.</li>
              <li>Implemented RESTful APIs for secure communication between the front-end and back-end, following best practices in API security and documentation.</li>
              <li>Designed and managed SQL databases, optimizing data storage, retrieval, and manipulation for web applications, resulting in enhanced application performance and scalability.</li>
              <li>Worked within a cross-functional team following Agile methodologies to deliver high-quality web applications and websites on time and within budget.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Student Tutor</h3>
            <p className="text-accent mb-2">Varsity College | January 2023 - November 2023</p>
            <ul className="list-disc list-inside">
              <li>Assisted students with challenging coursework.</li>
              <li>Hosted workshops to teach students concepts necessary for completing assignments.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience