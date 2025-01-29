import { useDispatch, useSelector } from 'react-redux'
import { setEducationLevel, selectOnboarding } from '../../../store/onboarding/onboardingSlice'

const educationOptions = [
    {
        id: 'high-school',
        label: 'Post-Secondary Certificate or High School diploma',
        value: 'high-school'
    },
    {
        id: 'technical',
        label: 'Technical or Vocational',
        value: 'technical'
    },
    {
        id: 'related-courses',
        label: 'Related Courses',
        value: 'related-courses'
    },
    {
        id: 'certificates',
        label: 'Certificates or diplomas',
        value: 'certificates'
    },
    {
        id: 'associates',
        label: 'Associates',
        value: 'associates'
    },
    {
        id: 'bachelors',
        label: 'Bachelors',
        value: 'bachelors'
    },
    {
        id: 'masters',
        label: 'Masters or Specialized',
        value: 'masters'
    },
    {
        id: 'doctoral',
        label: 'Doctoral or J.D.',
        value: 'doctoral'
    }
]

export function EducationSection() {
    const dispatch = useDispatch()
    const { educationLevel } = useSelector(selectOnboarding)

    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold text-center mb-2">
                Select the option that best describes your education level.
            </h2>
            <p className="text-gray-600 text-center mb-6">
                Your education background can help us guide you through relevant sections for your resume.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {educationOptions.map((option) => (
                    <button
                        key={option.id}
                        onClick={() => dispatch(setEducationLevel(option.value))}
                        className={`p-4 rounded-lg border-2 transition-all ${educationLevel === option.value
                            ? 'border-blue-700 bg-blue-700 text-white'
                            : 'border-gray-200 hover:border-blue-700'
                            }`}
                    >
                        {option.label}
                    </button>
                ))}
            </div>

            <div className="text-center mt-4">
                <button
                    onClick={() => dispatch(setEducationLevel('prefer-not'))}
                    className={`text-blue-500 hover:text-blue-700 ${educationLevel === 'prefer-not' ? 'font-bold' : ''
                        }`}
                >
                    Prefer not to answer
                </button>
            </div>
        </div>
    )
}
