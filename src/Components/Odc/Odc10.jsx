import React from 'react'
import { Heart } from 'lucide-react'

export default function Odc10() {
    // Step 1: Create a footer container with responsive padding and styling
    // Step 2: Add content with logo, copyright text, and a heart icon
    // Step 3: Use flexbox for layout and add hover effect to the heart icon
    return (

        <div className='bg-gray-50 dark:bg-black  '>

            <footer className="container max-w-7xl mx-auto px-4 py-12 font-inter bg-gray-50 dark:bg-black">
                <div className="container mx-auto flex flex-col items-center justify-center text-sm text-gray-600 dark:text-gray-400">
                    <p1 className="font-bold mr-1 text-sm lg:text-lg text-indigo-500 dark:text-white">© 2024 ODC IMAGING</p1>
                    <p1 className="mr-1 text-sm lg:text-lg text-black dark:text-white"> Always Ready To Serve You !</p1>                
                </div>
            </footer>

        </div>

    )
}