import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {


  return (
    <div>
      <div className="min-h-screen bg-white dark:bg-primary text-gray-900 dark:text-gray-100">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App