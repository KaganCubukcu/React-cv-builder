import { useDispatch, useSelector } from 'react-redux'
import { updateContactInfo, selectContact } from '../../../store/contact/contactSlice'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { LoadingSpinner } from '../../../shared/components/LoadingSpinner';
import { setCurrentStep, completeStep } from '../../../store/resume-progress/resumeProgressSlice';

export function ContactForm() {
    const dispatch = useDispatch()
    const contactInfo = useSelector(selectContact)

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Show loading for 1 second when component mounts
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        dispatch(updateContactInfo({ [name]: value }))
    }

    const handleNext = () => {
        setIsLoading(true)
        // Mark Heading (step 1) as completed and set current step to 2
        dispatch(completeStep(1))
        dispatch(setCurrentStep(2))
        setTimeout(() => {
            navigate('/resume/purpose')
        }, 1000)
    }

    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <div className="flex-1 max-w-2xl mx-auto px-8 py-6">
            <button className="text-blue-600 mb-4">← Go Back</button>

            <h1 className="text-2xl font-bold mb-2">
                What&apos;s the best way for employers to contact you?
            </h1>
            <p className="text-gray-600 mb-6">
                We suggest including an email and phone number.
            </p>

            <div className="space-y-6">
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            FIRST NAME <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={contactInfo.firstName}
                            onChange={handleInputChange}
                            placeholder="e.g. Maria"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            SURNAME <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="surname"
                            value={contactInfo.surname}
                            onChange={handleInputChange}
                            placeholder="e.g. Dela Cruz"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        PROFESSION
                    </label>
                    <input
                        type="text"
                        name="profession"
                        value={contactInfo.profession}
                        onChange={handleInputChange}
                        placeholder="e.g. Sr. Accountant"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            CITY/MUNICIPALITY
                        </label>
                        <input
                            type="text"
                            name="city"
                            value={contactInfo.city}
                            onChange={handleInputChange}
                            placeholder="e.g. Cebu City, Cebu"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            POSTAL CODE
                        </label>
                        <input
                            type="text"
                            name="postalCode"
                            value={contactInfo.postalCode}
                            onChange={handleInputChange}
                            placeholder="e.g. 6000"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            PHONE
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={contactInfo.phone}
                            onChange={handleInputChange}
                            placeholder="e.g. +639123456789"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            EMAIL <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={contactInfo.email}
                            onChange={handleInputChange}
                            placeholder="e.g. mdelacruz@sample.ph"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-between mt-8">
                <button className="px-6 py-2 text-blue-700 font-medium hover:bg-blue-50 rounded-lg transition-colors">
                    Preview
                </button>
                <button
                    onClick={handleNext}
                    className="px-6 py-2 bg-yellow-400 text-gray-900 font-medium rounded-lg hover:bg-yellow-500 transition-colors"
                >
                    Next: Professional experience
                </button>
            </div>
        </div>
    )
} 