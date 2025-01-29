import { useDispatch, useSelector } from 'react-redux'
import { setIsStudent, selectOnboarding } from '../../../store/onboarding/onboardingSlice'

export function StudentSection() {
    const dispatch = useDispatch()
    const { isStudent } = useSelector(selectOnboarding)

    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold text-center mb-6">
                Are you a student?
            </h2>

            <div className="flex justify-center gap-4">
                <button
                    onClick={() => dispatch(setIsStudent(true))}
                    className={`px-8 py-4 rounded-lg border-2 transition-all ${isStudent === true
                        ? 'border-blue-700 bg-blue-700 text-white'
                        : 'border-gray-200 hover:border-blue-700'
                        }`}
                >
                    Yes
                </button>

                <button
                    onClick={() => dispatch(setIsStudent(false))}
                    className={`px-8 py-4 rounded-lg border-2 transition-all ${isStudent === false
                        ? 'border-blue-700 bg-blue-700 text-white'
                        : 'border-gray-200 hover:border-blue-700'
                        }`}
                >
                    No
                </button>
            </div>
        </div>
    )
}

