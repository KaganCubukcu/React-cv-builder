import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { LoadingSpinner } from '../../../shared/components/LoadingSpinner'
import { setEducationDetails, setGraduationDate, selectEducation } from '../../../store/education/educationSlice'
import { setCurrentStep, completeStep } from '../../../store/resume-progress/resumeProgressSlice'

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
]

const degrees = [
    'High School Diploma',
    'GED',
    'Associate of Arts (AA)',
    'Associate of Science (AS)',
    'Bachelor of Arts (BA)',
    'Bachelor of Science (BS)',
    'Master of Arts (MA)',
    'Master of Science (MS)',
    'Doctor of Philosophy (PhD)',
    'Other'
]

const currentYear = new Date().getFullYear()
const years = Array.from({ length: 50 }, (_, i) => currentYear - i)

export function EducationForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [showAdditionalCoursework, setShowAdditionalCoursework] = useState(false)
    const { educationDetails } = useSelector(selectEducation)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        dispatch(setEducationDetails({ [name]: value }))
    }

    const handleDateChange = (type, value) => {
        dispatch(setGraduationDate({ [type]: value }))
    }

    const handleNext = () => {
        setIsLoading(true)
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
            <button
                onClick={() => navigate(-1)}
                className="text-blue-600 mb-4"
            >
                ← Go Back
            </button>

            <h1 className="text-4xl font-bold mb-4">Tell us about your education</h1>
            <p className="text-gray-600 mb-8">
                Enter your education experience so far, even if you are a current student or did not graduate.
            </p>

            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        School Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="schoolName"
                        value={educationDetails.schoolName}
                        onChange={handleInputChange}
                        placeholder="e.g. University of San Carlos"
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        School Location
                    </label>
                    <input
                        type="text"
                        name="schoolLocation"
                        value={educationDetails.schoolLocation}
                        onChange={handleInputChange}
                        placeholder="e.g. Cebu City, Cebu, Philippines"
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Degree
                    </label>
                    <select
                        name="degree"
                        value={educationDetails.degree}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    >
                        <option value="">Select</option>
                        {degrees.map(degree => (
                            <option key={degree} value={degree}>{degree}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Field of Study
                    </label>
                    <input
                        type="text"
                        name="fieldOfStudy"
                        value={educationDetails.fieldOfStudy}
                        onChange={handleInputChange}
                        placeholder="e.g. Accounting Technology"
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Graduation Date (or Expected)
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                        <select
                            value={educationDetails.graduationDate.month}
                            onChange={(e) => handleDateChange('month', e.target.value)}
                            className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                        >
                            <option value="">Month</option>
                            {months.map(month => (
                                <option key={month} value={month}>{month}</option>
                            ))}
                        </select>
                        <select
                            value={educationDetails.graduationDate.year}
                            onChange={(e) => handleDateChange('year', e.target.value)}
                            className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                        >
                            <option value="">Year</option>
                            {years.map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div>
                    <button
                        onClick={() => setShowAdditionalCoursework(!showAdditionalCoursework)}
                        className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
                    >
                        <span>{showAdditionalCoursework ? '−' : '+'}</span>
                        Add any additional coursework you&apos;re proud to showcase
                    </button>
                    {showAdditionalCoursework && (
                        <textarea
                            name="additionalCoursework"
                            value={educationDetails.additionalCoursework}
                            onChange={handleInputChange}
                            placeholder="Enter your additional coursework"
                            className="mt-2 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                            rows={4}
                        />
                    )}
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