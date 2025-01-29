import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { LoadingSpinner } from '../../shared/components/LoadingSpinner'

export function SelectResume() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Show loading for 1 second when component mounts
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    const handleBack = () => {
        setIsLoading(true)
        setTimeout(() => {
            navigate('/')
        }, 1000)
    }

    const handleNext = () => {
        setIsLoading(true)
        setTimeout(() => {
            navigate('/resume')
        }, 1000)
    }

    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-3xl font-bold text-center mb-4">
                Are you uploading an existing resume?
            </h1>
            <p className="text-center text-gray-600 mb-8">
                Just review, edit, and update it with new information
            </p>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Upload Resume Option */}
                <div
                    onClick={handleNext}
                    className="border rounded-lg p-8 flex flex-col items-center justify-center hover:border-gray-300 cursor-pointer transition-all"
                >
                    <div className="w-16 h-16 mb-4">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full text-blue-600">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                        </svg>
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Yes, upload from my resume</h2>
                    <p className="text-center text-gray-600">
                        We&apos;ll give you expert guidance to fill out your info and enhance your resume, from start to finish
                    </p>
                </div>

                {/* Start from Scratch Option */}
                <div
                    onClick={handleNext}
                    className="border rounded-lg p-8 flex flex-col items-center justify-center hover:border-gray-300 cursor-pointer transition-all border-blue-500"
                >
                    <div className="w-16 h-16 mb-4">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full text-blue-600">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </div>
                    <h2 className="text-xl font-semibold mb-2">No, start from scratch</h2>
                    <p className="text-center text-gray-600">
                        We&apos;ll guide you through the whole process so your skills can shine
                    </p>
                </div>
            </div>

            <div className="flex justify-between mt-8">
                <button
                    onClick={handleBack}
                    className="px-6 py-2 text-blue-700 font-medium hover:bg-blue-50 rounded-lg transition-colors"
                >
                    ← Back
                </button>
                <button
                    onClick={handleNext}
                    className="px-6 py-2 bg-yellow-400 text-gray-900 font-medium rounded-lg hover:bg-yellow-500 transition-colors"
                >
                    Next
                </button>
            </div>
        </div>
    )
} 