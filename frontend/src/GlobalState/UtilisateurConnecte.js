import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userID: '',
    nomComplet: '',
    profilDeSortie: '',
    numTel: '',
    adresseCouriel: '',
    nomEnterprise: '',
    adresseEnterprise: '',
    isStudent: null,
    userisLoggedIn: false,
}

export const userSlice = createSlice({
    name: 'utilisateur',
    initialState,
    reducers: {
        changerUser: (state, action) =>{
            state.userID = action.payload.userID
            state.nomComplet = action.payload.nomComplet
            state.profilDeSortie = action.payload.profilDeSortie
            state.numTel = action.payload.numTel
            state.adresseCouriel = action.payload.adresseCouriel
            state.nomEnterprise = action.payload.nomEnterprise
            state.adresseEnterprise = action.payload.adresseEnterprise
            state.isStudent = action.payload.isStudent
            state.userisLoggedIn = true
        },
        resetState: (state) => {
            state.userID = ""
            state.nomComplet = ""
            state.profilDeSortie = ''
            state.numTel = ''
            state.adresseCouriel = '' 
            state.nomEnterprise = ''
            state.adresseEnterprise = '' 
            state.userisLoggedIn = false
            state.isStudent = null
        }
    }
})

export const {changerUser, resetState} = userSlice.actions

export default userSlice.reducer