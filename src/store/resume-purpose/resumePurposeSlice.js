import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    purpose: null // 'job-seeking' | 'different-reason' | null
}

const resumePurposeSlice = createSlice({
    name: 'resumePurpose',
    initialState,
    reducers: {
        setPurpose: (state, action) => {
            state.purpose = action.payload
        },
        resetPurpose: () => initialState
    }
})

export const { setPurpose, resetPurpose } = resumePurposeSlice.actions
export const selectResumePurpose = state => state.resumePurpose
export default resumePurposeSlice.reducer 