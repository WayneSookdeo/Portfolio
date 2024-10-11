'use client'

import { ThemeProvider } from 'next-themes'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="slate-900" enableSystem>
      <div className="flex flex-col w-full min-h-screen min-w-screen bg-slate-900 text-slate-100">
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App