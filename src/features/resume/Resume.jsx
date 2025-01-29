import { StepsList } from './components/StepsList'
import { ContactForm } from './components/ContactForm'
import { ResumePreview } from './components/ResumePreview'

export function Resume() {
    return (
        <div className="flex">
            <StepsList />
            <ContactForm />
            <ResumePreview />
        </div>
    )
} 