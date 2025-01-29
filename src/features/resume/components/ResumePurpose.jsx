import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setPurpose } from '../../../store/resume-purpose/resumePurposeSlice'

export function ResumePurpose() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSelection = (purpose) => {
        dispatch(setPurpose(purpose))
        navigate('/resume/experience')
    }

    const handleSkip = () => {
        dispatch(setPurpose(null))
        navigate('/resume/experience')
    }

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-3xl mx-auto px-4 py-8">
                <button
                    onClick={() => navigate(-1)}
                    className="text-blue-600 mb-4"
                >
                    ← Go Back
                </button>

                <h1 className="text-3xl font-bold text-center mb-4">
                    Why do you need a resume?
                </h1>
                <p className="text-center text-gray-600 mb-8">
                    We&apos;ll show you a personalized experience based on your response.
                </p>

                <div className="max-w-xl mx-auto flex gap-3">
                    <button
                        onClick={() => handleSelection('job-seeking')}
                        className="w-full p-4 text-left border rounded-lg hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    >
                        Job Seeking
                    </button>

                    <button
                        onClick={() => handleSelection('different-reason')}
                        className="w-full p-4 text-left border rounded-lg hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    >
                        A Different Reason
                    </button>
                </div>

                <div className="flex justify-between mt-8">
                    <button
                        onClick={handleSkip}
                        className="text-blue-600 hover:text-blue-700"
                    >
                        Skip for now
                    </button>
                    <button
                        onClick={() => navigate('/resume/experience')}
                        className="px-6 py-2 bg-gray-200 text-gray-600 font-medium rounded-lg hover:bg-gray-300 transition-colors"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
} 