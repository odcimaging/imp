import React from 'react'
import { Heart, Facebook, Youtube } from 'lucide-react'

export default function Odc10() {
    // Step 1: Create a footer container with responsive padding and styling
    // Step 2: Add content with logo, copyright text, and a heart icon
    // Step 3: Use flexbox for layout and add hover effect to the heart icon
    // Step 4: Add "Connect With Us" line with Facebook and YouTube logos
    return (
        <div className='bg-gray-50 dark:bg-black'>
            <footer className="container max-w-7xl mx-auto px-4 py-12 font-inter bg-gray-50 dark:bg-black">
                <div className="container mx-auto flex flex-col items-center justify-center space-y-4 text-sm text-gray-600 dark:text-gray-400">
                    <p className="font-bold text-sm lg:text-lg text-cyan-500 dark:text-cyan-500">© 2024 ODC IMAGING</p>
                    <p className="text-sm lg:text-lg text-black dark:text-white flex items-center">
                        Always Ready To Serve You! 
                        <Heart className="ml-2 h-5 w-5 text-cyan-500 animate-pulse" />
                    </p>
                    <div className="flex flex-col items-center space-y-2">
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/profile.php?id=61553453474868" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                                <Facebook className="h-8 w-8" />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="https://www.youtube.com/@sarwerbiplob" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 transition-colors duration-300">
                                <Youtube className="h-8 w-8" />
                                <span className="sr-only">YouTube</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}