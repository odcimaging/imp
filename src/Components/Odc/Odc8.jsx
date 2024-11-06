import React, { useEffect } from 'react'
import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'

const TestimonialCard = ({ name, role, company, image, quote }) => (
    <motion.div
        className="relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 mx-2 my-6 h-[280px] transition-all duration-300 hover:shadow-xl"
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
                <img
                    src={image}
                    alt={name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-indigo-50 dark:border-indigo-900"
                />
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
            name: "Sarah Thompson",
            role: "Product Manager",
            company: "TechCorp",
            image: "/imp/public/dental/1.png",
            quote: "This platform has completely transformed how we handle our workflow. The efficiency gains have been remarkable."
        },
        {
            name: "Elena Petrova",
            role: "Finance Director",
            company: "GlobalBank",
            image: "/imp/public/dental/1.png",
            quote: "The financial reporting features have streamlined our processes significantly. Exceptional ROI."
        },
        {
            name: "Marcus Brown",
            role: "IT Manager",
            company: "TechFlow",
            image: "/imp/public/dental/1.png",
            quote: "Security features are top-notch. Integration with our existing systems was seamless."
        },
        {
            name: "Rachel Chen",
            role: "Creative Director",
            company: "ArtisticMinds",
            image: "/imp/public/dental/2.png",
            quote: "The creative tools have enhanced our team's productivity. Perfect for collaborative design work."
        },
        {
            name: "Thomas Wright",
            role: "Engineering Lead",
            company: "BuildTech",
            image: "/imp/public/dental/3.png",
            quote: "The platform's scalability is impressive. Handles our complex projects with ease."
        },
        {
            name: "Sophia Garcia",
            role: "Customer Success",
            company: "ServicePro",
            image: "/imp/public/dental/2.png",
            quote: "Our customer satisfaction scores have improved significantly since implementation."
        },
        {
            name: "John Anderson",
            role: "Quality Assurance",
            company: "QualityTech",
            image: "/imp/public/dental/3.png",
            quote: "The testing and QA features have revolutionized our quality assurance processes."
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

        <div className=' bg-white dark:bg-gray-900'>

            <div className="max-w-7xl mx-auto bg-gradient-to-br bg-white dark:bg-gray-900 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className=" mb-16">
                        <h2 className=" pt-8  lg:w-2/4  pb-8  text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white transition-all duration-1000 ease-out">
                            Our Customers Speak For Us
                        </h2>
                        <p className="text-lg text-gray-600 pb-4 dark:text-gray-300 max-w-lg transition-all duration-1000 ease-out delay-300 mb-4">
                            Experience the pinnacle of dental implant technology with our expert team. Restore your confidence with a radiant, natural-looking smile.
                        </p>
                    </div>

                    {/* Testimonials Slider */}
                    <div className="relative">
                        {/* Gradient Overlays */}
                        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-50 dark:from-gray-900 to-transparent z-10"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100 dark:from-gray-900 to-transparent z-10"></div>

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