import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { LoadingSpinner } from '../../../shared/components/LoadingSpinner'
import { setEducationLevel } from '../../../store/education/educationSlice'
import { setCurrentStep, completeStep } from '../../../store/resume-progress/resumeProgressSlice'

const educationLevels = [
    { id: 'high-school', label: 'Post-Secondary Certificate or High School diploma' },
    { id: 'technical', label: 'Technical or Vocational' },
    { id: 'related-courses', label: 'Related Courses' },
    { id: 'certificates', label: 'Certificates or diplomas' },
    { id: 'associates', label: 'Associates' },
    { id: 'bachelors', label: 'Bachelors' },
    { id: 'masters', label: 'Masters or Specialized' },
    { id: 'doctoral', label: 'Doctoral or J.D.' }
]

export function EducationLevelSelect() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const handleSelect = (levelId) => {
        setIsLoading(true)
        dispatch(setEducationLevel(levelId))
        setTimeout(() => {
            navigate('/resume/education-form')
        }, 1000)
    }

    const handleSkip = () => {
        setIsLoading(true)
        dispatch(setEducationLevel(null))
        dispatch(completeStep(3))
        dispatch(setCurrentStep(4))
        setTimeout(() => {
            navigate('/resume/skills')
        }, 1000)
    }

    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <div className="flex-1 max-w-2xl mx-auto px-8 py-6">
            <button className="text-blue-600 mb-4">← Go Back</button>

            <h1 className="text-2xl font-bold text-center mb-4">
                What best describes your level of education?
            </h1>
            <p className="text-center text-gray-600 mb-8">
                Select the best option and we&apos;ll help you structure your education section.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
                {educationLevels.map((level) => (
                    <button
                        key={level.id}
                        onClick={() => handleSelect(level.id)}
                        className="p-4 text-left border rounded-lg hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    >
                        {level.label}
                    </button>
                ))}
            </div>

            <div className="text-center">
                <button
                    onClick={handleSkip}
                    className="text-blue-600 hover:text-blue-700"
                >
                    Prefer not to answer
                </button>
            </div>
        </div>
    )
} 