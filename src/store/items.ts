import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'


export type ItemType = {
    title: string,
    id: string
}

export type ItemsType = {
    value: ItemType[]
}

// Define the initial state using that type
const initialState: ItemsType = {
  value: [],
}

export const counterSlice = createSlice({
    name: 'items',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      set: (state, action: PayloadAction<ItemsType>) => {
        // @ts-ignore
        state.value = action.payload
      },
    },
  })

  export const { set } = counterSlice.actions;

  export const selectCount = (state: RootState) => state.items.value

export default counterSlice.reducer