import { useSelector } from 'react-redux'
import { selectResumeProgress } from '../../../store/resume-progress/resumeProgressSlice'

export function StepsList() {
    const { currentStep, completedSteps, completionPercentage } = useSelector(selectResumeProgress)

    const steps = [
        { number: 1, title: 'Heading', isActive: currentStep === 1 },
        { number: 2, title: 'Professional Experience', isActive: currentStep === 2 },
        { number: 3, title: 'Education', isActive: currentStep === 3 },
        { number: 4, title: 'Skills', isActive: currentStep === 4 },
        { number: 5, title: 'Summary', isActive: currentStep === 5 },
        { number: 6, title: 'Finalize', isActive: currentStep === 6 }
    ]

    return (
        <div className="w-64 bg-[#0A1B33] text-white min-h-screen p-6">
            <div className="mb-8">
                <img src="/logo.svg" alt="Logo" className="h-8" />
            </div>

            <div className="space-y-4">
                {steps.map((step) => (
                    <div key={step.number} className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 
                            ${step.isActive
                                ? 'border-white bg-white text-[#0A1B33]'
                                : completedSteps.includes(step.number)
                                    ? 'border-white bg-white text-[#0A1B33]'
                                    : 'border-white/50 text-white/50'}`}>
                            {completedSteps.includes(step.number) ? '✓' : step.number}
                        </div>
                        <span className={
                            step.isActive || completedSteps.includes(step.number)
                                ? 'text-white'
                                : 'text-white/50'
                        }>
                            {step.title}
                        </span>
                    </div>
                ))}
            </div>

            <div className="mt-auto pt-8">
                <div className="w-full bg-gray-600 rounded-full h-2">
                    <div
                        className="bg-white h-2 rounded-full transition-all duration-500"
                        style={{ width: `${completionPercentage}%` }}
                    />
                </div>
                <div className="text-white/50 text-sm mt-2">
                    RESUME COMPLETENESS:
                    <span className="text-white ml-1">{completionPercentage}%</span>
                </div>
            </div>
        </div>
    )
} 