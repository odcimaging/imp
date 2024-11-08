import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

// Step 1: Define the video data with custom YouTube links
const videos = [
    { id: 1, title: 'ODC Day', color: 'border-green-400 dark:border-indigo-600', youtubeLink: 'https://www.youtube.com/watch?v=rkVJ55NWC8k' },
    { id: 2, title: 'Surgical Guide', color: 'border-red-500 dark:border-indigo-500', youtubeLink: 'https://www.youtube.com/watch?v=t8DvbSr44CM' },
    { id: 3, title: 'Digital Dentistry', color: 'border-blue-600 dark:border-indigo-400', youtubeLink: 'https://www.youtube.com/watch?v=v6-RmXttmJ8' },
    { id: 4, title: 'CBCT Basic', color: 'border-yellow-700 dark:border-indigo-300', youtubeLink: 'https://www.youtube.com/watch?v=n81CZWAM5NY' },
    { id: 5, title: 'Implant Basic', color: 'border-indigo-800 dark:border-indigo-200', youtubeLink: 'https://www.youtube.com/watch?v=WrqdUllzQwU' },
    { id: 6, title: 'Steps', color: 'border-indigo-900 dark:border-indigo-100', youtubeLink: 'https://www.youtube.com/watch?v=YmG1MXaajjA' },
    { id: 7, title: 'Guided Implant', color: 'border-indigo-500 dark:border-indigo-500', youtubeLink: 'https://www.youtube.com/watch?v=skXL1nFv_zY' },
]

export default function Odc6() {
    const [selectedVideo, setSelectedVideo] = useState(null)

    // Step 2: Update VideoCircle component to use custom YouTube link
    const VideoCircle = ({ video, index, small = false }) => {
        const [isLoaded, setIsLoaded] = useState(false)

        useEffect(() => {
            const img = new Image()
            img.src = `https://img.youtube.com/vi/${getYouTubeId(video.youtubeLink)}/0.jpg`
            img.onload = () => setIsLoaded(true)
        }, [video.youtubeLink])

        const floatAnimation = {
            y: [0, -3, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: index * 0.9,
            },
        }

        return (
            <motion.div
                className={`aspect-square rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 relative cursor-pointer ${small ? 'w-2/3 mx-auto' : 'w-5/6 mx-auto'} ${video.color} border-4 shadow-lg`}
                animate={floatAnimation}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                onClick={() => setSelectedVideo(video)}
            >
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 border-4 border-indigo-500 dark:border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}
                <motion.img
                    src={`https://img.youtube.com/vi/${getYouTubeId(video.youtubeLink)}/0.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoaded ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                />
                <motion.div
                    className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center transition-all duration-300 hover:bg-opacity-50"
                    whileHover={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                    <motion.p
                        className="text-white text-center font-semibold opacity-0 transition-opacity duration-300 hover:opacity-100"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        Click To Learn
                    </motion.p>
                </motion.div>
            </motion.div>
        )
    }

    // Step 3: Update VideoPopup component to use custom YouTube link
    const VideoPopup = ({ video, onClose }) => {
        return (
            <motion.div
                className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden max-w-3xl w-full"
                    initial={{ scale: 0.9, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 50 }}
                    transition={{ type: "spring", damping: 15 }}
                >
                    <div className="relative pt-[56.25%]">
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src={`https://www.youtube.com/embed/${getYouTubeId(video.youtubeLink)}?autoplay=1`}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="p-4 flex justify-between items-center bg-gray-100 dark:bg-gray-700">
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{video.title}</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-indigo-700 dark:text-gray-300 dark:hover:text-indigo-400 focus:outline-none transition-colors duration-200"
                            aria-label="Close video"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        )
    }

    // Step 4: Helper function to extract YouTube video ID from URL
    const getYouTubeId = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
        const match = url.match(regExp)
        return (match && match[2].length === 11) ? match[2] : null
    }

    return (
        <div className="bg-gray-50 dark:bg-black font-inter transition-colors duration-300">
            <div className="max-w-7xl mx-auto p-2 sm:p-8 md:p-12 lg:p-8">
                {/* Step 5: Create the animated title */}
                <h1 className="text-[24px] sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-12 lg:pb-8 text-center text-gray-900 dark:text-gray-100">
                    you can learn from our resources how to <span className="text-gray-400 dark:text-gray-300">get best result in your dental practice</span>
                </h1>

                {/* Step 6: Create the video grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                    <VideoCircle video={videos[0]} index={0} />
                    <VideoCircle video={videos[1]} index={1} />
                    <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                        {videos.slice(2, 6).map((video, index) => (
                            <VideoCircle key={video.id} video={video} index={index + 2} small />
                        ))}
                    </div>
                    <VideoCircle video={videos[6]} index={6} />
                </div>

                {/* Step 7: Create the video popup */}
                <AnimatePresence>
                    {selectedVideo && (
                        <VideoPopup video={selectedVideo} onClose={() => setSelectedVideo(null)} />
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}