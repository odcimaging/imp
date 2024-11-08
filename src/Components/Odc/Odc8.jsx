import React, { useEffect } from 'react'
import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'

const TestimonialCard = ({ name, role, company, image, quote }) => (
    <motion.div
        className="relative p-6 bg-white dark:bg-black dark:border-gray-900 dark:border-4 rounded-[32px]  shadow-lg border border-gray-100  mx-2 my-6 h-[280px] transition-all duration-300 hover:shadow-xl"
        whileHover={{ scale: 1.03 }}
    >
        {/* Quote Icon */}
        <div className="absolute -top-3 -left-3 bg-indigo-500 rounded-full p-2 shadow-lg">
            <Quote className="w-4 h-4 text-white" />
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
        </div>

        {/* Quote */}
        <blockquote className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-3 text-sm">
            {quote}
        </blockquote>

        {/* Profile */}
        <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-3">
               
                <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">{name}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                        {role} at {company}
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
)

export default function Odc8() {
    const testimonials = [
        {
            "name": "Dr. Ashik Imon",
            "role": "Dental Surgeon",
            "company": "BD Dentist",
            "image": "1.png",
            "quote": "ODC Imaging's CBCT technology has elevated my diagnostic precision, ensuring accurate treatment planning and successful outcomes."
        },
        {
            "name": "Dr. Kamrul Ahsan",
            "role": "Orthodontist",
            "company": "Smile Studio",
            "image": "1.png",
            "quote": "The detailed 3D imaging from ODC Imaging has been instrumental in planning complex orthodontic cases with pinpoint accuracy."
        },
        {
            "name": "Dr. Israt Sultana",
            "role": "Oral Surgeon",
            "company": "Dental Surgery Hub",
            "image": "1.png",
            "quote": "ODC's CBCT and surgical guides have streamlined my procedures, improving both precision and patient recovery times."
        },
        {
            "name": "Dr. Mohammad Kawser",
            "role": "Periodontist",
            "company": "Healthy Gums Clinic",
            "image": "2.png",
            "quote": "With ODC Imaging's advanced CBCT, I can confidently assess bone structures and plan periodontal surgeries with exceptional accuracy."
        },
        {
            "name": "Dr. Tania Ahmed",
            "role": "Implantologist",
            "company": "Implant Center Bangladesh",
            "image": "3.png",
            "quote": "ODC's surgical guide system and precise imaging make implant placement more predictable and efficient, ensuring long-term success."
        },
        {
            "name": "Dr. Mahibul Islam",
            "role": "Pediatric Dentist",
            "company": "Little Smiles Dental",
            "image": "2.png",
            "quote": "The ODC Imaging system allows us to plan treatments for young patients with complete clarity, minimizing risk and maximizing care."
        },
        {
            "name": "Dr. Nur Ahmed",
            "role": "Endodontist",
            "company": "Root Canal Specialist",
            "image": "3.png",
            "quote": "ODC Imaging’s CBCT has been a game changer in endodontics, helping me detect missed canals and ensure more accurate root canal treatments."
        }
    ]

    // Duplicate testimonials for continuous scroll
    const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]

    useEffect(() => {
        const styleSheet = document.createElement('style')
        styleSheet.textContent = `
      @keyframes scrollUp {
        0% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(-33.33%);
        }
      }

      @keyframes scrollDown {
        0% {
          transform: translateY(-33.33%);
        }
        100% {
          transform: translateY(0);
        }
      }

      .scroll-up {
        animation: scrollUp 80s linear infinite;
      }

      .scroll-down {
        animation: scrollDown 80s linear infinite;
      }

      .scroll-up:hover, .scroll-down:hover {
        animation-play-state: paused;
      }

      /* Responsive animations */
      @media (max-width: 768px) {
        .scroll-up, .scroll-down {
          animation-duration: 30s;
        }
      }
    `
        document.head.appendChild(styleSheet)
        return () => document.head.removeChild(styleSheet)
    }, [])

    return (

        <div className=' bg-white dark:bg-black'>

            <div className="max-w-7xl  mx-auto bg-gradient-to-br bg-white dark:bg-black py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className=" mb-16">
                        <h2 className=" text-center lg:text-start pt-8  lg:w-2/4  pb-8  text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white transition-all duration-1000 ease-out">
                            We help Doctor To Excel In Their Practice
                        </h2>
                        <p className="text-lg text-justify text-gray-600 pb-4 dark:text-gray-300 max-w-lg transition-all duration-1000 ease-out delay-300 mb-4">
                            Experience the pinnacle of dental technology with our expert solution in Radiology & Imaging. Restore your confidence with our cutting edge services.
                        </p>
                    </div>

                    {/* Testimonials Slider */}
                    <div className="relative">
                        {/* Gradient Overlays */}
                        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-50 dark:from-black to-transparent z-10"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100 dark:from-black to-transparent z-10"></div>

                        {/* Scrolling Content */}
                        <div className="h-[340px] overflow-hidden relative">
                            {/* Mobile: 1 Column */}
                            <div className="grid grid-cols-1 gap-4 md:hidden">
                                <div className="relative h-[340px] overflow-hidden">
                                    <div className="scroll-up absolute w-full">
                                        {duplicatedTestimonials.map((testimonial, index) => (
                                            <TestimonialCard key={`mobile-${index}`} {...testimonial} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Tablet: 3 Columns */}
                            <div className="hidden md:grid md:grid-cols-3 lg:hidden gap-4">
                                {[0, 1, 2].map((colIndex) => (
                                    <div key={`tablet-col-${colIndex}`} className="relative h-[840px] overflow-hidden">
                                        <div
                                            className={colIndex % 2 === 0 ? "scroll-up" : "scroll-down"}
                                            style={{
                                                position: 'absolute',
                                                width: '100%',
                                                marginTop: `${colIndex * -140}px`
                                            }}
                                        >
                                            {duplicatedTestimonials.map((testimonial, index) => (
                                                <TestimonialCard key={`tablet-${colIndex}-${index}`} {...testimonial} />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Desktop: 5 Columns */}
                            <div className="hidden lg:grid lg:grid-cols-5 gap-4">
                                {[0, 1, 2, 3, 4].map((colIndex) => (
                                    <div key={`desktop-col-${colIndex}`} className="relative h-[840px] overflow-hidden">
                                        <div
                                            className={colIndex % 2 === 0 ? "scroll-up" : "scroll-down"}
                                            style={{
                                                position: 'absolute',
                                                width: '100%',
                                                marginTop: `${colIndex * -140}px`
                                            }}
                                        >
                                            {duplicatedTestimonials.map((testimonial, index) => (
                                                <TestimonialCard key={`desktop-${colIndex}-${index}`} {...testimonial} />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>

    )
}