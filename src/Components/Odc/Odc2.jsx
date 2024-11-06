import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, Smile } from 'lucide-react'

const ColoredEmoji = ({ emoji, color }) => (
    <span className="text-2xl" style={{ color }}>
        {emoji}
    </span>
)

export default function Odc2() {
    const [isVisible, setIsVisible] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [satisfactionPercentage, setSatisfactionPercentage] = useState(0)
    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    const sliderRef = useRef(null)

    useEffect(() => {
        setIsVisible(true)
        const timer = setTimeout(() => {
            setSatisfactionPercentage(98)
        }, 500)

        const testimonialInterval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
        }, 5000)

        const sliderInterval = setInterval(() => {
            handleSlideChange('next')
        }, 5000)

        return () => {
            clearTimeout(timer)
            clearInterval(testimonialInterval)
            clearInterval(sliderInterval)
        }
    }, [])

    const sliderImages = [
        "/dental/a1.png",
        "/dental/a2.png",
        "./dental/a3.png",
    ]

    const circularImages = [
        { src: "./public/dental/1.png", color: "border-indigo-400" },
        { src: "./public/dental/2.png", color: "border-green-400" },
        { src: "./public/dental/3.png", color: "border-pink-400" },
    ]

    const testimonials = [
        { name: "Sarah M.", role: "Implant Patient", text: "The results are amazing! I can't stop smiling now." },
        { name: "John D.", role: "Cosmetic Patient", text: "Dr. Smith and the team are true professionals. Highly recommended!" },
        { name: "Emily R.", role: "Orthodontics Patient", text: "My new smile has boosted my confidence tremendously." },
        { name: "Michael K.", role: "General Dentistry Patient", text: "Always a pleasant experience. The staff is friendly and knowledgeable." },
    ]

    const handleSlideChange = (direction) => {
        setCurrentSlide((prev) => {
            const newSlide = direction === 'next'
                ? (prev + 1) % sliderImages.length
                : (prev - 1 + sliderImages.length) % sliderImages.length
            return newSlide
        })
    }

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {
            handleSlideChange('prev')
        } else if (e.key === 'ArrowRight') {
            handleSlideChange('next')
        }
    }

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.focus()
        }
    }, [])

    return (
        <div className="bg-gray-50 dark:bg-gray-900 font-inter  ">
            <section className="w-full max-w-7xl mx-auto px-4 pt-20 sm:px-6 lg:px-0  rounded-3xl  bg-white  dark:bg-gray-900 ">
                <div className="rounded-2xl bg-white dark:bg-gray-900 p-8 overflow-hidden  transition-all duration-500 ease-in-out">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-8 ">
                            <div className="space-y-4">
                                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                    Transform Your Smile
                                </h1>
                                <p className={`text-lg text-gray-600 dark:text-gray-300 max-w-lg transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                    Experience the pinnacle of dental implant technology with our expert team. Restore your confidence with a radiant, natural-looking smile.
                                </p>
                                <button className={`inline-flex items-center px-6 py-3 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                    Schedule Consultation
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </button>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className={`p-4 bg-white dark:bg-gray-700 rounded-2xl shadow-md transition-all duration-1000 ease-out delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} overflow-hidden h-[300px] md:h-[250px]`}>
                                    <h3 className="font-semibold mb-4 dark:text-white">Patient Satisfaction</h3>
                                    <div className="flex items-center justify-center h-full relative">
                                        <div className="relative w-32 h-32">
                                            <svg className="w-full h-full" viewBox="0 0 100 100">
                                                <circle
                                                    className="text-gray-200 dark:text-gray-600 stroke-current"
                                                    strokeWidth="10"
                                                    cx="50"
                                                    cy="50"
                                                    r="40"
                                                    fill="transparent"
                                                ></circle>
                                                <circle
                                                    className="text-indigo-500 progress-ring__circle stroke-current"
                                                    strokeWidth="10"
                                                    strokeLinecap="round"
                                                    cx="50"
                                                    cy="50"
                                                    r="40"
                                                    fill="transparent"
                                                    strokeDasharray="251.2"
                                                    strokeDashoffset={251.2 - (251.2 * satisfactionPercentage) / 100}
                                                    style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
                                                ></circle>
                                            </svg>
                                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                                <Smile className="w-8 h-8 text-indigo-500 mx-auto mb-1" />
                                                <span className="text-2xl font-bold dark:text-white">{satisfactionPercentage}%</span>
                                            </div>
                                        </div>
                                        <ColoredEmoji emoji="😁" color="#FF6B6B" />
                                        <ColoredEmoji emoji="😄" color="#4ECDC4" />
                                        <ColoredEmoji emoji="😊" color="#45B7D1" />
                                        <ColoredEmoji emoji="🥳" color="#F7B801" />
                                        <ColoredEmoji emoji="👍" color="#96BB7C" />
                                    </div>
                                </div>

                                <div className={`p-4 bg-white dark:bg-gray-700 rounded-2xl shadow-md transition-all duration-1000 ease-out delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} overflow-hidden h-[300px] md:h-[250px]`}>
                                    <div className="h-full flex flex-col">
                                        <h3 className="font-semibold mb-4 dark:text-white">Patient Reviews</h3>
                                        <div className="flex-grow relative">
                                            {testimonials.map((testimonial, index) => (
                                                <div
                                                    key={index}
                                                    className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${index === currentTestimonial ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-2 mb-2 mt-4">
                                                        
                                                        <div>
                                                            <p className="font-semibold dark:text-white">{testimonial.name}</p>
                                                            <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                                                        </div>
                                                    </div>
                                                    <p className="text-gray-600 dark:text-gray-300 italic mt-10">{testimonial.text}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`flex justify-around transition-all duration-1000 ease-out delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                {circularImages.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`w-16 h-16 rounded-full overflow-hidden border-4 ${img.color} transition-all duration-300 hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer`}
                                        tabIndex="0"
                                        role="button"
                                        aria-label={`Dental procedure ${index + 1}`}
                                    >
                                        <img src={img.src} alt={`Dental procedure ${index + 1}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={`transition-all duration-1000 ease-out delay-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <div
                                className="relative h-[300px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg"
                                ref={sliderRef}
                                tabIndex="0"
                                onKeyDown={handleKeyDown}
                                role="region"
                                aria-label="Image slider"
                            >
                                {sliderImages.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`Dental procedure ${index + 1}`}
                                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                                            }`}
                                    />
                                ))}
                                <button
                                    onClick={() => handleSlideChange('prev')}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/75 dark:bg-gray-800/50 dark:hover:bg-gray-800/75 rounded-full p-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    aria-label="Previous slide"
                                >
                                    <ChevronLeft className="h-6 w-6 text-gray-800 dark:text-white" />
                                </button>
                                <button
                                    onClick={() => handleSlideChange('next')}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/75 dark:bg-gray-800/50 dark:hover:bg-gray-800/75 rounded-full p-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    aria-label="Next slide"
                                >
                                    <ChevronRight className="h-6 w-6 text-gray-800 dark:text-white" />
                                </button>
                            </div>
                            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                                {['Implants', 'Cosmetic', 'Orthodontics', 'General', 'Emergency'].map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-sm shadow-sm hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors duration-300 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        tabIndex="0"
                                        role="button"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
        @keyframes jump {
          0%, 
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .text-2xl {
          position: absolute;
          animation: jump 2s ease-in-out infinite;
        }
        .text-2xl:nth-child(2) {
          left: 10%;
          top: 20%;
          animation-delay: 0.1s;
        }
        .text-2xl:nth-child(3) {
          left: 30%;
          top: 60%;
          animation-delay: 0.3s;
        }
        .text-2xl:nth-child(4) {
          left: 50%;
          top: 30%;
          animation-delay: 0.5s;
        }
        .text-2xl:nth-child(5) {
          left: 70%;
          top: 70%;
          animation-delay: 0.7s;
        }
        .text-2xl:nth-child(6) {
          left: 90%;
          top: 40%;
          animation-delay: 0.9s;
        }
      `}</style>
        </div>
    )
}