import { configureStore } from '@reduxjs/toolkit'
import onboardingReducer from './onboarding/onboardingSlice'
import contactReducer from './contact/contactSlice'
import resumePurposeReducer from './resume-purpose/resumePurposeSlice'
import resumeProgressReducer from './resume-progress/resumeProgressSlice'
import experienceTypeReducer from './experience-type/experienceTypeSlice'
import educationReducer from './education/educationSlice'
import skillsReducer from './skills/skillsSlice'

export const store = configureStore({
    reducer: {
        onboarding: onboardingReducer,
        contact: contactReducer,
        resumePurpose: resumePurposeReducer,
        resumeProgress: resumeProgressReducer,
        experienceType: experienceTypeReducer,
        education: educationReducer,
        skills: skillsReducer
    }
})