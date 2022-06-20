/* eslint-disable prettier/prettier */
import { createSlice } from "@reduxjs/toolkit"

// eslint-disable-next-line no-unused-vars
const settingsSlice = createSlice({
  name: "settings",
  initialState: [
    {id: 1, name: "idriss"}
  ],
  reducers: {
    addSetting: (state:Array<Object>, action)=>{
      state.push({id:Date.now(), name:action.payload})
    }
  }
})

export default settingsSlice