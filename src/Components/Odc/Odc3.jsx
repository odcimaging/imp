import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Smile, Stethoscope, Clipboard, Syringe, Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react'

// Step 1: Define the services data
const services = [
    {
        icon: Smile,
        title: "Cosmetic Dentistry",
        description: "Enhance your smile with our advanced cosmetic procedures.",
        detailedDescription: "Our cosmetic dentistry services are designed to improve the appearance of your teeth and smile. We offer a range of treatments including teeth whitening, veneers, bonding, and smile makeovers.",
        images: [
           
           "/imp//public/dental/a1.png",
            "/imp/public/dental/a2.png",
            "/imp/public/dental/a3.png",
        ]
    },
    {
        icon: Stethoscope,
        title: "General Dentistry",
        description: "Comprehensive care for all your dental health needs.",
        detailedDescription: "Our general dentistry services cover a wide range of treatments to maintain and improve your oral health. From routine check-ups and cleanings to fillings, root canals, and gum disease treatment.",
        images: [
            "/imp//public/dental/a3.png",
            "/imp/public/dental/a2.png",
            "/imp/public/dental/a1.png",
        ]
    },
    {
        icon: Clipboard,
        title: "Dental Implants",
        description: "Restore your smile with our cutting-edge implant technology.",
        detailedDescription: "Dental implants are a revolutionary solution for replacing missing teeth. Our state-of-the-art implant procedures provide a permanent, natural-looking replacement that functions just like your natural teeth.",
        images: [
           
          "/imp//public/dental/a2.png",
            "/imp/public/dental/a1.png",
            "/imp/public/dental/a3.png",
        ]
    },
    {
        icon: Syringe,
        title: "Orthodontics",
        description: "Straighten your teeth for a confident, beautiful smile.",
        detailedDescription: "Our orthodontic treatments are designed to align your teeth and jaws for a healthier, more beautiful smile. We offer a variety of options including traditional braces, clear aligners, and accelerated orthodontics.",
        images: [
           
           "/imp//public/dental/a1.png",
            "/imp/public/dental/a3.png",
            "/imp/public/dental/a2.png",
        ]
    },
    {
        icon: Calendar,
        title: "Preventive Care",
        description: "Regular check-ups and cleanings for optimal oral health.",
        detailedDescription: "Preventive care is the foundation of good oral health. Our preventive services include regular dental check-ups, professional cleanings, fluoride treatments, and dental sealants.",
        images: [
            "/imp//public/dental/a3.png",
            "/imp/public/dental/a1.png",
            "/imp/public/dental/a2.png",
        ]
    }
]

// Step 2: Create the main component
export default function Odc3() {
    const [selectedService, setSelectedService] = useState(null)

    return (
        <div className='bg-white dark:bg-gray-900'>

            <div className="bg-white max-w-7xl mx-auto dark:bg-gray-900  py-12 px-4 sm:px-6 lg:px-8 font-inter transition-colors duration-300">
                <div className="max-w-7xl mx-auto">
                    <h2 className=" pt-8  lg:w-2/4  pb-8  text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white transition-all duration-1000 ease-out">
                        We Care Best System
                    </h2>
                    <p className="text-lg text-gray-600 pb-4 dark:text-gray-300 max-w-lg transition-all duration-1000 ease-out delay-300 mb-4">
                        Experience the pinnacle of dental implant technology with our expert team. Restore your confidence with a radiant, natural-looking smile.
                    </p>
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <ServiceCard service={services[0]} setSelectedService={setSelectedService} className="md:col-span-1" isCircular={true} />
                            <ServiceCard service={services[1]} setSelectedService={setSelectedService} className="md:col-span-2" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                            <ServiceCard service={services[2]} setSelectedService={setSelectedService} className="md:col-span-1" />
                            <ServiceCard service={services[3]} setSelectedService={setSelectedService} className="md:col-span-2" />
                            <ServiceCard service={services[4]} setSelectedService={setSelectedService} className="md:col-span-2" />
                        </div>
                    </div>
                    <AnimatePresence>
                        {selectedService && (
                            <Modal service={selectedService} onClose={() => setSelectedService(null)} />
                        )}
                    </AnimatePresence>
                </div>
            </div>

        </div>

    )
}

