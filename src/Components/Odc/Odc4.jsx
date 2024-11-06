import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Maximize2, Heart, Brain, Activity, Plus, ChevronLeft, ChevronRight } from 'lucide-react'
import ReactConfetti from 'react-confetti'

export default function Odc4() {
    const [activeYogaImage, setActiveYogaImage] = useState(0)
    const [expandedDoctor, setExpandedDoctor] = useState(null)
    const [isConnecting, setIsConnecting] = useState(false)
    const [activeQuote, setActiveQuote] = useState(0)
    const specialtyRef = useRef(null)

    const doctors = [
        { id: 1, name: "Dr. Sarah", specialty: "Cardiologist", image: "/imp/public/dental/1.png", borderColor: "border-blue-400" },
        { id: 2, name: "Dr. Michael", specialty: "Neurologist", image: "/imp/public/dental/2.png", borderColor: "border-green-400" },
        { id: 3, name: "Dr. Emily", specialty: "Pediatrician", image: "/imp/public/dental/3.png", borderColor: "border-purple-400" },
        { id: 4, name: "Dr. James", specialty: "Dermatologist", image: "/imp/public/dental/2.png", borderColor: "border-red-400" },
        { id: 5, name: "Dr. Olivia", specialty: "Orthopedist", image: "/imp/public/dental/1.png", borderColor: "border-yellow-400" },
        { id: 6, name: "Dr. Daniel", specialty: "Psychiatrist", image: "/imp/public/dental/3.png", borderColor: "border-pink-400" },
    ]

    const yogaImages = [
        { src: "/imp/public/dental/a1.png", title: "Warrior Pose" },
        { src: "/imp/public/dental/a2.png", title: "Tree Pose" },
        { src: "/imp/public/dental/a3.png", title: "Downward Dog" },
        { src: "/imp/public/dental/a1.png", title: "Lotus Pose" },
        { src: "/imp/public/dental/a2.png", title: "Child's Pose" },
    ]

    const specialties = [
        { icon: Activity, label: "General Health" },
        { icon: Heart, label: "Cardiology" },
        { icon: Brain, label: "Neurology" },
    ]

    const healthQuotes = [
        "The greatest wealth is health.",
        "Take care of your body. It's the only place you have to live.",
        "Health is not valued till sickness comes.",
        "An apple a day keeps the doctor away.",
        "Early to bed and early to rise makes a man healthy, wealthy, and wise.",
    ]

    useEffect(() => {
        const yogaInterval = setInterval(() => {
            setActiveYogaImage((prev) => (prev + 1) % yogaImages.length)
        }, 5000)

        const quoteInterval = setInterval(() => {
            setActiveQuote((prev) => (prev + 1) % healthQuotes.length)
        }, 3000)

        return () => {
            clearInterval(yogaInterval)
            clearInterval(quoteInterval)
        }
    }, [])

    useEffect(() => {
        if (specialtyRef.current) {
            const scrollWidth = specialtyRef.current.scrollWidth
            const clientWidth = specialtyRef.current.clientWidth
            let scrollPosition = 0
            const scroll = () => {
                if (scrollPosition >= scrollWidth - clientWidth) {
                    scrollPosition = 0
                } else {
                    scrollPosition += 1
                }
                specialtyRef.current.scrollLeft = scrollPosition
            }
            const intervalId = setInterval(scroll, 50)
            return () => clearInterval(intervalId)
        }
    }, [])

    const handleDoctorClick = (doctor) => {
        setExpandedDoctor(expandedDoctor === doctor.id ? null : doctor.id)
    }

    const handleConnect = () => {
        setIsConnecting(true)
        setTimeout(() => setIsConnecting(false), 3000)
    }

    return (

        <div className=' bg-gray-50 dark:bg-gray-900'>

            <div className="container max-w-7xl mx-auto px-4 py-12 font-inter bg-gray-50 dark:bg-gray-900 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Latest Visited Doctor Card */}
                    <motion.div
                        className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg relative group h-[200px] flex flex-col justify-between transition-colors duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex-grow overflow-hidden">
                            <button className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity" aria-label="Expand">
                                <Maximize2 className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                            </button>
                            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Latest visited doctor</h2>
                            <AnimatePresence>
                                {expandedDoctor && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4 overflow-y-auto max-h-[200px]"
                                    >
                                        <h3 className="font-bold text-gray-800 dark:text-white">{doctors.find(d => d.id === expandedDoctor).name}</h3>
                                        <p className="text-gray-600 dark:text-gray-300">{doctors.find(d => d.id === expandedDoctor).specialty}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                More than 4k doctors at your service
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center mt-4">
                            {doctors.map((doctor, index) => (
                                <motion.div
                                    key={doctor.id}
                                    className={`w-12 h-12 rounded-full border-4 ${doctor.borderColor} shadow-lg overflow-hidden cursor-pointer`}
                                    style={{ marginLeft: index > 0 ? '-0.75rem' : '0', zIndex: expandedDoctor === doctor.id ? 10 : 1 }}
                                    whileHover={{ scale: 1.2, zIndex: 10 }}
                                    onClick={() => handleDoctorClick(doctor)}
                                >
                                    <img
                                        src={doctor.image}
                                        alt={doctor.name}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            ))}
                            <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 border-4 border-gray-300 dark:border-gray-600 flex items-center justify-center ml-[-0.75rem]">
                                <Plus className="w-6 h-6 text-gray-400 dark:text-gray-500" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Our Speciality Doctors Card */}
                    <motion.div
                        className="bg-gradient-to-br from-pink-100 to-orange-50 dark:from-pink-900 dark:to-orange-900 rounded-3xl p-6 shadow-lg relative overflow-hidden h-[200px] transition-colors duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="absolute inset-0" style={{
                            backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 8%)',
                            backgroundSize: '30px 30px'
                        }} />
                        <div className="relative h-full flex flex-col">
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Docthea</span>
                            <h2 className="text-xl font-bold mt-4 mb-8 text-center text-gray-800 dark:text-white">
                                Our speciality doctors
                            </h2>
                            <div className="overflow-hidden flex-grow" ref={specialtyRef}>
                                <div className="flex gap-8 w-max">
                                    {[...specialties, ...specialties].map((specialty, index) => (
                                        <div key={index} className="flex flex-col items-center">
                                            <motion.div
                                                className="w-14 h-14 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-sm mb-2"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <specialty.icon className="w-6 h-6 text-pink-400 dark:text-pink-300" aria-label={specialty.label} />
                                            </motion.div>
                                            <span className="text-sm text-gray-600 dark:text-gray-300">{specialty.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Connect with Doctors Card */}
                    <motion.div
                        className="bg-white dark:bg-gray-800 rounded-3xl p-3 shadow-lg flex flex-col justify-between h-[200px] relative overflow-hidden transition-colors duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                            Connect with our professional doctors
                        </h2>
                        <div className="flex-grow flex items-center justify-center overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={activeQuote}
                                    className="text-center text-gray-600 dark:text-gray-300 italic px-4"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {healthQuotes[activeQuote]}
                                </motion.p>
                            </AnimatePresence>
                        </div>
                        <motion.button
                            className={`w-full py-3 px-6 rounded-xl text-white transition-colors ${isConnecting ? 'bg-green-500 dark:bg-green-600' : 'bg-indigo-500 dark:bg-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-700'}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleConnect}
                            animate={isConnecting ? { scale: [1, 1.1, 1] } : {}}
                            transition={isConnecting ? { repeat: Infinity, duration: 0.5 } : {}}
                        >
                            {isConnecting ? 'Connecting...' : 'Connect now'}
                        </motion.button>
                        <ReactConfetti
                            width={window.innerWidth}
                            height={window.innerHeight}
                            recycle={true}
                            numberOfPieces={50}
                            gravity={0.1}
                        />
                    </motion.div>

                    {/* Relaxing Yoga Card */}
                    <motion.div
                        className="relative group rounded-3xl overflow-hidden h-[200px] shadow-lg"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        {yogaImages.map((image, index) => (
                            <motion.div
                                key={index}
                                className="absolute inset-0"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: index === activeYogaImage ? 1 : 0 }}
                                transition={{ duration: 1 }}
                            >
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                <h3 className="absolute bottom-5 left-6 text-lg font-semibold text-white">
                                    {image.title}
                                </h3>
                            </motion.div>
                        ))}
                        <button className="absolute top-4 right-4 p-2 rounded-full bg-white dark:bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity" aria-label="Expand">
                            <Maximize2 className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                        </button>

                        <div className="absolute bottom-6 right-6 flex space-x-2">
                            <button
                                className="p-1 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                                onClick={() => setActiveYogaImage((prev) => (prev - 1 + yogaImages.length) % yogaImages.length)}
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                                className="p-1 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                                onClick={() => setActiveYogaImage((prev) => (prev + 1) % yogaImages.length)}
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

        </div>

    )
}