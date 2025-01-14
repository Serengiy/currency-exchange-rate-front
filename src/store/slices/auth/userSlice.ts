import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SLICE_BASE_NAME } from './constants'

export type UserState = {
    userName?: string
    email?: string
    authority?: []
}

const initialState: UserState = {
    userName: '',
    email: '',
    authority: []
}

const userSlice = createSlice({
    name: `${SLICE_BASE_NAME}/user`,
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserState>) {
            state.email = action.payload?.email
            state.userName = action.payload?.userName
        },
    },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
