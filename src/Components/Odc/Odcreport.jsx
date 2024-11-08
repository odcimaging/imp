import React, { useState, useEffect } from 'react'
import { ArrowRight, Clock, FileText, Zap, Users, Search } from 'lucide-react'

export default function Odcreport() {
    const [isVisible, setIsVisible] = useState(false)
    const [inputValue1, setInputValue1] = useState('')
    const [inputValue2, setInputValue2] = useState('')

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const cards = [
        {
            title: "ENDOANALYSIS",
            description: "Receive detailed, accurate reports within agreed timelines.",
            icon: Clock,
            bgImage: "url('r1.jpg')"
        },
        {
            title: "OPG & RVG",
            description: "State-of-the-art equipment for precise and detailed imaging.",
            icon: Zap,
            bgImage: "url('r2.jpg')"
        },
        {
            title: "TM JOINT",
            description: "In-depth examination and interpretation of imaging results.",
            icon: FileText,
            bgImage: "url('r3.jpg')"
        },
        {
            title: "PATHOLOGY MAXILLA",
            description: "Access to experienced radiologists for personalized insights.",
            icon: Users,
            bgImage: "url('r4.jpg')"
        }
    ]

    const handleInputChange1 = (e) => {
        const value = e.target.value.replace(/\D/g, '')
        setInputValue1(value)
    }

    const handleInputChange2 = (e) => {
        const value = e.target.value.replace(/\D/g, '')
        setInputValue2(value)
    }

    const handleSearch = (inputValue) => {
        console.log(`Searching for: ${inputValue}`)
        // Implement search functionality here
    }

    const handleKeyDown = (e, inputValue) => {
        if (e.key === 'Enter') {
            handleSearch(inputValue)
        }
    }

    return (
        <div className="bg-gray-50 dark:bg-black font-inter min-h-screen">
            <section className="w-full max-w-7xl lg:mt-4 mx-auto lg:px-4 px-2 pt-20   rounded-3xl bg-white dark:bg-black">
                <div className="rounded-2xl bg-white dark:bg-black p-4 lg:p-4 overflow-hidden transition-all duration-500 ease-in-out">
                    <div className="grid md:grid-cols-2 gap-8 items-stretch">
                        <div className="flex flex-col justify-between space-y-8 h-full">
                            <div className="space-y-4">
                                <h1 className={`text-4xl text-center lg:text-start md:text-5xl lg:text-6xl font-bold  text-gray-900 dark:text-white transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                    ODC REPORT
                                </h1>
                                <p className={`text-lg text-center lg:text-start text-gray-600 dark:text-gray-300 max-w-lg transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                    Your All Report In One Place 24/7
                                </p>
                            </div>

                            <div className="hidden  md:grid md:grid-cols-2 gap-4 flex-grow">
                                {cards.map((card, index) => (
                                    <div
                                        key={index}
                                        className={`p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} overflow-hidden relative flex flex-col justify-between group cursor-pointer h-[300px] md:h-[250px]`}
                                    >
                                        <div 
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                                            style={{backgroundImage: card.bgImage}}
                                        ></div>
                                        <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl"></div>
                                        <div className="relative z-10 h-full flex flex-col justify-center items-center">
                                            <h3 className="text-lg text-center font-bold text-white mb-2">{card.title}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={`transition-all  duration-1000 ease-out delay-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} h-full`}>
                            <div className="bg-white  dark:bg-black dark:border-gray-900 dark:border-4 h-full rounded-2xl overflow-hidden shadow-lg p-2 lg:p-6 flex flex-col justify-between">
                                <div className="space-y-8  h-full grid grid-cols-1">
                                    <div className='  flex flex-col justify-between'>
                                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Patient's Report</h3>
                                        <p className="text-md text-gray-600 dark:text-gray-400 mb-2">Search Patient's Report With Invoice Number ( পেশেন্ট এর ইনভয়েস নাম্বার দিয়ে সার্চ করুন )</p>
                                        <input
                                            type="text"
                                            value={inputValue1}
                                            onChange={handleInputChange1}
                                            onKeyDown={(e) => handleKeyDown(e, inputValue1)}
                                            className="w-full  placeholder-black px-3 py-2 h-10 border dark:placeholder-white  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white mb-2"
                                             placeholder="Enter Bill Invoice Number"
                                        />
                                        <button 
                                            onClick={() => handleSearch(inputValue1)}
                                            className="w-1/3 h-10 px-4 py-2  bg-green-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 dark:bg-black dark:border-gray-900 dark:border-2 dark:hover:bg-white dark:hover:text-black focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 flex items-center justify-center"
                                        >
                                            <Search className="w-4 h-4 mr-2" />
                                            Search
                                        </button>
                                    </div>
                                    <div className='  flex flex-col justify-between'>
                                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Patients' Details ( For Doctors Only )</h3>
                                        <p className="text-md text-gray-600 dark:text-gray-400 mb-2">ড্যাশবোর্ডে যান আপনার পেশেন্ট এর বিস্তারিত তথ্যের জন্য ( শুধুমাত্র ডক্টরদের জন্য প্রযোজ্য )</p>
                                        <input
                                            type="text"
                                            value={inputValue2}
                                            onChange={handleInputChange2}
                                            onKeyDown={(e) => handleKeyDown(e, inputValue2)}
                                            className="w-full px-3 py-2 h-10 border placeholder-black dark:placeholder-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white mb-2"
                                            placeholder="Enter Your Mobile Number"
                                        />
                                        <button 
                                            onClick={() => handleSearch(inputValue2)}
                                            className="w-1/3 h-10 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-indigo-600 dark:bg-black dark:border-gray-900 dark:border-2 dark:hover:bg-white dark:hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 flex items-center justify-center"
                                        >
                                            <Search className="w-4 h-4 mr-2" />
                                            Dashboard
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}