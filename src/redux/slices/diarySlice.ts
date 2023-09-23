import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface DiaryContent {
  text: string;
  timeStamp: string;
}

export interface DiaryData {
  data: DiaryContent[];
}

const initialState: DiaryData = {
  data: [],
};

export const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    addDiary: (state, action: PayloadAction<DiaryContent>) => {
      const { text, timeStamp } = action.payload;
      state.data = [...state.data, { text, timeStamp }];
    },
    deleteDiaryItem: (state, action: PayloadAction<DiaryContent>) => {
      const itemToDelete = action.payload;
      state.data = state.data.filter(
        (item) =>
          item.text !== itemToDelete.text ||
          item.timeStamp !== itemToDelete.timeStamp
      );
    },
    setDiary: (state, action: PayloadAction<DiaryData>) => {
      state.data = action.payload.data;
    },
  },
});

export const { addDiary, setDiary, deleteDiaryItem } = diarySlice.actions;

export default diarySlice.reducer;
