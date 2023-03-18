import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

export interface TodoState {
  id: number;
  title: string;
  category: string;
  priority: string;
  limit: string;
  detail: string;
}

const initialState: Array<TodoState> = [];

export const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<TodoState>) => {
      return [...state, action.payload];
    },
    update: (state, action: PayloadAction<TodoState>) => {
      const updatedList = [...state].map((todo) =>
        todo.id === action.payload.id ? action.payload : todo,
      );
      return updatedList;
    },
    remove: (state, action: PayloadAction<TodoState>) => {
      const remainingList = [...state].filter(
        (item) => item.id !== action.payload.id,
      );
      return remainingList;
    },
  },
});
