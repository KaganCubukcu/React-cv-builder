import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedTypes: [] // ['internship', 'volunteering', 'teaching-assistant', 'babysitter', 'pet-sitter', 'tutor']
}

const experienceTypeSlice = createSlice({
    name: 'experienceType',
    initialState,
    reducers: {
        setExperienceTypes: (state, action) => {
            state.selectedTypes = action.payload
        },
        addExperienceType: (state, action) => {
            if (!state.selectedTypes.includes(action.payload)) {
                state.selectedTypes.push(action.payload)
            }
        },
        removeExperienceType: (state, action) => {
            state.selectedTypes = state.selectedTypes.filter(type => type !== action.payload)
        },
        resetExperienceTypes: () => initialState
    }
})

export const { setExperienceTypes, addExperienceType, removeExperienceType, resetExperienceTypes } = experienceTypeSlice.actions
export const selectExperienceType = state => state.experienceType
export default experienceTypeSlice.reducer 