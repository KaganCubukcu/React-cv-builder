import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { store } from './store/store'
import './App.css'
import { ExperienceSection } from './features/onboarding/components/ExperienceSection'
import { StudentSection } from './features/onboarding/components/StudentSection'
import { EducationSection } from './features/onboarding/components/EducationSection'
import { SelectResume } from './features/select-resume/SelectResume'
import { Resume } from './features/resume/Resume'
import { useSelector } from 'react-redux'
import { selectOnboarding } from './store/onboarding/onboardingSlice'

function MainContent() {
  const { visibleSections, experience, isStudent } = useSelector(selectOnboarding)

  // Redirect to select-resume if:
  // - User has 3+ years of experience OR
  // - User is not a student (explicitly answered No)
  if ((['3-5 Years', '5-10 Years', '10+ Years'].includes(experience)) || isStudent === false) {
    return <Navigate to="/select-resume" />
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {visibleSections.includes('experience') && <ExperienceSection />}
        {visibleSections.includes('student') && <StudentSection />}
        {visibleSections.includes('education') && <EducationSection />}
      </div>
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/select-resume" element={<SelectResume />} />
          <Route path="/resume/*" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
