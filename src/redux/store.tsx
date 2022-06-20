/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
import { configureStore } from "@reduxjs/toolkit"
// eslint-disable-next-line import/no-unresolved
import settingsSlice from "./slices/settingsSlice/SettingsSlice"

const store = configureStore({
  reducer:{
    settings: settingsSlice.reducer
  }
})

export const {addSetting} = settingsSlice.actions
export default store
