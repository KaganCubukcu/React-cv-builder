import { useSelector } from 'react-redux'
import { selectContact } from '../../../store/contact/contactSlice'

export function ResumePreview() {
    const contactInfo = useSelector(selectContact)

    return (
        <div className="w-96 bg-gray-100 min-h-screen p-6">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Header */}
                <div className="bg-blue-900 text-white p-6">
                    <div className="flex items-start gap-4">
                        <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
                            {contactInfo.photo ? (
                                <img
                                    src={contactInfo.photo}
                                    alt="Profile"
                                    className="w-full h-full rounded-full object-cover"
                                />
                            ) : (
                                <span className="text-gray-600">Photo</span>
                            )}
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold">
                                {contactInfo.firstName || 'Your'} {contactInfo.surname || 'Name'}
                            </h2>
                            <p className="text-blue-200 mt-1">
                                {contactInfo.profession || 'Your Profession'}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="p-6 border-b">
                    <h3 className="text-blue-900 font-semibold mb-3">Contact</h3>
                    <div className="space-y-2 text-sm">
                        <p>
                            <span className="text-gray-600">Address:</span>{' '}
                            {contactInfo.city && contactInfo.postalCode
                                ? `${contactInfo.city}, ${contactInfo.postalCode}`
                                : 'Your Address'}
                        </p>
                        <p>
                            <span className="text-gray-600">Phone:</span>{' '}
                            {contactInfo.phone || 'Your Phone Number'}
                        </p>
                        <p>
                            <span className="text-gray-600">Email:</span>{' '}
                            {contactInfo.email || 'Your Email'}
                        </p>
                    </div>
                </div>

                {/* Other sections will be added here */}
                <div className="p-6 text-gray-400 text-center">
                    Other sections will appear as you complete them
                </div>
            </div>
        </div>
    )
} 