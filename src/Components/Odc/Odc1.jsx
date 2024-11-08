'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ArrowUpRight, Menu, X, Clock as ClockIcon, Sun, Moon } from 'lucide-react'
import { Link } from 'react-router-dom'

const NAVBAR_HEIGHT = '4rem'

export default function Odc1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const menuRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const navItems = ['Home']

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100

      setIsScrolled(scrollPosition > 10)
      setScrollProgress(scrollPercentage)
    }

    window.addEventListener('scroll', handleScroll)

    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      const focusableElements = menuRef.current.querySelectorAll('a, button')
      if (focusableElements.length > 0) {
        focusableElements[0].focus()
      }
    }
  }, [isMenuOpen])

  // Effect to initialize dark mode from localStorage or system preference
  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true' ||
      (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    setIsDarkMode(isDark)
    if (isDark) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  // Effect to update dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
    }
  }, [isDarkMode])

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full bg-white dark:bg-black transition-all duration-300 z-50 font-inter ${isScrolled ? 'shadow-md' : ''}`} style={{ height: NAVBAR_HEIGHT }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-full">
        {/* Scroll Progress Indicator */}
        <div
          className="absolute top-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-cyan-700 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>

        <div className="flex justify-between items-center h-full">
          {/* Logo */}


          {/* Logo with Link */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md">
              {/* SVG and Logo Text */}
              
              <img className='h-12 lg:h-20 w-auto' src="odc logo.jpg" alt="" />

              

              <span className="ml-2 text-[28px] font-bold text-cyan-500 tracking-tight transition-colors group-hover:text-cyan-500 ">ODC IMAGING</span>
            </Link>
          </div>

          {/* Center section - Attractive Clock */}
          <div className="hidden md:flex items-center justify-center flex-grow">
            <div className="bg-gradient-to-r bg-cyan-500 dark:bg-black dark:border-gray-900 dark:border-2 cursor-pointer  text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105" aria-live="polite" aria-atomic="true">
              <ClockIcon className="h-5 w-5 animate-pulse inline-block mr-2" aria-hidden="true" />
              <span className="text-sm font-medium tabular-nums tracking-wider">
                {formatTime(currentTime)}
              </span>
            </div>
          </div>

          {/* Right section - Theme Toggle and Navigation */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="text-black dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-full p-2 transition-colors duration-200"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
              </button>
            </div>

            {/* Navigation Links - hidden on mobile, shown on larger screens */}

            {/* Right Section with Links */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-black dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md font-medium transition-all duration-200 relative group py-2"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 dark:bg-indigo-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-focus:scale-x-100"></span>
                </Link>
              ))}
            </div>

            {/* Action Buttons - hidden on mobile, shown on larger screens */}
            <div className="hidden md:flex md:items-center md:space-x-4">

              <Link to="/report">
                <button className="inline-flex justify-center items-center px-4 py-2 bg-cyan-500 dark:bg-black dark:border-gray-900 dark:border-2 dark:hover:bg-white dark:hover:text-black text-white rounded-full hover:bg-cyan-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 transition-all duration-300 font-normal text-sm hover:shadow-lg hover:-translate-y-0.5">
                  Online Report
                  <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </Link>

            </div>

            {/* Hamburger menu and dark mode toggle for mobile */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className="text-black dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-full p-2 transition-colors duration-200"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
              </button>
              <button
                onClick={toggleMenu}
                className="text-black dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md transition-colors duration-200"
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 transition-transform duration-300 rotate-90" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6 transition-transform duration-300 hover:rotate-180" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div
          ref={menuRef}
          className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden absolute top-full left-0 right-0 bg-white dark:bg-black`}
          aria-hidden={!isMenuOpen}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(' ', '-')}`}
                className={`block px-3 py-2 rounded-md text-base font-medium text-black dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all duration-300 transform ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 50}ms` }}
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={closeMenu}
              >
                {item}
              </Link>
            ))}
            {/* Mobile Action Buttons */}
            <Link
              to="/report"
              className="block w-full text-center px-3 py-2 rounded-md text-base font-medium bg-indigo-500 dark:bg-black dark:border-gray-900 dark:border-4 dark:hover:bg-gray-800 text-white hover:bg-indigo-600 transition-colors duration-300"
              tabIndex={isMenuOpen ? 0 : -1}
              onClick={closeMenu}
            >
              Online Report
            </Link>

            {/* Attractive Clock - visible on mobile when menu is open */}
            <div className="flex items-center justify-center space-x-2 bg-gradient-to-r bg-indigo-600 dark:bg-black dark:border-gray-900 dark:border-4  text-white px-4 py-2 rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105" aria-live="polite" aria-atomic="true">
              <ClockIcon className="h-5 w-5 animate-pulse" aria-hidden="true" />
              <span className="text-sm font-medium tabular-nums tracking-wider">
                {formatTime(currentTime)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}