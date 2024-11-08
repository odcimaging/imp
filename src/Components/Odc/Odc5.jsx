import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

// Step 1: Define the company logos
const companies = [
    { name: 'Dentsply Serona', logo: 'Dentsply_sirona_logo.svg' },
    { name: 'Siemens', logo: 'Siemens-logo.svg' },
    { name: 'Microsoft', logo: 'Microsoft_logo_(2012).svg' },
    { name: 'Osteem', logo: 'logo1.png' },
    { name: 'Philips', logo: 'Philips_logo_new.svg' },
    { name: '3d slicer', logo: '3D-Slicer-Mark.png' },
    { name: 'Noble Biocare', logo: 'Nobel_Biocare_Logo.svg' }
    
]

// Step 2: Create the main component
export default function Odc5() {
    // Step 3: Set up state and animation controls
    const [isHovered, setIsHovered] = useState(false)
    const controls = useAnimation()

    // Step 4: Define the animation function
    const startAnimation = () => {
        controls.start({
            x: [0, -100 * companies.length],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: isHovered ? 60 : 20,
                    ease: "linear",
                },
            },
        })
    }

    // Step 5: Use effect to start animation and handle hover state
    useEffect(() => {
        startAnimation()
    }, [isHovered])

    // Step 6: Render the component
    return (
        <div className="bg-white dark:bg-black  font-inter transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6  relative">
                {/* Step 7: Create the title */}
                <div className=" mb-12">
                    <h2 className=" pt-8 text-center lg:text-start  lg:w-2/4  pb-8  text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white transition-all duration-1000 ease-out">
                        ODC Imaging Technology Partner
                    </h2>

                    <p className="text-lg text-justify text-gray-600 pb-4 dark:text-gray-300 max-w-lg transition-all duration-1000 ease-out delay-300 mb-4">
                    ODC works with top companies around the world to always provide best services in dental imaging and digital dentistry sector.
                </p>
                 
                </div>

                {/* Step 8: Create the marquee container */}
                <div
                    className="relative overflow-hidden"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Step 9: Create the animated marquee */}
                    <motion.div
                        className="flex space-x-8 sm:space-x-16"
                        animate={controls}
                    >
                        {/* Step 10: Render company logos */}
                        {[...companies, ...companies].map((company, index) => (
                            <motion.div
                                key={`${company.name}-${index}`}
                                className="cursor-pointer flex-shrink-0  w-20 h-20 md:w-40 md:h-40 flex items-center justify-center"
                                whileHover={{ scale: 1.4 }}
                                transition={{ type: "spring", stiffness: 200, damping: 40 }}
                            >
                                <motion.div
                                    className="relative w-full h-full"
                                    whileHover={{ rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img
                                        src={company.logo}
                                        alt={`${company.name} logo`}
                                        className="w-full h-full object-contain rounded-lg"
                                    />
                                    <motion.div
                                        className=""
                                        whileHover={{ opacity: 0.1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                   
                 
                </div>

                {/* Step 12: Add a subtle particle effect */}
                <ParticleEffect />
            </div>
        </div>
    )
}

// Step 13: Create a subtle particle effect component
function ParticleEffect() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-indigo-500 rounded-full opacity-30 dark:opacity-50"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
            ))}
        </div>
    )
}