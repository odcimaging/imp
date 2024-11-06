import React from 'react'
import { Heart } from 'lucide-react'

export default function Odc10() {
    // Step 1: Create a footer container with responsive padding and styling
    // Step 2: Add content with logo, copyright text, and a heart icon
    // Step 3: Use flexbox for layout and add hover effect to the heart icon
    return (

        <div className='bg-gray-50 dark:bg-gray-900'>

            <footer className="container max-w-7xl mx-auto px-4 py-12 font-inter bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto flex items-center justify-center text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-bold mr-1 text-lg text-indigo-500">© 2024 ODC IMAGING</span>
                    <span className="mr-1 text-lg">• Always Ready To</span>
                    <Heart className="w-7 h-7  text-indigo-500 hover:text-indigo-600 transition-colors duration-300" />
                    <span className="text-lg ml-1">Serve You !</span>
                </div>
            </footer>

        </div>

    )
}