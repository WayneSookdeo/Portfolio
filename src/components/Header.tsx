import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { FaSun, FaMoon } from 'react-icons/fa'

interface HeaderProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-secondary shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold">
            Nicholas Wayne Sookdeo
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#about" className="hover:text-accent">About</a>
            <a href="#experience" className="hover:text-accent">Experience</a>
            <a href="#skills" className="hover:text-accent">Skills</a>
            <a href="#contact" className="hover:text-accent">Contact</a>
          </div>
          <div className="flex items-center">
            <Switch
              checked={darkMode}
              onChange={setDarkMode}
              className={`${
                darkMode ? 'bg-accent' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2`}
            >
              <span className="sr-only">Toggle dark mode</span>
              <span
                className={`${
                  darkMode ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              >
                {darkMode ? <FaMoon className="text-primary" /> : <FaSun className="text-yellow-500" />}
              </span>
            </Switch>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-4 md:hidden focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="mt-4 md:hidden">
            <a href="#about" className="block py-2 hover:text-accent">About</a>
            <a href="#experience" className="block py-2 hover:text-accent">Experience</a>
            <a href="#skills" className="block py-2 hover:text-accent">Skills</a>
            <a href="#contact" className="block py-2 hover:text-accent">Contact</a>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header