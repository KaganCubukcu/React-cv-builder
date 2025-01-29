import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { LoadingSpinner } from '../../../shared/components/LoadingSpinner'
import { selectExperienceType } from '../../../store/experience-type/experienceTypeSlice'
import { setCurrentStep, completeStep } from '../../../store/resume-progress/resumeProgressSlice'

// Map of experience type IDs to their labels
const experienceLabels = {
    'internship': 'Internship',
    'volunteering': 'Volunteering',
    'teaching-assistant': 'Teacher\'s Assistant',
    'babysitter': 'Babysitter or Nanny',
    'pet-sitter': 'Pet Sitter',
    'tutor': 'Tutor'
}

export function ExperienceSummary() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const { selectedTypes } = useSelector(selectExperienceType)

    const handleNext = () => {
        setIsLoading(true)
        dispatch(completeStep(2)) // Complete Professional Experience step
        dispatch(setCurrentStep(3)) // Move to Education step
        setTimeout(() => {
            navigate('/resume/education')
        }, 1000)
    }

    const handleAddExperience = () => {
        navigate('/resume/experience-type')
    }

    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <div className="flex-1 max-w-2xl mx-auto px-8 py-6">
            <button className="text-blue-600 mb-4">← Go Back</button>

            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">
                    Professional experience summary
                </h1>
                <button className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Tips
                </button>
            </div>

            <div className="space-y-4">
                {selectedTypes.map(type => (
                    <div key={type} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-medium">{experienceLabels[type]}</h3>
                                <span className="text-gray-500 text-sm">Not Started</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="text-blue-600 hover:text-blue-700 font-medium">
                                    Start
                                </button>
                                <button className="text-gray-400 hover:text-gray-500">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex gap-2 mt-2">
                            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                                ⚠ Missing job details
                            </span>
                            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                                ⚠ Missing description
                            </span>
                        </div>
                    </div>
                ))}

                <button
                    onClick={handleAddExperience}
                    className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-center text-blue-600 hover:text-blue-700 hover:border-blue-500 transition-colors"
                >
                    + Add More Experience
                </button>
            </div>

            <div className="flex justify-between mt-8">
                <button className="px-6 py-2 text-blue-700 font-medium hover:bg-blue-50 rounded-lg transition-colors">
                    Preview
                </button>
                <button
                    onClick={handleNext}
                    className="px-6 py-2 bg-yellow-400 text-gray-900 font-medium rounded-lg hover:bg-yellow-500 transition-colors"
                >
                    Next: Education
                </button>
            </div>
        </div>
    )
} 