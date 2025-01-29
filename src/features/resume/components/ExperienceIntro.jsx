import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { LoadingSpinner } from '../../../shared/components/LoadingSpinner'

export function ExperienceIntro() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const handleNext = () => {
        setIsLoading(true)
        setTimeout(() => {
            navigate('/resume/experience-form')
        }, 1000)
    }

    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <div className="flex-1 max-w-2xl mx-auto px-8 py-6">
            <button className="text-blue-600 mb-4">← Go Back</button>

            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4">
                    Now, let&apos;s fill out your
                    <div className="text-5xl mt-2">Experience</div>
                </h1>

                <div className="space-y-4 mt-8">
                    <h2 className="text-xl font-semibold">Here&apos;s what you need to know:</h2>
                    <div className="space-y-2">
                        <p className="text-gray-700">
                            Employers scan your resume to see if you&apos;re a match.
                        </p>
                        <p className="text-gray-700">
                            We&apos;ll suggest bullet points that make a great impression.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between mt-12">
                <button className="px-6 py-2 text-blue-700 font-medium hover:bg-blue-50 rounded-lg transition-colors">
                    Preview
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