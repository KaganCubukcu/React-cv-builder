import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { LoadingSpinner } from '../../../shared/components/LoadingSpinner'
import { setCurrentStep, completeStep } from '../../../store/resume-progress/resumeProgressSlice'
import { selectExperienceType } from '../../../store/experience-type/experienceTypeSlice'
import { setSelectedSummary, setCustomSummary, selectSummary } from '../../../store/summary/summarySlice'

const SUMMARY_SUGGESTIONS = {
    'teaching-assistant': [
        {
            isExpertRecommended: true,
            text: "Dedicated Teaching Assistant focused on supporting faculty with classroom needs. Successful at maintaining clean and organized supplies, planning activities and leading field trips. Excellent tutor, record keeper, and multitasker."
        },
        {
            isExpertRecommended: true,
            text: "Goal-oriented Teaching Assistant offering support to students of different learning levels and backgrounds. Always ready to step in and positively impact student learning or teacher wellbeing with timely support. Reliable in maintaining orderly spaces and preparing daily materials."
        }
    ],
    'internship': [
        {
            isExpertRecommended: true,
            text: "Detail-oriented intern with strong analytical and problem-solving abilities. Eager to learn and contribute to team projects while developing professional skills. Demonstrates excellent time management and communication skills."
        },
        {
            text: "Motivated intern seeking to leverage academic knowledge and passion for industry in a professional setting. Quick learner with strong organizational skills and ability to adapt to fast-paced environments."
        }
    ],
    'volunteering': [
        {
            isExpertRecommended: true,
            text: "Committed volunteer with experience in community outreach and event organization. Demonstrates strong interpersonal skills and dedication to making a positive impact. Reliable team player with excellent time management abilities."
        },
        {
            text: "Passionate volunteer dedicated to supporting community initiatives and social causes. Skilled in coordinating with diverse groups and managing multiple responsibilities while maintaining high standards of service."
        }
    ],
    'babysitter': [
        {
            isExpertRecommended: true,
            text: "Responsible and caring childcare provider with experience in creating safe, educational, and engaging environments for children. Skilled in managing daily routines, activities, and emergency situations."
        },
        {
            text: "Dedicated babysitter committed to supporting children's development through age-appropriate activities and positive reinforcement. Strong background in maintaining schedules and communicating effectively with parents."
        }
    ],
    'pet-sitter': [
        {
            isExpertRecommended: true,
            text: "Reliable pet sitter with experience in providing comprehensive care for various types of animals. Skilled in administering medications, following care instructions, and maintaining regular communication with pet owners."
        },
        {
            text: "Attentive pet care professional dedicated to ensuring the safety and well-being of animals. Experienced in managing multiple pets, maintaining schedules, and handling emergency situations."
        }
    ],
    'tutor': [
        {
            isExpertRecommended: true,
            text: "Experienced tutor specializing in developing personalized learning strategies to meet individual student needs. Proven track record of improving academic performance through engaging and effective teaching methods."
        },
        {
            text: "Dedicated tutor committed to fostering academic growth and confidence in students. Skilled in adapting teaching styles to accommodate different learning preferences and maintaining detailed progress records."
        }
    ]
}

// Format job type for display (e.g., 'teaching-assistant' -> 'Teaching Assistant')
const formatJobType = (type) => type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

export function SummarySelect() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const { selectedTypes } = useSelector(selectExperienceType)
    const { selectedSummary, customSummary } = useSelector(selectSummary)
    const [selectedJob, setSelectedJob] = useState(selectedTypes[0] || 'teaching-assistant')

    const handleSelectSummary = (text) => {
        dispatch(setSelectedSummary(text))
        dispatch(setCustomSummary('')) // Clear custom summary when selecting a pre-written one
    }

    const handleTextAreaChange = (e) => {
        dispatch(setCustomSummary(e.target.value))
        dispatch(setSelectedSummary('')) // Clear selected summary when writing custom one
    }

    const handleNext = () => {
        setIsLoading(true)
        dispatch(completeStep(5))
        dispatch(setCurrentStep(6))
        setTimeout(() => {
            navigate('/resume/finalize')
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
                <div className="mb-6">
                    <h1 className="text-3xl font-bold mb-2">Briefly tell us about your background</h1>
                    <p className="text-gray-600">Choose from our pre-written examples below or write your own.</p>
                </div>
                <select
                    value={selectedJob}
                    onChange={(e) => setSelectedJob(e.target.value)}
                    className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                >
                    {Object.keys(SUMMARY_SUGGESTIONS).map((jobType) => (
                        <option
                            key={jobType}
                            value={jobType}
                            className={selectedTypes.includes(jobType) ? "font-semibold" : ""}
                        >
                            {formatJobType(jobType)}
                            {selectedTypes.includes(jobType) ? " (Selected)" : ""}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-8">
                <textarea
                    value={customSummary || selectedSummary}
                    onChange={handleTextAreaChange}
                    placeholder="Write your professional summary..."
                    className="w-full h-40 p-4 border rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                />
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">
                    Showing examples for {formatJobType(selectedJob)}
                </h2>
                <div className="space-y-4">
                    {SUMMARY_SUGGESTIONS[selectedJob]?.map((summary, index) => (
                        <button
                            key={index}
                            onClick={() => handleSelectSummary(summary.text)}
                            className={`w-full p-4 text-left border rounded-lg hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all ${selectedSummary === summary.text ? 'border-blue-500 bg-blue-50' : 'bg-white'}`}
                        >
                            {summary.isExpertRecommended && (
                                <div className="flex items-center gap-2 text-blue-600 text-sm mb-2">
                                    <span className="text-red-500">★</span>
                                    Expert Recommended
                                </div>
                            )}
                            <p>{summary.text}</p>
                        </button>
                    ))}
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