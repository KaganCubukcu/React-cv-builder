import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { LoadingSpinner } from '../../../shared/components/LoadingSpinner'
import { addSkill, selectSkills } from '../../../store/skills/skillsSlice'
import { setCurrentStep, completeStep } from '../../../store/resume-progress/resumeProgressSlice'
import { selectExperienceType } from '../../../store/experience-type/experienceTypeSlice'

const SKILL_SUGGESTIONS = {
    'teaching-assistant': [
        "Classroom Management",
        "Student Assessment",
        "Curriculum Development",
        "Special Education",
        "Educational Technology"
    ],
    'internship': [
        "Time Management",
        "Project Coordination",
        "Research Skills",
        "Data Analysis",
        "Report Writing"
    ],
    'volunteering': [
        "Community Outreach",
        "Event Planning",
        "Team Collaboration",
        "Problem Solving",
        "Communication Skills"
    ],
    'babysitter': [
        "Child Safety",
        "Activity Planning",
        "First Aid",
        "Time Management",
        "Conflict Resolution"
    ],
    'pet-sitter': [
        "Animal Care",
        "Pet First Aid",
        "Schedule Management",
        "Problem Solving",
        "Client Communication"
    ],
    'tutor': [
        "Subject Expertise",
        "Lesson Planning",
        "Progress Assessment",
        "Student Engagement",
        "Personalized Instruction"
    ]
}

// Format job type for display (e.g., 'teaching-assistant' -> 'Teaching Assistant')
const formatJobType = (type) => type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

export function SkillsSelect() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const [skillsText, setSkillsText] = useState('')
    const { selectedSkills } = useSelector(selectSkills)
    const { selectedTypes } = useSelector(selectExperienceType)
    const [selectedJob, setSelectedJob] = useState(selectedTypes[0] || 'teaching-assistant')

    const handleAddSkill = (skill) => {
        dispatch(addSkill(skill))
        // Add skill to textarea with a new line
        setSkillsText(prev => prev ? `${prev}\n${skill}` : skill)
    }

    const handleTextAreaChange = (e) => {
        setSkillsText(e.target.value)
        // Parse skills from textarea and update Redux store
        const skills = e.target.value.split('\n').filter(skill => skill.trim())
        skills.forEach(skill => {
            if (!selectedSkills.includes(skill)) {
                dispatch(addSkill(skill))
            }
        })
    }

    const handleNext = () => {
        setIsLoading(true)
        dispatch(completeStep(4))
        dispatch(setCurrentStep(5))
        setTimeout(() => {
            navigate('/resume/summary')
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
                    <h1 className="text-3xl font-bold mb-2">What skills would you like to highlight?</h1>
                    <p className="text-gray-600">Choose from our pre-written examples below or write your own.</p>
                </div>
                <select
                    value={selectedJob}
                    onChange={(e) => setSelectedJob(e.target.value)}
                    className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                >
                    {Object.keys(SKILL_SUGGESTIONS).map((jobType) => (
                        <option
                            key={jobType}
                            value={jobType}
                            // If this job type was previously selected, mark it as such
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
                    value={skillsText}
                    onChange={handleTextAreaChange}
                    placeholder="Type or select your skills..."
                    className="w-full h-40 p-4 border rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                />
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">
                    Showing examples for {formatJobType(selectedJob)}
                </h2>
                <div className="grid grid-cols-2 gap-4">
                    {SKILL_SUGGESTIONS[selectedJob]?.map((skill) => (
                        <button
                            key={skill}
                            onClick={() => handleAddSkill(skill)}
                            className="flex items-center justify-between p-4 text-left border rounded-lg hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-blue-50"
                        >
                            <span>{skill}</span>
                            <span className="text-blue-600 text-xl">+</span>
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