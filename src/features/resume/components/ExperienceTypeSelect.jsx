import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { LoadingSpinner } from '../../../shared/components/LoadingSpinner'
import { addExperienceType, removeExperienceType, selectExperienceType } from '../../../store/experience-type/experienceTypeSlice'
import { setCurrentStep, completeStep } from '../../../store/resume-progress/resumeProgressSlice'

const experienceTypes = [
    { id: 'internship', label: 'Internship' },
    { id: 'volunteering', label: 'Volunteering' },
    { id: 'teaching-assistant', label: 'Teacher\'s Assistant (TA)' },
    { id: 'babysitter', label: 'Babysitter or Nanny' },
    { id: 'pet-sitter', label: 'Pet Sitter' },
    { id: 'tutor', label: 'Tutor' }
]

export function ExperienceTypeSelect() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const { selectedTypes } = useSelector(selectExperienceType)

    const handleTypeToggle = (typeId) => {
        if (selectedTypes.includes(typeId)) {
            dispatch(removeExperienceType(typeId))
        } else {
            dispatch(addExperienceType(typeId))
        }
    }

    const handleNext = () => {
        setIsLoading(true)
        // Update progress
        dispatch(completeStep(2)) // Complete Professional Experience step
        dispatch(setCurrentStep(3)) // Move to Education step

        setTimeout(() => {
            navigate('/resume/experience-summary')
        }, 1000)
    }

    const handleSkip = () => {
        setIsLoading(true)
        // Update progress but don't save any selections
        dispatch(completeStep(2))
        dispatch(setCurrentStep(3))

        setTimeout(() => {
            navigate('/resume/experience-summary')
        }, 1000)
    }

    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <div className="flex-1 max-w-2xl mx-auto px-8 py-6">
            <button className="text-blue-600 mb-4">← Go Back</button>

            <h1 className="text-3xl font-bold text-center mb-4">
                Have you done any of these?
            </h1>
            <p className="text-center text-gray-600 mb-8">
                Pick 1 or more. These can count as relevant experience for your resume.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
                {experienceTypes.map((type) => (
                    <button
                        key={type.id}
                        onClick={() => handleTypeToggle(type.id)}
                        className={`p-4 text-left border rounded-lg transition-all ${selectedTypes.includes(type.id)
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-300 hover:border-blue-500'
                            }`}
                    >
                        {type.label}
                    </button>
                ))}
            </div>

            <div className="text-center mb-8">
                <button className="text-blue-600 hover:text-blue-700">
                    + Add your own
                </button>
            </div>

            <div className="flex justify-between">
                <button
                    onClick={handleSkip}
                    className="text-blue-600 hover:text-blue-700"
                >
                    Skip for now
                </button>
                <button
                    onClick={handleNext}
                    className="px-6 py-2 bg-yellow-400 text-gray-900 font-medium rounded-lg hover:bg-yellow-500 transition-colors"
                >
                    Continue
                </button>
            </div>
        </div>
    )
} 