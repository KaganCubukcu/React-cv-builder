import { StepsList } from './components/StepsList'
import { ContactForm } from './components/ContactForm'
import { ResumePreview } from './components/ResumePreview'
import { ResumePurpose } from './components/ResumePurpose'
import { ExperienceIntro } from './components/ExperienceIntro'
import { ExperienceTypeSelect } from './components/ExperienceTypeSelect'
import { ExperienceSummary } from './components/ExperienceSummary'
import { EducationIntro } from './components/EducationIntro'
import { EducationLevelSelect } from './components/EducationLevelSelect'
import { EducationForm } from './components/EducationForm'
import { SkillsIntro } from './components/SkillsIntro'
import { SkillsSelect } from './components/SkillsSelect'
import { Routes, Route, Navigate } from 'react-router-dom'
import { SummaryIntro } from './components/SummaryIntro'
import { SummarySelect } from './components/SummarySelect'

export function Resume() {
    return (
        <div className="flex min-h-screen">
            <StepsList />
            <div className="flex-1">
                <Routes>
                    <Route index element={<Navigate to="contact" replace />} />
                    <Route path="contact" element={<ContactForm />} />
                    <Route path="purpose" element={<ResumePurpose />} />
                    <Route path="experience" element={<ExperienceIntro />} />
                    <Route path="experience-type" element={<ExperienceTypeSelect />} />
                    <Route path="experience-summary" element={<ExperienceSummary />} />
                    <Route path="education" element={<EducationIntro />} />
                    <Route path="education-level" element={<EducationLevelSelect />} />
                    <Route path="education-form" element={<EducationForm />} />
                    <Route path="skills" element={<SkillsIntro />} />
                    <Route path="skills-select" element={<SkillsSelect />} />
                    <Route path="summary" element={<SummaryIntro />} />
                    <Route path="summary-select" element={<SummarySelect />} />
                </Routes>
            </div>
            <ResumePreview />
        </div>
    )
} 