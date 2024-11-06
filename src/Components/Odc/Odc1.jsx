'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ArrowUpRight, Menu, X, Clock as ClockIcon, Sun, Moon, Search } from 'lucide-react'

const NAVBAR_HEIGHT = '4rem'

export default function Odc1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const menuRef = useRef(null)
  const searchInputRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
    if (!isSearchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100)
    }
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
        setIsMenuOpen(false)
        setIsSearchOpen(false)
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
    <>
      <nav className={`fixed top-0 left-0 right-0 w-full bg-white dark:bg-gray-900 transition-all duration-300 z-50 font-inter ${isScrolled ? 'shadow-md' : ''}`} style={{ height: NAVBAR_HEIGHT }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-full">
          {/* Scroll Progress Indicator */}
          <div
            className="absolute top-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-indigo-700 transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress}%` }}
          ></div>

          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md">
                <svg
                  className="h-8 w-auto text-indigo-500 transition-all duration-300 group-hover:rotate-180 group-focus:rotate-180"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                </svg>
                <span className="ml-2 text-[24px] font-bold text-indigo-500 tracking-tight transition-colors group-hover:text-indigo-600 group-focus:text-indigo-600">ODC IMAGING</span>
              </a>
            </div>

            {/* Center section - Attractive Clock */}
            <div className="hidden md:flex items-center justify-center flex-grow">
              <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105" aria-live="polite" aria-atomic="true">
                <ClockIcon className="h-5 w-5 animate-pulse inline-block mr-2" aria-hidden="true" />
                <span className="text-sm font-medium tabular-nums tracking-wider">
                  {formatTime(currentTime)}
                </span>
              </div>
            </div>

            {/* Right section - Theme Toggle, Search, and Navigation */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4">
                <button
                  onClick={toggleDarkMode}
                  className="text-black dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-full p-2 transition-colors duration-200"
                  aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
                </button>
                <button
                  onClick={toggleSearch}
                  className="text-black dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-full p-2 transition-colors duration-200"
                  aria-label="Open search"
                  aria-expanded={isSearchOpen}
                >
                  <Search className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation Links - hidden on mobile, shown on larger screens */}
              <div className="hidden md:flex md:items-center md:space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-black dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md font-medium transition-all duration-200 relative group py-2"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 dark:bg-indigo-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-focus:scale-x-100"></span>
                  </a>
                ))}
              </div>

              {/* Action Buttons - hidden on mobile, shown on larger screens */}
              <div className="hidden md:flex md:items-center md:space-x-4">
                <a
                  href="/appointment"
                  className="inline-flex justify-center items-center px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 transition-all duration-300 font-semibold text-sm hover:shadow-lg hover:-translate-y-0.5"
                >
                  Online Report
                  <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/* Hamburger menu for mobile */}
              <div className="md:hidden">
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

          {/* Search Bar */}
          <div
            className={`absolute left-0 right-0 top-full mt-2 transition-all duration-300 ease-in-out ${
              isSearchOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
          >
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-full border-2 border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-800 text-black dark:text-white"
              aria-label="Search"
            />
          </div>

          {/* Mobile menu, show/hide based on menu state */}
          <div
            ref={menuRef}
            className={`md:hidden transition-all duration-500 ease-in-out ${
              isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900`}
            aria-hidden={!isMenuOpen}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase().replace(' ', '-')}`}
                  className={`block px-3 py-2 rounded-md text-base font-medium text-black dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all duration-300 transform ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  {item}
                </a>
              ))}
              {/* Mobile Action Buttons */}
              <a
                href="/appointment"
                className="block w-full text-center px-3 py-2 rounded-md text-base font-medium bg-indigo-500 text-white hover:bg-indigo-600 transition-colors duration-300"
                tabIndex={isMenuOpen ? 0 : -1}
              >
                Appointment
              </a>
              <a
                href="/signup"
                className="block w-full text-center px-3 py-2 rounded-md text-base font-medium border-2 border-indigo-500 text-indigo-500 dark:text-indigo-400 hover:bg-indigo-500 hover:text-white transition-colors duration-300"
                tabIndex={isMenuOpen ? 0 : -1}
              >
                Sign Up
              </a>
              {/* Mobile Theme Toggle and Search */}
              <div className="flex justify-center space-x-4 py-2">
                <button
                  onClick={toggleDarkMode}
                  className="text-black dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-full p-2 transition-colors duration-200"
                  aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
                </button>
                <button
                  onClick={toggleSearch}
                  className="text-black dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-full p-2 transition-colors duration-200"
                  aria-label="Open search"
                  aria-expanded={isSearchOpen}
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  <Search className="h-6 w-6" />
                </button>
              </div>
              {/* Attractive Clock - visible on mobile when menu is open */}
              <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white px-4 py-2 rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105" aria-live="polite" aria-atomic="true">
                <ClockIcon className="h-5 w-5 animate-pulse" aria-hidden="true" />
                <span className="text-sm font-medium tabular-nums tracking-wider">
                  {formatTime(currentTime)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
     
    </>
  )
}