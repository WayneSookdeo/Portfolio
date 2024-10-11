import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Nicholas Wayne Sookdeo</h1>
      <p className="text-xl mb-8">Junior Software Developer</p>
      <div className="flex justify-center space-x-4 mb-8">
        <a href="https://github.com/WayneSookdeo" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-accent">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/nicholas-wayne-sookdeo/" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-accent">
          <FaLinkedin />
        </a>
      </div>
      <a href="#contact" className="bg-accent text-white px-6 py-2 rounded-full hover:bg-opacity-80 transition duration-300">
        Contact Me
      </a>
    </section>
  )
}

export default Hero