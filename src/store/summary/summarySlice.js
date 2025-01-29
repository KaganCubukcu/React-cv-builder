import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedSummary: '',
    customSummary: ''
}

const summarySlice = createSlice({
    name: 'summary',
    initialState,
    reducers: {
        setSelectedSummary: (state, action) => {
            state.selectedSummary = action.payload
        },
        setCustomSummary: (state, action) => {
            state.customSummary = action.payload
        },
        resetSummary: () => initialState
    }
})

export const { setSelectedSummary, setCustomSummary, resetSummary } = summarySlice.actions
export const selectSummary = state => state.summary
export default summarySlice.reducer 