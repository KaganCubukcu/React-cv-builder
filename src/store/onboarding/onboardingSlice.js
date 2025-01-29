import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    experience: null,
    isStudent: null,
    educationLevel: null,
    visibleSections: ['experience']
}

const onboardingSlice = createSlice({
    name: 'onboarding',
    initialState,
    reducers: {
        setExperience: (state, action) => {
            // Reset state first
            state.isStudent = null
            state.educationLevel = null

            state.experience = action.payload
            // Show student section only for 'No Experience' and 'Less Than 3 Years'
            if (action.payload === 'No Experience' || action.payload === 'Less Than 3 Years') {
                state.visibleSections = ['experience', 'student']
            } else {
                // For '3-5 Years', '5-10 Years', '10+ Years'
                state.visibleSections = ['experience']
            }
        },
        setIsStudent: (state, action) => {
            state.isStudent = action.payload
            // If student is true and experience is 'Less Than 3 Years' or 'No Experience', show education section
            if (action.payload === true && (state.experience === 'Less Than 3 Years' || state.experience === 'No Experience')) {
                state.visibleSections = ['experience', 'student', 'education']
            } else {
                // If not a student or experience is not 'Less Than 3 Years' or 'No Experience', keep only experience and student sections
                state.visibleSections = ['experience', 'student']
                state.educationLevel = null
            }
        },
        setEducationLevel: (state, action) => {
            state.educationLevel = action.payload
        }
    }
})

export const { setExperience, setIsStudent, setEducationLevel } = onboardingSlice.actions
export const selectOnboarding = state => state.onboarding
export default onboardingSlice.reducer 