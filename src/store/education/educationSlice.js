import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    educationLevel: null, // null | 'high-school' | 'technical' | 'related-courses' | 'certificates' | 'associates' | 'bachelors' | 'masters' | 'doctoral'
    educationDetails: {
        schoolName: '',
        schoolLocation: '',
        degree: '',
        fieldOfStudy: '',
        graduationDate: {
            month: '',
            year: ''
        },
        additionalCoursework: ''
    }
}

const educationSlice = createSlice({
    name: 'education',
    initialState,
    reducers: {
        setEducationLevel: (state, action) => {
            state.educationLevel = action.payload
        },
        setEducationDetails: (state, action) => {
            state.educationDetails = {
                ...state.educationDetails,
                ...action.payload
            }
        },
        setGraduationDate: (state, action) => {
            state.educationDetails.graduationDate = {
                ...state.educationDetails.graduationDate,
                ...action.payload
            }
        },
        resetEducation: () => initialState
    }
})

export const { setEducationLevel, setEducationDetails, setGraduationDate, resetEducation } = educationSlice.actions
export const selectEducation = state => state.education
export default educationSlice.reducer 