// Step 3: Create the ServiceCard component
function ServiceCard({ service, setSelectedService, className, isCircular = false }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % service.images.length)
        }, 3000)
        return () => clearInterval(timer)
    }, [service.images.length])

    useEffect(() => {
        const img = new Image()
        img.src = service.images[currentImageIndex]
        img.onload = () => setIsLoading(false)
        return () => {
            img.onload = null
        }
    }, [currentImageIndex, service.images])

    const cardClasses = `${className} bg-white dark:bg-gray-800 overflow-hidden shadow-lg ${isCircular ? 'rounded-full' : 'rounded-lg'}`

    return (
        <motion.div
            className={cardClasses}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
        >
            <div className="h-full flex flex-col">
                <div className={`relative ${isCircular ? 'w-48 h-48' : 'h-48'} ${isCircular ? 'mx-auto mt-4' : ''} overflow-hidden`}>
                    {isLoading && (
                        <div className={`absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse ${isCircular ? 'rounded-full' : ''}`}></div>
                    )}
                    {service.images.map((image, index) => (
                        <AnimatePresence key={index}>
                            {currentImageIndex === index && (
                                <motion.img
                                    src={image}
                                    alt={`${service.title} - Image ${index + 1}`}
                                    className={`absolute w-full h-full object-cover ${isCircular ? 'rounded-full' : ''}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                            )}
                        </AnimatePresence>
                    ))}
                </div>
                <div className={`px-4 py-5 sm:p-6 ${isCircular ? 'text-center' : ''} flex-grow`}>
                    <div className={`flex items-center mb-2 ${isCircular ? 'justify-center' : ''}`}>
                        <service.icon className="h-6 w-6 text-indigo-500 dark:text-indigo-400 mr-2" aria-hidden="true" />
                        <h3 className="text-lg font-medium text-black dark:text-white">{service.title}</h3>
                    </div>
                    <p className="mt-1 text-sm text-black dark:text-gray-300">{service.description}</p>
                </div>
                <div className={`px-4 py-4 sm:px-6 ${isCircular ? 'text-center' : ''}`}>
                    <motion.button
                        type="button"
                        className="inline-flex items-center  px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                        onClick={() => setSelectedService(service)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Learn more
                    </motion.button>
                </div>
            </div>
        </motion.div>
    )
}

// Step 4: Create the Modal component
function Modal({ service, onClose }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % service.images.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [service.images.length])

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % service.images.length)
    }

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + service.images.length) % service.images.length)
    }

    return (
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 15 }}
            >
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-[24px] font-bold text-black dark:text-white">{service.title}</h3>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-200 focus:outline-none"
                            aria-label="Close modal"
                        >
                            <X className="h-6 w-6 border border-gray-500" />
                        </button>
                    </div>
                    <div className="mb-4">
                        <p className="text-black dark:text-gray-300">{service.description}</p>
                    </div>
                    <div className="relative mb-6">
                        <div className="aspect-w-16 aspect-h-9">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentImageIndex}
                                    src={service.images[currentImageIndex]}
                                    alt={`${service.title} - Image ${currentImageIndex + 1}`}
                                    className="w-full h-full object-cover rounded-lg"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </AnimatePresence>
                        </div>
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 dark:hover:bg-opacity-75 transition-all"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 dark:hover:bg-opacity-75 transition-all"
                            aria-label="Next image"
                        >
                            <ChevronRight className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                        </button>
                    </div>
                    <div className="mb-4">
                        <h4 className="text-lg font-semibold text-black dark:text-white mb-2">Detailed Description</h4>
                        <p className="text-black dark:text-gray-300">{service.detailedDescription}</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}