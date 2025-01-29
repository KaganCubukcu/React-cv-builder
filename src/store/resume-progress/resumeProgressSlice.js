import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentStep: 1,
    completedSteps: [],
    totalSteps: 6,
    completionPercentage: 0
}

const resumeProgressSlice = createSlice({
    name: 'resumeProgress',
    initialState,
    reducers: {
        setCurrentStep: (state, action) => {
            state.currentStep = action.payload
        },
        completeStep: (state, action) => {
            if (!state.completedSteps.includes(action.payload)) {
                state.completedSteps.push(action.payload)
                state.completionPercentage = Math.round((state.completedSteps.length / state.totalSteps) * 100)
            }
        },
        resetProgress: () => initialState
    }
})

export const { setCurrentStep, completeStep, resetProgress } = resumeProgressSlice.actions
export const selectResumeProgress = state => state.resumeProgress
export default resumeProgressSlice.reducer 