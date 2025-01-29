import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    firstName: '',
    surname: '',
    profession: '',
    city: '',
    country: '',
    postalCode: '',
    phone: '',
    email: '',
    photo: null
}

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        updateContactInfo: (state, action) => {
            return { ...state, ...action.payload }
        },
        setPhoto: (state, action) => {
            state.photo = action.payload
        },
        resetContactInfo: () => initialState
    }
})

export const { updateContactInfo, setPhoto, resetContactInfo } = contactSlice.actions
export const selectContact = state => state.contact
export default contactSlice.reducer 