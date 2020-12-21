import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: Record<string, boolean> = {}

const checkboxSlice = createSlice({
  name: 'checkbox',
  initialState: initialState,
  reducers: {
    checkboxClick: (state, action: PayloadAction<string>) => {
      state[action.payload] = !state[action.payload]
    },
  },
})

const { reducer } = checkboxSlice

export const { checkboxClick } = checkboxSlice.actions

export default reducer
