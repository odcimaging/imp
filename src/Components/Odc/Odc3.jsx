import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Smile, Stethoscope, Clipboard, Syringe, Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react'

// Step 1: Define the services data (unchanged)
const services = [
    {
        icon: Smile,
        title: "Surgical Guide",
        description: "With cutting edge technology surgical guide provides top notch accuracy",
        detailedDescription: "Our surgical guides leverage advanced CBCT and intraoral scanning technologies, meticulously crafted by our in-house experts for superior accuracy. They come with comprehensive instructions and are produced with high-quality dental printers, ensuring exceptional precision and reliability for optimal surgical results.",
        images: [
           "surgicalGuide_1.png",
           "surgicalGuide_2.png",
        ]
    },
    {
        icon: Stethoscope,
        title: "Implant Design",
        description: "Our designed implant assure 100% reliability",
        detailedDescription: "We specialize in meticulous implant placement design and comprehensive nerve mapping. Our services include delivering detailed, user-friendly reports, ensuring exacting precision and enhanced clarity for optimal treatment planning and superior outcomes.",
        images: [
            "implant_1.png",
            "implant_2.png",
            "implant_3.png",
        ]
    },
    {
        icon: Clipboard,
        title: "Pathology CBCT",
        description: "Best Pathology always",
        detailedDescription: "Our cutting-edge CBCT technology helps identify maxillofacial tumors, cysts, osteomyelitis, fractures, impacted teeth and so on. Our detailed scans offer precise diagnosis and valuable insights with 3d reconstruction, enabling tailored treatment plans and high-quality care for various oral and maxillofacial pathologies",
        images: [
           "pathology_1.png",
           "pathology_2.png",
           "pathology_3.png",
           "pathology_4.png",
           "pathology_5.png",
        ]
    },
    {
        icon: Syringe,
        title: "OPG | TMJ Xray | RVG | Cephalogram",
        description: "Our premium radiology service pin point all the issues",
        detailedDescription: "We deliver premium OPG, TMJ radiographs, RVG, and cephalometric imaging. Our sophisticated technology guarantees accurate results and detailed reports, facilitating thorough diagnostics and well-informed treatment strategies for superior patient outcomes.",
        images: [
           "modality_1.png",
           "modality_2.png",
           "modality_3.png",
           "modality_4.png",
        ]
    },
    {
        icon: Calendar,
        title: "Endoanalysis",
        description: "CBCT technology for precise endodontic analysis.",
        detailedDescription: "We use advanced CBCT technology for comprehensive endodontic analysis, including precise working length determination, detection of missed canals, identification of canal perforations, evaluation of ledge formation, and assessment of canal curvature. Our detailed imaging ensures accurate diagnosis and effective treatment for optimal outcomes",
        images: [
            "endoanalysis_1.png",
            "endoanalysis_2.png",
            "endoanalysis_3.png",
        ]
    }
]

// Step 2: Create the main component
export default function Odc3() {
    const [selectedService, setSelectedService] = useState(null)

    return (
        <div className='bg-white dark:bg-black'>
            <div className="bg-white max-w-7xl mx-auto dark:bg-black py-12 px-4 sm:px-6 lg:px-8 font-inter transition-colors duration-300">
                <div className="max-w-7xl mx-auto">
                    <h2 className="pt-8 lg:w-2/4 pb-8 text-4xl text-center lg:text-start md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white transition-all duration-1000 ease-out">
                        Radiology, Implant & Surgical Guide
                    </h2>
                    <p className="text-lg text-gray-600  text-justify lg:text-start pb-4 dark:text-gray-300 max-w-lg transition-all duration-1000 ease-out delay-300 mb-4">
                        Comprehensive services in radiology, implant planning, and surgical guidance, using advanced imaging technology to ensure precise diagnostics, accurate implant placement, and streamlined surgical procedures for optimal patient outcomes.
                    </p>
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <ServiceCard 
                                service={services[0]} 
                                setSelectedService={setSelectedService} 
                                className="md:col-span-1" 
                                isCircular={true}
                                imageHeight="h-48"
                            />
                            <ServiceCard 
                                service={services[1]} 
                                setSelectedService={setSelectedService} 
                                className="md:col-span-2"
                                imageHeight="h-96"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                            <ServiceCard 
                                service={services[2]} 
                                setSelectedService={setSelectedService} 
                                className="md:col-span-1"
                                imageHeight="h-96"
                            />
                            <ServiceCard 
                                service={services[3]} 
                                setSelectedService={setSelectedService} 
                                className="md:col-span-2"
                                imageHeight="h-96"
                            />
                            <ServiceCard 
                                service={services[4]} 
                                setSelectedService={setSelectedService} 
                                className="md:col-span-2"
                                imageHeight="h-96"
                            />
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
function ServiceCard({ service, setSelectedService, className, isCircular = false, imageHeight }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % service.images.length)
        }, 3000)
        return () => clearInterval(timer)
    }, [service.images.length])

    React.useEffect(() => {
        const img = new Image()
        img.src = service.images[currentImageIndex]
        img.onload = () => setIsLoading(false)
        return () => {
            img.onload = null
        }
    }, [currentImageIndex, service.images])

    const cardClasses = `${className} bg-white dark:bg-black dark:border-gray-900 dark:border-2 dark:rounded-lg  overflow-hidden shadow-lg ${isCircular ? 'rounded-full' : 'rounded-lg'}`

    return (
        <motion.div
            className={cardClasses}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
        >
            <div className="h-full flex flex-col">
                <div className={`relative ${isCircular ? 'w-48 h-48' : 'h-56'} ${isCircular ? 'mx-auto mt-4' : ''} overflow-hidden`}>
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
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-500 dark:hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
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

// Step 4: Create the Modal component (unchanged)
function Modal({ service, onClose }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    React.useEffect(() => {
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