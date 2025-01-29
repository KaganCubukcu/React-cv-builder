import { useDispatch, useSelector } from 'react-redux'
import { setExperience, selectOnboarding } from '../../../store/onboarding/onboardingSlice'

const experienceOptions = [
    { id: 'no-exp', label: 'No Experience', value: 'No Experience' },
    { id: 'less-3', label: 'Less Than 3 Years', value: 'Less Than 3 Years' },
    { id: '3-5', label: '3-5 Years', value: '3-5 Years' },
    { id: '5-10', label: '5-10 Years', value: '5-10 Years' },
    { id: '10-plus', label: '10+ Years', value: '10+ Years' }
]

export function ExperienceSection() {
    const dispatch = useDispatch()
    const { experience } = useSelector(selectOnboarding)

    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold text-center mb-2">
                How long have you been working?
            </h2>
            <p className="text-gray-600 text-center mb-6">
                Well find the best templates for your experience level.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {experienceOptions.map((option) => (
                    <button
                        key={option.id}
                        onClick={() => dispatch(setExperience(option.value))}
                        className={`p-4 rounded-lg border-2 transition-all ${experience === option.value
                            ? 'border-blue-700 bg-blue-700 text-white'
                            : 'border-gray-200 hover:border-blue-700'
                            }`}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    )
}