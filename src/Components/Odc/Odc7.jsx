import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Odc7() {
    const [openQuestion, setOpenQuestion] = useState(null)
    const [contentHeight, setContentHeight] = useState(0)
    const contentRef = useRef(null)

    const toggleQuestion = (index) => {
        setOpenQuestion(prevOpen => prevOpen === index ? null : index)
    }

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight)
        }
    }, [openQuestion])

    const faqData = [
        {
            question: "How do I book a consultation?",
            answer: "You can book a consultation through our app or website. Simply select your preferred doctor and available time slot."
        },
        {
            question: "What types of consultations are available?",
            answer: "We offer various types including general check-ups, specialist consultations, and follow-up appointments."
        },
        {
            question: "How long does a typical consultation last?",
            answer: "Most consultations last between 15 to 30 minutes, depending on the complexity of the issue."
        },
        {
            question: "Can I get prescriptions through online consultations?",
            answer: "Yes, doctors can provide prescriptions during online consultations when appropriate."
        },
        {
            question: "What if I need to reschedule my appointment?",
            answer: "You can reschedule through our app or website up to 24 hours before your scheduled appointment without any fee."
        },
        {
            question: "Are the online consultations secure and private?",
            answer: "Yes, we use end-to-end encryption for all video consultations to ensure your privacy and security."
        }
    ]

    const floatAnimation = {
        y: [0, -10, 0],
        transition: { repeat: Infinity, duration: 3, ease: "easeInOut" }
    }

    return (
        <div className=" lg:pt-8 mx-auto bg-gradient-to-br bg-gray-50 dark:bg-gray-900  flex items-center justify-center p-4 transition-all duration-300">
            <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 relative">
                {/* Existing Consultation Card */}
                <div className="flex-1">
                    <div className="bg-white dark:bg-gray-800 rounded-[32px] p-8 w-full max-w-md mx-auto shadow-lg dark:shadow-gray-700/30 transition-all duration-300 hover:shadow-xl" style={{ height: 'calc(100% )' }}>
                        <div className="text-center ">
                            <h1 className="text-[28px] leading-tight mb-2 dark:text-white font-semibold">
                                Realtime consultations
                            </h1>
                            <p className="text-gray-500 dark:text-gray-300 text-sm max-w-[250px] mx-auto mb-8">
                                Connect with our professional doctors who are ready to help you manage your health
                            </p>
                        </div>

                        <div className="bottom-12 w-full left-0 px-8">
                            {/* Bottom Card - Check Schedule */}
                            <motion.div
                                className="relative w-full mb-8"
                                initial={{ y: 0 }}
                                animate={floatAnimation}
                            >
                                <div className="w-[72%] transform -rotate-3">
                                    <div className="bg-gradient-to-br from-blue-50 to-blue-100/80 dark:from-blue-900 dark:to-blue-800/80 rounded-2xl p-4 shadow-sm relative overflow-hidden transition-all duration-300 hover:shadow-md">
                                        <div className="absolute inset-0 bg-blue-200 dark:bg-blue-700 opacity-0 animate-pulse"></div>
                                        <h3 className="text-[17px] font-normal mb-4 relative z-10 dark:text-white">
                                            Check schedule<br />doctors
                                        </h3>
                                        <div className="flex items-center gap-3 relative z-10">
                                            <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center text-sm shadow-inner">
                                                👩‍⚕️
                                            </div>
                                            <div>
                                                <div className="text-sm dark:text-white font-medium">Dr. Amira</div>
                                                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                                                    <span>3 May 2024</span>
                                                    <span className="text-[10px]">•</span>
                                                    <span>9:15 AM</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Top Card - Booking */}
                            <motion.div
                                className="relative w-full"
                                initial={{ y: 0 }}
                                animate={floatAnimation}
                                transition={{ delay: 1.5 }}
                            >
                                <div className="w-[72%] ml-auto transform rotate-3">
                                    <div className="bg-gradient-to-br from-blue-50 to-pink-100/80 dark:from-blue-900 dark:to-pink-800/80 rounded-2xl p-4 shadow-sm relative overflow-hidden transition-all duration-300 hover:shadow-md">
                                        <div className="absolute inset-0 bg-pink-200 dark:bg-pink-700 opacity-0 animate-pulse"></div>
                                        <h3 className="text-[17px] font-normal mb-2 relative z-10 dark:text-white">
                                            Booking your<br />consultation
                                        </h3>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 relative z-10">
                                            More than 90% of our customers are satisfied
                                        </p>
                                        <button className="bg-black dark:bg-white text-white dark:text-black text-xs px-3 py-1.5 rounded-lg relative z-10 hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-200 shadow-md hover:shadow-lg">
                                            Book now
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Vertical Borders */}
                <div className="hidden lg:flex flex-col items-center justify-center gap-4 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-3/4">
                    <div className="w-px h-full bg-gradient-to-b from-transparent via-gray-200 dark:via-gray-700 to-transparent"></div>
                    <div className="w-px h-full bg-gradient-to-b from-transparent via-gray-200 dark:via-gray-700 to-transparent"></div>
                </div>

                {/* New FAQ Card */}
                <div className="flex-1">
                    <div className="bg-white dark:bg-gray-800 rounded-[32px] p-8 w-full max-w-md mx-auto shadow-lg dark:shadow-gray-700/30 transition-all duration-300 hover:shadow-xl">
                        <h2 className="text-[28px] leading-tight mb-6 text-center dark:text-white font-semibold">Frequently Asked Questions</h2>
                        <div className="space-y-4" ref={contentRef} style={{ height: contentHeight }}>
                            <AnimatePresence>
                                {faqData.map((faq, index) => (
                                    <motion.div
                                        key={index}
                                        className="border-b border-gray-200 dark:border-gray-700 pb-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <button
                                            className="flex justify-between items-center w-full text-left group"
                                            onClick={() => toggleQuestion(index)}
                                            aria-expanded={openQuestion === index}
                                            aria-controls={`faq-answer-${index}`}
                                        >
                                            <span className="text-[17px] font-normal group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400 transition-colors duration-200">{faq.question}</span>
                                            <span className="w-6 h-6 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:border-indigo-500 group-hover:text-indigo-600 dark:group-hover:border-indigo-400 dark:group-hover:text-indigo-400 transition-all duration-200 transform group-hover:rotate-90">
                                                {openQuestion === index ? '−' : '+'}
                                            </span>
                                        </button>
                                        <AnimatePresence>
                                            {openQuestion === index && (
                                                <motion.p
                                                    id={`faq-answer-${index}`}
                                                    className="mt-2 text-sm text-gray-500 dark:text-gray-400"
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                >
                                                    {faq.answer}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}