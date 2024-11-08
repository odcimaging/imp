import { useState, useEffect } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Odc9() {
    const [mapUrl, setMapUrl] = useState('')
    const [hoveredItem, setHoveredItem] = useState(null)
    const controls = useAnimation()

    useEffect(() => {
        setMapUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.7996983353473!2d90.38660807511528!3d23.75452117866759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b90b455a882d%3A0xb4b1a639f2d3d4e8!2z4KaT4Kah4Ka_4Ka44Ka_IOCmh-CmruCnh-CmnOCmv-CmgiDgpo_gprLgpp_gpr_gpqHgpr8u!5e0!3m2!1sbn!2sbd!4v1730830094231!5m2!1sbn!2sbd')

        controls.start({
            y: [0, -10, 0],
            transition: { repeat: Infinity, duration: 3, ease: "easeInOut" }
        })
    }, [controls])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    }

    const contactItems = [
        { icon: Phone, title: "Phone", content: "+88 01777-515333", color: "blue" },
        { icon: Mail, title: "Email", content: "healthcareodc@gmail.com", color: "pink" },
        { icon: MapPin, title: "Address", content: "RH Home Centre, Room 117, Green Road, Dhaka - 1215", color: "green" },
        { icon: Clock, title: "Hours", content: "Fri-Thu: 8AM-10PM (7 days a week)", color: "yellow" }
    ]

    return (
        <div className=" bg-gradient-to-br bg-gray-50 dark:bg-black flex items-center justify-center p-4 transition-colors duration-300">
            <div className="w-full  max-w-7xl flex flex-col lg:flex-row gap-8 relative">
                <motion.div
                    className="w-full lg:w-1/3"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <div className="bg-white dark:bg-black dark:border-gray-900 dark:border-4 rounded-[32px] border-indigo-100 p-8 shadow-lg h-full border relative overflow-hidden transition-colors duration-300">
                        <motion.div
                            className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-200 dark:bg-indigo-900 rounded-full opacity-20"
                            animate={controls}
                        />
                        <motion.h2
                            className="text-3xl font-bold leading-tight mb-8 text-center text-indigo-800 dark:text-white relative z-10"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            WE ARE READY TO HELP
                        </motion.h2>
                        <div className="space-y-6 relative z-10">
                            {contactItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center gap-4 group"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onHoverStart={() => setHoveredItem(index)}
                                    onHoverEnd={() => setHoveredItem(null)}
                                >
                                    <div className={`w-12 h-12 rounded-full bg-${item.color}-100 dark:bg-${item.color}-900 flex items-center justify-center transition-all duration-300 group-hover:bg-${item.color}-200 dark:group-hover:bg-${item.color}-800 shadow-md`}>
                                        <item.icon className={`w-6 h-6 text-${item.color}-600 dark:text-${item.color}-400 transition-all duration-300 group-hover:scale-110`} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                                        <p className="text-indigo-600 dark:text-indigo-300">{item.content}</p>
                                    </div>
                                    <AnimatePresence>
                                        {hoveredItem === index && (
                                            <motion.div
                                                className="absolute -z-10 inset-0 bg-indigo-50 dark:bg-gray-700 rounded-lg"
                                                layoutId="highlight"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                            />
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="w-full lg:w-2/3"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="bg-white dark:bg-black dark:border-gray-900 dark:border-4  rounded-[32px]  border-indigo-100  p-8 shadow-lg h-full border relative overflow-hidden transition-colors duration-300">
                        <motion.h2
                            className="text-3xl font-bold leading-tight mb-8 text-center text-indigo-800 dark:text-white relative z-10"
                            initial={{ y: -20 }}
                            animate={{ y: 0 }}
                            transition={{ type: "spring", stiffness: 100 }}
                        >
                            ODC IMAGING LOCATION
                        </motion.h2>
                        <motion.div
                            className="w-full h-[300px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl relative"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {mapUrl && (
                                <iframe
                                    src={mapUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Map"
                                />
                            )}
                            <motion.div
                                className="absolute inset-0 bg-indigo-500 mix-blend-color-burn pointer-events-none"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 0.1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white dark:from-gray-800 to-transparent h-16 pointer-events-none" />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}