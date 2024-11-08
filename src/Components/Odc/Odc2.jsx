import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight, Smile, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const ColoredEmoji = ({ emoji, color }) => (
    <span className="text-2xl" style={{ color }}>
        {emoji}
    </span>
)

export default function Odc2() {
    const [isVisible, setIsVisible] = useState(false)
    const [satisfactionPercentage, setSatisfactionPercentage] = useState(0)
    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    const [selectedPdf, setSelectedPdf] = useState(null)
    const videoRef = useRef(null)

    useEffect(() => {
        setIsVisible(true)
        const timer = setTimeout(() => {
            setSatisfactionPercentage(100)
        }, 500)

        const testimonialInterval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
        }, 5000)

        return () => {
            clearTimeout(timer)
            clearInterval(testimonialInterval)
        }
    }, [])

    const pdfFiles = [
        { name: "ENDO", src: "pathology.pdf", image: "img1.png", color: "from-indigo-400 to-indigo-600" },
        { name: "MAXILLA", src: "pathology.pdf", image: "img2.jpg", color: "from-green-400 to-green-600" },
        { name: "TMJ", src: "pathology.pdf", image: "img3.jpg", color: "from-pink-400 to-pink-600" },
        { name: "IMPLANT", src: "pathology.pdf", image: "img4.jpg", color: "from-yellow-400 to-yellow-600" }
    ]

    const testimonials = [
        { name: "Dr. Billur Rahman", role: "Maxillofacial Surgeon", text: "'ODC always provide perfect report on time'" },
        { name: "Dr. Alok Lathi.", role: "Maxillofacial Surgeon", text: "'ODC imaging team are true professionals. Highly recommended!'" },
        { name: "Dr. Tanmoy Das.", role: "Implant Specialist", text: "'Surgical guide from ODC makes my implant procedure super easy'" },
        { name: "Dr. Mahmuda Israt", role: "General Dentistry Practicioner", text: "'Always a pleasant experience. The staff is friendly and knowledgeable.'" },
    ]

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Autoplay was prevented:", error)
            })
        }
    }, [])

    const openPdfViewer = (pdf) => {
        setSelectedPdf(pdf)
    }

    const closePdfViewer = () => {
        setSelectedPdf(null)
    }

    return (
        <div className="bg-gray-50 dark:bg-black font-inter ">
            <section className="w-full max-w-7xl mx-auto px-0 pt-20 sm:px-6 lg:px-4 rounded-3xl bg-white dark:bg-black">
                <div className="rounded-2xl bg-white dark:bg-black p-4 overflow-hidden transition-all duration-500 ease-in-out">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4 grid grid-cols-1 ">
                                <h1 className={`text-4xl lg:text-left text-center md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                    ODC IMAGING
                                </h1>
                                <p className={`text-lg lg:text-left text-center text-gray-600 dark:text-gray-300 max-w-lg transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                    Maxillofacial Imaging & Digital Dentistry Center
                                </p>
                                <div className='flex justify-center lg:justify-start '>

                                    <Link  to="/services">
                                        <button className={`inline-flex items-center mt-4 px-5 py-3 rounded-full bg-cyan-500 dark:bg-black dark:hover:bg-gray-900 dark:border-gray-900 dark:border-4  text-white hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                            VIEW SERVICES
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </button>
                                    </Link>

                                </div>


                            </div>

                            <div className="hidden md:grid md:grid-cols-2 gap-4">
                                <div
                                    className={`p-4 bg-white dark:bg-gray-700 rounded-2xl shadow-md transition-all duration-1000 ease-out delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} overflow-hidden h-[300px] md:h-[250px] relative`}
                                    style={{
                                        backgroundImage: "url('cover1.jpg')",
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div>
                                    <div className="relative z-10">
                                        <h3 className="font-semibold mb-4 text-white text-center bottom-0">ON TIME QUALITY REPORT</h3>
                                        <div className="flex items-center justify-center h-full relative">
                                            <div className="relative w-32 h-32">


                                            </div>
                                            <ColoredEmoji emoji="😁" color="#FF6B6B" />
                                            <ColoredEmoji emoji="😄" color="#4ECDC4" />
                                            <ColoredEmoji emoji="😊" color="#45B7D1" />
                                            <ColoredEmoji emoji="🥳" color="#F7B801" />
                                            <ColoredEmoji emoji="👍" color="#96BB7C" />


                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`p-4 bg-white dark:bg-gray-700 rounded-2xl shadow-md transition-all duration-1000 ease-out delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} overflow-hidden h-[300px] md:h-[250px] relative`}
                                    style={{
                                        backgroundImage: "url('cover2.jpg')",
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div>
                                    <div className="relative z-10 h-full flex flex-col">
                                        <h3 className="mb-4 text-white font-bold">From Specialist Doctor</h3>
                                        <div className="flex-grow relative">
                                            {testimonials.map((testimonial, index) => (
                                                <div
                                                    key={index}
                                                    className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${index === currentTestimonial ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-2 mb-2 mt-4">
                                                        <div>
                                                            <p className="font-semibold text-white">{testimonial.name}</p>
                                                            <p className="text-sm text-gray-300">{testimonial.role}</p>
                                                        </div>
                                                    </div>
                                                    <p className="text-gray-200 italic mt-10">{testimonial.text}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`flex justify-between transition-all duration-1000 ease-out delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                {pdfFiles.map((pdf, index) => (
                                    <button
                                        key={index}
                                        className={`w-20 h-20 rounded-full overflow-hidden transition-all duration-300 hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer relative group`}
                                        onClick={() => openPdfViewer(pdf)}
                                        aria-label={`View ${pdf.name}`}
                                    >
                                        <img
                                            src={pdf.image}
                                            alt={pdf.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span className="text-white text-sm font-semibold">Report on Click</span>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                                            <span className="text-white text-sm font-semibold">{pdf.name}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className={`transition-all duration-1000 ease-out delay-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <div className="relative h-[300px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg">
                                <video
                                    ref={videoRef}
                                    className="w-full h-full object-cover"
                                    loop
                                    muted
                                    playsInline
                                >
                                    <source src="video.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PDF Viewer Modal */}
            {selectedPdf && (
                <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-white dark:bg-black w-full max-w-4xl rounded-lg shadow-xl">
                        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{selectedPdf.name}</h2>
                            <button
                                onClick={closePdfViewer}
                                className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="p-4">
                            <iframe
                                src={selectedPdf.src}
                                className="w-full h-[70vh]"
                                title={selectedPdf.name}
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes jump {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                .text-2xl {
                    position: absolute;
                    animation: jump 2s ease-in-out infinite;
                }
                .text-2xl:nth-child(2) { left: 10%; top: 20%; animation-delay: 0.1s; }
                .text-2xl:nth-child(3) { left: 30%; top: 60%; animation-delay: 0.3s; }
                .text-2xl:nth-child(4) { left: 50%; top: 30%; animation-delay: 0.5s; }
                .text-2xl:nth-child(5) { left: 70%; top: 70%; animation-delay: 0.7s; }
                .text-2xl:nth-child(6) { left: 90%; top: 40%; animation-delay: 0.9s; }
            `}</style>
        </div>
    )
}