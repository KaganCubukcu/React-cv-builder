import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { LoadingSpinner } from '../../../shared/components/LoadingSpinner'
import { setCurrentStep } from '../../../store/resume-progress/resumeProgressSlice'

export function SkillsIntro() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)

    const handleNext = () => {
        setIsLoading(true)
        dispatch(setCurrentStep(4)) // Set current step to Skills
        setTimeout(() => {
            navigate('/resume/skills-select')
        }, 1000)
    }

    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <div className="flex-1 max-w-2xl mx-auto px-8 py-6">
            <button
                onClick={() => navigate(-1)}
                className="text-blue-600 mb-4"
            >
                ← Go Back
            </button>

            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4">
                    Next, let&apos;s take care of your
                    <div className="text-5xl mt-2">Skills</div>
                </h1>

                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Here&apos;s what you need to know:</h2>
                    <p className="text-gray-700">
                        Employers scan skills for relevant keywords.
                    </p>
                    <p className="text-gray-700">
                        We&apos;ll help you choose the best ones.
                    </p>
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
