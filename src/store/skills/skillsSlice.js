import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedSkills: [],
    customSkills: []
}

const skillsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        addSkill: (state, action) => {
            if (!state.selectedSkills.includes(action.payload)) {
                state.selectedSkills.push(action.payload)
            }
        },
        removeSkill: (state, action) => {
            state.selectedSkills = state.selectedSkills.filter(skill => skill !== action.payload)
        },
        addCustomSkill: (state, action) => {
            if (!state.customSkills.includes(action.payload)) {
                state.customSkills.push(action.payload)
            }
        },
        removeCustomSkill: (state, action) => {
            state.customSkills = state.customSkills.filter(skill => skill !== action.payload)
        },
        resetSkills: () => initialState
    }
})

export const { addSkill, removeSkill, addCustomSkill, removeCustomSkill, resetSkills } = skillsSlice.actions
export const selectSkills = state => state.skills
export default skillsSlice.reducer 